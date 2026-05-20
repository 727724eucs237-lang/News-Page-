import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockArticles, districts } from '../utils/mockData';
import NewsCard from '../components/NewsCard';
import EmptyState from '../components/EmptyState';
import Tabs from '../components/Tabs';

export default function DistrictNewsPage() {
  const { name } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const currentDistrict = districts.find(d => d.id === name);
  const articles = mockArticles.filter(a => a.district === name);
  const tabs = districts.map(d => ({ id: d.id, label: t(d.key) }));

  if (!currentDistrict) {
    return <EmptyState />;
  }

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900">{t(currentDistrict.key)}</h1>
          <p className="text-gray-500 mt-1">{t('page_district')}</p>
        </div>
      </div>
      
      <Tabs tabs={tabs} active={name} onChange={(id) => navigate('/district/' + id)} />

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
