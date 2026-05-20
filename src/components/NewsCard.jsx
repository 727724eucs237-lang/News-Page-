import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { timeAgo } from '../utils/helpers';

const categoryColors = {
  politics: 'bg-red-100 text-red-700',
  sports: 'bg-green-100 text-green-700',
  business: 'bg-blue-100 text-blue-700',
  entertainment: 'bg-purple-100 text-purple-700',
  health: 'bg-pink-100 text-pink-700',
  technology: 'bg-cyan-100 text-cyan-700',
  education: 'bg-yellow-100 text-yellow-700',
  crime: 'bg-gray-100 text-gray-700',
  international: 'bg-indigo-100 text-indigo-700',
  agriculture: 'bg-lime-100 text-lime-700',
};

export default function NewsCard({ article, variant = 'medium' }) {
  const { lang, t } = useLanguage();
  const title = lang === 'ta' ? article.titleTa : article.title;
  const badgeColor = categoryColors[article.category] || 'bg-gray-100 text-gray-700';

  if (variant === 'hero') {
    return (
      <Link to={'/news/' + article.id} className="group block relative rounded-2xl overflow-hidden shadow-xl h-96 md:h-[480px]">
        <img src={article.image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className={'inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ' + badgeColor}>
            {t('cat_' + article.category)}
          </span>
          <h2 className="text-white text-xl md:text-2xl font-bold leading-tight mb-3 line-clamp-3 group-hover:text-amber-300 transition-colors duration-200">
            {title}
          </h2>
          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <span>{article.author}</span>
            <span>•</span>
            <span>{timeAgo(article.date, lang)}</span>
            <span>•</span>
            <span>{article.readTime} {t('min_read')}</span>
          </div>
        </div>
        {article.breaking && (
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
            {t('breaking_label')}
          </div>
        )}
      </Link>
    );
  }

  if (variant === 'small') {
    return (
      <Link to={'/news/' + article.id} className="group flex gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
        <img src={article.image} alt={title} className="w-24 h-20 object-cover rounded-lg flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <span className={'text-xs font-semibold px-2 py-0.5 rounded-full ' + badgeColor}>
            {t('cat_' + article.category)}
          </span>
          <h4 className="text-gray-900 text-sm font-semibold mt-1 line-clamp-2 group-hover:text-red-700 transition-colors duration-200 leading-snug">
            {title}
          </h4>
          <p className="text-gray-400 text-xs mt-1">{timeAgo(article.date, lang)}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'list') {
    return (
      <Link to={'/news/' + article.id} className="group flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-gray-100">
        <img src={article.image} alt={title} className="w-32 h-24 object-cover rounded-lg flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={'text-xs font-semibold px-2 py-0.5 rounded-full ' + badgeColor}>
              {t('cat_' + article.category)}
            </span>
            {article.breaking && (
              <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">{t('breaking_label')}</span>
            )}
          </div>
          <h3 className="text-gray-900 font-semibold text-base leading-snug line-clamp-2 group-hover:text-red-700 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-500 text-sm mt-1 line-clamp-1">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-gray-400 text-xs mt-2">
            <span>{article.author}</span>
            <span>•</span>
            <span>{timeAgo(article.date, lang)}</span>
            <span>•</span>
            <span>{article.readTime} {t('min_read')}</span>
          </div>
        </div>
      </Link>
    );
  }

  // medium (default)
  return (
    <Link to={'/news/' + article.id} className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden h-48">
        <img src={article.image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3">
          <span className={'text-xs font-semibold px-2.5 py-1 rounded-full ' + badgeColor}>
            {t('cat_' + article.category)}
          </span>
        </div>
        {article.breaking && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
            {t('breaking_label')}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-base leading-snug line-clamp-2 group-hover:text-red-700 transition-colors duration-200 mb-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="flex items-center justify-between text-gray-400 text-xs">
          <span>{article.author}</span>
          <div className="flex items-center gap-2">
            <span>{timeAgo(article.date, lang)}</span>
            <span>•</span>
            <span>{article.readTime} {t('min_read')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
