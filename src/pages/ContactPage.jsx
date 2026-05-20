import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto animate-fade-in py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">{t('page_contact_title')}</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Have a news tip, feedback, or inquiry? Reach out to us using the form below or our contact details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('contact_name')}</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('contact_email')}</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('contact_subject')}</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('contact_message')}</label>
              <textarea rows={5} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl transition-colors shadow-md hover:shadow-lg">
              {t('contact_send')}
            </button>
          </form>
        </div>

        {/* Info & Map */}
        <div className="space-y-8">
          <div className="bg-blue-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-amber-400">Headquarters</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center shrink-0">📍</div>
                <div>
                  <h4 className="font-semibold text-blue-100">{t('contact_address')}</h4>
                  <p className="text-blue-200 text-sm mt-1 leading-relaxed">News Daily Towers,<br/>123 Anna Salai, Guindy,<br/>Chennai, Tamil Nadu 600032</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center shrink-0">📞</div>
                <div>
                  <h4 className="font-semibold text-blue-100">{t('contact_phone')}</h4>
                  <p className="text-blue-200 text-sm mt-1">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center shrink-0">✉️</div>
                <div>
                  <h4 className="font-semibold text-blue-100">Email</h4>
                  <p className="text-blue-200 text-sm mt-1">contact@newsdaily.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-48 overflow-hidden relative">
            {/* Fake map image */}
            <img src="https://picsum.photos/seed/map/800/400" alt="Map" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-gray-800 text-sm">Chennai HQ Map</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
