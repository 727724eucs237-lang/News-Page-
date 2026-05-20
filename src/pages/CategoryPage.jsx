import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockArticles, categories } from '../utils/mockData';
import NewsCard from '../components/NewsCard';
import EmptyState from '../components/EmptyState';

export default function CategoryPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  const category = categories.find(c => c.id === slug);
  const articles = mockArticles.filter(a => a.category === slug);

  if (!category) {
    return <EmptyState />;
  }

  return (
    <div className="animate-fade-in">
      <div className={'py-8 px-6 rounded-2xl mb-8 flex items-center gap-4 ' + category.color}>
        <span className="text-5xl">{category.icon}</span>
        <div>
          <h1 className="text-3xl font-black">{t(category.key)}</h1>
          <p className="opacity-80 mt-1">{t('page_category')}</p>
        </div>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map(a => <NewsCard key={a.id} article={a} variant="medium" />)}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
