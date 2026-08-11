import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Palette, Code2, Rocket, Award } from 'lucide-react';

export const IdeaToImpact = () => {
  const steps = [
    { label: 'IDEA', title: 'Concept Formulation', icon: Lightbulb },
    { label: 'STRATEGY', title: 'Architecture Roadmap', icon: Target },
    { label: 'DESIGN', title: 'UI/UX & Schema Specs', icon: Palette },
    { label: 'ENGINEERING', title: 'Precision Code Build', icon: Code2 },
    { label: 'DEPLOYMENT', title: 'CI/CD & Cloud Launch', icon: Rocket },
    { label: 'IMPACT', title: 'Value & Scalability', icon: Award }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        <div className="text-center space-y-3 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1DA1F2] px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 inline-block shadow-sm">
            🚀 LIFECYCLE PATH
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900">
            From Idea <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">To Impact</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Controlled, progressive lifecycle path illuminating every stage of modern software creation.
          </p>
        </div>

        {/* Illuminated Path Grid */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#1DA1F2]/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#1DA1F2] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F2]">
                        {step.label}
                      </span>
                      <div className="p-2.5 rounded-2xl bg-sky-50 text-[#1DA1F2] group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-black font-display text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        STAGE 0{idx + 1}
                      </p>
                    </div>
                  </div>

                  <div className="h-1 w-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] rounded-full mt-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
