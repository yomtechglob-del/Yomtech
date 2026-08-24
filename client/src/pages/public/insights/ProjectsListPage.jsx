import React from 'react';
import { Link } from 'react-router-dom';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import { ANNOUNCEMENTS, PROJECTS_CASE_STUDIES } from '../../../data/insightsData';
import { Bell, ArrowRight, Layers, CheckCircle2, Code2, Cpu, Sparkles } from 'lucide-react';

export const AnnouncementsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Official Bulletins &amp; Product Updates</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Platform &amp; Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Announcements</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Product releases, system upgrades, strategic partnerships, and official policy notices from YomTech Global leadership.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {ANNOUNCEMENTS.map((ann) => (
          <div key={ann.id} className="bg-white rounded-3xl border border-slate-200/90 p-7 space-y-3 shadow-sm hover:border-[#0ED3DD] transition-all">
            <div className="flex justify-between items-center text-xs font-black">
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-xl text-[10px] uppercase font-black">{ann.priority}</span>
              <span className="text-slate-400">{ann.date}</span>
            </div>
            <h3 className="font-extrabold text-base text-slate-900">{ann.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">{ann.summary}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export const ProjectsListPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>Engineering Showcase &amp; Impact</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Featured Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Case Studies</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Real-world enterprise solutions engineered for Space Science &amp; Geospatial Institute (SSGI), INSA, MInT, Bunna Bank, and private sector leaders.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_CASE_STUDIES.map((proj) => (
            <div key={proj.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm p-7 space-y-5 flex flex-col justify-between hover:border-[#1E90FF] hover:shadow-xl transition-all duration-300">
              <div className="space-y-3">
                <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-[#1E90FF] text-[10px] font-black rounded-lg uppercase">{proj.industry}</span>
                <h3 className="text-xl font-black text-slate-900">{proj.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  <strong>Challenge:</strong> {proj.challenge}
                </p>
                <p className="text-xs text-emerald-600 font-bold">
                  <strong>Results:</strong> {proj.results}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-100 text-[10px] font-bold text-slate-700 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to={`/news/projects/${proj.slug}`} className="text-xs font-black text-[#1E90FF] hover:underline flex items-center gap-1.5">
                  <span>Case Study</span>
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

export const ProjectDetailPage = () => {
  const proj = PROJECTS_CASE_STUDIES[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-4 space-y-6">
        <span className="px-3.5 py-1 bg-cyan-50 border border-cyan-200 text-[#1E90FF] font-black text-xs rounded-xl">{proj.industry}</span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight text-slate-900">{proj.name}</h1>
        <div className="text-xs text-slate-400 font-bold">Client: <span className="text-[#1E90FF] font-black">{proj.client}</span></div>

        <img src={proj.coverImage} alt={proj.name} className="w-full h-96 object-cover rounded-3xl shadow-md border border-slate-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-2">
            <h3 className="font-extrabold text-sm text-[#1E90FF]">The Challenge</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">{proj.challenge}</p>
          </div>
          <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-200/80 space-y-2">
            <h3 className="font-extrabold text-sm text-[#1E90FF]">The Solution</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">{proj.solution}</p>
          </div>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-slate-200/90 space-y-3 shadow-sm">
          <h3 className="font-extrabold text-sm text-emerald-600">Results &amp; Impact</h3>
          <p className="text-xs font-bold text-slate-700">{proj.results}</p>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <Link to="/news/projects" className="text-xs font-black text-[#1E90FF] hover:underline">&larr; Back to Case Studies</Link>
        </div>
      </section>
    </div>
  );
};
