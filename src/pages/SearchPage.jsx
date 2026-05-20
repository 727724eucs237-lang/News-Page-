import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSearch } from '../hooks/useSearch';
import { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import NewsCard from '../components/NewsCard';
import EmptyState from '../components/EmptyState';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { t } = useLanguage();
  const { results, search, searched } = useSearch();

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query, search]);

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{t('page_search_title')}</h1>
        <div className="flex justify-center">
          <SearchBar autoFocus />
        </div>
        {searched && (
          <p className="text-gray-500 text-sm mt-6">
            <span className="font-bold text-gray-900">{results.length}</span> {t('page_search_results')} "{query}"
          </p>
        )}
      </div>

      {!searched && !query && (
        <div className="text-center py-12">
          <p className="text-gray-400">{t('search_placeholder')}</p>
        </div>
      )}

      {searched && results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map(a => <NewsCard key={a.id} article={a} variant="list" />)}
        </div>
      )}

      {searched && results.length === 0 && (
        <EmptyState />
      )}
    </div>
  );
}
