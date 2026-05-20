import { useLanguage } from '../context/LanguageContext';
import { mockVideos } from '../utils/mockData';
import VideoCard from '../components/VideoCard';
import SectionHeader from '../components/SectionHeader';

export default function VideoNewsPage() {
  const { lang, t } = useLanguage();
  const featured = mockVideos[0];
  const featuredTitle = lang === 'ta' ? featured.titleTa : featured.title;

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-black text-gray-900 mb-8">{t('page_video_title')}</h1>
      
      {/* Featured Video Player Mockup */}
      <div className="bg-black rounded-2xl overflow-hidden mb-12 shadow-xl aspect-video relative group">
        <img src={featured.thumbnail} alt={featuredTitle} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl">
            <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-white text-2xl font-bold">{featuredTitle}</h2>
        </div>
      </div>

      <SectionHeader titleKey="section_videos" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVideos.slice(1).map(v => <VideoCard key={v.id} video={v} />)}
      </div>
    </div>
  );
}
