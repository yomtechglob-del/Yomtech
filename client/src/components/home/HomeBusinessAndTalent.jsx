import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="py-24 sm:py-32 w-full bg-[#F3EEFF] relative z-10 text-[#334155] overflow-hidden border-y border-purple-200/80">
      {/* Background Subtle Mesh Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #7C3AED 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1DA1F3] px-5 py-2 rounded-full bg-white border border-[#1DA1F3]/25 inline-block shadow-sm">
            TWO SIDES OF ONE ECOSYSTEM
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B] tracking-tight leading-tight">
            Technology Creates Greater Impact When <br />
            <span className="text-[#1DA1F3]">People and Businesses Grow Together.</span>
          </h2>
          
          <p className="text-[#334155] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            YomTech Global serves two connected sides of the technology ecosystem: organizations seeking reliable digital solutions and ambitious people building the skills required to create them.
          </p>
        </div>

        {/* 2 Complementary Premium Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          
          {/* PANEL A: FOR BUSINESSES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white rounded-[2.5rem] p-8 sm:p-12 border border-sky-200 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-[#1DA1F3] transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-sky-50 text-[#1DA1F3] border border-sky-200">
                  FOR BUSINESSES
                </span>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#1DA1F3] flex items-center justify-center border border-sky-200 shadow-xs group-hover:bg-[#1DA1F3] group-hover:text-white transition-colors duration-300">
                  <Building2 size={24} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black font-display text-[#071A2B]">
                  Build, Modernize &amp; Scale
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                  Access technology capabilities designed to help organizations solve digital challenges, improve operations, and build scalable solutions.
                </p>
              </div>

              {/* Service Capabilities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {businessServices.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 size={16} className="text-[#1DA1F3] shrink-0" />
                    <span className="text-xs sm:text-sm font-extrabold text-[#071A2B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-slate-100">
              <Link
                to="/services"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1DA1F3] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#1DA1F3] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-sky-500/25 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* PANEL B: FOR TECHNOLOGY TALENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white rounded-[2.5rem] p-8 sm:p-12 border border-purple-200 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-[#7C3AED] transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  FOR TECHNOLOGY TALENT
                </span>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center border border-purple-200 shadow-xs group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300">
                  <GraduationCap size={24} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black font-display text-[#071A2B]">
                  Learn, Build &amp; Grow
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                  Develop practical technology skills through structured learning, mentorship, hands-on projects, and real engineering practices.
                </p>
              </div>

              {/* Talent Capabilities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {talentCapabilities.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 p-2 rounded-xl bg-purple-50/50 border border-purple-100">
                    <CheckCircle2 size={16} className="text-purple-700 shrink-0" />
                    <span className="text-xs sm:text-sm font-extrabold text-[#071A2B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-slate-100">
              <Link
                to="/academy"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-purple-500/25 hover:scale-[1.02] transition-all duration-300 border border-purple-300"
              >
                <span>Explore Academy</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
