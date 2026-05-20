import { useLanguage } from '../context/LanguageContext';
import { breakingNewsList, breakingNewsListTa } from '../utils/mockData';

export default function BreakingNewsTicker() {
  const { lang, t } = useLanguage();
  const items = lang === 'ta' ? breakingNewsListTa : breakingNewsList;

  return (
    <div className="bg-gray-50 border-b border-gray-200 text-gray-800 flex items-center overflow-hidden h-10 select-none">
      <div className="flex-shrink-0 bg-gray-100 px-4 md:px-6 h-full flex items-center gap-2 z-10 border-r border-gray-300 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
        <span className="font-serif font-bold text-sm tracking-wide text-gray-900">{t('breaking_news')}</span>
      </div>
      <div className="flex-1 overflow-hidden relative">
        <div className="flex animate-ticker whitespace-nowrap gap-12 items-center h-full">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-sm font-medium whitespace-nowrap flex items-center gap-4">
              {item}
              <span className="text-gray-300">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
