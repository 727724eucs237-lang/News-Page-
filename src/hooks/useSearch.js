import { useState, useCallback } from 'react';
import { mockArticles } from '../utils/mockData';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const search = useCallback((q) => {
    const term = q.trim().toLowerCase();
    setQuery(q);
    if (!term) { setResults([]); setSearched(false); return; }
    const found = mockArticles.filter(a =>
      a.title.toLowerCase().includes(term) ||
      a.titleTa.toLowerCase().includes(term) ||
      a.category.toLowerCase().includes(term) ||
      a.district.toLowerCase().includes(term) ||
      a.excerpt.toLowerCase().includes(term)
    );
    setResults(found);
    setSearched(true);
  }, []);

  return { query, setQuery, results, searched, search };
}
