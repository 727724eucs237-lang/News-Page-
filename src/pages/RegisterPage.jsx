import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function RegisterPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-red-700 rounded-xl mx-auto flex items-center justify-center mb-4">
            <span className="text-white font-black text-2xl">N</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{t('auth_register_title')}</h1>
          <p className="text-gray-500 text-sm mt-1">Join News Daily to save articles and comment</p>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('auth_name')}</label>
            <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('auth_email')}</label>
            <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('auth_password')}</label>
            <input type="password" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
          </div>
          
          <button type="submit" className="w-full py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl transition-colors shadow-md mt-6">
            {t('auth_register_btn')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          {t('auth_have_account')} <Link to="/login" className="text-red-700 font-bold hover:underline">{t('nav_login')}</Link>
        </p>
      </div>
    </div>
  );
}
