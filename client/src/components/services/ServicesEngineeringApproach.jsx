import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Compass, Code, RefreshCw, ArrowRight } from 'lucide-react';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';

export const ServicesEngineeringApproach = () => {
  const stages = [
    {
      num: '01',
      stageTag: 'STAGE 01',
      title: 'DISCOVER',
      subtitle: 'Understanding Requirements',
      desc: 'Understand the business, users, challenges, workflows, and technical requirements.',
      icon: Search,
      stepText: 'Step 1 of 4',
      tilt: '-rotate-1 hover:rotate-0',
      pinColor: 'from-blue-500 to-blue-700 shadow-blue-500/40',
      numColor: 'text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      floatDuration: 4.3,
      align: 'left',
      curveDir: 'right',
      pinLeft: true,
    },
    {
      num: '02',
      stageTag: 'STAGE 02',
      title: 'ARCHITECT',
      subtitle: 'System & Interface Design',
      desc: 'Design scalable systems, interfaces, integrations, and technology foundations.',
      icon: Compass,
      stepText: 'Step 2 of 4',
      tilt: 'rotate-1 hover:rotate-0',
      pinColor: 'from-emerald-500 to-emerald-700 shadow-emerald-500/40',
      numColor: 'text-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      floatDuration: 4.9,
      align: 'right',
      curveDir: 'left',
      pinLeft: false,
    },
    {
      num: '03',
      stageTag: 'STAGE 03',
      title: 'ENGINEER',
      subtitle: 'Software & Solution Build',
      desc: 'Build reliable software and technology solutions using modern engineering practices.',
      icon: Code,
      stepText: 'Step 3 of 4',
      tilt: '-rotate-1 hover:rotate-0',
      pinColor: 'from-purple-500 to-purple-700 shadow-purple-500/40',
      numColor: 'text-purple-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      floatDuration: 5.2,
      align: 'left',
      curveDir: 'right',
      pinLeft: true,
    },
    {
      num: '04',
      stageTag: 'STAGE 04',
      title: 'EVOLVE',
      subtitle: 'Continuous Optimization',
      desc: 'Improve, optimize, secure, and scale solutions as business requirements grow.',
      icon: RefreshCw,
      stepText: 'Continuous Growth',
      tilt: 'rotate-1 hover:rotate-0',
      pinColor: 'from-amber-500 to-amber-700 shadow-amber-500/40',
      numColor: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      floatDuration: 4.6,
      align: 'right',
      curveDir: 'none',
      pinLeft: false,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#03045E] overflow-hidden font-sans border-b border-cyan-500/20">
      {/* Photo Overlay Background */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
        <img src={erminOneImg} alt="" className="w-full h-full object-cover opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
      </div>
      
      {/* Deep Blue Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/90 via-[#0077B6]/75 to-[#00B4D8]/80 pointer-events-none z-0" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 md:px-16 space-y-20 relative z-10">

        {/* Section Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-start w-full">
            <div className="px-6 py-2 rounded-full bg-cyan-950/90 border-2 border-cyan-400/70 text-cyan-300 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-md shrink-0 z-10 -mr-[1px]">
              <Target size={16} className="text-cyan-300" />
              <span>ENGINEERING APPROACH</span>
              <span className="text-[10px] text-cyan-300 ml-0.5">◆</span>
            </div>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400 via-[#0ED3DD] to-transparent" />
          </div>

          <div className="text-left space-y-3 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
              How We Engineer Technology
            </h2>
            <p className="text-cyan-100/90 text-sm sm:text-base font-medium leading-relaxed max-w-2xl font-sans">
              Every YomTech Global solution begins with understanding the problem, designing the right architecture, and engineering technology around measurable real-world needs.
            </p>
          </div>
        </div>

        {/* Zigzag Pushpin Staircase Roadmap Container */}
        <div className="relative max-w-5xl mx-auto py-8 flex flex-col gap-0">
          {stages.map((stage, idx) => {
            const StageIcon = stage.icon;
            const isLeft = stage.align === 'left';

            return (
              <div key={stage.num} className="relative flex flex-col">
                {/* Card Row */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, scale: 0.94 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: idx * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ repeat: Infinity, duration: stage.floatDuration, ease: 'easeInOut' }}
                    className="relative w-full md:w-[68%]"
                  >
                    {/* Pushpin Pin Badge */}
                    <motion.div 
                      animate={{ rotate: [-3, 3, -3] }}
                      transition={{ repeat: Infinity, duration: 3.2 + idx * 0.4, ease: 'easeInOut' }}
                      className={`absolute -top-5 ${stage.pinLeft ? 'left-10' : 'right-10'} z-30 flex flex-col items-center pointer-events-none`}
                    >
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${stage.pinColor} border-2 border-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] flex items-center justify-center relative`}>
                        <div className="w-3 h-3 rounded-full bg-white/60 blur-[0.5px] absolute top-1.5 left-1.5" />
                      </div>
                      <div className="w-1 h-3 bg-slate-400/90" />
                    </motion.div>

                    {/* Card */}
                    <div className={`rounded-[2.5rem] p-8 sm:p-10 md:p-12 bg-white/95 border-2 border-slate-100/90 shadow-[0_25px_50px_rgba(0,0,0,0.07)] hover:shadow-[0_30px_70px_rgba(2,132,199,0.18)] ${stage.tilt} transition-all duration-500 hover:-translate-y-3 relative z-20 space-y-6 group cursor-pointer overflow-hidden`}>
                      
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* YomTech Logo Emblem Watermark */}
                      <img
                        src={logoEmblem}
                        alt=""
                        className="absolute bottom-3 right-3 w-40 h-40 object-contain opacity-[0.28] pointer-events-none select-none"
                        aria-hidden="true"
                      />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${stage.numColor} group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 inline-block`}>
                            {stage.num}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest ${stage.badgeBg} border`}>
                            {stage.stageTag}
                          </span>
                        </div>

                        <div className={`w-14 h-14 rounded-2xl ${stage.badgeBg} border-2 flex items-center justify-center shadow-sm group-hover:scale-115 group-hover:rotate-12 transition-all duration-500`}>
                          <StageIcon size={26} className="group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-all duration-300 tracking-tight">
                          {stage.title}
                        </h3>
                        <h4 className={`text-sm font-extrabold ${stage.numColor}`}>
                          {stage.subtitle}
                        </h4>
                        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                          {stage.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-extrabold uppercase text-slate-400">
                        <span>{stage.stepText}</span>
                        {idx < 3 && (
                          <ArrowRight size={16} className="text-[#0284C7] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Dashed Curved Connector SVG between steps */}
                {stage.curveDir !== 'none' && (
                  <div className="hidden md:flex w-full h-20 items-center justify-center relative -my-2 pointer-events-none">
                    <svg
                      viewBox="0 0 400 80"
                      fill="none"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      {stage.curveDir === 'right' ? (
                        <path
                          d="M 100,5 C 100,50 300,30 300,75"
                          stroke="#0ED3DD"
                          strokeWidth="2"
                          strokeDasharray="8 6"
                          strokeLinecap="round"
                          opacity="0.85"
                        />
                      ) : (
                        <path
                          d="M 300,5 C 300,50 100,30 100,75"
                          stroke="#0ED3DD"
                          strokeWidth="2"
                          strokeDasharray="8 6"
                          strokeLinecap="round"
                          opacity="0.85"
                        />
                      )}
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesEngineeringApproach;
