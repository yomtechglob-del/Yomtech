import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import { NEWS_ITEMS } from '../../../data/insightsData';
import { Search, Filter, Calendar, User, ArrowRight, Tag, Sparkles } from 'lucide-react';

import { fetchPublicCmsCategoryApi } from '../../../services/api';

export const NewsListPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('ALL');
  const [bookmarksMap, setBookmarksMap] = useState({});
  const [likesMap, setLikesMap] = useState({});
  const [readingNewsModal, setReadingNewsModal] = useState(null);

  const handleToggleBookmark = (id, title) => {
    setBookmarksMap((prev) => {
      const isB = !prev[id];
      return { ...prev, [id]: isB };
    });
  };
  const isArticleVisibleAndPublished = (a) => {
    const vis = (a.visibility || 'VISIBLE').toUpperCase();
    const stat = (a.status || 'PUBLISHED').toUpperCase();
    const isVis = vis === 'VISIBLE' || vis === 'PUBLIC';
    const isPub = stat === 'PUBLISHED';
    return isVis && isPub;
  };

  const formatItemForNews = (a, idx) => ({
    id: a.id || `news-${idx}`,
    title: a.title || 'Untitled News Story',
    slug: a.id || a.slug || `story-${idx}`,
    category: a.category || 'Corporate News & Articles',
    date: a.publishedDate || (a.createdAt ? new Date(a.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'AUG 2026'),
    readTime: a.readTime || '6 min read',
    author: a.author || 'Editorial Team',
    coverImage: a.coverImage || NEWS_ITEMS[idx % NEWS_ITEMS.length]?.coverImage,
    excerpt: a.summary || a.excerpt || a.fullContent || a.content || 'YomTech Global corporate news release.',
    views: a.views || '450',
    commentsCount: a.commentsCount || 12,
    client: a.client || null,
    fullContent: a.fullContent || a.content || ''
  });

  const [liveNewsPool, setLiveNewsPool] = useState(() => {
    const saved = localStorage.getItem('yomtech_cms_articles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const custom = parsed.filter(isArticleVisibleAndPublished).map(formatItemForNews);
          if (custom.length > 0) return [...custom, ...NEWS_ITEMS];
        }
      } catch (e) {
        console.error(e);
      }
    }
    return NEWS_ITEMS;
  });

  React.useEffect(() => {
    const fetchFromApi = async () => {
      try {
        const res = await fetchPublicCmsCategoryApi('all');
        if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          const apiArticles = res.data.data.filter(isArticleVisibleAndPublished).map(formatItemForNews);
          setLiveNewsPool(apiArticles.length > 0 ? [...apiArticles, ...NEWS_ITEMS] : NEWS_ITEMS);
        }
      } catch (err) {
        console.error('Failed to fetch public articles from API:', err);
      }
    };

    fetchFromApi();

    const syncNews = () => {
      const saved = localStorage.getItem('yomtech_cms_articles');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            const custom = parsed.filter(isArticleVisibleAndPublished).map(formatItemForNews);
            setLiveNewsPool(custom.length > 0 ? [...custom, ...NEWS_ITEMS] : NEWS_ITEMS);
          }
        } catch (e) {
          console.error(e);
        }
      }
    };
    window.addEventListener('cmsArticlesUpdated', syncNews);
    window.addEventListener('storage', syncNews);
    return () => {
      window.removeEventListener('cmsArticlesUpdated', syncNews);
      window.removeEventListener('storage', syncNews);
    };
  }, []);

  const newsItemsToUse = liveNewsPool.map((item, idx) => ({
    id: item.id || `news-${idx}`,
    title: item.title,
    slug: item.id || item.slug || `news-${idx}`,
    category: item.category || 'Corporate News',
    publishedDate: item.publishedDate || item.date || 'AUG 2026',
    author: item.author || 'YomTech Newsroom',
    coverImage: item.coverImage || NEWS_ITEMS[idx % NEWS_ITEMS.length]?.coverImage,
    summary: item.summary || item.excerpt || item.fullContent || 'YomTech Global corporate news release.',
    client: item.client
  }));

  const filteredNews = newsItemsToUse.filter((item) => {
    const matchesCat =
      selectedCat === 'ALL' ||
      (item.category && item.category.toLowerCase().includes(selectedCat.toLowerCase())) ||
      (selectedCat.toLowerCase().includes('news') && (item.category || '').toLowerCase().includes('news'));
    const q = search.toLowerCase();
    const matchesSearch = (item.title || '').toLowerCase().includes(q) || (item.summary || '').toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="px-4 py-1.5 bg-white/10 border border-white/20 text-[#0ED3DD] font-black text-xs rounded-full uppercase tracking-wider">
            YomTech Corporate News
          </span>
          <h1 className="text-4xl sm:text-6xl font-black">Official Company News</h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Company updates, tech launches, enterprise partnerships, and corporate announcements across East Africa.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-xs rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#0ED3DD]"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={16} className="text-slate-400" />
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="px-4 py-3 text-xs font-bold rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none"
            >
              <option value="ALL">All Categories</option>
              <option value="Corporate News & Articles">Corporate News &amp; Articles</option>
              <option value="Services & Products Matrix">Services &amp; Products Matrix</option>
              <option value="Tech Articles & Engineering">Tech Articles &amp; Engineering</option>
              <option value="Upcoming Events & Webinars">Upcoming Events &amp; Webinars</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              onClick={() => {
                setLikesMap((prev) => ({ ...prev, [news.id]: (prev[news.id] || 450) + 1 }));
                setReadingNewsModal(news);
              }}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1E90FF]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={news.coverImage} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md border border-slate-200 text-[#1E90FF] text-[10px] font-black rounded-lg">
                    {news.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-bold text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>{news.publishedDate}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleToggleBookmark(news.id, news.title); }}>
                        {bookmarksMap[news.id] ? '🔖' : '🔖'}
                      </span>
                      <span>👁 {likesMap[news.id] || 450}</span>
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 line-clamp-2 leading-snug group-hover:text-[#1E90FF] transition-colors">{news.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-medium">{news.summary}</p>
                </div>
              </div>
              <div className="p-6 pt-0 flex justify-between items-center">
                <Link to={`/news/articles/${news.slug}`} onClick={(e) => e.stopPropagation()} className="text-xs font-black text-[#1E90FF] hover:underline flex items-center gap-1.5">
                  <span>Read Full Story</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {readingNewsModal && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white text-slate-900 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl border border-blue-100 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setReadingNewsModal(null)} className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 text-[#1E90FF] hover:bg-blue-100 font-bold">
              ✕
            </button>
            <div className="space-y-3">
              <span className="px-3 py-1 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded-lg uppercase">{readingNewsModal.category}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">{readingNewsModal.title}</h2>
              <div className="text-xs text-slate-400 font-bold">{readingNewsModal.publishedDate} &bull; By {readingNewsModal.author || 'YomTech Newsroom'}</div>
            </div>
            {readingNewsModal.coverImage && (
              <img src={readingNewsModal.coverImage} alt={readingNewsModal.title} className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-sm" />
            )}
            <div className="space-y-4 text-slate-700 text-sm leading-relaxed font-medium">
              <p className="font-bold text-slate-900">{readingNewsModal.summary}</p>
              <div className="whitespace-pre-line text-slate-600 font-normal">{readingNewsModal.fullContent || readingNewsModal.summary}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import { useParams } from 'react-router-dom';

export const NewsDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  React.useEffect(() => {
    const fetchArticleDetail = async () => {
      const saved = localStorage.getItem('yomtech_cms_articles');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const matched = parsed.find((a) => a.id === slug || a.slug === slug || a.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(slug?.toLowerCase()));
          if (matched) {
            setArticle(matched);
            return;
          }
        } catch (e) {
          console.error(e);
        }
      }

      try {
        const res = await fetchPublicCmsCategoryApi('all');
        if (res.data?.success && Array.isArray(res.data.data)) {
          const found = res.data.data.find((a) => a.id === slug || a.slug === slug || a.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(slug?.toLowerCase()));
          if (found) {
            setArticle(found);
            return;
          }
        }
      } catch (err) {
        console.error(err);
      }

      const staticMatch = NEWS_ITEMS.find((n) => n.slug === slug || n.id === slug) || NEWS_ITEMS[0];
      setArticle(staticMatch);
    };
    fetchArticleDetail();
  }, [slug]);

  const target = article || NEWS_ITEMS[0];
  const coverImg = target.coverImage || target.image || NEWS_ITEMS[0].coverImage;
  const bodyText = target.fullContent || target.content || target.summary || target.excerpt || 'YomTech Global continues to drive pan-African software development, enterprise ERP integrations, and technical talent pipelines across East Africa.';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <span className="px-3.5 py-1 bg-[#1E90FF]/10 border border-[#1E90FF]/30 text-[#1E90FF] font-black text-xs rounded-xl uppercase">
          {target.category || 'Corporate News'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight text-slate-900">{target.title}</h1>
        <div className="text-xs text-slate-400 font-bold flex items-center gap-4 border-b border-slate-200 pb-4">
          <span>By {target.author || 'Editorial Team'}</span>
          <span>&bull;</span>
          <span>{target.publishedDate || target.date || 'August 2026'}</span>
          {target.readTime && (
            <>
              <span>&bull;</span>
              <span>{target.readTime}</span>
            </>
          )}
        </div>

        {/* Video Player or High-Res Cover Image */}
        {target.videoUrl ? (
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-lg border border-slate-200">
            {target.videoUrl.includes('youtube.com') ? (
              <iframe
                src={target.videoUrl.replace('watch?v=', 'embed/')}
                title={target.title}
                className="w-full h-full border-0"
                allowFullScreen
              />
            ) : (
              <video src={target.videoUrl} controls poster={coverImg} className="w-full h-full object-cover" />
            )}
          </div>
        ) : (
          <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 max-h-[500px]">
            <img src={coverImg} alt={target.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose text-sm sm:text-base leading-relaxed space-y-4 font-medium pt-4 text-slate-700">
          <p className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug">{target.summary}</p>
          <div className="whitespace-pre-line text-slate-600 font-sans space-y-3">
            {bodyText}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <Link to="/news/articles" className="text-xs font-black text-[#1E90FF] hover:underline flex items-center gap-2">
            <span>&larr; Return to All Corporate News</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
