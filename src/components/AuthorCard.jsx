import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function AuthorCard({ author }) {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center border border-gray-100">
      <img src={author.avatar} alt={author.name} className="w-20 h-20 rounded-full object-cover border-4 border-red-100 mb-3" />
      <h3 className="text-gray-900 font-bold text-lg">{author.name}</h3>
      <p className="text-gray-500 text-sm mt-1 mb-3 line-clamp-2">{author.bio}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9"/>
          </svg>
          {author.articles} {t('all_articles')}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 00-1-1H8v-2h2a1 1 0 000-2H8V7a1 1 0 00-1-1H4a1 1 0 000 2h2v2H4a1 1 0 000 2h1v3H4a1 1 0 00-1 1v3a1 1 0 001 1h1a3 3 0 006 0h2a3 3 0 006 0h1a1 1 0 001-1v-3a1 1 0 00-.1-.61z"/>
          </svg>
          {author.location}
        </span>
      </div>
      <Link
        to={'/author/' + author.id}
        className="w-full py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-semibold transition-colors duration-200"
      >
        {t('all_articles')}
      </Link>
    </div>
  );
}
