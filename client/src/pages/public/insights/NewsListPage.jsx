import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import { NEWS_ITEMS } from '../../../data/insightsData';
import { Search, Filter, Calendar, User, ArrowRight, Tag, Sparkles } from 'lucide-react';

import { fetchPublicCmsCategoryApi } from '../../../services/api';

export const NewsListPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('ALL');
  const isArticleVisibleAndPublished = (a) => {
    const isCat = ['Corporate News & Articles', 'Corporate News', 'Enterprise News', 'Services & Products Matrix'].includes(a.category);
    const vis = (a.visibility || '').toUpperCase();
    const stat = (a.status || '').toLowerCase();
    const isVis = vis === 'VISIBLE' || vis === 'PUBLIC';
    const isPub = stat === 'published';
    return isCat && isVis && isPub;
  };

  const [liveNewsPool, setLiveNewsPool] = useState(() => {
    const saved = localStorage.getItem('yomtech_cms_articles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter(isArticleVisibleAndPublished);
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
        const res = await fetchPublicCmsCategoryApi('articles');
        if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          const apiArticles = res.data.data.filter(isArticleVisibleAndPublished);
          setLiveNewsPool(apiArticles);
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
            setLiveNewsPool(parsed.filter(isArticleVisibleAndPublished));
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
            <div key={news.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1E90FF]/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={news.coverImage} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md border border-slate-200 text-[#1E90FF] text-[10px] font-black rounded-lg">
                    {news.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>{news.publishedDate}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 line-clamp-2 leading-snug group-hover:text-[#1E90FF] transition-colors">{news.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-medium">{news.summary}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to={`/news/articles/${news.slug}`} className="text-xs font-black text-[#1E90FF] hover:underline flex items-center gap-1.5">
                  <span>Read News Story</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const NewsDetailPage = () => {
  const news = NEWS_ITEMS[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-4 space-y-6">
        <span className="px-3.5 py-1 bg-blue-50 border border-blue-200 text-[#1E90FF] font-black text-xs rounded-xl">{news.category}</span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight text-slate-900">{news.title}</h1>
        <div className="text-xs text-slate-400 font-bold flex items-center gap-4">
          <span>By {news.author}</span>
          <span>&bull;</span>
          <span>{news.publishedDate}</span>
        </div>

        <img src={news.coverImage} alt={news.title} className="w-full h-96 object-cover rounded-3xl shadow-md border border-slate-200" />

        <div className="prose text-xs sm:text-sm leading-relaxed space-y-4 font-medium pt-4 text-slate-700">
          <p>{news.summary}</p>
          <p>YomTech Global continues to drive pan-African software development, enterprise ERP integrations, and technical talent pipelines.</p>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <Link to="/news/articles" className="text-xs font-black text-[#1E90FF] hover:underline">&larr; Back to Corporate News</Link>
        </div>
      </section>
    </div>
  );
};
