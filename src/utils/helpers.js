export function formatDate(dateStr, lang = 'en') {
  const date = new Date(dateStr);
  if (lang === 'ta') {
    return date.toLocaleDateString('ta-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function timeAgo(dateStr, lang = 'en') {
  const now = new Date();
  const past = new Date(dateStr);
  const diffMs = now - past;
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (lang === 'ta') {
    if (diffMin < 1) return 'இப்போதுதான்';
    if (diffMin < 60) return diffMin + ' நிமிடங்களுக்கு முன்';
    if (diffHr < 24) return diffHr + ' மணி நேரம் முன்';
    if (diffDay < 7) return diffDay + ' நாட்களுக்கு முன்';
    return formatDate(dateStr, 'ta');
  }
  if (diffMin < 1) return 'Just now';
  if (diffMin < 60) return diffMin + 'm ago';
  if (diffHr < 24) return diffHr + 'h ago';
  if (diffDay < 7) return diffDay + 'd ago';
  return formatDate(dateStr, 'en');
}

export function truncate(str, n) {
  return str && str.length > n ? str.slice(0, n) + '...' : str;
}

export function formatViews(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

export function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}
