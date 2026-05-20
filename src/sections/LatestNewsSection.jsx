import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mockArticles } from '../utils/mockData';
import NewsCard from '../components/NewsCard';
import SectionHeader from '../components/SectionHeader';

export default function LatestNewsSection() {
  const { t } = useLanguage();
  const [count, setCount] = useState(6);
  const articles = mockArticles.slice(0, count);

  return (
    <section className="mb-12">
      <SectionHeader titleKey="section_latest" link="/category/politics" />
      <div className="flex flex-col gap-4">
        {articles.map(a => <NewsCard key={a.id} article={a} variant="list" />)}
      </div>
      {count < mockArticles.length && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setCount(c => c + 6)}
            className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            {t('load_more')}
          </button>
        </div>
      )}
    </section>
  );
}
