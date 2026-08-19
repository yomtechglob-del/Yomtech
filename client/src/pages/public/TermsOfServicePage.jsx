import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FileText, ShieldCheck, CheckCircle2, ArrowRight, Phone,
  Lock, Globe, Scale, AlertCircle, Building2
} from 'lucide-react';

import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';

export const TermsOfServicePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">
      {/* Hero */}
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
              <Scale size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                TERMS OF SERVICE &amp; LEGAL GOVERNANCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-roboto font-extrabold tracking-tight leading-tight">
              Yomtech Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200">
                Terms of Service
              </span>
            </h1>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              These Terms of Service govern your access to and use of Yomtech Global software systems, custom ERP platforms, digital training academies, recruitment services, and website portals.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-3"
              >
                <span>Contact Legal Desk</span>
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
                  <Scale size={24} className="text-[#0284C7]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Governing Agreement</h3>
                  <p className="text-xs text-cyan-200">Certified Commercial License</p>
                </div>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                Licensed under Commercial Registration &amp; Business License Proc. No. 980/2016 (Addis Ababa City Administration Trade Bureau).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }} className="rounded-3xl p-8 sm:p-12 border-2 border-indigo-200/80 shadow-xl space-y-8">
            
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-500">Document Ref: YOM-LEG-TERMS-2026</span>
              <span className="px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">Effective: Jan 2026</span>
            </div>

            {/* 1. Acceptance of Terms */}
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>1. Acceptance of Terms</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                By accessing, browsing, or utilizing software applications, enterprise ERP builds, or web portals operated by Yomtech Global (including WabiSkills, WabiJob, and Yomnex ERP), you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service.
              </p>
            </div>

            {/* 2. Custom Software & ERP Licenses */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>2. Software Delivery &amp; Custom System IP</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                All custom software applications, ERP modules, database schemas, and microservice APIs engineered by Yomtech Global for enterprise or government clients are delivered according to signed Service Level Agreements (SLAs).
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pl-4">
                <li>• Client institutions receive full, unrestricted operational usage rights over deployed custom builds.</li>
                <li>• Yomtech Global retains core underlying framework intellectual property, methodology blueprints, and platform trademarks.</li>
              </ul>
            </div>

            {/* 3. Prohibited System Uses */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>3. User Obligations &amp; Prohibited Conduct</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Users and corporate clients agree not to:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pl-4">
                <li>• Attempt unauthorized penetration, reverse-engineering, or security circumvention of Yomtech servers or API endpoints.</li>
                <li>• Submit fraudulent application profiles, forged credentials, or malicious software attachments.</li>
                <li>• Use Yomtech platforms for illegal activities or in violation of national cyber laws.</li>
              </ul>
            </div>

            {/* 4. Service Level Guarantees */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>4. Service Level Commitments &amp; Uptime</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Yomtech Global strives for 99.99% operational uptime across hosted microservices and data center environments. Maintenance windows are communicated in advance with zero impact on core database records.
              </p>
            </div>

            {/* 5. Governing Law */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>5. Governing Law &amp; Legal Jurisdiction</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the commercial and civil laws of the Federal Democratic Republic of Ethiopia. Disputes shall be resolved through binding arbitration in Addis Ababa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <div>
                <span className="text-xs font-extrabold uppercase text-[#0284C7] block">Yomtech Legal Affairs:</span>
                <span className="text-sm font-black text-slate-900">Megenagna, Derartu Building, 9th Floor, Addis Ababa, Ethiopia</span>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black text-xs uppercase tracking-widest shadow-md shrink-0"
              >
                Legal Desk Inquiry
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
