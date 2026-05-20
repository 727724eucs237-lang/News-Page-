import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockArticles, mockAuthors } from '../utils/mockData';
import NewsCard from '../components/NewsCard';
import SectionHeader from '../components/SectionHeader';
import EmptyState from '../components/EmptyState';
import { timeAgo, formatViews } from '../utils/helpers';

export default function SingleNewsPage() {
  const { id } = useParams();
  const { lang, t } = useLanguage();
  
  const article = mockArticles.find(a => a.id === parseInt(id));
  
  if (!article) {
    return <EmptyState />;
  }

  const author = mockAuthors.find(a => a.id === article.authorId) || mockAuthors[0];
  const title = lang === 'ta' ? article.titleTa : article.title;
  const related = mockArticles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6">
        <Link to={'/category/' + article.category} className="text-red-700 font-bold text-sm uppercase tracking-wider hover:underline">
          {t('cat_' + article.category)}
        </Link>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-y border-gray-200 py-4">
          <Link to={'/author/' + author.id} className="flex items-center gap-2 group">
            <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full group-hover:ring-2 ring-red-700 transition-all" />
            <div className="font-semibold text-gray-900 group-hover:text-red-700">{author.name}</div>
          </Link>
          <div className="hidden sm:block text-gray-300">|</div>
          <div>{t('published')}: {timeAgo(article.date, lang)}</div>
          <div className="hidden sm:block text-gray-300">|</div>
          <div>{article.readTime} {t('min_read')}</div>
          <div className="hidden sm:block text-gray-300">|</div>
          <div>{formatViews(article.views)} {t('views')}</div>
        </div>
      </div>

      <div className="mb-8">
        <img src={article.image} alt={title} className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-md" />
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 mb-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <h3>Subheading for Context</h3>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>

      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <SectionHeader titleKey="related_news" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map(a => <NewsCard key={a.id} article={a} variant="small" />)}
          </div>
        </div>
      )}
    </div>
  );
}
