/**
 * Human Voice Vedic Priest Audio Engine
 * Replaces synthetic speech with authentic, slow, reverent male Hindu priest recitation.
 * Backed by high-fidelity human vocal audio from /api/chant with local in-memory caching
 * and ambient sanctum Tanpura accompaniment.
 */

export interface ChantOptions {
  mantraId?: string;
  lang?: 'kn' | 'sa' | 'en';
  speed?: 'slow' | 'very-slow';
  playbackRate?: number; // 0.75x to 1.0x
  repeatCount?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: Error) => void;
  onProgress?: (currentTime: number, duration: number) => void;
}

class HumanAudioChanter {
  private currentAudio: HTMLAudioElement | null = null;
  private currentMantraId: string | null = null;
  private isAudioPlaying: boolean = false;
  private isAudioBuffering: boolean = false;
  private currentPlaybackRate: number = 0.85; // Natural, slow, measured priest cadence
  private repeatRemaining: number = 0;
  private activeOptions: ChantOptions | null = null;
  private memoryCache = new Map<string, string>(); // mantraId -> object URL of the priest recording
  private requestToken = 0; // bumped on stop() so a recording that finishes preparing later is not played
  private progressInterval: any = null;

  // Web Audio Context for Sanctum Tanpura drone & Bells
  private audioCtx: AudioContext | null = null;
  private tanpuraGain: GainNode | null = null;
  private tanpuraOscillators: OscillatorNode[] = [];
  private isTanpuraActive: boolean = false;

  constructor() {
    // Warm up audio context on user interaction
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'click',
        () => {
          this.initAudioContext();
        },
        { once: true }
      );
    }
  }

  private initAudioContext() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
  }

  /**
   * Chant a sacred mantra in a slow, reverent human male priest voice
   */
  public async chant(text: string, options: ChantOptions = {}): Promise<void> {
    this.stop();

    this.activeOptions = options;
    this.currentMantraId = options.mantraId || text.slice(0, 30);
    this.repeatRemaining = (options.repeatCount || 1) - 1;
    this.currentPlaybackRate = options.playbackRate || 0.85;

    this.isAudioBuffering = true;
    this.isAudioPlaying = false;

    const token = this.requestToken;
    try {
      const dataUrl = await this.getAudioDataUrl(text, options);
      if (token !== this.requestToken) return;

      this.isAudioBuffering = false;

      const audio = new Audio(dataUrl);
      this.currentAudio = audio;
      audio.playbackRate = this.currentPlaybackRate;

      audio.onplay = () => {
        this.isAudioPlaying = true;
        this.isAudioBuffering = false;
        options.onStart?.();

        // Track playback progress
        if (this.progressInterval) clearInterval(this.progressInterval);
        this.progressInterval = setInterval(() => {
          if (this.currentAudio && !this.currentAudio.paused) {
            options.onProgress?.(this.currentAudio.currentTime, this.currentAudio.duration || 1);
          }
        }, 300);
      };

      audio.onended = () => {
        if (this.repeatRemaining > 0) {
          this.repeatRemaining--;
          audio.currentTime = 0;
          setTimeout(() => {
            if (this.currentAudio === audio) {
              audio.play().catch(console.error);
            }
          }, 800); // 800ms sacred pause between repeat recitations
        } else {
          this.isAudioPlaying = false;
          if (this.progressInterval) clearInterval(this.progressInterval);
          options.onEnd?.();
        }
      };

      audio.onerror = (e) => {
        console.error('Audio playback error:', e);
        this.isAudioPlaying = false;
        this.isAudioBuffering = false;
        if (this.progressInterval) clearInterval(this.progressInterval);
        options.onError?.(new Error('Audio playback failed'));
      };

      await audio.play();
    } catch (err: any) {
      if (token !== this.requestToken) return;
      console.warn('Human voice generation failed or offline, attempting fallback:', err);
      this.isAudioBuffering = false;
      this.fallbackRecitation(text, options);
    }
  }

  /**
   * Retrieve the priest recording for a pooja mantra from /api/chant. The first request for a mantra starts
   * generating it on the server, so this waits and checks again until the recording is saved.
   */
  private async getAudioDataUrl(text: string, options: ChantOptions): Promise<string> {
    const id = options.mantraId;
    if (!id) throw new Error('Only pooja mantras have priest recordings');
    if (this.memoryCache.has(id)) return this.memoryCache.get(id)!;

    const token = this.requestToken;
    const deadline = Date.now() + 150000;
    while (Date.now() < deadline) {
      const response = await fetch(`/api/chant?id=${encodeURIComponent(id)}`);
      if (response.ok) {
        const url = URL.createObjectURL(await response.blob());
        this.memoryCache.set(id, url);
        return url;
      }
      if (response.status !== 202) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || `Failed with status ${response.status}`);
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
      if (token !== this.requestToken) throw new Error('Recitation was stopped');
    }
    throw new Error('The priest recording is taking too long to prepare');
  }

  /**
   * Fallback: If network is offline, chant in calm, spaced-out cadence with temple resonance
   */
  private fallbackRecitation(text: string, options: ChantOptions) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      options.onError?.(new Error('Audio not supported'));
      return;
    }

    window.speechSynthesis.cancel();

    // Split text with spaces and pauses at dandas to prevent robotic garble
    // Short pause after every word so each one is heard clearly; longer pauses at dandas
    const spacedText = text
      .replace(/[\u0951\u0952\u1CDA]/g, '')
      .replace(/॥/g, ' . ')
      .replace(/।/g, ' , ')
      .split(/\s+/)
      .filter(Boolean)
      .join(', ')
      .replace(/, ([.,])/g, ' $1')
      .trim();

    const utterance = new SpeechSynthesisUtterance(spacedText);
    utterance.rate = 0.65; // Slow, dignified priest pace
    utterance.pitch = 0.82; // Deep male vocal tone

    // Try finding an Indian English or Hindi/Kannada voice
    const voices = window.speechSynthesis.getVoices();
    const maleIndianNames = /madhur|hemant|prabhat|gagan|ravi|kiran|male/i;
    const priestVoice =
      voices.find((v) => /^(kn|sa|hi)/i.test(v.lang) && maleIndianNames.test(v.name)) ||
      voices.find((v) => v.lang.includes('kn') || v.lang.includes('sa')) ||
      voices.find((v) => v.lang.includes('hi') && v.name.toLowerCase().includes('male')) ||
      voices.find((v) => v.lang.includes('IN') && !v.name.toLowerCase().includes('female')) ||
      voices.find((v) => v.lang.includes('IN')) ||
      voices.find((v) => v.name.toLowerCase().includes('male'));

    if (priestVoice) {
      utterance.voice = priestVoice;
    }

    utterance.onstart = () => {
      this.isAudioPlaying = true;
      options.onStart?.();
    };

    utterance.onend = () => {
      this.isAudioPlaying = false;
      options.onEnd?.();
    };

    utterance.onerror = (e) => {
      this.isAudioPlaying = false;
      options.onError?.(new Error(e.error || 'TTS error'));
    };

    window.speechSynthesis.speak(utterance);
  }

  /**
   * Pre-cache standard pooja mantras in the background for zero-latency playback
   */
  public prefetchMantra(mantraId: string, text: string) {
    if (this.memoryCache.has(mantraId)) return;
    this.getAudioDataUrl(text, { mantraId, speed: 'slow' }).catch(() => {
      // Background prefetch is best-effort
    });
  }

  /**
   * Pause current recitation
   */
  public pause(): void {
    if (this.currentAudio && !this.currentAudio.paused) {
      this.currentAudio.pause();
      this.isAudioPlaying = false;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis?.speaking) {
      window.speechSynthesis.pause();
      this.isAudioPlaying = false;
    }
  }

  /**
   * Resume paused recitation
   */
  public resume(): void {
    if (this.currentAudio && this.currentAudio.paused) {
      this.currentAudio.play().catch(console.error);
      this.isAudioPlaying = true;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis?.paused) {
      window.speechSynthesis.resume();
      this.isAudioPlaying = true;
    }
  }

  /**
   * Stop any playing audio
   */
  public stop(): void {
    this.requestToken++;
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.isAudioPlaying = false;
    this.isAudioBuffering = false;
    this.currentMantraId = null;
  }

  public isPlaying(): boolean {
    return this.isAudioPlaying;
  }

  public isBuffering(): boolean {
    return this.isAudioBuffering;
  }

  public getActiveMantraId(): string | null {
    return this.currentMantraId;
  }

  /**
   * Play a sacred temple brass bell chime
   */
  public playTempleBell(): void {
    this.initAudioContext();
    if (!this.audioCtx) return;

    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const now = this.audioCtx.currentTime;
      const fundamental = 852; // Solfeggio Ajna / Ghanta frequency

      [fundamental, fundamental * 2.02, fundamental * 3.01, fundamental * 4.75].forEach((freq, idx) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const volume = (0.25 / (idx + 1)) * 0.8;
        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 - idx * 0.4);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 3.2);
      });
    } catch {
      // noop
    }
  }

  /**
   * Toggle background temple Tanpura drone for sacred ambiance
   */
  public toggleTanpura(enable?: boolean): boolean {
    this.initAudioContext();
    if (!this.audioCtx) return false;

    const shouldEnable = enable !== undefined ? enable : !this.isTanpuraActive;

    if (!shouldEnable) {
      this.tanpuraOscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // noop
        }
      });
      this.tanpuraOscillators = [];
      this.isTanpuraActive = false;
      return false;
    }

    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const now = this.audioCtx.currentTime;
      const baseFreq = 138.59; // C#3 traditional temple tanpura pitch

      const gain = this.audioCtx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 2.5); // Warm, gentle drone
      gain.connect(this.audioCtx.destination);
      this.tanpuraGain = gain;

      // 4 strings of Tanpura: Pa - Sa - Sa - Sa (low)
      const pitches = [baseFreq * 1.5, baseFreq * 2, baseFreq * 2, baseFreq];

      this.tanpuraOscillators = pitches.map((freq) => {
        const osc = this.audioCtx!.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);

        // Gentle lowpass filter to make it sound warm and acoustic
        const filter = this.audioCtx!.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(420, now);

        osc.connect(filter);
        filter.connect(gain);
        osc.start(now);
        return osc;
      });

      this.isTanpuraActive = true;
      return true;
    } catch {
      return false;
    }
  }

  public isTanpuraRunning(): boolean {
    return this.isTanpuraActive;
  }
}

export const humanAudioChanter = new HumanAudioChanter();
