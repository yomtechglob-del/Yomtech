import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import { BLOG_ARTICLES } from '../../../data/insightsData';
import { Search, Filter, BookOpen, Clock, User, ArrowRight, Share2, Bookmark, Sparkles } from 'lucide-react';

import { fetchPublicCmsCategoryApi } from '../../../services/api';

export const BlogListPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('ALL');

  const isBlogVisibleAndPublished = (a) => {
    const isCat = ['Tech Articles & Engineering', 'Tech Articles', 'Engineering', 'Blog'].includes(a.category);
    const vis = (a.visibility || 'VISIBLE').toUpperCase();
    const stat = (a.status || 'PUBLISHED').toUpperCase();
    return isCat && (vis === 'VISIBLE' || vis === 'PUBLIC') && stat === 'PUBLISHED';
  };

  const formatBlogItem = (item, idx) => ({
    id: item.id || `blog-${idx}`,
    title: item.title,
    slug: item.id || item.slug || `blog-${idx}`,
    category: item.category || 'Tech Articles & Engineering',
    publishedDate: item.publishedDate || item.date || (item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'AUG 2026'),
    author: item.author || 'YomTech Engineering Team',
    readTime: item.readTime || '8 min read',
    coverImage: item.coverImage || BLOG_ARTICLES[idx % BLOG_ARTICLES.length]?.coverImage,
    excerpt: item.summary || item.excerpt || item.fullContent || 'Engineering research paper by YomTech Global.',
    views: item.views || '2.4k'
  });

  const [liveBlogPool, setLiveBlogPool] = useState(() => {
    const saved = localStorage.getItem('yomtech_cms_articles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const custom = parsed.filter(isBlogVisibleAndPublished).map(formatBlogItem);
          if (custom.length > 0) return custom;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return BLOG_ARTICLES;
  });

  React.useEffect(() => {
    const fetchFromApi = async () => {
      try {
        const res = await fetchPublicCmsCategoryApi('all');
        if (res.data?.success && Array.isArray(res.data.data)) {
          const apiBlogs = res.data.data.filter(isBlogVisibleAndPublished).map(formatBlogItem);
          setLiveBlogPool(apiBlogs.length > 0 ? apiBlogs : BLOG_ARTICLES);
        }
      } catch (err) {
        console.error('Failed to fetch blog articles from API:', err);
      }
    };

    fetchFromApi();

    const syncBlog = () => {
      const saved = localStorage.getItem('yomtech_cms_articles');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            const custom = parsed.filter(isBlogVisibleAndPublished).map(formatBlogItem);
            setLiveBlogPool(custom.length > 0 ? [...custom, ...BLOG_ARTICLES] : BLOG_ARTICLES);
          }
        } catch (e) {
          console.error(e);
        }
      }
    };
    window.addEventListener('cmsArticlesUpdated', syncBlog);
    window.addEventListener('storage', syncBlog);
    return () => {
      window.removeEventListener('cmsArticlesUpdated', syncBlog);
      window.removeEventListener('storage', syncBlog);
    };
  }, []);

  const blogItemsToUse = liveBlogPool.map((item, idx) => ({
    id: item.id || `blog-${idx}`,
    title: item.title,
    slug: item.id || item.slug || `blog-${idx}`,
    category: item.category || 'Tech Articles & Engineering',
    publishedDate: item.publishedDate || item.date || 'AUG 2026',
    author: item.author || 'YomTech Engineering Team',
    readTime: item.readTime || '8 min read',
    coverImage: item.coverImage || BLOG_ARTICLES[idx % BLOG_ARTICLES.length]?.coverImage,
    excerpt: item.summary || item.excerpt || item.fullContent || 'Engineering research paper by YomTech Global.',
    views: '2.4k'
  }));

  const filtered = blogItemsToUse.filter((art) => {
    const matchesCat = selectedCat === 'ALL' || art.category === selectedCat;
    const q = search.toLowerCase();
    const matchesSearch = (art.title || '').toLowerCase().includes(q) || (art.excerpt || '').toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Engineering Knowledge &amp; Research</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Articles &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Tech Blog</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Software engineering, AI research, cloud architecture, cybersecurity, and product design insights from YomTech engineers.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search engineering blog..."
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
              <option value="Software Engineering">Software Engineering</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((art) => (
            <div key={art.id} className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4 shadow-sm hover:border-[#0ED3DD] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-[#1E90FF] text-[10px] font-black rounded-lg uppercase">{art.category}</span>
                <h3 className="font-extrabold text-base text-slate-900 leading-snug">{art.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{art.excerpt}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400">
                <span>By {art.author}</span>
                <Link to={`/news/blog/${art.slug}`} className="text-[#1E90FF] hover:underline flex items-center gap-1">
                  <span>Read Article</span>
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

import { useParams } from 'react-router-dom';

export const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  React.useEffect(() => {
    const fetchBlogDetail = async () => {
      const saved = localStorage.getItem('yomtech_cms_articles');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const matched = parsed.find((a) => a.id === slug || a.slug === slug || a.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(slug?.toLowerCase()));
          if (matched) {
            setBlog(matched);
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
            setBlog(found);
            return;
          }
        }
      } catch (err) {
        console.error(err);
      }

      const staticMatch = BLOG_ARTICLES.find((n) => n.slug === slug || n.id === slug) || BLOG_ARTICLES[0];
      setBlog(staticMatch);
    };
    fetchBlogDetail();
  }, [slug]);

  const article = blog || BLOG_ARTICLES[0];
  const coverImg = article.coverImage || article.image || BLOG_ARTICLES[0].coverImage;
  const bodyText = article.fullContent || article.content || article.summary || article.excerpt || 'Engineering research paper by YomTech Global.';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <span className="px-3.5 py-1 bg-cyan-50 border border-cyan-200 text-[#1E90FF] font-black text-xs rounded-xl uppercase">
          {article.category || 'Tech Articles & Engineering'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight text-slate-900">{article.title}</h1>
        <p className="text-base text-slate-600 font-medium leading-relaxed">{article.summary || article.excerpt}</p>

        <div className="flex items-center justify-between border-y border-slate-200 py-3.5 text-xs font-bold text-slate-500">
          <div>By <span className="text-[#1E90FF] font-black">{article.author || 'YomTech Engineering Team'}</span></div>
          <div>{article.publishedDate || article.date || 'August 2026'} &bull; {article.readTime || '8 min read'}</div>
        </div>

        {article.videoUrl ? (
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-lg border border-slate-200">
            {article.videoUrl.includes('youtube.com') ? (
              <iframe
                src={article.videoUrl.replace('watch?v=', 'embed/')}
                title={article.title}
                className="w-full h-full border-0"
                allowFullScreen
              />
            ) : (
              <video src={article.videoUrl} controls poster={coverImg} className="w-full h-full object-cover" />
            )}
          </div>
        ) : (
          <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 max-h-[500px]">
            <img src={coverImg} alt={article.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="text-xs sm:text-sm leading-relaxed space-y-4 font-medium pt-4 text-slate-700 whitespace-pre-line">
          {bodyText}
        </div>

        <div className="pt-8 border-t border-slate-200 flex justify-between items-center">
          <Link to="/news/blog" className="text-xs font-black text-[#1E90FF] hover:underline">&larr; Back to Tech Articles</Link>
          <button onClick={() => alert('Article link copied!')} className="px-4 py-2.5 bg-slate-200 text-slate-800 border border-slate-300 text-xs font-extrabold rounded-xl flex items-center gap-2 hover:scale-[1.02]">
            <Share2 size={14} />
            <span>Share Article</span>
          </button>
        </div>
      </section>
    </div>
  );
};
