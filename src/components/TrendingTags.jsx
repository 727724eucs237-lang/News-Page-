import { Link } from 'react-router-dom';

const trendingTopics = [
  'Current gold price',
  'Sports',
  'Politics',
  'War',
  'Stock market'
];

export default function TrendingTags() {
  return (
    <div className="flex flex-wrap items-center gap-3 py-4 px-4 bg-[#f4f5f6] border-y border-gray-200 overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full border border-red-100 font-bold text-sm whitespace-nowrap">
        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
        Trending
      </div>
      
      <div className="hidden sm:block w-px h-6 bg-gray-300 mx-1" />

      {trendingTopics.map((topic, idx) => (
        <Link 
          to={`/search?q=${encodeURIComponent(topic)}`}
          key={idx}
          className="px-5 py-1.5 rounded-full border border-gray-200 bg-white text-[#1a56db] text-sm font-medium hover:border-blue-400 hover:shadow-sm transition-all whitespace-nowrap"
        >
          {topic}
        </Link>
      ))}
    </div>
  );
}
