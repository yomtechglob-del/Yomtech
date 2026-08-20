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
      desc: 'Understand the business, users, challenges, workflows, and technical requirements across enterprise teams.',
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
      desc: 'Design scalable systems, intuitive interfaces, microservice integrations, and resilient technology foundations.',
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
      desc: 'Build reliable software and technology solutions using modern version-controlled engineering practices.',
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
      desc: 'Improve, optimize, secure, and scale solutions as business requirements and operational concurrency grow.',
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
    <section className="relative py-28 lg:py-40 bg-[#03045E] overflow-hidden font-sans border-b border-cyan-500/20">
      {/* Photo Overlay Background */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
        <img src={erminOneImg} alt="" className="w-full h-full object-cover opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
      </div>
      
      {/* Deep Blue Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/90 via-[#0077B6]/75 to-[#00B4D8]/80 pointer-events-none z-0" />

      <div className="max-w-[95rem] mx-auto px-6 sm:px-12 md:px-16 space-y-24 relative z-10">

        {/* Section Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-start w-full">
            <div className="px-7 py-3 rounded-full bg-cyan-950/90 border-2 border-cyan-400/70 text-cyan-300 text-xs sm:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-lg shrink-0 z-10 -mr-[1px]">
              <Target size={18} className="text-cyan-300" />
              <span>ENGINEERING APPROACH</span>
              <span className="text-[10px] text-cyan-300 ml-0.5">◆</span>
            </div>
            <div className="h-[3px] flex-1 bg-gradient-to-r from-cyan-400 via-[#0ED3DD] to-transparent" />
          </div>

          <div className="text-left space-y-3 max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
              How We Engineer Technology
            </h2>
            <p className="text-cyan-100/90 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl font-sans">
              Every YomTech Global solution begins with understanding the problem, designing the right architecture, and engineering technology around measurable real-world needs.
            </p>
          </div>
        </div>

        {/* Scaled Up Pushpin Staircase Container */}
        <div className="relative max-w-6xl mx-auto py-8 flex flex-col gap-0">
          {stages.map((stage, idx) => {
            const StageIcon = stage.icon;
            const isLeft = stage.align === 'left';

            return (
              <div key={stage.num} className="relative flex flex-col">
                {/* Card Row */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? -70 : 70, scale: 0.94 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: idx * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: stage.floatDuration, ease: 'easeInOut' }}
                    className="relative w-full md:w-[74%]"
                  >
                    {/* Scaled Up Pushpin Pin Badge */}
                    <motion.div 
                      animate={{ rotate: [-3, 3, -3] }}
                      transition={{ repeat: Infinity, duration: 3.2 + idx * 0.4, ease: 'easeInOut' }}
                      className={`absolute -top-6 ${stage.pinLeft ? 'left-12' : 'right-12'} z-30 flex flex-col items-center pointer-events-none`}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.pinColor} border-2 border-white shadow-[0_12px_24px_rgba(0,0,0,0.3)] flex items-center justify-center relative`}>
                        <div className="w-3.5 h-3.5 rounded-full bg-white/60 blur-[0.5px] absolute top-2 left-2" />
                      </div>
                      <div className="w-1.5 h-4 bg-slate-400/90" />
                    </motion.div>

                    {/* Scaled Up Card */}
                    <div className={`rounded-[3rem] p-9 sm:p-12 md:p-14 bg-white/95 border-2 border-slate-100/90 shadow-[0_30px_60px_rgba(0,0,0,0.09)] hover:shadow-[0_35px_80px_rgba(2,132,199,0.22)] ${stage.tilt} transition-all duration-500 hover:-translate-y-3 relative z-20 space-y-7 group cursor-pointer overflow-hidden`}>
                      
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* YomTech Logo Emblem Watermark */}
                      <img
                        src={logoEmblem}
                        alt=""
                        className="absolute bottom-3 right-3 w-48 h-48 object-contain opacity-[0.28] pointer-events-none select-none"
                        aria-hidden="true"
                      />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className={`text-5xl sm:text-6xl font-black font-mono tracking-tight ${stage.numColor} group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 inline-block`}>
                            {stage.num}
                          </span>
                          <span className={`px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-widest ${stage.badgeBg} border-2`}>
                            {stage.stageTag}
                          </span>
                        </div>

                        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${stage.badgeBg} border-2 flex items-center justify-center shadow-md group-hover:scale-115 group-hover:rotate-12 transition-all duration-500`}>
                          <StageIcon size={32} className="group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-all duration-300 tracking-tight">
                          {stage.title}
                        </h3>
                        <h4 className={`text-base sm:text-lg font-extrabold ${stage.numColor}`}>
                          {stage.subtitle}
                        </h4>
                        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                          {stage.desc}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between text-xs sm:text-sm font-extrabold uppercase text-slate-400">
                        <span>{stage.stepText}</span>
                        {idx < 3 && (
                          <ArrowRight size={18} className="text-[#0284C7] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Dashed Curved Connector SVG between steps */}
                {stage.curveDir !== 'none' && (
                  <div className="hidden md:flex w-full h-24 items-center justify-center relative -my-2 pointer-events-none">
                    <svg
                      viewBox="0 0 400 90"
                      fill="none"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      {stage.curveDir === 'right' ? (
                        <path
                          d="M 100,5 C 100,60 300,35 300,85"
                          stroke="#0ED3DD"
                          strokeWidth="2.5"
                          strokeDasharray="9 7"
                          strokeLinecap="round"
                          opacity="0.85"
                        />
                      ) : (
                        <path
                          d="M 300,5 C 300,60 100,35 100,85"
                          stroke="#0ED3DD"
                          strokeWidth="2.5"
                          strokeDasharray="9 7"
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
