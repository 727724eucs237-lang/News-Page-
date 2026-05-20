import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function SectionHeader({ titleKey, link, linkKey = 'view_all', variant = 'default', titleStr }) {
  const { t } = useLanguage();
  const displayTitle = titleStr || t(titleKey);

  if (variant === 'centered') {
    return (
      <div className="flex items-center justify-center mb-8 mt-4 relative">
        <div className="absolute left-0 right-0 h-px bg-gray-300 z-0" />
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 bg-gray-100 px-6 z-10">
          {displayTitle}
        </h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-7 bg-red-700 rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{displayTitle}</h2>
      </div>
      {link && (
        <Link
          to={link}
          className="text-sm font-semibold text-red-700 hover:text-red-800 flex items-center gap-1 transition-colors duration-200"
        >
          {t(linkKey)}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
