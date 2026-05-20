import { useLanguage } from '../context/LanguageContext';
import { mockVideos } from '../utils/mockData';
import VideoCard from '../components/VideoCard';
import SectionHeader from '../components/SectionHeader';

export default function VideoSection() {
  return (
    <section className="mb-12">
      <SectionHeader titleKey="section_videos" link="/videos" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVideos.slice(0, 6).map(v => <VideoCard key={v.id} video={v} />)}
      </div>
    </section>
  );
}
