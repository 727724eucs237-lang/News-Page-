import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { formatViews, timeAgo } from '../utils/helpers';

export default function VideoCard({ video }) {
  const { lang, t } = useLanguage();
  const title = lang === 'ta' ? video.titleTa : video.title;

  return (
    <Link to={'/videos'} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="relative overflow-hidden h-44">
        <img src={video.thumbnail} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-mono">
          {video.duration}
        </div>
        {/* Play icon always visible */}
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200">
          <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="p-3">
        <h4 className="text-gray-900 font-semibold text-sm line-clamp-2 group-hover:text-red-700 transition-colors duration-200 leading-snug mb-1.5">
          {title}
        </h4>
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <span>{formatViews(video.views)} {t('views')}</span>
          <span>•</span>
          <span>{timeAgo(video.date, lang)}</span>
        </div>
      </div>
    </Link>
  );
}
