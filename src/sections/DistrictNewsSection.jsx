import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mockArticles, districts } from '../utils/mockData';
import NewsCard from '../components/NewsCard';
import Tabs from '../components/Tabs';
import SectionHeader from '../components/SectionHeader';

export default function DistrictNewsSection() {
  const { t } = useLanguage();
  const [activeDistrict, setActiveDistrict] = useState('chennai');

  const tabs = districts.map(d => ({ id: d.id, label: t(d.key) }));
  const articles = mockArticles.filter(a => a.district === activeDistrict).slice(0, 4);

  return (
    <section className="mb-12">
      <SectionHeader titleKey="section_districts" link={'/district/' + activeDistrict} />
      <Tabs tabs={tabs} active={activeDistrict} onChange={setActiveDistrict} />
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map(a => <NewsCard key={a.id} article={a} variant="medium" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockArticles.slice(0, 4).map(a => <NewsCard key={a.id} article={a} variant="medium" />)}
        </div>
      )}
    </section>
  );
}
