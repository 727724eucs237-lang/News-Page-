import { useLanguage } from '../context/LanguageContext';
import { categories } from '../utils/mockData';
import CategoryCard from '../components/CategoryCard';
import SectionHeader from '../components/SectionHeader';

export default function CategoryShortcuts() {
  const { t } = useLanguage();
  return (
    <section className="mb-12">
      <SectionHeader titleKey="section_categories" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
        {categories.map(cat => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
