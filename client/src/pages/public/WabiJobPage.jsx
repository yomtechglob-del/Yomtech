import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase, Users, Code, CheckCircle2, ArrowRight, Phone, Globe, Cpu,
  Sparkles, Star, ShieldCheck, Layers, ExternalLink
} from 'lucide-react';

import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import logoEmblem from '../../assets/logos/logo.png';

export const WabiJobPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover opacity-55 mix-blend-overlay animate-river-flow-1" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover opacity-60 mix-blend-soft-light animate-river-flow-2" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left items-start flex flex-col"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
              <img src={wabiJobsLogo} alt="WabiJob" className="w-5 h-5 object-contain" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                WABIJOB RECRUITMENT ECOSYSTEM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-roboto font-extrabold tracking-tight leading-tight">
              Connecting Vetted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200">
                African Tech Talent
              </span>
            </h1>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              WabiJob is Yomtech’s flagship talent recruitment platform connecting vetted software engineers, UI/UX designers, and data analysts with enterprise project opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <a
                href="https://wabijob.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-3"
              >
                <span>Launch WabiJob Portal ↗</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={() => navigate('/careers')}
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md flex items-center gap-2"
              >
                <span>Browse Open Jobs</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-2 w-full"
          >
            <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center">
                  <img src={wabiJobsLogo} alt="WabiJob" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">500+ Placements</h3>
                  <p className="text-xs text-cyan-200">5,000+ Vetted Candidates</p>
                </div>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                Automated skill matching, developer portfolio verification, and direct employer shortlisting within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              Why Enterprises &amp; Talent Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">WabiJob</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }} className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 font-display">1. Vetted Code Portfolios</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Every developer’s code quality and system architecture skills are tested before placement.</p>
            </div>

            <div style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }} className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 font-display">2. Rapid 48h Shortlisting</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Enterprises can shortlist top African software engineering talent within 48 hours.</p>
            </div>

            <div style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }} className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 font-display">3. Remote &amp; On-Site Placement</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Flexible staff augmentation, contract hiring, and full-time permanent tech roles.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WabiJobPage;
