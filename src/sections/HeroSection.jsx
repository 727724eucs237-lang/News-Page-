import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockArticles } from '../utils/mockData';
import AdBanner from '../components/AdBanner';
import SectionHeader from '../components/SectionHeader';
import { timeAgo } from '../utils/helpers';

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const featured = mockArticles.filter(a => a.featured);
  
  // Left column articles
  const leftArticles = featured.slice(1, 4);
  // Center main article
  const centerArticle = featured[0];
  
  return (
    <section className="mb-12">
      <SectionHeader titleStr="Headlines" variant="centered" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: List of News */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {leftArticles.map((article) => {
            const title = lang === 'ta' ? article.titleTa : article.title;
            return (
              <Link key={article.id} to={'/news/' + article.id} className="group border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <img src={article.image} alt={title} className="w-full h-32 object-cover mb-3 hover:opacity-90 transition-opacity" />
                <h3 className="text-gray-900 font-serif font-bold text-lg leading-snug group-hover:text-red-700 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 text-xs mt-2">{timeAgo(article.date, lang)} • {article.readTime} {t('min_read')}</p>
              </Link>
            );
          })}
        </div>
        
        {/* Center Column: Big Featured News */}
        <div className="lg:col-span-6 border-x border-gray-200 px-0 lg:px-8">
          {centerArticle && (() => {
            const title = lang === 'ta' ? centerArticle.titleTa : centerArticle.title;
            return (
              <Link to={'/news/' + centerArticle.id} className="group block">
                <div className="relative mb-4 bg-gray-100 p-2 border border-gray-200">
                  <img src={centerArticle.image} alt={title} className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition-opacity" />
                </div>
                <h2 className="text-2xl md:text-4xl font-serif font-black text-gray-900 leading-tight mb-4 group-hover:text-red-700 transition-colors">
                  {title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {centerArticle.excerpt}
                </p>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <span>{timeAgo(centerArticle.date, lang)}</span>
                  <span>•</span>
                  <span>{centerArticle.readTime} {t('min_read')}</span>
                </div>
              </Link>
            );
          })()}
        </div>
        
        {/* Right Column: Ads */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <AdBanner variant="rectangle" />
          <AdBanner variant="rectangle" />
        </div>
        
      </div>
    </section>
  );
}
