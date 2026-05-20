import { useLanguage } from '../context/LanguageContext';
import { mockWelfare } from '../utils/mockData';
import SectionHeader from '../components/SectionHeader';
import { timeAgo } from '../utils/helpers';

export default function WelfareSection() {
  const { lang } = useLanguage();
  return (
    <section className="mb-12">
      <SectionHeader titleKey="section_welfare" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWelfare.map(item => {
          const title = lang === 'ta' ? item.titleTa : item.title;
          return (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-gray-100">
              <div className="relative h-44 overflow-hidden">
                <img src={item.image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 font-bold text-sm leading-snug line-clamp-2 mb-2 group-hover:text-amber-600 transition-colors">{title}</h3>
                <p className="text-gray-400 text-xs">{timeAgo(item.date, lang)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
