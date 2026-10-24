import React, { useCallback, useEffect, useRef, useState } from 'react';
import { acceptInvite, getUser, handleAuthCallback, login, logout, requestPasswordRecovery, signup, updateUser, type User } from '@netlify/identity';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, Copy, Download, ExternalLink, Headphones, LockKeyhole, RefreshCw, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { UpakarmaDownloadsSection } from './UpakarmaDownloadsSection';
import { KrishnaYajurvedaSteps } from './KrishnaYajurvedaSteps';
import { PaymentService, UPI_RECIPIENT_ID, UPI_RECIPIENT_NAME } from '../services/paymentService';
import { SANDHYAVANDANE_PRICE, krishnaYajurvedaSandhyavandane, sandhyavandaneAudio, type SandhyavandaneAccess } from '../data/sandhyavandaneData';

const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffd700] px-5 py-3 text-sm font-bold text-[#250a0a] transition-colors hover:bg-[#ffe77a] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700]';
const secondaryClass = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#ffd700]/30 px-4 py-2.5 text-sm text-[#fef3c7] hover:bg-[#ffd700]/10 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700]';
const inputClass = 'w-full rounded-xl border border-[#ffd700]/25 bg-[#140404] px-4 py-3 text-[#fef3c7] focus:border-[#ffd700] focus:outline-none';

async function accessApi(options?: RequestInit, admin = false): Promise<SandhyavandaneAccess> {
  await getUser();
  const response = await fetch(`/api/sandhyavandane-requests${admin ? '?admin=true' : ''}`, {
    ...options,
    credentials: 'same-origin',
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
  });
  const body = await response.json().catch(() => ({ error: 'The payment service is unavailable. Please try again.' }));
  if (!response.ok) throw new Error(body.error || 'The request could not be completed.');
  return body;
}

export function SandhyavandaneHomeCard({ lang, onOpen }: { lang: Language; onOpen: () => void }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#ffd700]/30 bg-[#250a0a] p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffbb66]"><BookOpen size={16} /> {lang === 'kn' ? 'ಸಂಧ್ಯಾವಂದನೆ ಮಾರ್ಗದರ್ಶಿ' : 'Daily Sandhyavandane resources'}</p>
          <h2 className="font-serif text-2xl text-[#ffd700] sm:text-3xl">{lang === 'kn' ? 'ಋಗ್ವೇದ ತ್ರಿಕಾಲ ಮತ್ತು ಕೃಷ್ಣ ಯಜುರ್ವೇದ ಸಂಧ್ಯಾವಂದನೆ' : 'Rigveda Trikala & Krishna Yajurveda Sandhyavandana'}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#fef3c7]/75">{lang === 'kn' ? 'ಋಗ್ವೇದ: ಸಂಧ್ಯಾವಂದನೆ ಮತ್ತು ನಾಮ ಮುದ್ರಾ ಧಾರಣೆ PDF ಉಚಿತ, ಆಚಮನದ ಎರಡು ಧ್ವನಿ ಪಾಠಗಳು ₹100ಕ್ಕೆ. ಕೃಷ್ಣ ಯಜುರ್ವೇದ: ಐದು ಲಿಪಿಗಳಲ್ಲಿ ಹಂತಗಳು, PDF ಮತ್ತು ಸಂಪೂರ್ಣ ಪಠಣ ಧ್ವನಿ ಉಚಿತ.' : 'Rigveda: two free PDF guides plus two Aachamana audio lessons for ₹100. Krishna Yajurveda: free steps in five scripts, PDFs and full recitation audio.'}</p>
        </div>
        <a href="#sandhyavandane" onClick={onOpen} className={buttonClass}>{lang === 'kn' ? 'ಮಾರ್ಗದರ್ಶಿ ತೆರೆಯಿರಿ' : 'Explore resources'}<ArrowRight size={17} /></a>
      </div>
    </section>
  );
}

export function SandhyavandaneSection({ lang, onBack }: { lang: Language; onBack: () => void }) {
  const translate = (english: string, kannada: string) => lang === 'kn' ? kannada : english;
  const [user, setUser] = useState<User | null>(null);
  const [access, setAccess] = useState<SandhyavandaneAccess | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'recovery' | 'reset' | 'invite'>('login');
  const [inviteToken, setInviteToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});
  const [veda, setVeda] = useState<'rigveda' | 'yajurveda'>('rigveda');
  const initialized = useRef(false);
  const paymentSection = useRef<HTMLDivElement>(null);

  const refreshAccess = useCallback(async () => {
    const currentUser = await getUser();
    setUser(currentUser);
    if (!currentUser?.confirmedAt) {
      setAccess(null);
      return;
    }
    const currentAccess = await accessApi();
    setAccess(currentAccess.isAdmin ? await accessApi(undefined, true) : currentAccess);
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const initialize = async () => {
      try {
        const result = await handleAuthCallback();
        if (result) window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#sandhyavandane`);
        if (result?.type === 'recovery') setAuthMode('reset');
        if (result?.type === 'invite') {
          setAuthMode('invite');
          setInviteToken(result.token || '');
        }
        if (result?.type === 'confirmation') setMessage('Email confirmed. You can now submit your payment for review.');
        await refreshAccess();
      } catch {
        setError('Unable to open your account or payment status. Retry below, or request a new confirmation link by signing up again.');
      } finally {
        setLoading(false);
      }
    };
    void initialize();
  }, [refreshAccess]);

  useEffect(() => {
    if (access?.request?.status !== 'pending') return;
    const timer = window.setInterval(() => { void refreshAccess().catch(() => {}); }, 30000);
    return () => window.clearInterval(timer);
  }, [access?.request?.status, refreshAccess]);

  const runAction = async (action: () => Promise<void>) => {
    setBusy(true);
    setError('');
    setMessage('');
    try {
      await action();
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  const handleAuth = (event: React.FormEvent) => {
    event.preventDefault();
    void runAction(async () => {
      if (authMode === 'recovery') {
        await requestPasswordRecovery(email);
        setMessage('If an account exists, check your inbox for a password reset link.');
        return;
      }
      if (authMode === 'reset') await updateUser({ password });
      else if (authMode === 'invite') await acceptInvite(inviteToken, password);
      else if (authMode === 'signup') {
        const created = await signup(email, password);
        if (!created.confirmedAt) setMessage('Check your inbox and confirm your email before submitting a payment.');
      } else await login(email, password);
      setPassword('');
      setInviteToken('');
      setAuthMode('login');
      await refreshAccess();
    });
  };

  const downloadAudio = (part: string, filename: string) => {
    void runAction(async () => {
      await getUser();
      const response = await fetch(`/api/sandhyavandane-download?part=${encodeURIComponent(part)}`, { credentials: 'same-origin', cache: 'no-store' });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || 'Download failed. Please try again.');
      }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60000);
    });
  };

  const approved = access?.request?.status === 'approved';
  const pending = access?.request?.status === 'pending';
  const needsPassword = authMode !== 'recovery';
  const passwordOnly = authMode === 'reset' || authMode === 'invite';
  const upiUrl = PaymentService.generateSandhyavandaneUpiUrl();

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6 sm:px-8 sm:py-10">
      <button onClick={onBack} className={secondaryClass}><ArrowLeft size={16} />{translate('Back to home', 'ಮುಖಪುಟಕ್ಕೆ ಮರಳಿ')}</button>
      <header className="border-b border-[#ffd700]/20 pb-8">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#ffbb66]">{translate('Study · Listen · Practise', 'ಅಧ್ಯಯನ · ಶ್ರವಣ · ಅಭ್ಯಾಸ')}</p>
        <h1 className="font-serif text-3xl leading-tight text-[#ffd700] sm:text-4xl">{translate('Trikala Sandhyavandane', 'ತ್ರಿಕಾಲ ಸಂಧ್ಯಾವಂದನೆ')}</h1>
        <p className="mt-4 max-w-2xl leading-7 text-[#fef3c7]/75">{translate('Choose your Veda shakha to open its guides and recordings for daily practice. Upakarma and Yajnopaveeta Dharana guides are further below.', 'ದೈನಂದಿನ ಅಭ್ಯಾಸಕ್ಕಾಗಿ ನಿಮ್ಮ ವೇದ ಶಾಖೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು ಧ್ವನಿ ಪಾಠಗಳನ್ನು ತೆರೆಯಿರಿ. ಉಪಾಕರ್ಮ ಹಾಗೂ ಯಜ್ಞೋಪವೀತ ಧಾರಣೆಯ ಮಾರ್ಗದರ್ಶಿಗಳು ಕೆಳಗಿವೆ.')}</p>
      </header>

      <div role="tablist" aria-label={translate('Sandhyavandana tradition', 'ಸಂಧ್ಯಾವಂದನೆ ಶಾಖೆ')} className="grid gap-3 sm:grid-cols-2">
        {([
          { id: 'rigveda', label: translate('a. Trikala Rigveda Sandhyavandana', 'ಅ. ಋಗ್ವೇದ ತ್ರಿಕಾಲ ಸಂಧ್ಯಾವಂದನೆ'), detail: translate('PDF guides · Aachamana audio', 'PDF ಮಾರ್ಗದರ್ಶಿಗಳು · ಆಚಮನ ಧ್ವನಿ') },
          { id: 'yajurveda', label: translate('b. Krishna Yajurveda Sandhyavandana', 'ಆ. ಕೃಷ್ಣ ಯಜುರ್ವೇದ ಸಂಧ್ಯಾವಂದನೆ'), detail: translate('Steps in 5 scripts · Free PDF & audio', '5 ಲಿಪಿಗಳಲ್ಲಿ ಹಂತಗಳು · ಉಚಿತ PDF ಮತ್ತು ಧ್ವನಿ') },
        ] as const).map((option) => (
          <button key={option.id} type="button" role="tab" id={`veda-tab-${option.id}`} aria-selected={veda === option.id} aria-controls={`veda-panel-${option.id}`} onClick={() => setVeda(option.id)} className={`rounded-2xl border p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700] ${veda === option.id ? 'border-[#ffd700] bg-[#ffd700]/10' : 'border-[#ffd700]/20 bg-[#250a0a] hover:border-[#ffd700]/50'}`}>
            <span className="block font-serif text-lg text-[#ffd700]">{option.label}</span>
            <span className="mt-1 block text-xs text-[#fef3c7]/60">{option.detail}</span>
          </button>
        ))}
      </div>

      {veda === 'yajurveda' && <section id="veda-panel-yajurveda" role="tabpanel" aria-labelledby="veda-tab-yajurveda" className="overflow-hidden rounded-2xl border border-[#ffd700]/30 bg-[#250a0a]">
        <div className="p-6 sm:p-8">
          <h2 className="flex items-center gap-2 font-serif text-2xl text-[#ffd700]"><Headphones size={23} />{translate('Krishna Yajurveda Sandhyavandana', 'ಕೃಷ್ಣ ಯಜುರ್ವೇದ ಸಂಧ್ಯಾವಂದನೆ')}</h2>
          <p className="mt-3 text-sm leading-7 text-[#fef3c7]/75">{translate('Listen to the complete Nitya Sandhya Vandanam in the Krishna Yajurvediya tradition, follow the steps in Kannada, Sanskrit, English, Telugu or Tamil, and download the free PDF. No payment or account is needed.', 'ಕೃಷ್ಣ ಯಜುರ್ವೇದೀಯ ಸಂಪ್ರದಾಯದ ಸಂಪೂರ್ಣ ನಿತ್ಯ ಸಂಧ್ಯಾವಂದನೆಯನ್ನು ಆಲಿಸಿ, ಕನ್ನಡ, ಸಂಸ್ಕೃತ, ಇಂಗ್ಲಿಷ್, ತೆಲುಗು ಅಥವಾ ತಮಿಳಿನಲ್ಲಿ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ ಮತ್ತು ಉಚಿತ PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ. ಪಾವತಿ ಅಥವಾ ಖಾತೆ ಅಗತ್ಯವಿಲ್ಲ.')}</p>
        </div>
        <div className="space-y-4 border-t border-[#ffd700]/15 px-6 py-6 sm:px-8">
          <div><h3 className="font-semibold">{krishnaYajurvedaSandhyavandane.title}</h3><p className="mt-1 text-xs text-[#fef3c7]/55">{krishnaYajurvedaSandhyavandane.reciter} · MP3 · {krishnaYajurvedaSandhyavandane.size}</p></div>
          <audio controls preload="none" src={krishnaYajurvedaSandhyavandane.audioUrl} className="w-full">{translate('Your browser does not support audio playback.', 'ನಿಮ್ಮ ಬ್ರೌಸರ್ ಧ್ವನಿ ಪ್ಲೇಬ್ಯಾಕ್ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.')}</audio>
          <div className="flex flex-wrap gap-3">
            <a href={krishnaYajurvedaSandhyavandane.audioUrl} target="_blank" rel="noopener noreferrer" className={secondaryClass}><Download size={16} />{translate('Open MP3', 'MP3 ತೆರೆಯಿರಿ')}</a>
            <a href={krishnaYajurvedaSandhyavandane.sourceUrl} target="_blank" rel="noopener noreferrer" className={secondaryClass}><ExternalLink size={16} />{translate('Text & source on Vignanam', 'ವಿಜ್ಞಾನಂನಲ್ಲಿ ಪಠ್ಯ ಮತ್ತು ಮೂಲ')}</a>
          </div>
          <p className="text-xs leading-6 text-[#fef3c7]/55">{translate('Audio courtesy of vignanam.org; streamed from its original source.', 'ಧ್ವನಿ ಕೃಪೆ: vignanam.org; ಮೂಲದಿಂದ ನೇರವಾಗಿ ಪ್ರಸಾರ.')}</p>
        </div>
        <KrishnaYajurvedaSteps lang={lang} />
      </section>}

      {veda === 'rigveda' && <div id="veda-panel-rigveda" role="tabpanel" aria-labelledby="veda-tab-rigveda" className="space-y-8">
      <h2 className="font-serif text-2xl text-[#ffd700] sm:text-3xl">{translate('Rigveda Trikala Sandhyavandane', 'ಋಗ್ವೇದ ತ್ರಿಕಾಲ ಸಂಧ್ಯಾವಂದನೆ')}</h2>
      <section aria-labelledby="sandhyavandane-pdfs">
        <div className="mb-4 flex items-center justify-between gap-3"><h2 id="sandhyavandane-pdfs" className="flex items-center gap-2 font-serif text-2xl"><BookOpen size={22} />{translate('Free PDF library', 'ಉಚಿತ PDF ಮಾರ್ಗದರ್ಶಿಗಳು')}</h2><span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs text-emerald-300">{translate('No payment or account', 'ಪಾವತಿ ಅಥವಾ ಖಾತೆ ಅಗತ್ಯವಿಲ್ಲ')}</span></div>
        <div className="divide-y divide-[#ffd700]/15 rounded-2xl border border-[#ffd700]/20 bg-[#250a0a] px-5 sm:px-7">
          {[
            { name: translate('Rigveda Trikala Sandhyavandane', 'ಋಗ್ವೇದ ತ್ರಿಕಾಲ ಸಂಧ್ಯಾವಂದನೆ'), detail: 'Vadirajacharya Karnam · PDF · 1.2 MB', file: 'rigveda-trikala-sandhyavandane.pdf' },
            { name: translate('Naama Mudra Dharane', 'ನಾಮ ಮುದ್ರಾ ಧಾರಣೆ'), detail: 'PDF · 5.8 MB', file: 'naama-mudra-dharane.pdf' },
          ].map((document) => (
            <article key={document.file} className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
              <div><h3 className="text-lg font-semibold text-[#ffd700]">{document.name}</h3><p className="mt-1 text-sm text-[#fef3c7]/60">{document.detail}</p></div>
              <a href={`/downloads/sandhyavandane/${document.file}`} download={document.file} className={buttonClass} aria-label={`${translate('Download', 'ಡೌನ್‌ಲೋಡ್')} ${document.name}`}><Download size={17} />{translate('Download free', 'ಉಚಿತ ಡೌನ್‌ಲೋಡ್')}</a>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="sandhyavandane-audio" className="overflow-hidden rounded-2xl border border-[#ffd700]/30 bg-[#250a0a]">
        <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:p-8">
          <div><h2 id="sandhyavandane-audio" className="flex items-center gap-2 font-serif text-2xl text-[#ffd700]"><Headphones size={23} />{translate('Aachamana audio lessons', 'ಆಚಮನ ಧ್ವನಿ ಪಾಠಗಳು')}</h2><p className="mt-3 text-sm leading-7 text-[#fef3c7]/75">{translate('Both recordings are included in one payment. Pay using the QR code, submit your transaction reference, and return after manual approval to download.', 'ಒಂದೇ ಪಾವತಿಯಲ್ಲಿ ಎರಡೂ ಧ್ವನಿ ಪಾಠಗಳು ಲಭ್ಯ. QR ಕೋಡ್ ಮೂಲಕ ಪಾವತಿಸಿ, ವ್ಯವಹಾರ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆಯನ್ನು ಸಲ್ಲಿಸಿ. ಪರಿಶೀಲನೆಯ ನಂತರ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.')}</p></div>
          <div className="sm:text-right"><p className="font-serif text-4xl text-[#ffd700]">₹{SANDHYAVANDANE_PRICE}</p><p className="mt-2 text-xs text-[#fef3c7]/60">{translate('One-time · Both recordings', 'ಒಂದೇ ಪಾವತಿ · ಎರಡೂ ಪಾಠಗಳು')}</p></div>
        </div>
        <div className="divide-y divide-[#ffd700]/15 border-t border-[#ffd700]/15 px-6 sm:px-8">
          {sandhyavandaneAudio.map((track, index) => (
            <div key={track.id} className="flex flex-col justify-between gap-3 py-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4"><span className="font-serif text-3xl text-[#ff9933]/50">0{index + 1}</span><div><h3 className="font-semibold">{translate(track.title, `ಸಂಧ್ಯಾವಂದನೆ – ಆಚಮನ · ಭಾಗ ${index + 1}`)}</h3><p className="mt-1 text-xs text-[#fef3c7]/55">1 November 2022 · M4A · {index === 0 ? '4.5' : '4.9'} MB</p></div></div>
              {approved ? <button disabled={busy} onClick={() => downloadAudio(track.id, track.filename)} className={buttonClass}><Download size={16} />{translate('Download audio', 'ಧ್ವನಿ ಡೌನ್‌ಲೋಡ್')}</button> : <span className="flex items-center gap-2 text-sm text-[#fef3c7]/60"><LockKeyhole size={15} />{translate('Payment approval required', 'ಪಾವತಿ ಅನುಮೋದನೆ ಅಗತ್ಯ')}</span>}
            </div>
          ))}
        </div>
        {!approved && !pending && <div className="border-t border-[#ffd700]/15 p-6 sm:px-8"><button disabled={loading} className={buttonClass} onClick={() => { setShowPayment(true); window.setTimeout(() => paymentSection.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50); }}>{translate('Get both recordings · ₹100', 'ಎರಡೂ ಪಾಠಗಳನ್ನು ಪಡೆಯಿರಿ · ₹100')}<ArrowRight size={16} /></button></div>}
      </section>

      <div ref={paymentSection} className="scroll-mt-24 space-y-5">
        {loading && <div role="status" className="animate-pulse rounded-xl border border-[#ffd700]/20 p-6 text-[#fef3c7]/65">{translate('Checking your download access…', 'ಡೌನ್‌ಲೋಡ್ ಅನುಮತಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…')}</div>}
        {error && <div role="alert" className="rounded-xl border border-red-400/40 bg-red-950/40 p-4 text-sm text-red-200">{error}<button disabled={busy} onClick={() => void runAction(refreshAccess)} className="ml-3 underline">{translate('Retry', 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ')}</button></div>}
        {message && <p role="status" className="rounded-xl border border-emerald-400/30 p-4 text-sm text-emerald-200">{message}</p>}
        {user && <div className="flex flex-wrap items-center justify-between gap-3 text-sm"><span className="break-all text-[#fef3c7]/70">{user.email}</span><button disabled={busy} className={secondaryClass} onClick={() => void runAction(async () => { await logout(); setUser(null); setAccess(null); setPassword(''); setTransactionRef(''); setReviewNotes({}); })}>{translate('Sign out', 'ಹೊರಬನ್ನಿ')}</button></div>}
        {approved && <div className="flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-950/30 p-5"><CheckCircle2 className="shrink-0 text-emerald-300" /><div><h3 className="font-semibold text-emerald-200">{translate('Payment approved', 'ಪಾವತಿ ಅನುಮೋದಿಸಲಾಗಿದೆ')}</h3><p className="mt-1 text-sm text-[#fef3c7]/70">{translate('Both audio downloads are ready above. Sign in to this account whenever you need them.', 'ಮೇಲಿನ ಎರಡೂ ಧ್ವನಿ ಪಾಠಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು. ಮತ್ತೆ ಪಡೆಯಲು ಇದೇ ಖಾತೆಗೆ ಪ್ರವೇಶಿಸಿ.')}</p></div></div>}
        {pending && <div className="rounded-xl border border-[#ffd700]/30 p-5"><h3 className="flex items-center gap-2 font-semibold text-[#ffd700]"><Clock size={19} />{translate('Payment awaiting manual review', 'ಪಾವತಿ ಪರಿಶೀಲನೆ ಬಾಕಿ ಇದೆ')}</h3><p className="mt-3 text-sm leading-7 text-[#fef3c7]/70">{translate('Your reference has been submitted. Downloads remain locked until the site owner confirms receipt of ₹100. You do not need to pay again. Return to this page and sign in to check approval.', 'ನಿಮ್ಮ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆಯನ್ನು ಸಲ್ಲಿಸಲಾಗಿದೆ. ಮಾಲೀಕರು ₹100 ಪಾವತಿಯನ್ನು ದೃಢಪಡಿಸಿದ ನಂತರ ಡೌನ್‌ಲೋಡ್ ಸಕ್ರಿಯವಾಗುತ್ತದೆ. ಮತ್ತೆ ಪಾವತಿಸಬೇಡಿ. ಅನುಮೋದನೆ ಪರಿಶೀಲಿಸಲು ಈ ಪುಟಕ್ಕೆ ಮರಳಿ ಪ್ರವೇಶಿಸಿ.')}</p><p className="mt-2 text-sm">UTR: {access?.request?.transactionRef}</p><button disabled={busy} onClick={() => void runAction(refreshAccess)} className={`${secondaryClass} mt-4`}><RefreshCw size={16} />{translate('Check approval', 'ಅನುಮೋದನೆ ಪರಿಶೀಲಿಸಿ')}</button></div>}
        {access?.request?.status === 'rejected' && <div role="status" className="rounded-xl border border-red-400/30 p-5"><h3 className="font-semibold text-red-200">{translate('Payment could not be confirmed', 'ಪಾವತಿ ದೃಢಪಡಿಸಲಾಗಲಿಲ್ಲ')}</h3><p className="mt-2 text-sm text-[#fef3c7]/75">{access.request.reviewNote}</p><p className="mt-2 text-sm">{translate('Check your payment and submit the correct UTR below. Do not pay again if ₹100 was already debited.', 'ಪಾವತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಸರಿಯಾದ UTR ಅನ್ನು ಸಲ್ಲಿಸಿ. ₹100 ಈಗಾಗಲೇ ಪಾವತಿಸಿದ್ದರೆ ಮತ್ತೆ ಪಾವತಿಸಬೇಡಿ.')}</p></div>}

        {!loading && ((showPayment && !approved && !pending) || passwordOnly) && <section className="rounded-2xl border border-[#ffd700]/25 bg-[#250a0a] p-6 sm:p-8">
          {(!user?.confirmedAt || passwordOnly) ? <div className="max-w-md">
            <h2 className="font-serif text-2xl text-[#ffd700]">{passwordOnly ? translate('Set your password', 'ಗುಪ್ತಪದ ಹೊಂದಿಸಿ') : translate('Sign in for paid audio', 'ಧ್ವನಿ ಪಾಠಗಳಿಗಾಗಿ ಪ್ರವೇಶಿಸಿ')}</h2>
            <p className="mt-3 text-sm leading-7 text-[#fef3c7]/70">{translate('A confirmed account keeps your payment request and approved downloads together. The PDFs remain free without an account.', 'ದೃಢೀಕೃತ ಖಾತೆಯಲ್ಲಿ ಪಾವತಿ ವಿನಂತಿ ಮತ್ತು ಅನುಮೋದಿತ ಡೌನ್‌ಲೋಡ್‌ಗಳು ಲಭ್ಯವಿರುತ್ತವೆ. PDFಗಳಿಗೆ ಖಾತೆ ಅಗತ್ಯವಿಲ್ಲ.')}</p>
            <form onSubmit={handleAuth} className="mt-5 space-y-4">
              {!passwordOnly && <label className="block space-y-2 text-sm"><span>{translate('Email address', 'ಇಮೇಲ್ ವಿಳಾಸ')}</span><input type="email" autoComplete="email" required maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} /></label>}
              {needsPassword && <label className="block space-y-2 text-sm"><span>{translate('Password', 'ಗುಪ್ತಪದ')}</span><input type="password" required minLength={authMode === 'login' ? 1 : 8} maxLength={128} autoComplete={authMode === 'login' ? 'current-password' : 'new-password'} value={password} onChange={(event) => setPassword(event.target.value)} className={inputClass} /></label>}
              <button disabled={busy} className={buttonClass}>{busy ? translate('Please wait…', 'ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ…') : authMode === 'signup' ? translate('Create account', 'ಖಾತೆ ತೆರೆಯಿರಿ') : authMode === 'recovery' ? translate('Send reset link', 'ಮರುಹೊಂದಿಸುವ ಲಿಂಕ್ ಕಳುಹಿಸಿ') : passwordOnly ? translate('Save password', 'ಗುಪ್ತಪದ ಉಳಿಸಿ') : translate('Sign in', 'ಪ್ರವೇಶಿಸಿ')}</button>
            </form>
            {!passwordOnly && <div className="mt-5 flex flex-wrap gap-4 text-sm"><button disabled={busy} className="text-[#ffd700] underline" onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}>{authMode === 'signup' ? translate('Already have an account? Sign in', 'ಖಾತೆ ಇದೆಯೇ? ಪ್ರವೇಶಿಸಿ') : translate('Create an account', 'ಖಾತೆ ತೆರೆಯಿರಿ')}</button><button disabled={busy} className="text-[#fef3c7]/70 underline" onClick={() => setAuthMode(authMode === 'recovery' ? 'login' : 'recovery')}>{authMode === 'recovery' ? translate('Back to sign in', 'ಪ್ರವೇಶಕ್ಕೆ ಮರಳಿ') : translate('Forgot password', 'ಗುಪ್ತಪದ ಮರೆತಿರಾ')}</button></div>}
          </div> : <div>
            <h2 className="font-serif text-2xl text-[#ffd700]">{translate('Pay ₹100 using UPI', 'UPI ಮೂಲಕ ₹100 ಪಾವತಿಸಿ')}</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-[auto_1fr]">
              <div><div className="inline-block rounded-2xl bg-white p-5"><QRCodeSVG value={upiUrl} size={200} level="M" title="Pay INR 100 for Rigveda Trikala Sandhyavandane audio" /></div><p className="mt-3 text-sm font-semibold text-[#ffd700]">₹100 · INR</p></div>
              <div className="space-y-4"><p className="text-sm leading-7 text-[#fef3c7]/75">{translate('Scan with Google Pay, PhonePe, Paytm, or any UPI app. Check the recipient and ₹100 amount before confirming.', 'Google Pay, PhonePe, Paytm ಅಥವಾ UPI ಆ್ಯಪ್ ಮೂಲಕ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ. ಪಾವತಿಸುವ ಮೊದಲು ಸ್ವೀಕರಿಸುವವರ ಹೆಸರು ಮತ್ತು ₹100 ಪರಿಶೀಲಿಸಿ.')}</p><p className="text-sm">{UPI_RECIPIENT_NAME}</p><p className="break-all text-sm text-[#ffd700]">{UPI_RECIPIENT_ID}</p><div className="flex flex-wrap gap-3"><a href={upiUrl} className={buttonClass}>{translate('Open UPI app', 'UPI ಆ್ಯಪ್ ತೆರೆಯಿರಿ')}</a><button className={secondaryClass} disabled={busy} onClick={() => void runAction(async () => { await navigator.clipboard.writeText(UPI_RECIPIENT_ID); setCopied(true); window.setTimeout(() => setCopied(false), 2500); })}><Copy size={16} />{copied ? translate('Copied', 'ನಕಲಿಸಲಾಗಿದೆ') : translate('Copy UPI ID', 'UPI ID ನಕಲಿಸಿ')}</button></div><p className="flex items-start gap-2 text-xs leading-6 text-[#fef3c7]/60"><ShieldCheck size={18} className="mt-1 shrink-0" />{translate('This is a manual payment review, not an automatic checkout. Submitting a reference does not unlock the recordings.', 'ಇದು ಸ್ವಯಂಚಾಲಿತ ಪಾವತಿ ಅಲ್ಲ. ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ ಸಲ್ಲಿಸಿದ ತಕ್ಷಣ ಧ್ವನಿ ಪಾಠಗಳು ಲಭ್ಯವಾಗುವುದಿಲ್ಲ; ಪರಿಶೀಲನೆ ಅಗತ್ಯ.')}</p></div>
            </div>
            <form className="mt-7 max-w-lg space-y-3 border-t border-[#ffd700]/20 pt-6" onSubmit={(event) => { event.preventDefault(); void runAction(async () => { await accessApi({ method: 'POST', body: JSON.stringify({ transactionRef }) }); setTransactionRef(''); await refreshAccess(); }); }}>
              <label className="block space-y-2 text-sm"><span>{translate('12-digit UPI transaction reference (UTR)', '12 ಅಂಕಿಯ UPI ವ್ಯವಹಾರ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ (UTR)')}</span><input required inputMode="numeric" pattern="[0-9]{12}" maxLength={12} minLength={12} value={transactionRef} onChange={(event) => setTransactionRef(event.target.value)} className={inputClass} aria-describedby="utr-help" /></label><p id="utr-help" className="text-xs leading-6 text-[#fef3c7]/60">{translate('Find this in your UPI app’s payment details after a successful ₹100 payment. No passwords or banking credentials are needed.', 'ಯಶಸ್ವಿ ₹100 ಪಾವತಿಯ ನಂತರ UPI ಆ್ಯಪ್‌ನ ವ್ಯವಹಾರ ವಿವರಗಳಲ್ಲಿ UTR ಸಿಗುತ್ತದೆ. ಗುಪ್ತಪದ ಅಥವಾ ಬ್ಯಾಂಕ್ ರಹಸ್ಯ ಮಾಹಿತಿ ಬೇಡ.')}</p><button disabled={busy} className={buttonClass}>{busy ? translate('Submitting…', 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ…') : translate('Submit payment for approval', 'ಅನುಮೋದನೆಗಾಗಿ ಪಾವತಿ ಸಲ್ಲಿಸಿ')}</button>
            </form>
          </div>}
        </section>}
      </div>
      </div>}

      {/* Yajnopaveeta Dharana belongs with Trikala Sandhyavandane */}
      <UpakarmaDownloadsSection lang={lang} />

      {access?.isAdmin && <section className="rounded-2xl border border-[#ff9933]/40 bg-[#250a0a] p-6 sm:p-8" aria-labelledby="payment-review-heading">
        <div className="flex flex-wrap items-center justify-between gap-3"><h2 id="payment-review-heading" className="flex items-center gap-2 font-serif text-2xl text-[#ffd700]"><ShieldCheck size={22} />{translate('Payment approval queue', 'ಪಾವತಿ ಅನುಮೋದನೆ ವಿನಂತಿಗಳು')}</h2><button className={secondaryClass} disabled={busy} onClick={() => void runAction(refreshAccess)}><RefreshCw size={16} />{translate('Refresh', 'ಪರಿಶೀಲಿಸಿ')}</button></div>
        <p className="mt-4 text-sm leading-7 text-[#fef3c7]/70">{translate('Verify each UTR against an actual ₹100 credit in your bank or UPI statement before approving. A submitted reference is not proof of payment. Up to 100 pending requests are shown; refresh after reviewing.', 'ಅನುಮೋದನೆಗೂ ಮೊದಲು ಪ್ರತಿ UTR ಮತ್ತು ₹100 ಪಾವತಿಯನ್ನು ಬ್ಯಾಂಕ್ ಅಥವಾ UPI ವಿವರಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಿ. ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ ಪಾವತಿ ಪುರಾವೆಯಲ್ಲ. 100 ವಿನಂತಿಗಳವರೆಗೆ ತೋರಿಸಲಾಗುತ್ತದೆ.')}</p>
        {!access.queue?.length && <p className="mt-5 text-sm text-[#fef3c7]/60">{translate('No payments awaiting review.', 'ಪರಿಶೀಲನೆಗೆ ಯಾವುದೇ ಪಾವತಿ ಬಾಕಿ ಇಲ್ಲ.')}</p>}
        <div className="mt-5 space-y-4">{access.queue?.map((payment) => <article key={payment.id} className="space-y-3 rounded-xl border border-[#ffd700]/20 bg-[#140404] p-4"><div className="flex flex-wrap justify-between gap-2"><h3 className="break-all font-semibold">{payment.email}</h3><span className="text-[#ffd700]">₹{payment.amount}</span></div><p className="text-sm">UTR: {payment.transactionRef}</p><p className="text-xs text-[#fef3c7]/55">{new Date(payment.createdAt).toLocaleString(lang === 'kn' ? 'kn-IN' : 'en-IN')}</p><label className="block space-y-2 text-sm"><span>{translate('Review note (required when rejecting)', 'ಪರಿಶೀಲನಾ ಟಿಪ್ಪಣಿ (ತಿರಸ್ಕರಿಸುವಾಗ ಕಡ್ಡಾಯ)')}</span><textarea rows={2} maxLength={500} className={inputClass} value={reviewNotes[payment.id] || ''} onChange={(event) => setReviewNotes((notes) => ({ ...notes, [payment.id]: event.target.value }))} /></label><div className="flex flex-wrap gap-3">{(['approved', 'rejected'] as const).map((status) => <button key={status} disabled={busy || (status === 'rejected' && !reviewNotes[payment.id]?.trim())} className={status === 'approved' ? buttonClass : secondaryClass} onClick={() => void runAction(async () => { await accessApi({ method: 'PATCH', body: JSON.stringify({ id: payment.id, status, reviewNote: reviewNotes[payment.id] || '' }) }); await refreshAccess(); })}>{status === 'approved' ? translate('Approve verified ₹100 payment', 'ದೃಢೀಕೃತ ₹100 ಪಾವತಿ ಅನುಮೋದಿಸಿ') : translate('Reject request', 'ವಿನಂತಿ ತಿರಸ್ಕರಿಸಿ')}</button>)}</div></article>)}</div>
      </section>}
    </div>
  );
}
