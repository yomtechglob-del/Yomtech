import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

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
    { name: 'React.js & Next.js', category: 'FRONTEND', desc: 'Modern reactive web architectures with SSR & ISR capabilities.', icon: Code, badge: 'Frontend', theme: 'sky' },
    { name: 'Node.js & Express', category: 'BACKEND', desc: 'High-throughput microservices and event-driven REST APIs.', icon: Server, badge: 'Backend', theme: 'indigo' },
    { name: 'Python & FastApi', category: 'BACKEND', desc: 'AI model serving, automated data pipelines, and analytical engines.', icon: Cpu, badge: 'AI & Backend', theme: 'purple' },
    { name: 'PostgreSQL & MongoDB', category: 'DATABASE', desc: 'Enterprise relational data stores & scalable document databases.', icon: Database, badge: 'Database', theme: 'emerald' },
    { name: 'Docker & Kubernetes', category: 'DATABASE', desc: 'Containerized deployment pipelines & cloud orchestration.', icon: Cloud, badge: 'DevOps', theme: 'cyan' },
    { name: 'AI & Computer Vision', category: 'SECURITY', desc: 'Object detection, spatial tracking, and video analytics for security.', icon: ShieldCheck, badge: 'AI Surveillance', theme: 'amber' },
    { name: 'React Native & Flutter', category: 'FRONTEND', desc: 'Cross-platform mobile applications for iOS & Android devices.', icon: Code, badge: 'Mobile', theme: 'blue' },
    { name: 'Redis & Caching', category: 'BACKEND', desc: 'In-memory data structures for lightning-fast session caching.', icon: Server, badge: 'Performance', theme: 'teal' },
  ];

  const filteredItems = activeTab === 'ALL' ? techItems : techItems.filter(item => item.category === activeTab);

  return (
    <section className="py-24 sm:py-32 w-full bg-[#F8FAFC] relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            TECHNOLOGIES &amp; TOOLS
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Engineered with <span className="text-[#0284C7]">Cutting-Edge Tech</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            We leverage battle-tested open-source frameworks, high-performance cloud tools, and robust security protocols to build scalable enterprise solutions.
          </p>
        </div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
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

        {/* Grid of Tech Cards */}
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
                className="group relative bg-white p-7 rounded-[1.75rem] border border-slate-200/90 shadow-md hover:shadow-xl hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-cyan-50 border border-cyan-200 text-[#0284C7] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComp size={22} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#0284C7] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-slate-600 text-xs font-normal leading-relaxed">
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
