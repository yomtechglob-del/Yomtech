import React from 'react';
import { Link } from 'react-router-dom';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import { TEAM_SPOTLIGHTS, COMMUNITY_TESTIMONIALS } from '../../../data/insightsData';
import { User, Award, Quote, Star, Sparkles } from 'lucide-react';

export const TeamSpotlightPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>People, Culture &amp; Innovation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Team Spotlight <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Storytelling</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Meet the engineers, leaders, mentors, and architects driving technological advancement across YomTech Global.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_SPOTLIGHTS.map((t) => (
            <div key={t.id} className="bg-white rounded-3xl border border-slate-200/90 p-8 space-y-5 shadow-sm hover:border-[#1E90FF] transition-all">
              <div className="flex items-center gap-6">
                <img src={t.photo} alt={t.name} className="w-24 h-24 rounded-2xl object-cover shadow-md border border-slate-200 shrink-0" />
                <div>
                  <h3 className="text-xl font-black text-slate-900">{t.name}</h3>
                  <div className="text-xs font-black text-[#1E90FF]">{t.role}</div>
                  <div className="text-[11px] text-slate-400 font-semibold">{t.department}</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{t.bio}</p>
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs italic font-semibold text-[#1E90FF]">
                "{t.quote}"
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Community Voice &amp; Reviews</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Client &amp; Learner <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Testimonials</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Stories from enterprise clients, WabiSkills academy graduates, and government agency partners.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMUNITY_TESTIMONIALS.map((test) => (
            <div key={test.id} className="bg-white rounded-3xl border border-slate-200/90 p-7 space-y-4 shadow-sm hover:border-[#0ED3DD] transition-all">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(test.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">"{test.quote}"</p>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <div>
                  <div className="font-extrabold text-sm text-slate-900">{test.name}</div>
                  <div className="text-xs text-slate-400 font-bold">{test.org}</div>
                </div>
                <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-[#1E90FF] text-[10px] font-black rounded-lg">{test.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
