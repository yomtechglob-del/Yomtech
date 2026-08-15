import React from 'react';
import { Building2, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomeBusinessAndTalent = () => {
  const businessServices = [
    'Enterprise Software',
    'Custom Applications',
    'Cloud Solutions',
    'Cybersecurity',
    'IT Consulting',
    'Digital Transformation',
  ];

  const talentCapabilities = [
    'AI & Machine Learning',
    'Fullstack Development',
    'UI/UX Design',
    'Data & Analytics',
    'Practical Projects',
    'Mentorship',
  ];

  return (
    <section className="py-24 sm:py-32 w-full section-track-bg relative isolate text-slate-700 overflow-hidden border-y border-slate-200 home-section section-track-border">
      {/* Background Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #475569 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }}
      />

      {/* Luminous Glow Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[380px] bg-sky-200/50 rounded-full blur-[140px] pointer-events-none glow-layer" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[380px] bg-purple-200/50 rounded-full blur-[140px] pointer-events-none glow-layer" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-900 text-cyan-400 text-xs font-black tracking-[0.2em] uppercase shadow-md">
            <Sparkles size={14} className="text-cyan-400 animate-pulse" />
            <span>TWO SIDES OF ONE ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
            Technology Creates Impact When <br />
            <span className="bg-gradient-to-r from-sky-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              People and Businesses Grow Together.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            YomTech Global connects two essential sides of tech advancement: enterprise solutions for growing businesses, and practical skill building for ambitious tech talent.
          </p>
        </div>

        {/* 2 Complementary Premium Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">

          {/* PANEL A: FOR BUSINESSES */}
          <div className="lg:col-span-6 group relative">
            <div className="p-[2.5px] rounded-[2.6rem] bg-gradient-to-b from-sky-300/80 via-cyan-300/40 to-blue-300/60 hover:from-[#0072B8] hover:via-[#0284C7] hover:to-[#0ED3DD] transition-all duration-500 shadow-[0_10px_35px_rgba(2,132,199,0.07)] hover:shadow-[0_22px_55px_rgba(2,132,199,0.22)] hover:-translate-y-2.5 h-full">

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2.45rem] p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden h-full">

                {/* Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0072B8] via-[#0284C7] to-[#0ED3DD]" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-gradient-to-r from-sky-50 to-cyan-50 text-[#0072B8] border border-sky-200/80 shadow-xs">
                      FOR BUSINESSES
                    </span>

                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0072B8] via-[#0284C7] to-[#0ED3DD] text-white flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Building2 size={24} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-[#071A2B] group-hover:text-[#0072B8] transition-colors">
                      Build, Modernize &amp; Scale
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      Access digital capabilities designed to solve technical challenges, streamline operations, and deploy high-performance software systems.
                    </p>
                  </div>

                  {/* Service Capabilities Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {businessServices.map((item) => (
                      <div key={item} className="flex items-center gap-3 p-3 rounded-2xl bg-sky-50/60 border border-sky-100/80 group-hover:bg-white transition-colors">
                        <CheckCircle2 size={18} className="text-[#0072B8] shrink-0" />
                        <span className="text-xs sm:text-sm font-extrabold text-[#071A2B]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-slate-100 relative z-10">
                  <Link
                    to="/services"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0072B8] via-[#0284C7] to-[#0ED3DD] hover:from-[#0284C7] hover:to-[#0072B8] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>Explore Services</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* PANEL B: FOR TECHNOLOGY TALENT */}
          <div className="lg:col-span-6 group relative">
            <div className="p-[2.5px] rounded-[2.6rem] bg-gradient-to-b from-purple-300/80 via-indigo-300/40 to-blue-300/60 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 transition-all duration-500 shadow-[0_10px_35px_rgba(124,58,237,0.07)] hover:shadow-[0_22px_55px_rgba(124,58,237,0.22)] hover:-translate-y-2.5 h-full">

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2.45rem] p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden h-full">

                {/* Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border border-purple-200/80 shadow-xs">
                      FOR TECHNOLOGY TALENT
                    </span>

                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <GraduationCap size={24} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-[#071A2B] group-hover:text-purple-700 transition-colors">
                      Learn, Build &amp; Grow
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      Develop real-world software engineering skills through structured mentorship, practical projects, and industry-grade engineering workflows.
                    </p>
                  </div>

                  {/* Talent Capabilities Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {talentCapabilities.map((item) => (
                      <div key={item} className="flex items-center gap-3 p-3 rounded-2xl bg-purple-50/60 border border-purple-100/80 group-hover:bg-white transition-colors">
                        <CheckCircle2 size={18} className="text-purple-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-extrabold text-[#071A2B]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-slate-100 relative z-10">
                  <Link
                    to="/academy"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-indigo-600 hover:to-purple-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>Explore Academy</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
