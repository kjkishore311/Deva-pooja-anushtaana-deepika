import React, { useState, useEffect } from 'react';
import { Language, PoojaMode } from './types';
import { Header } from './components/Header';
import { GuidedPoojaView } from './components/GuidedPoojaView';
import { MudraGuideModal } from './components/MudraGuideModal';
import { MaterialsChecker } from './components/MaterialsChecker';
import { EkadashiWorkflow } from './components/EkadashiWorkflow';
import { QnABank } from './components/QnABank';
import { SuktasReader } from './components/SuktasReader';
import { DailySummaryPrint } from './components/DailySummaryPrint';
import { BottomNav, TabType } from './components/BottomNav';
import { Sidebar } from './components/Sidebar';
import { CinematicDarshanHero } from './components/CinematicDarshanHero';
import { SequentialDarshanVideoPlayer } from './components/SequentialDarshanVideoPlayer';
import { Panchanga } from './components/Panchanga';
import { PoojaLauncherCard } from './components/PoojaLauncherCard';
import { WelcomeBanner } from './components/WelcomeBanner';
import { AppSupportSection } from './components/AppSupportSection';
import { SupportModal } from './components/SupportModal';
import { EmbeddedBackgroundMusicPlayer } from './components/EmbeddedBackgroundMusicPlayer';
import { PaymentModal } from './components/PaymentModal';
import { PaymentService } from './services/paymentService';
import { MudraHandDiagram } from './components/MudraHandDiagram';
import { PanchaMudraMobileStepper } from './components/PanchaMudraMobileStepper';
import { TarkshyadiPanchaMudraWidget } from './components/TarkshyadiPanchaMudraWidget';
import { AnjaniputraChatbot } from './components/AnjaniputraChatbot';
import { SandhyavandaneSection } from './components/SandhyavandaneSection';
import { SacredDarshanBand } from './components/SacredDarshanBand';
import { AnjaniputraLauncher } from './components/AnjaniputraLauncher';
import { MadhwaGuruStuti } from './components/MadhwaGuruStuti';
import { DevotionalHomeWidgets } from './components/DevotionalHomeWidgets';
import { UpakarmaDownloadsSection } from './components/UpakarmaDownloadsSection';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('pooja_app_lang') as Language) || 'kn';
  });

  const [mode, setMode] = useState<PoojaMode>(() => {
    return (localStorage.getItem('pooja_app_mode') as PoojaMode) || '30min';
  });

  const [unlockedTiers, setUnlockedTiers] = useState<PoojaMode[]>(() =>
    PaymentService.getUnlockedTiers()
  );
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentModalTier, setPaymentModalTier] = useState<PoojaMode>('30min');
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isAnjaniputraOpen, setIsAnjaniputraOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<TabType>(() => window.location.hash === '#guru-stuti' ? 'guru-stuti' : /^#(sandhyavandane|confirmation_token|recovery_token|invite_token|email_change_token|access_token)/.test(window.location.hash) ? 'sandhyavandane' : 'darshan');
  const [landingViewMode, setLandingViewMode] = useState<'video' | 'photo'>('video');
  const [isMudraModalOpen, setIsMudraModalOpen] = useState(false);
  const [selectedMudraId, setSelectedMudraId] = useState<string | undefined>(undefined);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isDarshanModalOpen, setIsDarshanModalOpen] = useState(false);
  
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#sandhyavandane') setActiveTab('sandhyavandane');
      if (window.location.hash === '#guru-stuti') setActiveTab('guru-stuti');
      if (!window.location.hash) setActiveTab((current) => ['sandhyavandane', 'guru-stuti'].includes(current) ? 'darshan' : current);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const path = window.location.pathname + window.location.search;
    const fragment = activeTab === 'sandhyavandane' ? '#sandhyavandane' : activeTab === 'guru-stuti' ? '#guru-stuti' : '';
    if (fragment && !/^#(confirmation_token|recovery_token|invite_token|email_change_token|access_token)/.test(window.location.hash)) {
      window.history.replaceState(null, '', `${path}${fragment}`);
    } else if (!fragment && ['#sandhyavandane', '#guru-stuti'].includes(window.location.hash)) {
      window.history.replaceState(null, '', path);
    }
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('pooja_app_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('pooja_app_mode', mode);
  }, [mode]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'kn' ? 'en' : 'kn'));
  };

  const handleSelectMode = (newMode: PoojaMode) => {
    if (newMode === '10min' || PaymentService.isTierUnlocked(newMode)) {
      setMode(newMode);
      setActiveTab('pooja');
    } else {
      setPaymentModalTier(newMode);
      setIsPaymentModalOpen(true);
    }
  };

  const handlePaymentSuccess = (tier: PoojaMode) => {
    setUnlockedTiers(PaymentService.getUnlockedTiers());
    setMode(tier);
    setActiveTab('pooja');
  };

  const handleOpenMudraModal = (mudraId?: string) => {
    setSelectedMudraId(mudraId);
    setIsMudraModalOpen(true);
  };

  const handleOpenMainPage = () => {
    setActiveTab('darshan');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#1a0606] text-[#fef3c7] flex flex-col font-sans selection:bg-[#ff9933] selection:text-[#1a0606] pb-20 lg:pb-0">
      {/* Darshan band: Garuda, Gurus, Moola Rama, Narasimha and Hanuman above the sacred masthead */}
      <SacredDarshanBand lang={lang} />

      {/* Top Application Bar */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        mode={mode}
        onSelectMode={handleSelectMode}
        onOpenDarshan={handleOpenMainPage}
        isBgMusicPlaying={isBgMusicPlaying}
        onToggleBgMusic={() => setIsBgMusicPlaying(!isBgMusicPlaying)}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        unlockedTiers={unlockedTiers}
        onOpenAnjaniputra={() => setIsAnjaniputraOpen(true)}
      />

      <div className="flex-1 flex w-full">
        {/* Desktop Sidebar Navigation */}
        <Sidebar
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          lang={lang}
          onOpenAnjaniputra={() => setIsAnjaniputraOpen(true)}
        />

        {/* Main Screen Content View */}
        <main className="flex-1 w-full overflow-y-auto">
          {/* Landing Page (Sequential Darshan, Duration Options & Embedded Music Video) */}
          <div className={activeTab === 'darshan' ? 'max-w-6xl mx-auto px-2 sm:px-4 py-3 space-y-5' : 'hidden'}>
            {/* Welcome Message: Reassuring the devotee that they have arrived at the right sacred place for daily pooja */}
            <WelcomeBanner
              lang={lang}
              onStartPooja={() => handleSelectMode(mode)}
            />

            <DevotionalHomeWidgets lang={lang} onSelect={setActiveTab} />

            {/* 1. Sequential Deity Video Darshan (6 YouTube Shorts in re-occurring sequence with audio & auto-pause on tab change) */}
            {landingViewMode === 'video' ? (
              <SequentialDarshanVideoPlayer
                lang={lang}
                onStartPooja={() => handleSelectMode(mode)}
                onTogglePhotos={() => setLandingViewMode('photo')}
                showPhotoOption={true}
                isActive={activeTab === 'darshan'}
              />
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-sans font-bold text-[#ff9933]">
                    {lang === 'kn' ? 'ಗರ್ಭಗುಡಿ ಚಿತ್ರಾವಳಿ ದರ್ಶನ' : 'Sanctum Photo Darshan'}
                  </span>
                  <button
                    onClick={() => setLandingViewMode('video')}
                    className="text-xs font-sans font-semibold text-[#ffd700] hover:text-[#ff9933] bg-[#250a0a] px-3 py-1 rounded-full border border-[#ffd700]/30 transition-all"
                  >
                    {lang === 'kn' ? '◀ ವೀಡಿಯೋ ದರ್ಶನಕ್ಕೆ ಮರಳಿ' : '◀ Back to Video Darshan'}
                  </button>
                </div>
                <CinematicDarshanHero lang={lang} isStandalonePage={true} />
              </div>
            )}

            {/* 2. Choose Duration: Clicking 10m, 30m, or Complete automatically opens Pooja steps */}
            <PoojaLauncherCard
              lang={lang}
              onSelectMode={handleSelectMode}
              unlockedTiers={unlockedTiers}
            />

            {/* 3. Rigveda Upakarma & Yagnopaveeta Dharana free PDFs */}
            <UpakarmaDownloadsSection lang={lang} />
          </div>

          {activeTab === 'pooja' && (
            <GuidedPoojaView
              lang={lang}
              mode={mode}
              onOpenMudra={handleOpenMudraModal}
              onOpenEkadashi={() => setActiveTab('ekadashi')}
              onOpenSamagri={() => setActiveTab('samagri')}
              onOpenPrint={() => setIsPrintModalOpen(true)}
              isUnlocked={PaymentService.isTierUnlocked(mode)}
              onRequestUnlock={() => {
                setPaymentModalTier(mode);
                setIsPaymentModalOpen(true);
              }}
              onOpenSupport={() => setIsSupportModalOpen(true)}
            />
          )}

          {activeTab === 'panchanga' && <Panchanga lang={lang} />}

          {activeTab === 'guru-stuti' && <MadhwaGuruStuti lang={lang} onBack={() => setActiveTab('darshan')} />}

          {activeTab === 'sandhyavandane' && <SandhyavandaneSection lang={lang} onBack={() => {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
            setActiveTab('darshan');
          }} />}

          {activeTab === 'mudras' && (
            <div className="py-2">
              <MudraGuideInline lang={lang} onOpenDetail={handleOpenMudraModal} />
            </div>
          )}

          {activeTab === 'samagri' && <MaterialsChecker lang={lang} />}

          {activeTab === 'ekadashi' && (
            <EkadashiWorkflow
              lang={lang}
              onSwitchToPooja={() => setActiveTab('pooja')}
            />
          )}

          {activeTab === 'suktas' && <SuktasReader lang={lang} />}

          {activeTab === 'qna' && <QnABank lang={lang} />}
        </main>
      </div>

      {/* Visual Mudra Guide Modal */}
      <MudraGuideModal
        isOpen={isMudraModalOpen}
        onClose={() => setIsMudraModalOpen(false)}
        lang={lang}
        initialMudraId={selectedMudraId}
      />

      {/* 1-Page Daily Cheat Sheet Print Modal */}
      <DailySummaryPrint
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        lang={lang}
        mode={mode}
      />

      {/* Online Dakshina & Payment Modal for 30-min (₹150+) & Complete Tantrasara (₹350+) */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        tier={paymentModalTier}
        lang={lang}
        onClose={() => {
          setIsPaymentModalOpen(false);
          setActiveTab('darshan');
        }}
        onSuccess={handlePaymentSuccess}
      />

      {/* Embedded Sri Madhwarayara Devataarchane Background Music Player with toggle */}
      <EmbeddedBackgroundMusicPlayer
        lang={lang}
        isPlaying={isBgMusicPlaying}
        onTogglePlay={() => setIsBgMusicPlaying(!isBgMusicPlaying)}
      />

      {/* Persistent Bottom Support Icon (Accessible on all screens and inside Deva Pooja) */}
      <button
        id="btn-floating-support-action"
        onClick={() => setIsSupportModalOpen(true)}
        className="fixed bottom-16 lg:bottom-6 right-3 sm:right-6 z-40 bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa4d] hover:to-[#ffe066] text-[#1a0606] px-3 sm:px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(255,153,51,0.55)] border-2 border-[#ffd700] flex items-center gap-1.5 sm:gap-2 font-sans font-bold text-xs active:scale-95 transition-all group"
        title={lang === 'kn' ? 'ಸಹಾಯ & ಅಧಿಕೃತ ಸಂಪರ್ಕ' : 'Help & Scholarly Support'}
      >
        <span className="text-base group-hover:scale-110 transition-transform leading-none">📞</span>
        <span className="tracking-wide">
          {lang === 'kn' ? 'ಸಹಾಯ' : 'Support'}
        </span>
      </button>

      {/* Official Support & Scholarly Guidance Modal */}
      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
        lang={lang}
      />

      {/* Interactive Jumping Hanuman Chatbot - Vayu putra */}
      <AnjaniputraChatbot
        isOpen={isAnjaniputraOpen}
        onClose={() => setIsAnjaniputraOpen(false)}
        lang={lang}
        onNavigateToTab={(tab) => setActiveTab(tab as TabType)}
        onSelectMode={handleSelectMode}
      />
      <AnjaniputraLauncher lang={lang} visible={!isAnjaniputraOpen} onOpen={() => setIsAnjaniputraOpen(true)} />

      {/* Mobile / Tablet Left-Aligned Navigation Bar */}
      <div className="lg:hidden">
        <BottomNav
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          lang={lang}
          onOpenSupport={() => setIsSupportModalOpen(true)}
          onOpenAnjaniputra={() => setIsAnjaniputraOpen(true)}
        />
      </div>
    </div>
  );
}

/**
 * Inline Mudras Explorer for the Mudras Tab
 */
function MudraGuideInline({
  lang,
  onOpenDetail,
}: {
  lang: Language;
  onOpenDetail: (id: string) => void;
}) {
  const [inlineTab, setInlineTab] = useState<'tarkshya' | 'pancha' | 'all'>('tarkshya');

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-5 text-[#fef3c7]">
      {/* Header Card */}
      <div className="bg-[#250a0a]/80 border border-[#ffd700]/20 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-2 backdrop-blur-md">
        <h2 className="font-serif font-bold text-lg sm:text-2xl text-[#ff9933]">
          {lang === 'kn' ? 'ತಂತ್ರಸಾರೋಕ್ತ ಮುದ್ರಾ ಸಂಪೂರ್ಣ ದರ್ಶಿನಿ' : 'Tantrasarokta Sacred Mudras Explorer'}
        </h2>
        <p className="text-xs sm:text-sm text-[#ffd700]/70 font-sans">
          {lang === 'kn'
            ? 'ಕೈ ಬೆರಳುಗಳನ್ನು ಜೋಡಿಸುವ ನಿಖರ ಶೈಲಿ, ಆವಾಹನ ಹಾಗೂ ಆಯುಧ ಮುದ್ರೆಗಳ ರಚನೆ'
            : 'Visual finger positioning, invocation gestures, and shastric spiritual significance'}
        </p>
        <a href="/images/mudras/tarkshyadi-original.jpg" target="_blank" rel="noopener noreferrer" className="inline-block pt-2 text-xs text-[#ffd700] underline underline-offset-4">{lang === 'kn' ? 'ಒದಗಿಸಿದ ಮೂಲ ಪಂಚಮುದ್ರಾ ಚಿತ್ರ ನೋಡಿ' : 'View the supplied original five-mudra reference'}</a>
        <p className="text-xs leading-6 text-[#fef3c7]/60">{lang === 'kn' ? 'ತಾರ್ಕ್ಷ್ಯ, ಧೇನು, ಶಂಖ, ಗದಾ ಮತ್ತು ಚಕ್ರ ಚಿತ್ರಗಳನ್ನು ಒದಗಿಸಿದ ಚಿತ್ರದಿಂದ ಕತ್ತರಿಸಲಾಗಿದೆ. ಆವಾಹನಾದಿ ಏಳು ಮುದ್ರೆಗಳು, ಮೇರು ಮತ್ತು ಚಂದ್ರ ಮುದ್ರೆಗಳ ಚಿತ್ರಗಳು ಲಿಖಿತ ವಿವರಣೆಯ ಆಧಾರದ ಮೇಲೆ ರಚಿಸಿದ ಚಿತ್ರಣಗಳು — ಗುರುಗಳಿಂದ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.' : 'Tarkshya, Dhenu, Shankha, Gada and Chakra are crops of the supplied image. The seven Avahanadi mudras, Meru and Chandra are illustrations drawn from their written descriptions — confirm the hand positions with your guru.'}</p>
      </div>

      {/* 3 Mudra Exploration Category Tabs */}
      <div className="flex items-center gap-1.5 bg-[#1e0707] p-1.5 rounded-2xl border border-[#ffd700]/20 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setInlineTab('tarkshya')}
          className={`px-3.5 py-2 rounded-xl text-xs font-sans font-bold transition-all flex items-center gap-1.5 shrink-0 ${
            inlineTab === 'tarkshya'
              ? 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] shadow-md scale-[1.02]'
              : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
          }`}
        >
          <span>{lang === 'kn' ? 'ತಾಕ್ಷ್ರ್ಯಾದಿ ೫ ಮುದ್ರೆಗಳು (Image 1)' : '5 Tarkshyadi Mudras'}</span>
        </button>

        <button
          onClick={() => setInlineTab('pancha')}
          className={`px-3.5 py-2 rounded-xl text-xs font-sans font-bold transition-all flex items-center gap-1.5 shrink-0 ${
            inlineTab === 'pancha'
              ? 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] shadow-md scale-[1.02]'
              : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
          }`}
        >
          <span>{lang === 'kn' ? 'ಆವಾಹನದ ೫ ಮುದ್ರೆಗಳು' : '5 Invocation Mudras'}</span>
        </button>

        <button
          onClick={() => setInlineTab('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-sans font-bold transition-all flex items-center gap-1.5 shrink-0 ${
            inlineTab === 'all'
              ? 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] shadow-md scale-[1.02]'
              : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
          }`}
        >
          <span>{lang === 'kn' ? 'ಸಮಸ್ತ ೧೪ ಮುದ್ರೆಗಳು' : 'All 14 Mudras'}</span>
        </button>
      </div>

      {inlineTab === 'tarkshya' && (
        <TarkshyadiPanchaMudraWidget
          lang={lang}
          onOpenDetail={(id) => onOpenDetail(id)}
        />
      )}

      {inlineTab === 'pancha' && (
        <PanchaMudraMobileStepper
          lang={lang}
          onOpenAllMudras={() => setInlineTab('all')}
          onSelectMudra={(id) => onOpenDetail(id)}
        />
      )}

      {inlineTab === 'all' && (
        <div id="all-14-mudras" className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#ffd700]">
            {lang === 'kn' ? 'ಸಮಸ್ತ ೧೪ ಪವಿತ್ರ ಪೂಜಾ ಮುದ್ರೆಗಳು' : 'All 14 Sacred Pooja Mudras'}
          </h3>
          <span className="text-[11px] text-[#ffd700]/70 font-sans">
            {lang === 'kn' ? 'ವಿವರಕ್ಕೆ ಕಾರ್ಡ್ ಸ್ಪರ್ಶಿಸಿ' : 'Tap card for full guide'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {[
            { id: 'avahani', nameKn: 'ಆವಾಹಿನೀ ಮುದ್ರಾ', nameEn: 'Avahani Mudra', tag: '೧. ಆವಾಹನೆ', descKn: 'ಅಂಜಲಿ ಬದ್ಧ ಅಂಗೈ, ಭಗವಂತನ ಆಹ್ವಾನ' },
            { id: 'sthapani', nameKn: 'ಸ್ಥಾಪನೀ ಮುದ್ರಾ', nameEn: 'Sthapani Mudra', tag: '೨. ಸ್ಥಾಪನೆ', descKn: 'ಅಧೋಮುಖ ಅಂಗೈ, ಪೀಠ ಸ್ಥಾಪನೆ' },
            { id: 'sannidhayini', nameKn: 'ಸನ್ನಿಧಾಯಿನೀ ಮುದ್ರಾ', nameEn: 'Sannidhayini Mudra', tag: '೩. ಸಾನ್ನಿಧ್ಯ', descKn: 'ಮುಷ್ಟಿ ಬದ್ಧ, ನೇರ ಹೆಬ್ಬೆರಳು' },
            { id: 'sannirodhini', nameKn: 'ಸನ್ನಿರೋಧಿನೀ ಮುದ್ರಾ', nameEn: 'Sannirodhini Mudra', tag: '೪. ಸನ್ನಿರೋಧ', descKn: 'ಒಳಮಡಚಿದ ಹೆಬ್ಬೆರಳು, ಗಂಟು ಬದ್ಧ' },
            { id: 'sammukhi', nameKn: 'ಸಮ್ಮುಖೀ ಮುದ್ರಾ', nameEn: 'Sammukhi Mudra', tag: '೫. ಸಮ್ಮುಖ', descKn: 'ನೇರ ಮುಖಾಮುಖಿ ಅಂಗೈ' },
            { id: 'avagunthana', nameKn: 'ಅವಗುಂಠನೀ ಮುದ್ರಾ', nameEn: 'Avagunthana Mudra', tag: '೬. ಅವಗುಂಠನ', descKn: 'ತರ್ಜನಿ ಮಂಡಲ ಭ್ರಮಣ' },
            { id: 'prasada', nameKn: 'ಪ್ರಸಾದ ಮುದ್ರಾ (ಸುಪ್ರಸನ್ನ)', nameEn: 'Prasada Mudra', tag: '೭. ಪ್ರಸಾದ', descKn: 'ಪ್ರಸನ್ನ ಹಸ್ತ ಸಮರ್ಪಣೆ' },
            { id: 'dhenu', nameKn: 'ಧೇನು ಮುದ್ರಾ (ಅಮೃತೀಕರಣ)', nameEn: 'Dhenu Mudra', tag: 'ಅಮೃತೀಕರಣ', descKn: 'ಕಾಮಧೇನು ಕ್ಷೀರ ಧಾರಾ' },
            { id: 'shankha', nameKn: 'ಶಂಖ ಮುದ್ರಾ (ಪವಿತ್ರೀಕರಣ)', nameEn: 'Shankha Mudra', tag: 'ಪವಿತ್ರೀಕರಣ', descKn: 'ಪಾಂಚಜನ್ಯ ಶಂಖ ರಚನೆ' },
            { id: 'chakra', nameKn: 'ಚಕ್ರ ಮುದ್ರಾ (ಸಂರಕ್ಷಣೆ)', nameEn: 'Chakra Mudra', tag: 'ಚಕ್ರ ಸಂರಕ್ಷಣೆ', descKn: 'ಸುದರ್ಶನ ಚಕ್ರ ರಕ್ಷಣೆ' },
            { id: 'gada', nameKn: 'ಗದಾ ಮುದ್ರಾ (ದಿಗ್ಬಂಧನ)', nameEn: 'Gada Mudra', tag: 'ದಿಗ್ಬಂಧನ', descKn: 'ಕೌಮೋದಕೀ ಗದಾ ಮುಷ್ಟಿ' },
            { id: 'tarkshya', nameKn: 'ತಾರ್ಕ್ಷ್ಯ ಮುದ್ರಾ (ನಿರ್ವಿಷೀಕರಣ)', nameEn: 'Tarkshya / Garuda Mudra', tag: 'ನಿರ್ವಿಷೀಕರಣ', descKn: 'ಗರುಡ ಪಕ್ಷ ರೆಕ್ಕೆಗಳ ಬಂಧ' },
            { id: 'meru', nameKn: 'ಮೇರು ಮುದ್ರಾ (ವಿಪುಲತೆ)', nameEn: 'Meru Mudra', tag: 'ವಿಪುಲತೆ', descKn: 'ಮೇರು ಶಿಖರ ಹೆಬ್ಬೆರಳು' },
            { id: 'chandra', nameKn: 'ಚಂದ್ರ ಮುದ್ರಾ (ಶೀತಲತೆ)', nameEn: 'Chandra Mudra', tag: 'ಶೀತಲತೆ', descKn: 'ಚಂದ್ರ ಕಲಾ ಶೀತಲ ಭಾವ' },
          ].map((m) => (
            <div
              key={m.id}
              onClick={() => onOpenDetail(m.id)}
              className="cursor-pointer bg-[#250a0a]/90 hover:bg-[#3d1111] border border-[#ffd700]/20 hover:border-[#ff9933]/60 rounded-2xl p-3.5 space-y-2.5 transition-all transform hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ff9933]/20 text-[#ff9933] border border-[#ff9933]/40 px-2 py-0.5 rounded-full font-sans">
                  {m.tag}
                </span>
                <span className="text-[11px] text-[#ff9933] font-semibold font-sans">
                  {lang === 'kn' ? 'ವಿವರ ನೋಡಿ →' : 'View Details →'}
                </span>
              </div>

              {/* High-Clarity Hand & Finger Vector Illustration */}
              <div className="w-full h-32 rounded-xl bg-gradient-to-b from-[#1e0707] to-[#120303] border border-[#ffd700]/15 flex items-center justify-center p-1 shadow-inner">
                <MudraHandDiagram id={m.id} className="w-28 h-28" showLabels={false} />
              </div>

              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#ffeedd]">
                  {lang === 'kn' ? m.nameKn : m.nameEn}
                </h4>
                <p className="text-[11px] text-[#ffd700]/75 font-sans mt-0.5">
                  {m.descKn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
}
