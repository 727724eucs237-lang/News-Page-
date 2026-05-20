import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockArticles } from '../utils/mockData';
import SectionHeader from '../components/SectionHeader';
import { timeAgo } from '../utils/helpers';

export default function TrendingSection() {
  const { lang, t } = useLanguage();
  const trending = [...mockArticles].sort((a, b) => b.views - a.views).slice(0, 7);

  return (
    <section className="mb-12">
      <SectionHeader titleKey="section_trending" />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {trending.map((article, i) => {
          const title = lang === 'ta' ? article.titleTa : article.title;
          return (
            <Link
              key={article.id}
              to={'/news/' + article.id}
              className="flex items-center gap-4 p-4 hover:bg-red-50 transition-colors duration-150 border-b border-gray-50 last:border-b-0 group"
            >
              <span className={'text-2xl font-black w-8 text-center flex-shrink-0 ' + (i < 3 ? 'text-red-700' : 'text-gray-300')}>
                {i + 1}
              </span>
              <img src={article.image} alt={title} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-800 text-sm font-semibold line-clamp-2 group-hover:text-red-700 transition-colors duration-150 leading-snug">
                  {title}
                </h4>
                <p className="text-gray-400 text-xs mt-1">{timeAgo(article.date, lang)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
