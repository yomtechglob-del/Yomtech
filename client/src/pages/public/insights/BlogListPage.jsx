import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import { BLOG_ARTICLES } from '../../../data/insightsData';
import { Search, Filter, BookOpen, Clock, User, ArrowRight, Share2, Bookmark, Sparkles } from 'lucide-react';

export const BlogListPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('ALL');

  const filtered = BLOG_ARTICLES.filter((art) => {
    const matchesCat = selectedCat === 'ALL' || art.category === selectedCat;
    const q = search.toLowerCase();
    const matchesSearch = art.title.toLowerCase().includes(q) || art.excerpt.toLowerCase().includes(q);
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

export const BlogDetailPage = () => {
  const article = BLOG_ARTICLES[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-4 space-y-6">
        <span className="px-3.5 py-1 bg-cyan-50 border border-cyan-200 text-[#1E90FF] font-black text-xs rounded-xl">{article.category}</span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight text-slate-900">{article.title}</h1>
        <p className="text-base text-slate-600 font-medium leading-relaxed">{article.excerpt}</p>

        <div className="flex items-center justify-between border-y border-slate-200 py-3.5 text-xs font-bold text-slate-500">
          <div>By <span className="text-[#1E90FF] font-black">{article.author}</span> ({article.authorRole})</div>
          <div>{article.publishedDate} &bull; {article.readTime}</div>
        </div>

        <img src={article.coverImage} alt={article.title} className="w-full h-96 object-cover rounded-3xl shadow-md border border-slate-200" />

        {/* Table of Contents */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-3 shadow-sm">
          <div className="font-black text-xs text-[#1E90FF] uppercase tracking-widest">Table of Contents</div>
          <ul className="space-y-1.5 text-xs font-bold text-slate-700">
            {article.tableOfContents?.map((toc) => (
              <li key={toc.id}>&bull; <a href={`#${toc.id}`} className="hover:underline hover:text-[#1E90FF]">{toc.text}</a></li>
            ))}
          </ul>
        </div>

        <div className="text-xs sm:text-sm leading-relaxed space-y-4 font-medium pt-4 text-slate-700">
          <h2 id="intro" className="text-lg font-black text-slate-900">1. Introduction</h2>
          <p>Building high-concurrency microservices requires strict separation of concerns, idempotent request handling, and low-latency database queries.</p>
          
          <h2 id="caching" className="text-lg font-black text-slate-900">2. Distributed Caching Strategy</h2>
          <p>Using Redis in-memory key-value storage allows enterprise ERP pipelines to bypass database lookups for session validation and static catalogs.</p>
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
