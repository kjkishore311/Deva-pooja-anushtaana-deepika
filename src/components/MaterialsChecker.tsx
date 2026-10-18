import React, { useState } from 'react';
import { POOJA_PREPARATION_GROUPS, PreparationMode, SAMAGRI_DATA } from '../data/inventoryData';
import { Language, SamagriItem } from '../types';
import { AccessoryGraphic } from './AccessoryGraphic';
import { additionalSetupPhotos, setupPhotosByItem } from '../data/setupPhotos';
import { SetupPhotoLink } from './SetupPhotoLink';
import {
  CheckSquare,
  Square,
  Sparkles,
  Share2,
  Copy,
  Layers,
  HelpCircle,
  ShoppingBag,
  CheckCircle2,
  Clock3,
  Crown,
} from 'lucide-react';

interface MaterialsCheckerProps {
  lang: Language;
}

export const MaterialsChecker: React.FC<MaterialsCheckerProps> = ({ lang }) => {
  const [selectedMode, setSelectedMode] = useState<PreparationMode>('10min');
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    saligrama_idols: true,
    ghanta: true,
    deepa_samagri: true,
    tulasi_dala: true,
    gandha_akshata: true,
    naivedya_bhoga: true,
    madi_vastra: true,
  });
  const [copiedNotification, setCopiedNotification] = useState(false);

  const selectedGroup = POOJA_PREPARATION_GROUPS.find((group) => group.mode === selectedMode)!;
  const filteredItems = selectedGroup.itemIds
    .map((itemId) => SAMAGRI_DATA.find((item) => item.id === itemId))
    .filter((item): item is SamagriItem => Boolean(item));

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const missingItems = filteredItems.filter((item) => !checkedIds[item.id]);

  const handleCopyMissing = () => {
    if (missingItems.length === 0) return;

    const listText = missingItems
      .map(
        (it, idx) =>
          `${idx + 1}. ${lang === 'kn' ? it.nameKn : it.nameEn} - (${
            lang === 'kn' ? it.substituteKn : it.substituteEn
          })`
      )
      .join('\n');

    const fullMessage =
      lang === 'kn'
        ? `📋 *ದೇವಪೂಜಾ ಸಾಮಗ್ರಿ ಪಟ್ಟಿ (ಖರೀದಿಸಬೇಕಾದ / ಹೊಂದಿಸಬೇಕಾದ ವಸ್ತುಗಳು)*\n\n${listText}\n\n_ತಂತ್ರಸಾರೋಕ್ತ ಪೂಜಾ ಆ್ಯಪ್_`
        : `📋 *Pooja Materials Checklist (Items Needed)*\n\n${listText}\n\n_Deva Pooja Anushtana Companion_`;

    navigator.clipboard.writeText(fullMessage);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  const handleShareWhatsApp = () => {
    const listText = missingItems
      .map(
        (it, idx) =>
          `${idx + 1}. ${lang === 'kn' ? it.nameKn : it.nameEn}`
      )
      .join('\n');

    const msg = encodeURIComponent(
      lang === 'kn'
        ? `📋 *ದೇವಪೂಜಾ ಸಾಮಗ್ರಿ ಪಟ್ಟಿ (ಖರೀದಿಸಬೇಕಾದ ವಸ್ತುಗಳು)*:\n\n${listText}\n\nದಯವಿಟ್ಟು ಪೂಜೆಗೆ ತಂದುಕೊಡಿ.`
        : `📋 *Pooja Samagri Shopping List*:\n\n${listText}\n\nPlease help arrange these for pooja.`
    );
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-5 text-[#fef3c7]">
      {/* Header Card */}
      <div className="bg-[#250a0a]/80 border border-[#ffd700]/20 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-2 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933] shadow-[0_0_15px_rgba(255,153,51,0.3)]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-[#ff9933]">
              {lang === 'kn' ? 'ದೇವಪೂಜಾ ಸಾಮಗ್ರಿ ಮತ್ತು ಉಪಕರಣಗಳ ಪರಿಶೀಲಕ' : 'Pooja Accessories & Samagri Checker'}
            </h2>
            <p className="text-xs sm:text-sm text-[#ffd700]/70 font-sans">
              {lang === 'kn'
                ? 'ಪ್ರತಿಯೊಂದು ಉಪಕರಣದ ದರ್ಶನ, ವಿವರಣೆ ಹಾಗೂ ಶಾಸ್ತ್ರೋಕ್ತ ಬದಲಿ ವ್ಯವಸ್ಥೆ'
                : 'Supplied accessory photos, shastric substitutions and home setup'}
            </p>
          </div>
        </div>
      </div>

      {/* Separate preparation sections for each pooja duration */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {POOJA_PREPARATION_GROUPS.map((group, index) => {
          const isSelected = selectedMode === group.mode;
          const GroupIcon = group.mode === 'full' ? Crown : Clock3;

          return (
            <button
              key={group.mode}
              type="button"
              onClick={() => setSelectedMode(group.mode)}
              className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all active:scale-[0.98] ${
                isSelected
                  ? 'bg-gradient-to-br from-[#5a1710] to-[#250a0a] border-[#ffd700]/70 shadow-[0_12px_35px_rgba(255,153,51,0.18)]'
                  : 'bg-[#250a0a]/70 border-[#ffd700]/15 hover:border-[#ffd700]/35'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#ffd700]/60 font-bold">
                    {lang === 'kn' ? `ವಿಭಾಗ ${index + 1}` : `Section ${index + 1}`}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#ffb45c]">
                    {lang === 'kn' ? group.titleKn : group.titleEn}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-[#fef3c7]/70">
                    {lang === 'kn' ? group.descriptionKn : group.descriptionEn}
                  </p>
                </div>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-[#ffd700] text-[#3d1111]' : 'bg-[#ff9933]/15 text-[#ff9933]'
                }`}>
                  <GroupIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] font-bold">
                <span className="text-[#fef3c7]/60">
                  {group.itemIds.length} {lang === 'kn' ? 'ವಸ್ತುಗಳು' : 'items'}
                </span>
                <span className={isSelected ? 'text-[#ffd700]' : 'text-[#ff9933]/70'}>
                  {isSelected
                    ? (lang === 'kn' ? 'ಪಟ್ಟಿ ತೆರೆದಿದೆ' : 'List open')
                    : (lang === 'kn' ? 'ಪಟ್ಟಿ ನೋಡಿ' : 'View list')}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-3 border-y border-[#ffd700]/15 py-3">
        <div>
          <h3 className="font-serif font-bold text-[#ffd700]">
            {lang === 'kn' ? selectedGroup.titleKn : selectedGroup.titleEn}
          </h3>
          <p className="text-[11px] text-[#fef3c7]/60">
            {lang === 'kn' ? 'ನಿಮ್ಮ ಬಳಿ ಇರುವ ವಸ್ತುಗಳನ್ನು ಗುರುತಿಸಿ.' : 'Tap each item to mark what you already have.'}
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-[#ff9933]/15 border border-[#ff9933]/25 px-3 py-1 text-[10px] font-bold text-[#ffb45c]">
          {filteredItems.length} {lang === 'kn' ? 'ಅಗತ್ಯ ವಸ್ತುಗಳು' : 'required'}
        </span>
      </div>

      {/* Samagri Item Cards Grid with Authentic Accessory Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {filteredItems.map((item) => {
          const isHave = checkedIds[item.id];
          const photos = setupPhotosByItem[item.id];

          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`cursor-pointer rounded-2xl border transition-all p-3.5 sm:p-4 select-none flex flex-col justify-between gap-3 ${
                isHave
                  ? 'bg-[#250a0a]/90 border-[#ffd700]/25 shadow-xl'
                  : 'bg-[#140404]/60 border-[#ffd700]/10 opacity-70 hover:opacity-100'
              }`}
            >
              {/* Top Row: Accessory Visual Illustration + Details */}
              <div className="flex items-start gap-3">
                {/* Authentic Accessory Vector Graphic */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-[#2a0c0c] to-[#140404] border border-[#ffd700]/20 p-1 flex items-center justify-center shrink-0 shadow-inner">
                  {photos ? (
                    <img src={`/images/setup/${photos[0].file}`} alt={lang === 'kn' ? photos[0].nameKn : photos[0].nameEn} loading="lazy" className="h-full w-full rounded-xl bg-white object-contain" />
                  ) : (
                    <AccessoryGraphic id={item.id} className="w-full h-full" />
                  )}
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#ffeedd] leading-snug">
                      {lang === 'kn' ? item.nameKn : item.nameEn}
                    </h3>
                    <div className="shrink-0">
                      {isHave ? (
                        <CheckSquare className="w-5 h-5 text-[#ff9933] fill-[#ff9933]/20" />
                      ) : (
                        <Square className="w-5 h-5 text-[#ffd700]/40" />
                      )}
                    </div>
                  </div>

                  <span className="inline-block text-[9px] font-bold uppercase tracking-wider bg-[#ff9933]/20 text-[#ff9933] border border-[#ff9933]/30 px-2 py-0.5 rounded font-sans">
                    {selectedMode === '10min'
                      ? (lang === 'kn' ? '೧೦ ನಿಮಿಷ' : '10 minute')
                      : selectedMode === '30min'
                        ? (lang === 'kn' ? '೩೦ ನಿಮಿಷ' : '30 minute')
                        : (lang === 'kn' ? 'ಸಂಪೂರ್ಣ' : 'complete')}
                  </span>

                  <p className="text-[11px] sm:text-xs text-[#fef3c7]/80 leading-relaxed font-sans line-clamp-2">
                    {lang === 'kn' ? item.descriptionKn : item.descriptionEn}
                  </p>
                </div>
              </div>

              {photos && (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {photos.map((photo) => <SetupPhotoLink key={photo.file} photo={photo} lang={lang} />)}
                </div>
              )}

              {/* Shastric Substitute Guide */}
              {item.substituteKn && (
                <div className="bg-[#140404]/90 border border-[#ffd700]/15 rounded-xl p-2 sm:p-2.5 text-xs text-[#fef3c7]/90 space-y-0.5">
                  <div className="font-semibold text-[#ffd700] flex items-center gap-1 font-sans text-[11px]">
                    <Sparkles className="w-3 h-3 text-[#ff9933]" />
                    <span>{lang === 'kn' ? 'ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ ಬದಲಿ ವ್ಯವಸ್ಥೆ:' : 'If unavailable (Substitute):'}</span>
                  </div>
                  <p className="font-sans text-[10px] sm:text-[11px] leading-relaxed text-[#fef3c7]/85">
                    {lang === 'kn' ? item.substituteKn : item.substituteEn}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <section className="rounded-2xl border border-[#ffd700]/20 bg-[#250a0a]/70 p-4 space-y-3">
        <h3 className="font-serif font-bold text-[#ffd700]">{lang === 'kn' ? 'ಹೆಚ್ಚುವರಿ ಪೂಜಾ ಸಾಮಗ್ರಿ ಮತ್ತು ಉಲ್ಲೇಖ ಚಿತ್ರಗಳು' : 'Additional Setup Items & Reference Images'}</h3>
        <p className="text-xs text-[#fef3c7]/75">
          {lang === 'kn'
            ? 'ನೀವು ನೀಡಿದ ಮೂಲ ಚಿತ್ರಗಳು. ಪೂರ್ಣ ಚಿತ್ರವನ್ನು ನೋಡಲು ಆಯ್ಕೆ ಮಾಡಿ. ಧೇನು ಮುದ್ರೆಯ ಚಿತ್ರವು ಬೆರಳು ಜೋಡಣೆಯ ಟಿಪ್ಪಣಿಯಾಗಿದೆ; ಕೈ ಸಂಕೇತದ ಚಿತ್ರವಲ್ಲ.'
            : 'Original supplied images; select a photo to view it in full. The Dhenu Mudra attachment is a finger-pairing note, not a hand-signal photograph.'}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {additionalSetupPhotos.map((photo) => <SetupPhotoLink key={photo.file} photo={photo} lang={lang} />)}
        </div>
      </section>

      {/* Bottom Actions for Missing Items */}
      {missingItems.length > 0 && (
        <div className="bg-[#1a0505] border border-[#ffd700]/25 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="text-center sm:text-left">
            <div className="text-xs font-bold text-[#ff9933] font-sans">
              {lang === 'kn'
                ? `ಲಭ್ಯವಿಲ್ಲದ ಸಾಮಗ್ರಿಗಳು: ${missingItems.length} ವಸ್ತುಗಳು`
                : `Items to Arrange: ${missingItems.length} items`}
            </div>
            <p className="text-[11px] text-[#fef3c7]/75 font-sans">
              {lang === 'kn' ? 'ಪೂಜೆಗಾಗಿ ಬೇಕಾದ ವಸ್ತುಗಳ ಪಟ್ಟಿಯನ್ನು ಕಾಪಿ ಮಾಡಿ ಅಥವಾ ಹಂಚಿಕೊಳ್ಳಿ' : 'Copy or share shopping list for easy arrangement'}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyMissing}
              className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl bg-[#250a0a] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/25 text-xs font-semibold font-sans flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedNotification ? (lang === 'kn' ? 'ಕಾಪಿ ಮಾಡಲಾಗಿದೆ!' : 'Copied!') : (lang === 'kn' ? 'ಪಟ್ಟಿಯನ್ನು ಕಾಪಿ ಮಾಡಿ' : 'Copy List')}</span>
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] text-xs font-bold font-sans flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ' : 'Share via WhatsApp'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
