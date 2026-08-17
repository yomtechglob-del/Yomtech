import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, ShieldCheck, Cpu, Building2 } from 'lucide-react';

export const ServicesTechStack = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = [
    { id: 'ALL', name: 'All Technologies' },
    { id: 'FRONTEND', name: 'Frontend & UI' },
    { id: 'BACKEND', name: 'Backend & APIs' },
    { id: 'DATABASE', name: 'Data & Cloud' },
    { id: 'SECURITY', name: 'AI & Security' },
  ];

  const techItems = [
    { name: 'React.js & Next.js', category: 'FRONTEND', desc: 'Modern reactive web architectures with SSR & ISR capabilities.', icon: Code, badge: 'Frontend', accent: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
    { name: 'Node.js & Express', category: 'BACKEND', desc: 'High-throughput microservices and event-driven REST APIs.', icon: Server, badge: 'Backend', accent: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { name: 'Python & FastApi', category: 'BACKEND', desc: 'AI model serving, automated data pipelines, and analytical engines.', icon: Cpu, badge: 'AI & Backend', accent: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { name: 'PostgreSQL & MongoDB', category: 'DATABASE', desc: 'Enterprise relational data stores & scalable document databases.', icon: Database, badge: 'Database', accent: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { name: 'Docker & Kubernetes', category: 'DATABASE', desc: 'Containerized deployment pipelines & cloud orchestration.', icon: Cloud, badge: 'DevOps', accent: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
    { name: 'AI & Computer Vision', category: 'SECURITY', desc: 'Object detection, spatial tracking, and video analytics for security.', icon: ShieldCheck, badge: 'AI Surveillance', accent: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { name: 'React Native & Flutter', category: 'FRONTEND', desc: 'Cross-platform mobile applications for iOS & Android devices.', icon: Code, badge: 'Mobile', accent: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { name: 'Redis & Caching', category: 'BACKEND', desc: 'In-memory data structures for lightning-fast session caching.', icon: Server, badge: 'Performance', accent: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
  ];

  const filteredItems = activeTab === 'ALL' ? techItems : techItems.filter(item => item.category === activeTab);

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-[#0284C7]" />
            <span>Technologies & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Engineered with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Cutting-Edge Tech
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            We leverage battle-tested open-source frameworks, high-performance cloud tools, and robust security protocols to build scalable enterprise solutions.
          </p>
        </div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-black transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#0284C7] text-white shadow-lg shadow-sky-500/30 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tech Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.accent} border ${item.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={20} />
                    </div>
                    <span className={`text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.bg} border ${item.border} ${item.accent}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-slate-900 group-hover:text-[#0284C7] transition-colors font-display">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
