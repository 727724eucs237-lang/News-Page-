import { useLanguage } from '../context/LanguageContext';

export default function EmptyState({ messageKey = 'page_no_results', subKey = 'page_no_results_sub' }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-4">
        <svg className="w-12 h-12 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-700 mb-2">{t(messageKey)}</h3>
      <p className="text-gray-400 text-sm">{t(subKey)}</p>
    </div>
  );
}
