import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck, Lock, FileText, CheckCircle2, ArrowRight, Phone,
  Mail, Globe, Layers, Eye, RefreshCw, Server
} from 'lucide-react';

import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';

export const PrivacyPolicyPage = () => {
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
              <ShieldCheck size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                DATA PROTECTION &amp; PRIVACY POLICY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-roboto font-extrabold tracking-tight leading-tight">
              Yomtech Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200">
                Privacy Policy
              </span>
            </h1>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Your data privacy and security are fundamental to Yomtech Global. Learn how we collect, safeguard, process, and respect your personal information across our enterprise systems, platforms, and services.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-3"
              >
                <span>Contact Data Protection Officer</span>
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
                  <Lock size={24} className="text-[#0284C7]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Bank-Grade Encryption</h3>
                  <p className="text-xs text-cyan-200">TLS 1.3 &amp; AES-256 Data Defense</p>
                </div>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                We strictly enforce data minimization, role-based access control, and ISO/IEC security compliance across all client deployments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }} className="rounded-3xl p-8 sm:p-12 border-2 border-indigo-200/80 shadow-xl space-y-8">
            
            {/* Effective Date */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-500">Document Ref: YOM-LEG-PRIVACY-2026</span>
              <span className="px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">Effective: Jan 2026</span>
            </div>

            {/* 1. Information We Collect */}
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>1. Information We Collect</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                When you interact with Yomtech Global websites, custom ERP platforms (Yomnex ERP), educational portals (WabiSkills Academy), or recruitment networks (WabiJob), we collect:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pl-4">
                <li>• <strong>Personal Identification Data:</strong> Full name, email address, phone number, physical address, and job title when submitting inquiries, quote requests, or candidate CVs.</li>
                <li>• <strong>Enterprise &amp; Organizational Data:</strong> Company name, tax IDs, industry sector, system workflows, and operational requirements provided for custom software proposals.</li>
                <li>• <strong>Technical &amp; Usage Logs:</strong> IP addresses, browser types, device identifiers, session timestamps, and navigation analytics collected securely via encrypted server logs.</li>
              </ul>
            </div>

            {/* 2. How We Use Information */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>2. How We Process &amp; Use Your Data</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                We use collected information strictly to fulfill legitimate business functions, including:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pl-4">
                <li>• Engineering, configuring, and supporting custom enterprise ERP, CRM, and e-government platforms.</li>
                <li>• Processing job applications, CV uploads, candidate screening, and interview scheduling through WabiJob.</li>
                <li>• Sending technology insights, project status updates, service announcements, and SLA support notifications.</li>
                <li>• Ensuring cybersecurity defense, vulnerability auditing, and preventing unauthorized system access.</li>
              </ul>
            </div>

            {/* 3. Data Protection & Security */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>3. Data Security &amp; Encryption Standards</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Yomtech Global implements bank-grade security protocols across all software databases and cloud environments:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pl-4">
                <li>• All network traffic is encrypted via <strong>TLS 1.3</strong> protocol in transit.</li>
                <li>• Sensitive database fields and client records are encrypted using <strong>AES-256</strong> at rest.</li>
                <li>• Strict multi-factor authentication (MFA) and role-based access control (RBAC) restrict internal data access to authorized engineering personnel only.</li>
              </ul>
            </div>

            {/* 4. Third-Party Sharing */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>4. Zero Third-Party Selling</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Yomtech Global <strong>never sells, rents, or monetizes</strong> client or applicant personal data to third-party advertisers or data brokers. Data is shared exclusively with verified cloud data centers or public institutions under explicit NDA agreements and statutory legal compliance.
              </p>
            </div>

            {/* 5. User Rights */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 font-display flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0284C7]" />
                <span>5. Your Data Rights &amp; Access Requests</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                You reserve full ownership rights over your personal information:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pl-4">
                <li>• <strong>Right to Access:</strong> Request a copy of all personal records maintained in our databases.</li>
                <li>• <strong>Right to Rectification:</strong> Request correction of inaccurate contact or candidate profile information.</li>
                <li>• <strong>Right to Erasure:</strong> Request permanent deletion of your candidate CV or contact records.</li>
              </ul>
            </div>

            {/* Contact DPO */}
            <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <div>
                <span className="text-xs font-extrabold uppercase text-[#0284C7] block">Data Protection Office:</span>
                <span className="text-sm font-black text-slate-900">Email: contact@yomtechglobal.org | Phone: +251 (977) 666-699</span>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black text-xs uppercase tracking-widest shadow-md shrink-0"
              >
                Send Data Request
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
