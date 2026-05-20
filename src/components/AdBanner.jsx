export default function AdBanner({ variant = 'leaderboard', className = '' }) {
  // Leaderboard: usually 728x90 or full width responsive
  // Rectangle: usually 300x250 for sidebars
  
  const isLeaderboard = variant === 'leaderboard';
  
  return (
    <div className={`flex justify-center items-center overflow-hidden bg-gray-100 border border-gray-200 relative ${isLeaderboard ? 'w-full h-24 md:h-32' : 'w-full aspect-square md:aspect-[4/3]'} ${className}`}>
      <span className="absolute top-1 right-1 bg-gray-200 text-gray-500 text-[10px] px-1 rounded">ADVERTISEMENT</span>
      
      {isLeaderboard ? (
        <img 
          src="https://picsum.photos/seed/ad_leader/1200/150" 
          alt="Advertisement" 
          className="w-full h-full object-cover"
        />
      ) : (
        <img 
          src={`https://picsum.photos/seed/ad_rect_${Math.random()}/300/250`} 
          alt="Advertisement" 
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
