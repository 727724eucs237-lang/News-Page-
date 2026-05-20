import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mockGallery } from '../utils/mockData';
import GalleryCard from '../components/GalleryCard';

export default function PhotoGalleryPage() {
  const { lang, t } = useLanguage();
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-black text-gray-900 mb-8">{t('page_gallery_title')}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockGallery.map(item => (
          <GalleryCard key={item.id} item={item} onClick={setLightbox} />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in">
          <button 
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-5xl w-full">
            <img src={lightbox.image} alt={lang === 'ta' ? lightbox.titleTa : lightbox.title} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            <p className="text-white text-xl text-center mt-4 font-semibold">
              {lang === 'ta' ? lightbox.titleTa : lightbox.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
