import React, { useState } from 'react';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import { FAQS, PHOTO_GALLERY, VIDEO_GALLERY, MEDIA_APPEARANCES, PRESS_RELEASES } from '../../../data/insightsData';
import { ChevronDown, ExternalLink, Download, Search, Play, Sparkles } from 'lucide-react';

export const FaqPage = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Support &amp; Help Center</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Questions</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Find immediate answers regarding YomTech software development services, WabiSkills academy, Yomnex ERP, and enterprise consulting.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={faq.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm">
            <button onClick={() => setActiveIdx(activeIdx === idx ? null : idx)} className="w-full p-6 text-left font-extrabold text-sm flex justify-between items-center text-slate-900">
              <span>{faq.question}</span>
              <ChevronDown size={20} className={`transition-transform duration-300 ${activeIdx === idx ? 'rotate-180 text-[#1E90FF]' : ''}`} />
            </button>
            {activeIdx === idx && (
              <div className="px-6 pb-6 text-xs text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export const PhotoGalleryPage = () => {
  const [selectedCat, setSelectedCat] = useState('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ['ALL', 'Academy', 'Team', 'Partnerships', 'Events', 'Media', 'Engineering', 'Security'];

  const filteredPhotos = PHOTO_GALLERY.filter(img => selectedCat === 'ALL' || img.category === selectedCat);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Official Photo Gallery Archive</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Full Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Gallery</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Browse our complete high-resolution photography collection showcasing corporate events, engineering workshops, WabiSkills hackathons, and executive summits.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  selectedCat === cat
                    ? 'bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white shadow-lg scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredPhotos.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedPhoto(img)}
              className="relative rounded-3xl overflow-hidden h-64 shadow-sm hover:shadow-2xl border border-slate-200 group cursor-pointer bg-white"
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-white space-y-1">
                <span className="px-2.5 py-0.5 bg-[#1E90FF] text-white text-[10px] font-black rounded-md w-max uppercase">{img.category}</span>
                <h4 className="font-extrabold text-sm leading-snug">{img.caption}</h4>
                <p className="text-[11px] text-slate-300 font-medium line-clamp-1">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 border border-blue-100">
            <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 p-2.5 rounded-full bg-blue-50 hover:bg-blue-100 text-[#1E90FF] z-10 font-bold">
              ✕
            </button>
            <img src={selectedPhoto.src} alt={selectedPhoto.caption} className="w-full h-[450px] object-cover rounded-2xl" />
            <div className="space-y-1">
              <span className="px-3 py-1 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded-lg uppercase">{selectedPhoto.category}</span>
              <h4 className="font-black text-lg text-slate-900">{selectedPhoto.caption}</h4>
              <p className="text-xs text-slate-500 font-medium">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const VideoGalleryPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Yomtech Media Productions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Video &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Documentary Hub</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Documentaries, engineering tutorials, product demos, and keynote recordings produced by Yomtech Media.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEO_GALLERY.map((vid) => (
            <div key={vid.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm">
              <div className="relative h-60 bg-slate-900 flex items-center justify-center group">
                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={26} className="ml-1" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-black text-[#1E90FF]">{vid.category} &bull; {vid.duration}</span>
                <h3 className="font-extrabold text-base text-slate-900">{vid.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const MediaAppearancesPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>External Media Coverage</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Media Appearances &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Interviews</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Television interviews, radio broadcasts, tech magazine features, and external news coverage of YomTech Global leadership.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {MEDIA_APPEARANCES.map((m) => (
          <div key={m.id} className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex items-center justify-between shadow-sm hover:border-[#1E90FF] transition-all">
            <div className="space-y-1.5">
              <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-[#1E90FF] text-[10px] font-black rounded-lg">{m.type}</span>
              <h3 className="font-extrabold text-base text-slate-900">{m.title}</h3>
              <div className="text-xs text-slate-400 font-medium">{m.org} &bull; {m.date}</div>
            </div>
            <a href={m.url} target="_blank" rel="noreferrer" className="p-3 text-[#1E90FF] hover:scale-110 transition-transform">
              <ExternalLink size={22} />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export const PressCenterPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Corporate Communications</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Press Center</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Official press releases, media kits, corporate statements, and executive logos for journalists and media partners.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {PRESS_RELEASES.map((pr) => (
          <div key={pr.id} className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex items-center justify-between shadow-sm hover:border-[#0ED3DD] transition-all">
            <div className="space-y-1.5">
              <h3 className="font-extrabold text-base text-slate-900">{pr.title}</h3>
              <p className="text-xs text-slate-500 font-medium">{pr.summary}</p>
            </div>
            <span className="text-xs font-black text-[#1E90FF]">{pr.date}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export const GlobalSearchPage = () => {
  const [q, setQ] = useState('');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Unified Ecosystem Search</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">News Search</span>
          </h1>

          <div className="relative max-w-xl mx-auto pt-2">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
            <input
              type="text"
              placeholder="Search across news, articles, case studies, events..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full pl-14 pr-6 py-4 text-sm rounded-3xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:border-[#0ED3DD] shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
