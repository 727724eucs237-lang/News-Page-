import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function CategoryCard({ category }) {
  const { t } = useLanguage();
  const textColor = category.color.split(' ').find(c => c.startsWith('text-'));

  return (
    <Link
      to={'/category/' + category.id}
      className="group flex flex-col items-center justify-center p-2 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 bg-white h-full"
    >
      <img 
        src={category.image} 
        alt={category.id} 
        className="w-full aspect-square mb-2 object-cover group-hover:scale-105 transition-transform duration-200 drop-shadow-sm rounded-md" 
      />
      <span className={`text-xs sm:text-sm font-semibold ${textColor} text-center`}>
        {t(category.key)}
      </span>
    </Link>
  );
}
