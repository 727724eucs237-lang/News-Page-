import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockAuthors, mockArticles } from '../utils/mockData';
import NewsCard from '../components/NewsCard';
import EmptyState from '../components/EmptyState';

export default function AuthorProfilePage() {
  const { id } = useParams();
  const { t } = useLanguage();
  
  const author = mockAuthors.find(a => a.id === parseInt(id));
  const articles = mockArticles.filter(a => a.authorId === parseInt(id));

  if (!author) {
    return <EmptyState />;
  }

  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
        <img src={author.avatar} alt={author.name} className="w-32 h-32 rounded-full object-cover ring-4 ring-red-50 shadow-lg" />
        <div className="flex-1">
          <h1 className="text-3xl font-black text-gray-900 mb-2">{author.name}</h1>
          <p className="text-gray-500 text-lg mb-6 leading-relaxed max-w-2xl">{author.bio}</p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9"/>
              </svg>
              <span className="font-semibold text-gray-900">{author.articles}</span> {t('all_articles')}
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 00-1-1H8v-2h2a1 1 0 000-2H8V7a1 1 0 00-1-1H4a1 1 0 000 2h2v2H4a1 1 0 000 2h1v3H4a1 1 0 00-1 1v3a1 1 0 001 1h1a3 3 0 006 0h2a3 3 0 006 0h1a1 1 0 001-1v-3a1 1 0 00-.1-.61z"/>
              </svg>
              {author.location}
            </span>
            <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg font-medium cursor-pointer hover:bg-blue-100 transition-colors">
              {author.twitter}
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <div className="w-1.5 h-6 bg-red-700 rounded-full" />
        {t('all_articles')} {t('by_author')} {author.name}
      </h2>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map(a => <NewsCard key={a.id} article={a} variant="list" />)}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
