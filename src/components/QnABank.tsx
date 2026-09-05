import React, { useState } from 'react';
import { QNA_DATA } from '../data/qnaData';
import { Language } from '../types';
import {
  Search,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
  Award,
  Scroll
} from 'lucide-react';

interface QnABankProps {
  lang: Language;
}

export const QnABank: React.FC<QnABankProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(QNA_DATA[0]?.id || null);

  const categories = [
    { id: 'all', labelKn: 'ಎಲ್ಲಾ ಸಂಶಯಗಳು (೩೭)', labelEn: 'All Doubts (37)' },
    { id: 'saligrama', labelKn: 'ಸಾಲಿಗ್ರಾಮ ರಹಸ್ಯ', labelEn: 'Saligrama Secrets' },
    { id: 'naivedya', labelKn: 'ನೈವೇದ್ಯ & ವೈಶ್ವದೇವ', labelEn: 'Naivedya & Food' },
    { id: 'abhisheka', labelKn: 'ತೀರ್ಥ & ಅಭಿಷೇಕ', labelEn: 'Teertha & Abhisheka' },
    { id: 'mangalarati', labelKn: 'ಮಂಗಳಾರತಿ & ಶಂಖಭ್ರಮಣ', labelEn: 'Arati & Conch' },
    { id: 'gandhakshata', labelKn: 'ಗಂಧ & ಅಕ್ಷತೆ', labelEn: 'Gandha & Akshata' },
    { id: 'ekadashi', labelKn: 'ಏಕಾದಶಿ ನಿಯಮಗಳು', labelEn: 'Ekadashi Rules' },
    { id: 'madi_achara', labelKn: 'ಮಡಿ & ಆಚಾರ', labelEn: 'Madi & Purity' },
    { id: 'general', labelKn: 'ಸಾಮಾನ್ಯ & ಪರ್ವಕಾಲ', labelEn: 'General & Festivals' },
  ];

  const filteredItems = QNA_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();

    if (!query) return matchesCat;

    const matchText =
      item.questionKn.toLowerCase().includes(query) ||
      item.questionEn.toLowerCase().includes(query) ||
      item.answerKn.toLowerCase().includes(query) ||
      item.answerEn.toLowerCase().includes(query) ||
      item.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCat && matchText;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-6 text-[#fef3c7]">
      {/* Header Card with Sudha Pandita Tribute */}
      <div className="bg-[#250a0a]/80 border border-[#ffd700]/20 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 backdrop-blur-md">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933] shadow-[0_0_15px_rgba(255,153,51,0.3)] shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg sm:text-2xl text-[#ff9933]">
                {lang === 'kn' ? 'ದೇವಪೂಜಾ ಸಂಶಯ ನಿವಾರಣೆ & ಪ್ರಶ್ನೋತ್ತರ' : 'Pooja Q&A & Doubts Clarification'}
              </h2>
              <p className="text-xs sm:text-sm text-[#ffd700]/80 font-sans mt-0.5">
                {lang === 'kn'
                  ? 'ಸುಧಾ ಪಂಡಿತ ಪೂಜ್ಯ ಶ್ರೀ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಜೋಶಿಯವರ ಶಾಸ್ತ್ರೀಯ ಸಮಾಧಾನಗಳು'
                  : 'Authentic Shastric solutions by Sudha Pandita Shri Venugopalacharya Joshi'}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff9933]/15 border border-[#ff9933]/30 text-[#ffd700] text-[11px] font-sans">
            <Award className="w-3.5 h-3.5 text-[#ff9933]" />
            <span>೩೭ ಪ್ರಶ್ನೋತ್ತರಗಳು</span>
          </div>
        </div>

        {/* Dedication Banner */}
        <div className="bg-gradient-to-r from-[#1c0505] via-[#2d0c0c] to-[#1c0505] border border-[#ffd700]/25 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 shadow-inner">
          <Scroll className="w-6 h-6 text-[#ffd700] shrink-0" />
          <p className="text-xs text-[#ffd700]/90 font-sans leading-relaxed">
            {lang === 'kn'
              ? 'ಪ್ರಸಿದ್ಧ ವಿದ್ವಾಂಸರಾದ ಪೂಜ್ಯ ಶ್ರೀ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಜೋಶಿಯವರು ದೈನಂದಿನ ದೇವತಾರ್ಚನೆ, ಸಾಲಿಗ್ರಾಮ ಪೂಜೆ, ನೈವೇದ್ಯ, ತೀರ್ಥ ವಿಧಿ ಹಾಗೂ ಮುದ್ರೆಗಳ ಕುರಿತು ಭಕ್ತರ ಸಂಶಯಗಳಿಗೆ ನೀಡಿದ ಅಧಿಕೃತ ಪ್ರಶ್ನಾವಳಿ-ಉತ್ತರಗಳು.'
              : 'Official Q&A with well-known scholar Sudha Pandita Shri Venugopalacharya Joshi covering Saligrama ritual rules, Naivedya division, Swadodaka, mudras, and Madi Achara.'}
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#ff9933] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'kn'
                ? 'ಪ್ರಶ್ನೆ ಅಥವಾ ಕೀವರ್ಡ್ ಹುಡುಕಿ (ಉದಾ: ಸಾಲಿಗ್ರಾಮ, ನೈವೇದ್ಯ, ಸ್ವಾದೋದಕ, ಏಕಾದಶಿ, ಶಂಖಭ್ರಮಣ, ಮುದ್ರಾ)...'
                : 'Search questions or keywords (e.g., Saligrama, Naivedya, Swadodaka, Ekadashi, Shankha, Mudras)...'
            }
            className="w-full pl-11 pr-4 py-3 bg-[#140404] border border-[#ffd700]/20 rounded-full text-sm text-[#fef3c7] placeholder-[#fef3c7]/40 focus:outline-none focus:ring-2 focus:ring-[#ff9933] font-sans shadow-inner"
          />
        </div>
      </div>

      {/* Category Horizontal Filter */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold whitespace-nowrap transition-all border shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.35)]'
                : 'bg-[#3d1111]/70 hover:bg-[#3d1111] text-[#fef3c7]/80 border-[#ffd700]/15'
            }`}
          >
            {lang === 'kn' ? cat.labelKn : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Q&A Accordion List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="bg-[#250a0a]/60 border border-[#ffd700]/10 rounded-2xl p-8 text-center text-[#fef3c7]/60 space-y-2 font-sans">
            <BookOpen className="w-8 h-8 text-[#ff9933] mx-auto opacity-60" />
            <p className="text-sm">
              {lang === 'kn'
                ? 'ಯಾವುದೇ ಹೊಂದಾಣಿಕೆಯ ಪ್ರಶ್ನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'
                : 'No matching questions found.'}
            </p>
          </div>
        ) : (
          filteredItems.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-md ${
                  isExpanded
                    ? 'bg-[#250a0a] border-[#ff9933]/50 shadow-[0_0_20px_rgba(255,153,51,0.15)]'
                    : 'bg-[#1a0606]/80 border-[#ffd700]/15 hover:border-[#ff9933]/30'
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left p-4 flex items-start justify-between gap-3 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-serif font-bold text-xs bg-[#ff9933]/20 text-[#ff9933] border border-[#ff9933]/30 px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                      Q.{index + 1}
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#ffeedd] leading-snug">
                      {lang === 'kn' ? item.questionKn : item.questionEn}
                    </h3>
                  </div>
                  <div className="p-1 rounded-full bg-[#140404] text-[#ffd700] shrink-0 mt-0.5">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer Drawer */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#ffd700]/10 space-y-3 font-sans text-xs sm:text-sm animate-fade-in">
                    {/* Key Shastra Takeaway Pill */}
                    <div className="bg-[#140404] border-l-4 border-[#ff9933] p-3 rounded-r-xl space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffd700] flex items-center gap-1.5 font-sans">
                        <Sparkles className="w-3.5 h-3.5 text-[#ff9933]" />
                        {lang === 'kn' ? 'ಮುಖ್ಯ ಶಾಸ್ತ್ರ ನಿಯಮ / ಸೂತ್ರ' : 'Key Shastric Rule'}
                      </span>
                      <p className="text-[#ffeedd] font-semibold">
                        {lang === 'kn' ? item.keyRuleKn : item.keyRuleEn}
                      </p>
                    </div>

                    {/* Detailed Answer */}
                    <div className="text-[#fef3c7]/90 leading-relaxed whitespace-pre-line pl-1">
                      {lang === 'kn' ? item.answerKn : item.answerEn}
                    </div>

                    {/* Category and Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#ffd700]/10 text-[11px] text-[#ffd700]/60">
                      <span className="bg-[#3d1111]/80 px-2.5 py-0.5 rounded-full border border-[#ffd700]/10 font-sans">
                        {lang === 'kn' ? item.categoryLabelKn : item.categoryLabelEn}
                      </span>
                      <span className="text-[#ff9933]/80 font-sans italic">
                        ಉತ್ತರ: ಸುಧಾ ಪಂಡಿತ ಶ್ರೀ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಜೋಶಿ
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
