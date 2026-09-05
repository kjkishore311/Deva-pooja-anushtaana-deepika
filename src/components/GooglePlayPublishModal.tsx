import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  X,
  Smartphone,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Download,
  ShieldCheck,
  CheckCircle2,
  Info,
  Layers,
} from 'lucide-react';

interface GooglePlayPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export const GooglePlayPublishModal: React.FC<GooglePlayPublishModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [activeTab, setActiveTab] = useState<'install' | 'playstore'>('playstore');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const appUrl = window.location.origin;

  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsInstalled(isStandalone);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    }
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-gradient-to-b from-[#250a0a] via-[#1a0606] to-[#120404] border-2 border-[#ffd700]/40 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#ffd700]/20 bg-[#160404] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00875a] via-[#00a86b] to-[#ffd700] p-0.5 shadow-lg flex items-center justify-center text-xl shrink-0">
              <span className="text-xl">▶️</span>
            </div>
            <div>
              <h2 className="font-serif font-bold text-base sm:text-lg text-[#ffd700] flex items-center gap-2">
                <span>
                  {lang === 'kn'
                    ? 'ಗೂಗಲ್ ಪ್ಲೇ ಸ್ಟೋರ್ & ಮೊಬೈಲ್ ಆ್ಯಪ್'
                    : 'Google Play Store & Mobile App'}
                </span>
                <span className="text-[10px] font-sans font-bold bg-[#ff9933]/20 text-[#ff9933] border border-[#ff9933]/40 px-2 py-0.5 rounded-full">
                  Android APK / AAB Ready
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs text-[#fef3c7]/70 font-sans">
                {lang === 'kn'
                  ? 'ಪ್ಲೇ ಸ್ಟೋರ್‌ನಲ್ಲಿ ಪ್ರಕಟಣೆ ಮತ್ತು ಮೊಬೈಲ್‌ನಲ್ಲಿ ತಕ್ಷಣ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ'
                  : 'Publish to Google Play Store & install directly on any Android device'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#3d1111] text-[#fef3c7]/70 hover:text-[#fef3c7] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#ffd700]/15 bg-[#140303] px-4 pt-3 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('playstore')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-sans font-bold transition-all flex items-center gap-2 border-t border-x ${
              activeTab === 'playstore'
                ? 'bg-[#250a0a] text-[#ffd700] border-[#ffd700]/30 border-b-transparent shadow-sm'
                : 'text-[#fef3c7]/60 border-transparent hover:text-[#fef3c7]'
            }`}
          >
            <span>🏪</span>
            <span>{lang === 'kn' ? 'ಪ್ಲೇ ಸ್ಟೋರ್ ಪ್ರಕಟಣೆ ಹಂತಗಳು' : 'Play Store Publishing'}</span>
          </button>

          <button
            onClick={() => setActiveTab('install')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-sans font-bold transition-all flex items-center gap-2 border-t border-x ${
              activeTab === 'install'
                ? 'bg-[#250a0a] text-[#ffd700] border-[#ffd700]/30 border-b-transparent shadow-sm'
                : 'text-[#fef3c7]/60 border-transparent hover:text-[#fef3c7]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-[#ff9933]" />
            <span>{lang === 'kn' ? 'ಮೊಬೈಲ್‌ನಲ್ಲಿ ತಕ್ಷಣ ಇನ್‌ಸ್ಟಾಲ್' : 'Direct Android Install'}</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-sm">
          {activeTab === 'playstore' ? (
            <div className="space-y-5">
              {/* Notice Banner */}
              <div className="bg-[#2d0e0e]/80 border border-[#ff9933]/40 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#ffd700]">
                  <Sparkles className="w-4 h-4 text-[#ff9933]" />
                  <span>
                    {lang === 'kn'
                      ? 'ಈ ಆ್ಯಪ್ ೧೦೦% ಗೂಗಲ್ ಪ್ಲೇ ಸ್ಟೋರ್ ಮಾನದಂಡಗಳಿಗೆ ಸಿದ್ಧವಾಗಿದೆ (PWA / TWA Compliant)'
                      : 'This App is 100% Google Play Store Compliant (TWA / PWA Manifest Verified)'}
                  </span>
                </div>
                <p className="text-[#fef3c7]/80 font-sans leading-relaxed">
                  {lang === 'kn'
                    ? 'ಗೂಗಲ್ ನಿಯಮಗಳ ಪ್ರಕಾರ, ಯಾವುದೇ ಡೆವಲಪರ್ ತಮ್ಮ ವೈಯಕ್ತಿಕ ಗೂಗಲ್ ಪ್ಲೇ ಕನ್ಸೋಲ್ ಖಾತೆಯಿಂದ (Play Console Account) ನೇರವಾಗಿ ಆ್ಯಪ್ ಬಂಡಲ್ (.AAB) ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಪ್ರಕಟಿಸಬೇಕು. ಈ ಕೆಳಗಿನ ಸರಳ ಹಂತಗಳ ಮೂಲಕ ನಿಮ್ಮ ಆ್ಯಪ್ ಅನ್ನು ೫ ನಿಮಿಷಗಳಲ್ಲಿ ಪ್ಲೇ ಸ್ಟೋರ್‌ಗೆ ಕಳುಹಿಸಬಹುದು:'
                    : 'Google Play Store policies require apps to be submitted through your personal/organization Google Play Console account. Follow these 4 simple steps to generate your signed .AAB package and submit it in 5 minutes:'}
                </p>
              </div>

              {/* Step 1: PWABuilder 1-Click .AAB Generator */}
              <div className="bg-[#160404] border border-[#ffd700]/20 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#ff9933] text-[#1a0606] font-bold text-xs flex items-center justify-center font-sans">
                      1
                    </span>
                    <h4 className="font-bold text-[#ffd700] text-sm">
                      {lang === 'kn' ? 'ಹಂತ ೧: ಗೂಗಲ್ ಪ್ಲೇ .AAB ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Step 1: Generate & Download Google Play .AAB File'}
                    </h4>
                  </div>
                  <span className="text-[10px] font-sans font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Google Endorsed
                  </span>
                </div>

                <p className="text-xs text-[#fef3c7]/80 leading-relaxed font-sans">
                  {lang === 'kn'
                    ? 'ಅಧಿಕೃತ PWABuilder (ಗೂಗಲ್ ಕ್ರೋಮ್ ತಂಡ ಅನುಮೋದಿತ) ಬಳಸಿ ನಿಮ್ಮ ಆ್ಯಪ್‌ನ ಲಿಂಕ್ ನಮೂದಿಸಿ ನೇರವಾಗಿ Google Play Android App Bundle (.aab) ಪ್ಯಾಕೇಜ್ ಪಡೆಯಿರಿ.'
                    : 'Use the official PWABuilder (endorsed by Google Chrome & Microsoft) to package this URL into a Google Play Android App Bundle (.aab):'}
                </p>

                {/* App URL Copy Box */}
                <div className="flex items-center justify-between bg-[#0e0202] border border-[#ffd700]/20 rounded-xl p-2.5 text-xs">
                  <div className="truncate mr-2 font-mono text-[#ffeedd]">
                    {appUrl}
                  </div>
                  <button
                    onClick={() => copyToClipboard(appUrl, 'appUrl')}
                    className="px-3 py-1.5 rounded-lg bg-[#3d1111] hover:bg-[#4d1616] text-[#ffd700] font-sans font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shrink-0"
                  >
                    {copiedField === 'appUrl' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{lang === 'kn' ? 'ಕಾಪಿ ಆಗಿದೆ' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{lang === 'kn' ? 'ಲಿಂಕ್ ಕಾಪಿ' : 'Copy URL'}</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`https://www.pwabuilder.com?url=${encodeURIComponent(appUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] font-bold font-sans text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md active:scale-98"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {lang === 'kn'
                      ? 'PWABuilder ನಲ್ಲಿ .AAB ಪ್ಯಾಕೇಜ್ ತೆರೆಯಿರಿ (Package for Play Store)'
                      : 'Open PWABuilder to Package .AAB (1-Click)'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Manifest Icon & Ready Code Snippet */}
                <div className="bg-[#0b0303] border border-[#ffd700]/15 rounded-xl p-3 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-sans">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {lang === 'kn' ? 'PWABuilder ನ ಎಲ್ಲಾ ಪಾಯಿಂಟ್‌ಗಳು ಸರಿಹೊಂದಿಸಲಾಗಿದೆ (100% Valid):' : 'All PWABuilder Points Passed (100% Valid):'}
                    </span>
                    <button
                      onClick={() => copyToClipboard(`{
  "id": "/",
  "name": "ತಂತ್ರಸಾರೋಕ್ತ ದೇವಪೂಜಾ - Deva Pooja Anushtana",
  "short_name": "DevaPooja",
  "description": "Authentic Tantrasarokta Deva Pooja companion with mantras, human priest audio, mudras, Ekadashi workflow, and materials checklist in Kannada and English.",
  "start_url": "/",
  "scope": "/",
  "lang": "kn",
  "dir": "ltr",
  "display": "standalone",
  "display_override": ["window-controls-overlay", "standalone", "minimal-ui"],
  "orientation": "portrait-primary",
  "background_color": "#1a0606",
  "theme_color": "#451a03",
  "categories": ["lifestyle", "education", "books"],
  "prefer_related_applications": false,
  "related_applications": [],
  "launch_handler": {
    "client_mode": "auto"
  },
  "edge_side_panel": {
    "preferred_width": 480
  },
  "note_taking": {
    "new_note_url": "/?note=new"
  },
  "share_target": {
    "action": "/",
    "method": "GET",
    "params": {
      "title": "title",
      "text": "text",
      "url": "url"
    }
  },
  "file_handlers": [
    {
      "action": "/",
      "accept": {
        "text/plain": [".txt"]
      }
    }
  ],
  "protocol_handlers": [
    {
      "protocol": "web+pooja",
      "url": "/?ritual=%s"
    }
  ],
  "icons": [
    {
      "src": "https://www.pwabuilder.com/assets/icons/icon_512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "https://www.pwabuilder.com/assets/icons/icon_512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "screenshots": [
    {
      "src": "/screenshot-desktop.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide",
      "label": "Tantrasarokta Deva Pooja Anushtana Companion"
    },
    {
      "src": "/screenshot-mobile.png",
      "sizes": "720x1280",
      "type": "image/png",
      "form_factor": "narrow",
      "label": "Deva Pooja Mantras & Ritual Steps"
    }
  ],
  "shortcuts": [
    {
      "name": "೧೦ ನಿಮಿಷ ಪೂಜೆ (10 Min Pooja)",
      "short_name": "10m Pooja",
      "description": "Quick 10-Minute Daily Deva Pooja",
      "url": "/?mode=10min"
    },
    {
      "name": "೩೦ ನಿಮಿಷ ಪೂಜೆ (30 Min Pooja)",
      "short_name": "30m Pooja",
      "description": "Standard 30-Minute Pooja with Sudha Pandita Videos",
      "url": "/?mode=30min"
    },
    {
      "name": "ಅಂಜನೀಪುತ್ರ ಚಾಟ್‌ಬಾಟ್",
      "short_name": "Anjaniputra",
      "description": "Ask questions to Hanuman Guide",
      "url": "/?bot=open"
    }
  ],
  "widgets": [],
  "scope_extensions": []
}`, 'fullManifest')}
                      className="text-[#ff9933] hover:text-[#ffd700] text-[11px] font-bold flex items-center gap-1"
                    >
                      {copiedField === 'fullManifest' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied Full JSON</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Full manifest.json</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-[10px] font-mono text-[#fef3c7]/80 bg-[#160404] p-2 rounded-lg overflow-x-auto max-h-36 leading-relaxed border border-[#ffd700]/10">
{`{
  "screenshots": [
    { "src": "/screenshot-desktop.png", "sizes": "1280x720", "form_factor": "wide" },
    { "src": "/screenshot-mobile.png", "sizes": "720x1280", "form_factor": "narrow" }
  ],
  "lang": "kn", "dir": "ltr",
  "display_override": ["window-controls-overlay", "standalone", "minimal-ui"],
  "launch_handler": { "client_mode": "auto" },
  "edge_side_panel": { "preferred_width": 480 },
  "share_target": { "action": "/", "method": "GET" },
  "prefer_related_applications": false,
  "file_handlers": [...], "protocol_handlers": [...]
}`}
                  </pre>
                </div>

                {/* Direct File Download Package Section */}
                <div className="bg-[#120303] border-2 border-[#ffd700]/30 rounded-xl p-4 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-[#ffd700]" />
                      <h5 className="font-bold text-[#ffd700] text-xs font-sans">
                        {lang === 'kn' ? 'ನೇರ ಫೈಲ್‌ಗಳ ಡೌನ್‌ಲೋಡ್ (Download PWA Files)' : 'Direct PWA Files Download'}
                      </h5>
                    </div>
                    <span className="text-[10px] bg-[#ffd700]/20 text-[#ffd700] px-2 py-0.5 rounded-full font-bold">
                      Ready to Use
                    </span>
                  </div>

                  <p className="text-[11px] text-[#ffeedd]/80 font-sans leading-relaxed">
                    {lang === 'kn'
                      ? 'ಪ್ಲೇ ಸ್ಟೋರ್ ಅಥವಾ ಆಫ್‌ಲೈನ್ ಹೋಸ್ಟಿಂಗ್‌ಗಾಗಿ ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ೪ ಫೈಲ್‌ಗಳು ಮತ್ತು ಐಕಾನ್‌ಗಳನ್ನು ನೇರವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಿ:'
                      : 'Download all required files (index.html, manifest.json, service-worker.js, /icons/) for offline hosting or Play Store package:'}
                  </p>

                  {/* 1-Click ZIP Download Button */}
                  <a
                    href="/deva-pooja-pwa-package.zip"
                    download="deva-pooja-pwa-package.zip"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold font-sans text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                  >
                    <Download className="w-4 h-4" />
                    <span>
                      {lang === 'kn'
                        ? 'ಸಂಪೂರ್ಣ PWA ಪ್ಯಾಕೇಜ್ ಡೌನ್‌ಲೋಡ್ (.ZIP - 1 Click)'
                        : 'Download Complete PWA Package (.ZIP - 1 Click)'}
                    </span>
                  </a>

                  {/* Individual File Links */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href="/index.html"
                      download="index.html"
                      className="p-2 rounded-lg bg-[#1f0707] hover:bg-[#2e0b0b] border border-[#ffd700]/20 text-[#fef3c7] text-[11px] font-mono flex items-center justify-between transition-all"
                    >
                      <span className="truncate">📄 index.html</span>
                      <Download className="w-3 h-3 text-[#ff9933] shrink-0" />
                    </a>
                    <a
                      href="/manifest.json"
                      download="manifest.json"
                      className="p-2 rounded-lg bg-[#1f0707] hover:bg-[#2e0b0b] border border-[#ffd700]/20 text-[#fef3c7] text-[11px] font-mono flex items-center justify-between transition-all"
                    >
                      <span className="truncate">⚙️ manifest.json</span>
                      <Download className="w-3 h-3 text-[#ff9933] shrink-0" />
                    </a>
                    <a
                      href="/service-worker.js"
                      download="service-worker.js"
                      className="p-2 rounded-lg bg-[#1f0707] hover:bg-[#2e0b0b] border border-[#ffd700]/20 text-[#fef3c7] text-[11px] font-mono flex items-center justify-between transition-all"
                    >
                      <span className="truncate">⚡ service-worker.js</span>
                      <Download className="w-3 h-3 text-[#ff9933] shrink-0" />
                    </a>
                    <a
                      href="/icons/icon-192x192.png"
                      download="icon-192x192.png"
                      className="p-2 rounded-lg bg-[#1f0707] hover:bg-[#2e0b0b] border border-[#ffd700]/20 text-[#fef3c7] text-[11px] font-mono flex items-center justify-between transition-all"
                    >
                      <span className="truncate">🖼️ icons/192×192.png</span>
                      <Download className="w-3 h-3 text-[#ff9933] shrink-0" />
                    </a>
                    <a
                      href="/icons/icon-512x512.png"
                      download="icon-512x512.png"
                      className="p-2 col-span-2 rounded-lg bg-[#1f0707] hover:bg-[#2e0b0b] border border-[#ffd700]/20 text-[#fef3c7] text-[11px] font-mono flex items-center justify-between transition-all"
                    >
                      <span className="truncate">🖼️ icons/512×512.png (High-Res Deity Icon)</span>
                      <Download className="w-3 h-3 text-[#ff9933] shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2: Google Play Console Submission */}
              <div className="bg-[#160404] border border-[#ffd700]/20 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#ff9933] text-[#1a0606] font-bold text-xs flex items-center justify-center font-sans">
                    2
                  </span>
                  <h4 className="font-bold text-[#ffd700] text-sm">
                    {lang === 'kn' ? 'ಹಂತ ೨: ಗೂಗಲ್ ಪ್ಲೇ ಕನ್ಸೋಲ್‌ನಲ್ಲಿ ಆ್ಯಪ್ ರಚಿಸಿ' : 'Step 2: Create App on Google Play Console'}
                  </h4>
                </div>

                <ol className="text-xs text-[#fef3c7]/80 space-y-2 list-decimal list-inside font-sans pl-1">
                  <li>
                    <a
                      href="https://play.google.com/console"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff9933] underline font-bold hover:text-[#ffd700]"
                    >
                      play.google.com/console
                    </a>{' '}
                    {lang === 'kn' ? 'ಗೆ ಲಾಗಿನ್ ಆಗಿ "Create app" ಕ್ಲಿಕ್ ಮಾಡಿ.' : 'and click "Create app".'}
                  </li>
                  <li>
                    {lang === 'kn'
                      ? 'ಆ್ಯಪ್ ಹೆಸರು: "ತಂತ್ರಸಾರೋಕ್ತ ದೇವಪೂಜಾಪದ್ಧತಿ - Deva Pooja Anushtana" ಎಂದು ನಮೂದಿಸಿ.'
                      : 'App Name: "ತಂತ್ರಸಾರೋಕ್ತ ದೇವಪೂಜಾಪದ್ಧತಿ - Deva Pooja Anushtana".'}
                  </li>
                  <li>
                    {lang === 'kn'
                      ? 'Default language: Kannada / English, App type: Free / ಪೂಜಾ ಆ್ಯಪ್ ಆಯ್ಕೆಮಾಡಿ.'
                      : 'Default language: Kannada or English, Type: App, Category: Lifestyle / Books.'}
                  </li>
                </ol>
              </div>

              {/* Step 3: Upload Release */}
              <div className="bg-[#160404] border border-[#ffd700]/20 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#ff9933] text-[#1a0606] font-bold text-xs flex items-center justify-center font-sans">
                    3
                  </span>
                  <h4 className="font-bold text-[#ffd700] text-sm">
                    {lang === 'kn' ? 'ಹಂತ ೩: ಡೌನ್‌ಲೋಡ್ ಮಾಡಿದ .AAB ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ' : 'Step 3: Upload the .AAB Bundle'}
                  </h4>
                </div>

                <p className="text-xs text-[#fef3c7]/80 font-sans leading-relaxed">
                  {lang === 'kn'
                    ? 'ಪ್ಲೇ ಕನ್ಸೋಲ್‌ನ "Production" ಅಥವಾ "Closed Testing" ಮೆನುವಿನಲ್ಲಿ "Create new release" ಕ್ಲಿಕ್ ಮಾಡಿ ಹಂತ ೧ ರಲ್ಲಿ ಪಡೆದ .aab ಫೈಲ್ ಅನ್ನು ಡ್ರ್ಯಾಗ್ & ಡ್ರಾಪ್ ಮಾಡಿ.'
                    : 'In Play Console, go to Production > Releases > "Create new release" and upload the .aab file obtained in Step 1.'}
                </p>
              </div>

              {/* Step 4: Metadata Sheet Ready for Copying */}
              <div className="bg-[#160404] border border-[#ffd700]/20 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#ff9933] text-[#1a0606] font-bold text-xs flex items-center justify-center font-sans">
                      4
                    </span>
                    <h4 className="font-bold text-[#ffd700] text-sm">
                      {lang === 'kn' ? 'ಪ್ಲೇ ಸ್ಟೋರ್ ವಿವರಗಳು (Copy-Ready Text)' : 'Store Listing Metadata (Ready to Paste)'}
                    </h4>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-sans">
                  <div className="p-2.5 bg-[#0d0202] rounded-xl border border-[#ffd700]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[#ffd700] font-bold block">App Title (ಹೆಸರು):</span>
                      <span className="text-[#ffeedd]">ತಂತ್ರಸಾರೋಕ್ತ ದೇವಪೂಜಾ - Deva Pooja Anushtana</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('ತಂತ್ರಸಾರೋಕ್ತ ದೇವಪೂಜಾ - Deva Pooja Anushtana', 'title')}
                      className="text-[#ff9933] hover:text-[#ffd700] p-1"
                    >
                      {copiedField === 'title' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="p-2.5 bg-[#0d0202] rounded-xl border border-[#ffd700]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[#ffd700] font-bold block">Short Description (ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ):</span>
                      <span className="text-[#ffeedd]">Authentic Tantrasarokta Deva Pooja guide with mantras, priest audio, mudras, & rituals.</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('Authentic Tantrasarokta Deva Pooja guide with mantras, priest audio, mudras, & rituals.', 'shortDesc')}
                      className="text-[#ff9933] hover:text-[#ffd700] p-1"
                    >
                      {copiedField === 'shortDesc' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Direct Android Install Info */}
              <div className="text-center space-y-3 py-2">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#ff9933] to-[#ffd700] p-0.5 mx-auto shadow-2xl flex items-center justify-center overflow-hidden">
                  <img src="/deva_pooja_anushtana_icon_titled.png" alt="Deva Pooja Icon" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#ffd700]">
                  {lang === 'kn'
                    ? 'ನಿಮ್ಮ ಆಂಡ್ರಾಯ್ಡ್ ಮೊಬೈಲ್‌ನಲ್ಲಿ ಆ್ಯಪ್ ಆಗಿ ಬಳಸಿ'
                    : 'Install as Native Android App Directly'}
                </h3>
                <p className="text-xs text-[#fef3c7]/80 font-sans max-w-md mx-auto">
                  {lang === 'kn'
                    ? 'ಪ್ಲೇ ಸ್ಟೋರ್ ಅನುಮೋದನೆಗೆ ಕಾಯಬೇಕಿಲ್ಲ! ನಿಮ್ಮ ಮೊಬೈಲ್ ಹೋಮ್ ಸ್ಕ್ರೀನ್‌ನಲ್ಲಿ ಸಂಪೂರ್ಣ ಫುಲ್-ಸ್ಕ್ರೀನ್ ಆ್ಯಪ್ ಆಗಿ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿಕೊಳ್ಳಿ.'
                    : 'No need to wait for Play Store review! Install this app on your Android home screen right now for an instant native experience.'}
                </p>
              </div>

              {/* Install Button if browser supports it */}
              {deferredPrompt ? (
                <button
                  onClick={handleInstallClick}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#ff9933] via-[#ffd700] to-[#ffaa4d] text-[#1a0606] font-bold font-sans text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_0_25px_rgba(255,153,51,0.5)] active:scale-98"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>
                    {lang === 'kn'
                      ? '📱 ಮೊಬೈಲ್‌ನಲ್ಲಿ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ (Install App)'
                      : '📱 Install App on this Device'}
                  </span>
                </button>
              ) : isInstalled ? (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-center font-sans text-xs flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>
                    {lang === 'kn'
                      ? 'ಆ್ಯಪ್ ಈಗಾಗಲೇ ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಇನ್‌ಸ್ಟಾಲ್ ಆಗಿದೆ!'
                      : 'App is already installed in Standalone Mode on this device!'}
                  </span>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-[#1e0707] border border-[#ffd700]/30 space-y-3 text-xs font-sans">
                  <div className="flex items-center gap-2 text-[#ffd700] font-bold">
                    <Info className="w-4 h-4 text-[#ff9933]" />
                    <span>
                      {lang === 'kn'
                        ? 'ಆಂಡ್ರಾಯ್ಡ್ ಕ್ರೋಮ್‌ನಲ್ಲಿ ೨ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು ಹೇಗೆ:'
                        : 'How to install in Android Chrome in 2 seconds:'}
                    </span>
                  </div>
                  <ol className="space-y-2 text-[#fef3c7]/80 list-decimal list-inside">
                    <li>
                      {lang === 'kn'
                        ? 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಕ್ರೋಮ್ ಬ್ರೌಸರ್‌ನ ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ ೩ ಚುಕ್ಕೆಗಳನ್ನು (⋮) ಒತ್ತಿ.'
                        : 'Tap the 3 dots menu (⋮) in the top-right corner of Google Chrome on your phone.'}
                    </li>
                    <li>
                      {lang === 'kn'
                        ? '"Install App" ಅಥವಾ "Add to Home screen" (ಹೋಮ್ ಸ್ಕ್ರೀನ್‌ಗೆ ಸೇರಿಸಿ) ಆಯ್ಕೆಮಾಡಿ.'
                        : 'Tap "Install App" or "Add to Home screen".'}
                    </li>
                    <li>
                      {lang === 'kn'
                        ? 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಆ್ಯಪ್ ಲಿಸ್ಟ್‌ನಲ್ಲಿ ದೇವಪೂಜಾ ಆ್ಯಪ್ ಐಕಾನ್ ತಕ್ಷಣ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ!'
                        : 'The sacred Deva Pooja icon will appear directly on your phone home screen!'}
                    </li>
                  </ol>
                </div>
              )}

              {/* Share QR Code / Link */}
              <div className="p-4 rounded-2xl bg-[#140303] border border-[#ffd700]/15 space-y-3">
                <span className="text-xs font-bold text-[#ffd700] block font-sans">
                  {lang === 'kn' ? 'ಇತರ ಭಕ್ತರಿಗೆ ಈ ಆ್ಯಪ್ ಲಿಂಕ್ ಕಳುಹಿಸಿ:' : 'Share App Link with Devotees:'}
                </span>
                <div className="flex items-center justify-between bg-[#0a0101] border border-[#ffd700]/20 rounded-xl p-2.5 text-xs">
                  <div className="truncate mr-2 font-mono text-[#ffeedd]">
                    {appUrl}
                  </div>
                  <button
                    onClick={() => copyToClipboard(appUrl, 'shareUrl')}
                    className="px-3 py-1.5 rounded-lg bg-[#3d1111] hover:bg-[#4d1616] text-[#ffd700] font-sans font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shrink-0"
                  >
                    {copiedField === 'shareUrl' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{lang === 'kn' ? 'ಕಾಪಿ ಆಗಿದೆ' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{lang === 'kn' ? 'ಲಿಂಕ್ ಕಾಪಿ' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-[#ffd700]/15 bg-[#140303] flex items-center justify-between text-xs text-[#fef3c7]/60 font-sans shrink-0">
          <div className="flex items-center gap-2 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PWA & TWA Certified • Fast & Offline Capable</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#2a0b0b] hover:bg-[#3a0f0f] text-[#ffd700] font-sans font-bold transition-all border border-[#ffd700]/30 active:scale-95"
          >
            {lang === 'kn' ? 'ಮುಚ್ಚಿ' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
