import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto animate-fade-in py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t('page_about_title')}</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Delivering truthful, timely, and impactful news across Tamil Nadu and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded in 2024, News Daily was established with a singular vision: to bring objective and high-quality journalism to every citizen. We believe that an informed public is the foundation of a strong democracy.
          </p>
          <ul className="space-y-4">
            {[
              'Unbiased reporting and factual accuracy',
              'Comprehensive coverage of all 38 districts',
              'Deep dives into politics, economy, and culture',
              'Bilingual support to reach every reader'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-200 rounded-2xl h-80 overflow-hidden shadow-lg">
          <img src="https://picsum.photos/seed/about/800/600" alt="Newsroom" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="bg-blue-900 text-white rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-8">News Daily in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Monthly Readers', value: '5M+' },
            { label: 'Journalists', value: '150+' },
            { label: 'Districts Covered', value: '38' },
            { label: 'Articles Published', value: '10K+' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-black text-amber-400 mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
