import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const socials = [
  { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: '#' },
  { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: '#' },
  { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zm-11.4 7.15V10.5l5.5 3.07-5.5 3z', href: '#' },
  { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z', href: '#' },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-blue-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">N</span>
              </div>
              <span className="font-black text-xl"><span className="text-white">News</span><span className="text-amber-400">Daily</span></span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">{t('footer_tagline')}</p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.name} href={s.href}
                  className="w-9 h-9 rounded-lg bg-blue-800 hover:bg-red-700 flex items-center justify-center transition-colors duration-200"
                  aria-label={s.name}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 uppercase text-sm tracking-wide">{t('footer_quicklinks')}</h4>
            <ul className="space-y-2">
              {[
                { to: '/', key: 'nav_home' },
                { to: '/category/politics', key: 'cat_politics' },
                { to: '/category/sports', key: 'cat_sports' },
                { to: '/videos', key: 'nav_videos' },
                { to: '/gallery', key: 'nav_gallery' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-blue-200 hover:text-amber-400 text-sm transition-colors duration-150 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Districts */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 uppercase text-sm tracking-wide">{t('section_districts')}</h4>
            <ul className="space-y-2">
              {['chennai','coimbatore','madurai','trichy','salem','vellore'].map(d => (
                <li key={d}>
                  <Link to={'/district/' + d} className="text-blue-200 hover:text-amber-400 text-sm transition-colors duration-150 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                    {t('dist_' + d)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 uppercase text-sm tracking-wide">{t('footer_legal')}</h4>
            <ul className="space-y-2 mb-6">
              {[
                { to: '/about', key: 'footer_about' },
                { to: '/contact', key: 'nav_contact' },
                { to: '/privacy', key: 'footer_privacy' },
                { to: '/terms', key: 'footer_terms' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-blue-200 hover:text-amber-400 text-sm transition-colors duration-150 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-blue-300 text-xs space-y-1">
              <p>📧 contact@newsdaily.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 py-4 px-4">
        <p className="text-center text-blue-300 text-xs">{t('footer_copyright')}</p>
      </div>
    </footer>
  );
}
