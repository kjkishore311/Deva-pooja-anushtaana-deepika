import React from 'react';
import { BookOpen, GraduationCap, HeartHandshake, Info, MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types';

type Translate = (english: string, kannada: string) => string;
const useTranslate = (lang: Language): Translate => (english, kannada) => (lang === 'kn' ? kannada : english);

const SUPPORT_PHONE = '+91 7259458890';
const SUPPORT_WHATSAPP = 'https://wa.me/917259458890?text=Namaskara%20Kishore%20Sir%2C%20I%20have%20a%20suggestion%20for%20the%20Deva%20Puja%20Anushtana%20website.';

// What the website is for: placed right below the home widgets.
export const PurposeSection: React.FC<{ lang: Language; onOpenAbout: () => void }> = ({ lang, onOpenAbout }) => {
  const translate = useTranslate(lang);
  const points = [
    {
      icon: GraduationCap,
      title: translate('For beginners', 'ಆರಂಭಿಕರಿಗಾಗಿ'),
      text: translate(
        'For anyone who does not yet know how to perform Deva Puja or Sandhyavandana properly every day.',
        'ದೈನಂದಿನ ದೇವಪೂಜೆ ಅಥವಾ ಸಂಧ್ಯಾವಂದನೆಯನ್ನು ಸರಿಯಾಗಿ ಮಾಡುವ ವಿಧಾನ ಇನ್ನೂ ತಿಳಿಯದ ಎಲ್ಲರಿಗಾಗಿ.'
      ),
    },
    {
      icon: BookOpen,
      title: translate('Learn step by step', 'ಹಂತ ಹಂತವಾಗಿ ಕಲಿಯಿರಿ'),
      text: translate(
        'Guided Deva Puja steps, Sandhyavandana, mudras, Guru Stuti and a free Mantra Stotra collection in one place.',
        'ದೇವಪೂಜೆಯ ಹಂತಗಳು, ಸಂಧ್ಯಾವಂದನೆ, ಮುದ್ರೆಗಳು, ಗುರು ಸ್ತುತಿ ಹಾಗೂ ಉಚಿತ ಮಂತ್ರ ಸ್ತೋತ್ರ ಸಂಗ್ರಹ ಒಂದೇ ಕಡೆ.'
      ),
    },
    {
      icon: HeartHandshake,
      title: translate('Education, not business', 'ವ್ಯಾಪಾರವಲ್ಲ, ಶಿಕ್ಷಣ'),
      text: translate(
        'Made to spread knowledge of our daily anushtana. The seva dakshina for the longer pooja versions only supports this work.',
        'ನಮ್ಮ ನಿತ್ಯ ಅನುಷ್ಠಾನದ ಜ್ಞಾನ ಪ್ರಸಾರಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ದೀರ್ಘ ಪೂಜಾ ಆವೃತ್ತಿಗಳ ಸೇವಾ ದಕ್ಷಿಣೆ ಈ ಸೇವೆಗೆ ಮಾತ್ರ ನೆರವಾಗುತ್ತದೆ.'
      ),
    },
  ];

  return (
    <section aria-labelledby="purpose-heading" className="rounded-2xl border border-[#ffd700]/30 bg-[#250a0a] p-5 sm:p-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffbb66]">{translate('Why this website', 'ಈ ಜಾಲತಾಣ ಏಕೆ')}</p>
      <h2 id="purpose-heading" className="font-serif text-2xl text-[#ffd700]">{translate('Our purpose', 'ನಮ್ಮ ಉದ್ದೇಶ')}</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {points.map(({ icon: Icon, title, text }) => (
          <li key={title} className="rounded-xl border border-[#ffd700]/15 bg-[#140404]/70 p-4">
            <Icon className="h-6 w-6 text-[#ff9933]" aria-hidden="true" />
            <h3 className="mt-2 font-serif font-bold text-[#ffeedd]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#fef3c7]/75">{text}</p>
          </li>
        ))}
      </ul>
      <a href="#about" onClick={onOpenAbout} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#ffd700] underline underline-offset-4">
        <Info size={16} /> {translate('Read more about us', 'ನಮ್ಮ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ಓದಿ')}
      </a>
    </section>
  );
};

const SwamijiMessage: React.FC<{ lang: Language }> = ({ lang }) => (
  <figure className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
    <img
      src="/.netlify/images?url=/images/gurus/sri-satyatma-tirtha-peetha.jpg&w=240&q=80"
      alt={lang === 'kn' ? 'ಶ್ರೀ ಸತ್ಯಾತ್ಮ ತೀರ್ಥ ಶ್ರೀಪಾದಂಗಳವರು' : 'Sri Satyatma Tirtha Sripadangalavaru'}
      loading="lazy"
      className="aspect-[3/4] w-28 shrink-0 rounded-t-full border-2 border-[#ffd700]/60 object-cover"
    />
    <div>
      <figcaption className="font-serif font-bold text-[#ffd700]">
        {lang === 'kn' ? '॥ ಶ್ರೀ ಸತ್ಯಾತ್ಮ ತೀರ್ಥ ಶ್ರೀಪಾದಂಗಳವರ ದೇವಪೂಜಾ ಸಂದೇಶ ॥' : "|| Sri Satyatma Tirtha Sripadangalavaru's message on Deva Puja ||"}
      </figcaption>
      <blockquote className="mt-2 text-sm leading-7 text-[#fef3c7]/85">
        {lang === 'kn'
          ? 'ಶ್ರೀಮನ್ ಮಧ್ವಾಚಾರ್ಯರ ತಂತ್ರಸಾರ ಸಂಗ್ರಹೋಕ್ತ ದೇವಪೂಜೆಯು ಕೇವಲ ದೈನಂದಿನ ಕರ್ಮವಲ್ಲ; ಅದು ಸಕಲ ಪಾಪಗಳನ್ನು ಕಳೆದು ಬಿಂಬಮೂರ್ತಿ ಶ್ರೀಹರಿಯ ಅನುಗ್ರಹವನ್ನು ಪಡೆಯುವ ಪರಮೋಚ್ಚ ಸಾಧನ. ಪ್ರತಿಯೊಬ್ಬ ಸದ್ಭಕ್ತನೂ ಶ್ರದ್ಧೆಯಿಂದ, ಪುರುಷ-ಶ್ರೀ ಸೂಕ್ತ ಮಂತ್ರ, ಶಂಖೋದಕ ಹಾಗೂ ತುಳಸೀ ದಳಗಳಿಂದ ಶ್ರೀ ಸಾಲಿಗ್ರಾಮ-ಮೂರ್ತಿಗಳನ್ನು ಅರ್ಚಿಸಿದಾಗ ಆ ಗೃಹದಲ್ಲಿ ಶಾಂತಿ, ಆಯುಷ್ಯ ಮತ್ತು ಸಕಲ ಮಂಗಳಗಳು ನೆಲೆಸುತ್ತವೆ.'
          : "Deva Pooja as codified in Sri Madhvacharya's Tantrasara Sangraha is the supreme pathway to worship Lord Sri Hari. Worshiping the consecrated Saligramas daily with Vedic Suktas, sanctified Shankhodaka, and sacred Tulasi blesses the home with peace, health, and supreme grace."}
      </blockquote>
    </div>
  </figure>
);

const SuggestionsContact: React.FC<{ lang: Language; onOpenSupport: () => void }> = ({ lang, onOpenSupport }) => {
  const translate = useTranslate(lang);
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-[#ffd700]">{translate('Suggestions & improvements', 'ಸಲಹೆಗಳು & ಸುಧಾರಣೆಗಳು')}</h3>
      <p className="text-sm leading-6 text-[#fef3c7]/75">
        {translate(
          'Any suggestion, correction or improvement is welcome. Please contact Kishore through the Support section.',
          'ಯಾವುದೇ ಸಲಹೆ, ತಿದ್ದುಪಡಿ ಅಥವಾ ಸುಧಾರಣೆಗೆ ಸ್ವಾಗತ. ದಯವಿಟ್ಟು ಸಹಾಯ ವಿಭಾಗದ ಮೂಲಕ ಕಿಶೋರ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={onOpenSupport} className="inline-flex items-center gap-1.5 rounded-xl bg-[#ffd700] px-3 py-2 text-xs font-bold text-[#250a0a]">
          <Phone size={14} /> {translate('Open Support', 'ಸಹಾಯ ವಿಭಾಗ')}
        </button>
        <a href={SUPPORT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 px-3 py-2 text-xs font-bold text-emerald-300">
          <MessageCircle size={14} /> WhatsApp · {SUPPORT_PHONE}
        </a>
      </div>
    </div>
  );
};

// Shown at the bottom of every page.
export const SiteFooter: React.FC<{ lang: Language; onOpenAbout: () => void; onOpenSupport: () => void }> = ({ lang, onOpenAbout, onOpenSupport }) => {
  const translate = useTranslate(lang);
  return (
    <footer className="border-t border-[#ffd700]/20 bg-[#140404] px-4 py-8 pb-24 sm:px-8 lg:pb-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_320px]">
        <SwamijiMessage lang={lang} />
        <SuggestionsContact lang={lang} onOpenSupport={onOpenSupport} />
      </div>
      <nav aria-label={translate('Footer', 'ಅಡಿಟಿಪ್ಪಣಿ')} className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#ffd700]/10 pt-5 text-sm">
        <a href="#about" onClick={onOpenAbout} className="font-bold text-[#ffd700] underline underline-offset-4">{translate('Purpose', 'ಉದ್ದೇಶ')}</a>
        <a href="#about" onClick={onOpenAbout} className="font-bold text-[#ffd700] underline underline-offset-4">{translate('About Us', 'ನಮ್ಮ ಬಗ್ಗೆ')}</a>
        <button type="button" onClick={onOpenSupport} className="font-bold text-[#ffd700] underline underline-offset-4">{translate('Support & Suggestions', 'ಸಹಾಯ & ಸಲಹೆಗಳು')}</button>
      </nav>
      <p className="mt-4 text-center font-serif text-xs text-[#ffd700]/60">॥ ಶ್ರೀ ಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು ॥</p>
    </footer>
  );
};

export const AboutSection: React.FC<{ lang: Language; onBack: () => void; onOpenSupport: () => void }> = ({ lang, onBack, onOpenSupport }) => {
  const translate = useTranslate(lang);
  return (
    <section aria-labelledby="about-heading" className="mx-auto max-w-4xl space-y-8 px-4 py-6 sm:px-8 sm:py-10">
      <button onClick={onBack} className="rounded-xl border border-[#ffd700]/30 px-4 py-2.5 text-sm">{translate('← Back to home', '← ಮುಖಪುಟಕ್ಕೆ ಮರಳಿ')}</button>
      <header className="border-b border-[#ffd700]/20 pb-6">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#ffbb66]">{translate('Purpose · About Us', 'ಉದ್ದೇಶ · ನಮ್ಮ ಬಗ್ಗೆ')}</p>
        <h1 id="about-heading" className="font-serif text-3xl text-[#ffd700] sm:text-4xl">{translate('About Deva Puja Anushtana', 'ದೇವಪೂಜಾ ಅನುಷ್ಠಾನದ ಬಗ್ಗೆ')}</h1>
      </header>

      <div className="space-y-4 text-sm leading-7 text-[#fef3c7]/85">
        <h2 className="font-serif text-xl text-[#ffd700]">{translate('Our purpose', 'ನಮ್ಮ ಉದ್ದೇಶ')}</h2>
        <p>
          {translate(
            'Deva Puja Anushtana is built for beginners and for everyone who does not yet know how to perform Deva Puja or Sandhyavandana properly on a daily basis. It follows the Srimad Uttaradi Matha sampradaya and the Tantrasara Sangraha of Sri Madhvacharya.',
            'ದೇವಪೂಜಾ ಅನುಷ್ಠಾನವನ್ನು ಆರಂಭಿಕರಿಗಾಗಿ ಹಾಗೂ ದೈನಂದಿನ ದೇವಪೂಜೆ ಅಥವಾ ಸಂಧ್ಯಾವಂದನೆಯನ್ನು ಸರಿಯಾಗಿ ಮಾಡುವ ವಿಧಾನ ಇನ್ನೂ ತಿಳಿಯದ ಎಲ್ಲರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ಇದು ಶ್ರೀಮದ್ ಉತ್ತರಾದಿ ಮಠ ಸಂಪ್ರದಾಯ ಹಾಗೂ ಶ್ರೀ ಮಧ್ವಾಚಾರ್ಯರ ತಂತ್ರಸಾರ ಸಂಗ್ರಹವನ್ನು ಅನುಸರಿಸುತ್ತದೆ.'
          )}
        </p>
        <p>
          {translate(
            'It is an educational effort, not a business. The aim is to help each household learn the daily anushtana step by step: the guided Deva Puja, Trikala Sandhyavandana and Yajnopaveeta Dharana, mudras, Madhwa Guru Stuti and the Mantra Stotra Sangraha. Many guides and PDFs are free; the seva dakshina for the 30-minute and complete pooja versions supports this work.',
            'ಇದು ಒಂದು ಶೈಕ್ಷಣಿಕ ಪ್ರಯತ್ನ, ವ್ಯಾಪಾರವಲ್ಲ. ಪ್ರತಿಯೊಂದು ಮನೆಯೂ ನಿತ್ಯ ಅನುಷ್ಠಾನವನ್ನು ಹಂತ ಹಂತವಾಗಿ ಕಲಿಯಲು ನೆರವಾಗುವುದೇ ಇದರ ಗುರಿ: ದೇವಪೂಜೆ, ತ್ರಿಕಾಲ ಸಂಧ್ಯಾವಂದನೆ ಹಾಗೂ ಯಜ್ಞೋಪವೀತ ಧಾರಣೆ, ಮುದ್ರೆಗಳು, ಮಧ್ವ ಗುರು ಸ್ತುತಿ ಮತ್ತು ಮಂತ್ರ ಸ್ತೋತ್ರ ಸಂಗ್ರಹ. ಅನೇಕ ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು PDFಗಳು ಉಚಿತ; ೩೦ ನಿಮಿಷ ಹಾಗೂ ಸಂಪೂರ್ಣ ಪೂಜಾ ಆವೃತ್ತಿಗಳ ಸೇವಾ ದಕ್ಷಿಣೆ ಈ ಸೇವೆಗೆ ನೆರವಾಗುತ್ತದೆ.'
          )}
        </p>
      </div>

      <div className="rounded-2xl border border-[#ffd700]/25 bg-[#250a0a] p-5 sm:p-7">
        <SwamijiMessage lang={lang} />
      </div>

      <div className="rounded-2xl border border-[#ffd700]/25 bg-[#250a0a] p-5 sm:p-7">
        <SuggestionsContact lang={lang} onOpenSupport={onOpenSupport} />
      </div>
    </section>
  );
};
