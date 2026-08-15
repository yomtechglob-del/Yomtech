import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Compass, Cpu, TrendingUp, ArrowRight, ArrowDown } from 'lucide-react';

export const ServicesChallengeToImpact = () => {
  const transformation = [
    {
      step: '01',
      stage: 'CHALLENGE',
      title: 'Problem Identification',
      desc: 'Identify operational, technical, or digital problems.',
      icon: AlertCircle,
      accent: 'border-purple-300 text-purple-700 bg-purple-50',
    },
    {
      step: '02',
      stage: 'STRATEGY',
      title: 'Strategic Direction',
      desc: 'Translate challenges into a clear technology direction.',
      icon: Compass,
      accent: 'border-blue-300 text-blue-700 bg-blue-50',
    },
    {
      step: '03',
      stage: 'SOLUTION',
      title: 'Engineering Build',
      desc: 'Engineer practical and scalable technology.',
      icon: Cpu,
      accent: 'border-cyan-300 text-cyan-700 bg-cyan-50',
    },
    {
      step: '04',
      stage: 'IMPACT',
      title: 'Sustainable Growth',
      desc: 'Enable better workflows, stronger capabilities, and sustainable digital growth.',
      icon: TrendingUp,
      accent: 'border-indigo-300 text-indigo-700 bg-indigo-50',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#F3EEFF] relative text-[#475569] overflow-hidden border-b border-purple-900/10">
      {/* Background Subtle Geometry Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #7C3AED 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1DA1F3] px-5 py-2 rounded-full bg-white border border-[#1DA1F3]/25 inline-block shadow-sm">
            BUSINESS IMPACT
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B] tracking-tight">
            From Complex Challenges to <span className="text-[#1DA1F3]">Practical Solutions</span>
          </h2>
          
          <p className="text-[#475569] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Technology creates value when it solves real problems. YomTech Global connects business challenges with engineering, digital products, infrastructure, and practical technology expertise.
          </p>
        </div>

        {/* Editorial Transformation Journey */}
        <div className="relative">
          {/* Animated SVG Zigzag Beam */}
          <svg className="hidden lg:block absolute top-[50px] left-0 right-0 w-full h-[50px] pointer-events-none z-0 overflow-visible" viewBox="0 0 1000 50" preserveAspectRatio="none">
            {/* Base glow track */}
            <path
              d="M 195 25 L 445 5 L 695 45 L 945 25"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="3"
              strokeDasharray="6 6"
              opacity="0.35"
            />
            {/* Flowing dashed stream */}
            <path
              d="M 195 25 L 445 5 L 695 45 L 945 25"
              fill="none"
              stroke="#0ED3DD"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-zigzag-dash"
            />
            {/* Fast traveling laser particles */}
            <path
              d="M 195 25 L 445 5 L 695 45 L 945 25"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="4 20"
              className="animate-zigzag-laser"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {transformation.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <React.Fragment key={item.stage}>
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-[2rem] p-8 space-y-6 h-full flex flex-col justify-between border border-purple-200/60 shadow-[0_8px_30px_rgba(124,58,237,0.04)] hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)] hover:border-[#1DA1F3]/50 transition-all duration-300 relative overflow-hidden">
                      
                      {/* Top Accent Indicator */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#F3EEFF] text-[#1DA1F3] border border-purple-200">
                          {item.stage}
                        </span>
                        <div className={`relative w-11 h-11 rounded-xl border flex items-center justify-center shadow-xs ${item.accent} group-hover:scale-110 transition-transform`}>
                          <div className="absolute -inset-1 rounded-xl border border-solid border-purple-400/40 animate-pulse-slow pointer-events-none" />
                          <IconComp size={20} className="relative z-10" />
                        </div>
                      </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-black font-display text-[#071A2B] group-hover:text-[#1DA1F3] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                        Phase {item.step}
                      </span>
                      <div className="hidden lg:block text-[#1DA1F3] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        {idx < 3 ? <ArrowRight size={16} /> : <span className="text-xs font-black text-[#0ED3DD]">GOAL REACHED</span>}
                      </div>
                      <div className="lg:hidden text-[#1DA1F3]">
                        {idx < 3 ? <ArrowDown size={16} /> : <span className="text-xs font-black text-[#0ED3DD]">GOAL REACHED</span>}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

    </div>
  </section>
);
};
