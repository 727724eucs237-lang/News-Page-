import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useVoiceSearch } from '../hooks/useVoiceSearch';

export default function SearchBar({ compact = false, autoFocus = false }) {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleResult = (transcript) => {
    setQuery(transcript);
    navigate('/search?q=' + encodeURIComponent(transcript));
  };

  const { status, isSupported, start, stop } = useVoiceSearch(handleResult);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate('/search?q=' + encodeURIComponent(query.trim()));
  };

  useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  const isListening = status === 'listening';

  return (
    <form onSubmit={handleSubmit} className={'relative flex items-center ' + (compact ? 'w-full' : 'w-full max-w-xl')}>
      {/* Search Icon */}
      <div className="absolute left-3 text-gray-400 pointer-events-none">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={isListening ? t('voice_listening') : t('search_placeholder')}
        className={'w-full pl-9 pr-20 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ' + (isListening ? 'border-red-400 ring-2 ring-red-300' : '')}
      />

      {/* Voice Button */}
      {isSupported && (
        <button
          type="button"
          onClick={isListening ? stop : start}
          title={lang === 'ta' ? 'குரல் தேடல்' : 'Voice Search'}
          className={'absolute right-10 p-1.5 rounded-lg transition-all duration-200 ' + (isListening ? 'text-red-600 bg-red-50' : 'text-gray-500 hover:text-red-600 hover:bg-red-50')}
        >
          {isListening ? (
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <svg className="relative w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 0014 0h-2z"/>
              </svg>
            </span>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 0014 0h-2z"/>
            </svg>
          )}
        </button>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="absolute right-1.5 bg-red-700 hover:bg-red-800 text-white px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200"
      >
        {t('search_btn')}
      </button>
    </form>
  );
}
