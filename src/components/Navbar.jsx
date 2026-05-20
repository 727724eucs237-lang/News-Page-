import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const navLinks = [
  { to: '/', key: 'nav_home' },
  { to: '/category/politics', key: 'cat_politics', fallback: 'Political arena' },
  { to: '/district/chennai', key: 'nav_districts', fallback: 'Nationality' },
  { to: '/category/world', key: 'cat_international', fallback: 'World' },
  { to: '/category/cinema', key: 'cat_entertainment', fallback: 'Cinema' },
  { to: '/category/sports', key: 'cat_sports', fallback: 'Sports' },
  { to: '/category/astrology', key: 'cat_astrology', fallback: 'Astrology' },
  { to: '/category/spirituality', key: 'cat_spirituality', fallback: 'Spirituality' },
  { to: '/category/business', key: 'cat_business', fallback: 'Business' },
  { to: '/category/ipl2026', key: 'cat_ipl2026', fallback: 'IPL 2026' },
];

const sidebarItems = [
  { id: 'news', label: 'News', hasSub: true },
  { id: 'politics', label: 'Political arena', to: '/category/politics' },
  { id: 'ipl', label: 'IPL 2026', to: '/category/ipl2026' },
  { id: 'cinema', label: 'Cinema', hasSub: true },
  { id: 'webstory', label: 'Webstory', to: '/webstory' },
  { id: 'sports', label: 'Sports', hasSub: true },
  { id: 'business', label: 'Business', hasSub: true },
  { id: 'spirituality', label: 'Spirituality', hasSub: true },
  { id: 'astrology', label: 'Astrology', hasSub: true },
  { id: 'education', label: 'Education/Employment', to: '/category/education' },
  { id: 'editorial', label: 'Editorial', to: '/editorial' },
  { id: 'health', label: 'Health', to: '/category/health' },
  { id: 'epaper', label: 'E-paper', to: '/epaper' },
  { id: 'specials', label: 'Specials', hasSub: true },
  { id: 'complaint', label: 'Complaint box', to: '/contact' },
];

// Reusable Social Icons Component
const SocialIcons = () => (
  <div className="flex gap-3">
    {/* Facebook */}
    <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </a>
    {/* WhatsApp */}
    <a href="#" className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
    {/* X (Twitter) */}
    <a href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>
    {/* Instagram */}
    <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#E1306C] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    </a>
    {/* YouTube */}
    <a href="#" className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4s-6.254,0-7.814,0.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z" fill="white"/>
        <path d="M9.996,15.594V8.406L15.803,12L9.996,15.594z" fill="#FF0000"/>
      </svg>
    </a>
  </div>
);

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for expanded submenus in sidebar
  const [expandedItems, setExpandedItems] = useState({});
  
  const navigate = useNavigate();

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search?q=' + encodeURIComponent(searchQuery.trim()));
      setSearchOpen(false);
    }
  };

  const toggleSubmenu = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      {/* --- TOP TIER (White Background) --- */}
      <div className="bg-white py-3 border-b border-gray-100 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
          
          {/* Left: Social Icons & Top Links */}
          <div className="flex items-center gap-6">
            <SocialIcons />
          </div>

          {/* Center: Logo */}
          <Link to="/" className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
            <h1 className="text-4xl lg:text-5xl font-black text-red-700 font-tamil tracking-tight flex items-center gap-1.5 drop-shadow-sm">
              நியூஸ்<span className="text-white bg-red-700 px-1.5 rounded-sm shadow-inner pb-1">டெய்லி</span>
            </h1>
          </Link>

          {/* Right: Language, App Store, & Profile */}
          <div className="flex items-center gap-4">
            <button onClick={toggleLang} className="px-3 py-1 rounded border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">
              {lang === 'en' ? 'தமிழ்' : 'English'}
            </button>
            <div className="flex gap-2">
              <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414c-.0552-.8905.7485-1.5976 1.4886-1.9213-.3773-.5515-1.2295-1.2721-2.222-1.3963-1.464-.2046-2.6713.8118-3.4116.8118-.7524 0-1.7447-.7999-2.926-.788-1.5276.012-2.938.8906-3.715 2.2472-1.5752 2.723-.401 6.7721 1.1394 8.989 .7523 1.099 1.6318 2.3168 2.8079 2.281 1.1405-.036 1.5752-.7286 2.9261-.7286 1.339 0 1.7408.7286 2.938.7047 1.2294-.0237 1.996-1.1111 2.7364-2.185.8631-1.2602 1.2175-2.4735 1.2413-2.5447-.0238-.0118-2.392-.9143-2.9652-3.4698M14.9452 9.0766c.642-.7763 1.0623-1.854 1.0623-3.134 0-.1546-.012-.309-.0358-.4517-.9988.0475-2.2828.6773-3.0833 1.628-.6063.7011-1.1265 1.7828-1.1265 3.0392 0 .1663.0238.3326.0476.3683.0238.0237.1546.0357.309.0357 1.0108 0 2.1873-.6773 2.8267-1.4855"/></svg>
                <div className="flex flex-col">
                  <span className="text-[10px] leading-tight">Download on the</span>
                  <span className="text-sm font-bold leading-tight">App Store</span>
                </div>
              </div>
              <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.609 22.186c-.164-.176-.271-.418-.271-.702V2.516c0-.284.107-.526.271-.702zm1.096.347l10.978 10.978L19.49 9.332 4.705 2.161zm11.758 11.758l-3.816-3.816-10.978 10.978 14.785-7.171zm.78-.377l2.844-1.38c.641-.31.641-.815 0-1.125l-2.844-1.38-4.225 4.225 4.225 4.225z"/></svg>
                <div className="flex flex-col">
                  <span className="text-[10px] leading-tight">GET IT ON</span>
                  <span className="text-sm font-bold leading-tight">Google Play</span>
                </div>
              </div>
            </div>
            <Link to="/login" className="w-9 h-9 rounded-full bg-[#333333] text-white flex items-center justify-center hover:bg-black transition-colors shadow-sm" aria-label="Login">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* --- MOBILE TOP TIER --- */}
      <div className="lg:hidden bg-white py-3 px-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <button onClick={() => setMenuOpen(true)} className="p-2 -ml-2 text-gray-700 hover:text-red-700 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" aria-label="Open Menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <Link to="/" className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-black text-red-700 font-tamil drop-shadow-sm">
            நியூஸ்<span className="text-white bg-red-700 px-1 rounded shadow-inner pb-0.5">டெய்லி</span>
          </h1>
        </Link>
        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="text-xs font-bold border border-gray-300 px-2.5 py-1 rounded text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors shadow-sm">
            {lang === 'en' ? 'TA' : 'EN'}
          </button>
          <Link to="/login" className="w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center hover:bg-black transition-colors shadow-sm" aria-label="Login">
            <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* --- BOTTOM TIER (Dark Navigation) --- */}
      <nav className="bg-[#555555] text-white relative shadow-md z-30 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
          
          {/* Desktop Hamburger (Left side of nav) */}
          <button onClick={() => setMenuOpen(true)} className="flex items-center gap-2 py-2 pr-6 hover:text-amber-400 transition-colors border-r border-gray-500/50 mr-4 group">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
            <span className="font-bold text-sm tracking-widest uppercase">Menu</span>
          </button>
          
          <div className="flex-1 flex items-center gap-6 text-[15px] font-serif tracking-wide">
            {navLinks.map(link => (
              <NavLink 
                key={link.to} 
                to={link.to}
                className={({isActive}) => `hover:text-amber-400 transition-colors ${isActive ? 'text-amber-400 font-bold' : ''}`}
              >
                {t(link.key) === link.key ? link.fallback || t(link.key) : t(link.key)}
              </NavLink>
            ))}
          </div>
          
          {/* Search Toggle */}
          <div className="flex items-center gap-4 ml-4 border-l border-gray-500/50 pl-6">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:text-amber-400 transition-colors" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Search Bar */}
        <div className={`absolute top-full left-0 right-0 bg-[#444444] shadow-lg z-50 overflow-hidden transition-all duration-300 ${searchOpen ? 'max-h-24 p-4 border-t border-gray-600' : 'max-h-0 p-0'}`}>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative flex items-center">
            <input 
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('search_placeholder')}
              className="w-full bg-white text-black px-4 py-2.5 rounded shadow-inner outline-none focus:ring-2 focus:ring-red-500"
            />
            <button type="submit" className="absolute right-2 p-2 text-gray-500 hover:text-red-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </nav>

      {/* --- SIDEBAR DRAWER (Overlay Drawer Menu) --- */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Overlay Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        
        {/* Drawer Panel */}
        <div 
          className={`w-[320px] max-w-[85vw] bg-[#666666] text-white h-full relative z-10 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Drawer Header (Close Button) */}
          <div className="p-4 flex justify-between items-center bg-[#555555]">
            <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-1">
               <span className="text-xl font-black text-white font-tamil drop-shadow-sm tracking-wider">நியூஸ் டெய்லி</span>
            </Link>
            <button 
              onClick={() => setMenuOpen(false)} 
              className="p-1.5 hover:bg-gray-600 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-300 hover:text-white"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          {/* Drawer Menu Items */}
          <div className="flex-1 overflow-y-auto scrollbar-hide py-2 px-6">
            {sidebarItems.map(item => (
              <div key={item.id} className="border-b border-gray-500/30">
                {item.hasSub ? (
                  <div>
                    <button 
                      onClick={() => toggleSubmenu(item.id)}
                      className="w-full py-3.5 flex items-center justify-between font-serif font-bold tracking-wide hover:text-amber-400 transition-colors text-[17px] text-left focus:outline-none"
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform duration-300 ${expandedItems[item.id] ? 'rotate-180 text-amber-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Submenu Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItems[item.id] ? 'max-h-48 opacity-100 mb-3' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pl-4 border-l border-gray-500/50 space-y-3 pt-1">
                        <Link to={`/category/${item.id}`} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Latest {item.label}</Link>
                        <Link to={`/category/${item.id}`} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Trending</Link>
                        <Link to={`/category/${item.id}`} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Editor's Pick</Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.to || '/'}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 font-serif font-bold tracking-wide hover:text-amber-400 transition-colors text-[17px]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar Footer (Socials) */}
          <div className="p-6 border-t border-gray-500/30 mt-auto bg-[#5c5c5c] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
             <SocialIcons />
             <p className="text-gray-400 text-xs mt-4">© 2024 News Daily. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
