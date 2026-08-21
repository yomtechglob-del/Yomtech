import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Brain, Cloud, Terminal, Cpu } from 'lucide-react';

export const TechnologyEcosystem = () => {
  const domains = [
    { title: 'FRONTEND', icon: Layout, items: ['React', 'Modern Web Interfaces', 'Responsive Design'], color: 'text-[#1DA1F2]', border: 'border-sky-200', bg: 'bg-sky-50/60' },
    { title: 'BACKEND', icon: Server, items: ['Node.js', 'Python', 'APIs & Enterprise Systems'], color: 'text-violet-600', border: 'border-violet-200', bg: 'bg-violet-50/60' },
    { title: 'DATA', icon: Database, items: ['PostgreSQL', 'Data Systems', 'Analytics'], color: 'text-emerald-600', border: 'border-emerald-200', bg: 'bg-emerald-50/60' },
    { title: 'AI', icon: Brain, items: ['AI/ML Models', 'Intelligent Automation', 'Data Pipelines'], color: 'text-amber-600', border: 'border-amber-200', bg: 'bg-amber-50/60' },
    { title: 'CLOUD', icon: Cloud, items: ['AWS', 'Azure', 'Cloud Architecture'], color: 'text-[#1DA1F2]', border: 'border-sky-200', bg: 'bg-sky-50/60' },
    { title: 'DEVOPS', icon: Terminal, items: ['CI/CD Pipelines', 'Infrastructure as Code', 'Deployment'], color: 'text-purple-600', border: 'border-purple-200', bg: 'bg-purple-50/60' }
  ];

  return (
    <section className="py-28 w-full bg-[#F8FAFC] relative text-slate-900 overflow-hidden border-y border-slate-200/80">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        <div className="text-center space-y-3 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1DA1F2] px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 inline-block shadow-sm">
            🌐 ARCHITECTURAL MAP
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900">
            Technology <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Architectural visualization connecting core technology domains around our central engineering nucleus.
          </p>
        </div>

        {/* Central Hub & Domain Cards (Clean Light Theme) */}
        <div className="relative">
          
          {/* Central Hub Element */}
          <div className="hidden lg:flex items-center justify-center my-12 relative z-20">
            <div className="px-8 py-3.5 rounded-full bg-white border-2 border-[#1DA1F2] text-slate-900 shadow-xl flex items-center gap-3">
              <Cpu size={20} className="text-[#1DA1F2]" />
              <span className="text-xs font-black tracking-widest font-display text-slate-900">
                YomTech Global Nucleus
              </span>
            </div>
          </div>

          {/* Domain Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((dom, idx) => {
              const Icon = dom.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#1DA1F2] transition-all duration-300 group space-y-5 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${dom.bg} ${dom.color} border ${dom.border} shadow-sm group-hover:scale-110 transition-transform`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-base font-black font-display text-slate-900 tracking-wider">
                        {dom.title}
                      </h3>
                    </div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {dom.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-extrabold group-hover:border-[#1DA1F2]/40 group-hover:bg-sky-50 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="h-1.5 w-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
