import HeroSection from '../sections/HeroSection';
import CategoryShortcuts from '../sections/CategoryShortcuts';
import LatestNewsSection from '../sections/LatestNewsSection';
import DistrictNewsSection from '../sections/DistrictNewsSection';
import VideoSection from '../sections/VideoSection';
import PoliceSection from '../sections/PoliceSection';
import WelfareSection from '../sections/WelfareSection';
import TrendingSection from '../sections/TrendingSection';

import AdBanner from '../components/AdBanner';
import TrendingTags from '../components/TrendingTags';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Top Banner Ad */}
      <div className="mb-6 mt-4">
        <AdBanner variant="leaderboard" />
      </div>

      {/* Trending Tags Row */}
      <div className="mb-8">
        <TrendingTags />
      </div>

      <HeroSection />
      
      {/* Mid Page Ad */}
      <div className="mb-12">
        <AdBanner variant="leaderboard" />
      </div>

      <CategoryShortcuts />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LatestNewsSection />
          <DistrictNewsSection />
        </div>
        <div className="lg:col-span-1">
          <TrendingSection />
          <div className="mt-8 sticky top-24">
            <AdBanner variant="rectangle" />
          </div>
        </div>
      </div>

      <VideoSection />
      <PoliceSection />
      <WelfareSection />
    </div>
  );
}
