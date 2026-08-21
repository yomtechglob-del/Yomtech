import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, CheckCircle2, Zap, Star, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logos/logo.png';

export const ProductsRequestDemo = () => {
  const reasons = [
    { icon: Zap, title: 'Instant Response', desc: 'Our solutions team responds to all demo requests within 24 business hours.', accent: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { icon: ShieldCheck, title: 'No Obligation', desc: 'Free product demonstrations with zero commitment required from your organization.', accent: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { icon: TrendingUp, title: 'Custom Demos', desc: 'Every demonstration is tailored to your specific use case and organizational needs.', accent: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
    { icon: Globe, title: 'Expert Consultants', desc: 'Senior YomTech engineers lead every demo, not sales representatives.', accent: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Dot mesh */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>REQUEST DEMO / EXPLORE PRODUCTS</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            See Our Products <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              In Action
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            Request a live demonstration of any YomTech product. Our senior engineers will walk you through every feature, answer your questions, and tailor the session to your organization's specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left: 4 reason cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                  className="rounded-3xl p-6 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all space-y-3 group relative overflow-hidden"
                >
                  {/* Logo Watermark Background */}
                  <img
                    src={logoImg}
                    alt=""
                    className="absolute bottom-1 right-1 w-20 h-20 object-contain opacity-[0.28] pointer-events-none select-none"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between relative z-10">
                    <div className={`w-12 h-12 rounded-2xl ${r.bg} ${r.accent} border ${r.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full border ${r.bg} ${r.border} ${r.accent}`}>
                      BENEFIT
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0284C7] transition-colors relative z-10">{r.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed relative z-10">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: CTA Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div
                className="p-[1.5px] rounded-[2.5rem] shadow-2xl h-full"
                style={{ background: 'linear-gradient(135deg, #0284C7, #0ED3DD, #1DA1F2)' }}
              >
                <div className="bg-white rounded-[2.4rem] p-8 space-y-6 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50/80 to-sky-100/60 rounded-full blur-3xl pointer-events-none" />

                  {/* Logo Watermark Background */}
                  <img
                    src={logoImg}
                    alt=""
                    className="absolute -bottom-4 -right-4 w-48 h-48 object-contain opacity-[0.28] pointer-events-none select-none"
                    aria-hidden="true"
                  />

                  {/* Logo badge */}
                  <div className="flex justify-start relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] p-2.5 shadow-lg">
                      <img src={logoImg} alt="YomTech" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      Ready to explore our products?
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                      Schedule a free, tailored product demonstration. Our engineers are ready to show you exactly what our platforms can do for your organization.
                    </p>

                    <div className="space-y-2 mt-4">
                      {[
                        'Live walkthrough of any product',
                        'Q&A with senior engineers',
                        'Custom use case demonstration',
                        'Implementation timeline discussion',
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 relative z-10">
                    <Link
                      to="/contact"
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      <span>Request a Demo</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={13} />
                      </div>
                    </Link>
                    <a
                      href="tel:+251977666699"
                      className="w-full py-3.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] font-black text-xs uppercase tracking-widest hover:bg-cyan-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Call +251 (977) 666-699</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
