import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('nd_lang') || 'en');

  useEffect(() => {
    localStorage.setItem('nd_lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const t = (key) => {
    if (!translations[key]) return key;
    return translations[key][lang] || translations[key]['en'] || key;
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ta' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      <div className={lang === 'ta' ? 'font-tamil' : 'font-inter'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
