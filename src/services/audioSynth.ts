/**
 * Audio Synthesis & Vedic Mantra Chanting Engine
 * Provides synthesized Temple Bell (Ghanta), Conch (Shankha), Tanpura drone,
 * and multi-speed guided text-to-speech recitation.
 */

class AudioSynthesizer {
  private ctx: AudioContext | null = null;
  private tanpuraOscs: OscillatorNode[] = [];
  private tanpuraGain: GainNode | null = null;
  private isTanpuraPlaying = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Plays a rich harmonic Temple Bell (Ghanta Nada)
   */
  playBell(volume = 0.5) {
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;
      const fundamental = 880; // A5 bell pitch
      const harmonics = [1, 2.02, 3.01, 4.25, 5.4, 6.7];
      const gains = [0.6, 0.4, 0.25, 0.15, 0.08, 0.05];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.7, now);
      masterGain.connect(ctx.destination);

      harmonics.forEach((h, index) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamental * h, now);

        // Exponential decay typical of brass bells
        const decay = 2.5 / (index * 0.4 + 1);
        g.gain.setValueAtTime(gains[index], now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(g);
        g.connect(masterGain);

        osc.start(now);
        osc.stop(now + decay);
      });
    } catch (e) {
      console.warn('Audio playBell error:', e);
    }
  }

  /**
   * Plays sacred Conch sound (Shankha Dhwani)
   */
  playShankha(durationSec = 3.5, volume = 0.6) {
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, now);
      masterGain.gain.linearRampToValueAtTime(volume * 0.8, now + 0.6);
      masterGain.gain.setValueAtTime(volume * 0.8, now + durationSec - 0.8);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);
      masterGain.connect(ctx.destination);

      const fundamental = 220; // A3 conch base
      const freqs = [fundamental, fundamental * 1.5, fundamental * 2, fundamental * 3];
      const gains = [0.7, 0.5, 0.3, 0.15];

      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = i === 0 ? 'sawtooth' : 'sine';

        // Pitch inflection (rise slightly like natural blowing of shankha)
        osc.frequency.setValueAtTime(f * 0.96, now);
        osc.frequency.linearRampToValueAtTime(f * 1.03, now + 0.8);
        osc.frequency.setValueAtTime(f * 1.03, now + durationSec - 0.6);
        osc.frequency.linearRampToValueAtTime(f * 0.94, now + durationSec);

        g.gain.setValueAtTime(gains[i], now);
        osc.connect(g);
        g.connect(masterGain);

        osc.start(now);
        osc.stop(now + durationSec);
      });
    } catch (e) {
      console.warn('Audio playShankha error:', e);
    }
  }

  /**
   * Toggles meditative Tanpura drone (Sa - Pa)
   */
  toggleTanpura(on?: boolean, volume = 0.18): boolean {
    try {
      const ctx = this.initContext();
      const targetState = on !== undefined ? on : !this.isTanpuraPlaying;

      if (!targetState) {
        if (this.tanpuraGain) {
          this.tanpuraGain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.5);
          setTimeout(() => {
            this.tanpuraOscs.forEach(o => {
              try { o.stop(); o.disconnect(); } catch { /* noop */ }
            });
            this.tanpuraOscs = [];
            this.tanpuraGain = null;
          }, 600);
        }
        this.isTanpuraPlaying = false;
        return false;
      }

      // Start Tanpura (Sa = 138.59 Hz C#3, Pa = 207.65 Hz G#3)
      this.tanpuraOscs.forEach(o => { try { o.stop(); } catch { /* noop */ } });
      this.tanpuraOscs = [];

      const master = ctx.createGain();
      master.gain.setValueAtTime(0.01, ctx.currentTime);
      master.gain.linearRampToValueAtTime(volume, ctx.currentTime + 1.2);
      master.connect(ctx.destination);
      this.tanpuraGain = master;

      const base = 138.59; // C#3
      const droneFreqs = [base * 1.5, base * 2, base * 2, base]; // Pa, Sa high, Sa high, Sa low

      droneFreqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // subtle LFO detune
        g.gain.setValueAtTime(0.25, ctx.currentTime);
        osc.connect(g);
        g.connect(master);
        osc.start();
        this.tanpuraOscs.push(osc);
      });

      this.isTanpuraPlaying = true;
      return true;
    } catch (e) {
      console.warn('Audio tanpura error:', e);
      this.isTanpuraPlaying = false;
      return false;
    }
  }

  isDroneActive() {
    return this.isTanpuraPlaying;
  }
}

export const audioSynth = new AudioSynthesizer();

/**
 * Text-to-Speech Mantra Chanting Controller
 * Tuned specifically for an authentic Male Hindu Priest (ಆಚಾರ್ಯ / ಪುರೋಹಿತ) voice
 */
export class MantraChanter {
  private static synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;
  private static isSpeaking = false;
  private static cachedVoices: SpeechSynthesisVoice[] = [];

  private static initVoices() {
    if (!this.synth) return;
    this.cachedVoices = this.synth.getVoices() || [];
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => {
        if (this.synth) {
          this.cachedVoices = this.synth.getVoices() || [];
        }
      };
    }
  }

  /**
   * Discovers and returns the best available Male Hindu Priest voice
   */
  public static getPriestVoice(preferredLang: string = 'kn'): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    if (!this.cachedVoices.length) {
      this.cachedVoices = this.synth.getVoices() || [];
    }

    const voices = this.cachedVoices;
    if (!voices.length) return null;

    const femaleNames = [
      'female', 'zira', 'swara', 'aditi', 'heera', 'kalpana', 
      'ananya', 'sita', 'priya', 'kavya', 'deepa', 'shruti', 
      'veena', 'sangeeta', 'maya', 'lekha', 'sunita'
    ];

    const malePriestKeywords = [
      'male', 'madhur', 'ravi', 'mohan', 'valluvar', 'pradeep', 
      'neer', 'kumar', 'deepak', 'ajay', 'vikram', 'kalliope', 
      'rishi', 'shastri', 'narayan', 'raman', 'george', 'david'
    ];

    const isExplicitlyFemale = (v: SpeechSynthesisVoice) => {
      const name = v.name.toLowerCase();
      return femaleNames.some(f => name.includes(f));
    };

    const isExplicitlyMale = (v: SpeechSynthesisVoice) => {
      const name = v.name.toLowerCase();
      return malePriestKeywords.some(m => name.includes(m));
    };

    // 1. First priority: Indian Male voice in Kannada, Sanskrit, or Hindi
    const indianVoices = voices.filter(v => 
      v.lang.includes('kn') || v.lang.includes('sa') || v.lang.includes('hi') || v.lang.includes('mr')
    );
    const indianMale = indianVoices.find(v => isExplicitlyMale(v));
    if (indianMale) return indianMale;

    // 2. Second priority: Indian Male voice in Indian English (en-IN)
    const indianEnglishVoices = voices.filter(v => v.lang.includes('en-IN') || v.lang.includes('en_IN'));
    const indianEngMale = indianEnglishVoices.find(v => isExplicitlyMale(v));
    if (indianEngMale) return indianEngMale;

    // 3. Third priority: Non-female Indian voice (e.g. Google ಕನ್ನಡ, Google हिन्दी)
    const indianNonFemale = indianVoices.find(v => !isExplicitlyFemale(v));
    if (indianNonFemale) return indianNonFemale;

    // 4. Fourth priority: Any male voice available in system
    const anyMale = voices.find(v => isExplicitlyMale(v));
    if (anyMale) return anyMale;

    // 5. Fallback to preferred language or first available
    const langMatch = voices.find(v => v.lang.includes(preferredLang)) || voices[0];
    return langMatch || null;
  }

  static chant(
    text: string,
    options: {
      lang?: 'kn-IN' | 'sa-IN' | 'en-IN' | 'hi-IN';
      rate?: number;
      pitch?: number;
      repeatCount?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onBoundary?: (charIndex: number) => void;
      onError?: (err: unknown) => void;
    } = {}
  ) {
    if (!this.synth) {
      options.onError?.(new Error('SpeechSynthesis not supported'));
      return;
    }

    this.initVoices();
    this.stop();

    // Sacred Hindu priest acoustic parameters:
    // pitch 0.78 = deep, resonant male temple priest baritone
    // rate 0.82 = solemn, measured Vedic cadence
    const {
      lang = 'kn-IN',
      rate = 0.82,
      pitch = 0.78,
      repeatCount = 1,
      onStart,
      onEnd,
      onBoundary,
      onError,
    } = options;

    let repetitionsLeft = repeatCount;

    const speakCycle = () => {
      if (repetitionsLeft <= 0) {
        this.isSpeaking = false;
        onEnd?.();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      // Select authentic male priest voice
      const priestVoice = this.getPriestVoice(lang.split('-')[0]);
      if (priestVoice) {
        utterance.voice = priestVoice;
      }

      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;

      utterance.onstart = () => {
        this.isSpeaking = true;
        if (repetitionsLeft === repeatCount) {
          onStart?.();
        }
      };

      utterance.onboundary = (e) => {
        onBoundary?.(e.charIndex);
      };

      utterance.onend = () => {
        repetitionsLeft--;
        if (repetitionsLeft > 0) {
          setTimeout(speakCycle, 450); // Reverent breath pause between sacred recitations
        } else {
          this.isSpeaking = false;
          onEnd?.();
        }
      };

      utterance.onerror = (e) => {
        this.isSpeaking = false;
        onError?.(e);
      };

      this.synth?.speak(utterance);
    };

    speakCycle();
  }

  /**
   * Recites step instructions and spiritual significance with male Hindu priest narration
   */
  static narratePriestGuidance(
    text: string,
    options: {
      lang?: 'kn-IN' | 'en-IN';
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: unknown) => void;
    } = {}
  ) {
    this.chant(text, {
      lang: options.lang || 'kn-IN',
      rate: 0.85,
      pitch: 0.78, // Deep resonant male priest voice
      repeatCount: 1,
      onStart: options.onStart,
      onEnd: options.onEnd,
      onError: options.onError,
    });
  }

  static stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.currentUtterance = null;
  }

  static getIsSpeaking() {
    return this.isSpeaking;
  }
}
