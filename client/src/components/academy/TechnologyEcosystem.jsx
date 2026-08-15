import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Monitor, BarChart, Cloud, ShieldCheck } from 'lucide-react';
import logoImg from '../../assets/academy/wabiskills-logo.jpg';

export const TechnologyEcosystem = () => {
  const [activeDomain, setActiveDomain] = useState(0);

  const domains = [
    { key: 'AI', name: 'Artificial Intelligence', desc: 'Python, PyTorch, TensorFlow, LLM Automation, Neural Networks', icon: Cpu },
    { key: 'UI/UX', name: 'UI/UX & Product Design', desc: 'Figma Systems, Design Tokens, User Research, Wireframing', icon: Layout },
    { key: 'FULLSTACK', name: 'Fullstack Development', desc: 'React, Node.js, Express, React Native, PostgreSQL, REST APIs', icon: Monitor },
    { key: 'DATA', name: 'Data & Analytics', desc: 'Python Stack, SQL Querying, PowerBI, Statistical Modeling', icon: BarChart },
    { key: 'CLOUD', name: 'Cloud Engineering', desc: 'AWS Microservices, Serverless, Docker Containers, Load Balancers', icon: Cloud },
    { key: 'DEVOPS', name: 'DevOps & Security', desc: 'CI/CD Pipelines, GitHub Actions, Zero-Trust Security, SLA Monitoring', icon: ShieldCheck }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1DA1F2] px-4.5 py-1.5 rounded-full bg-cyan-100/90 border border-cyan-300 inline-block shadow-sm">
            🔗 INTEGRATED ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Technology <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">Learning Ecosystem</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Explore how modern tech domains interconnect around the WabiSkills core.
          </p>
        </div>

        {/* Central Ecosystem Composition */}
        <div className="w-full max-w-[1720px] mx-auto space-y-12">
          
          {/* Central Nucleus */}
          <div className="flex justify-center">
            <div className="p-1.5 rounded-full bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-500 shadow-xl group hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-full px-8 py-3.5 flex items-center gap-3.5 border border-cyan-200 text-slate-900 shadow-inner">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-300 shrink-0 bg-white p-0.5">
                  <img src={logoImg} alt="WabiSkills Core" className="w-full h-full object-contain rounded-full" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#1DA1F2] font-display">
                  WABISKILLS HUB
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-ping" />
              </div>
            </div>
          </div>

          {/* 6 Connected Learning Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((dom, idx) => {
              const Icon = dom.icon;
              const isActive = activeDomain === idx;
              return (
                <motion.div
                  key={dom.key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setActiveDomain(idx)}
                  onMouseEnter={() => setActiveDomain(idx)}
                  className={`p-[1.5px] rounded-[2.2rem] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-br from-[#1DA1F2] via-[#0ED3DD] to-sky-500 shadow-xl scale-[1.02]'
                      : 'bg-slate-200/80 hover:bg-slate-300 shadow-sm'
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-[2.1rem] p-6 space-y-4 h-full flex flex-col justify-between relative overflow-hidden text-slate-900">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F2] px-3 py-1 rounded-full bg-cyan-100/90 border border-cyan-300">
                        {dom.key}
                      </span>
                      <div className={`p-2.5 rounded-2xl transition-all duration-300 ${
                        isActive ? 'bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] text-white shadow-md' : 'bg-cyan-50 text-[#1DA1F2] border border-cyan-200'
                      }`}>
                        <Icon size={20} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-black font-display text-slate-900">
                        {dom.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {dom.desc}
                      </p>
                    </div>

                    <div className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                      isActive ? 'bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD]' : 'bg-slate-200'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
