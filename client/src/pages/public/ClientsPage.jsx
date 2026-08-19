import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Building2, CheckCircle2, ExternalLink, ArrowRight, Phone, Search,
  Briefcase, Star, ShieldCheck, Globe, Landmark, Layers
} from 'lucide-react';

import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';

import bunnaLogo from '../../assets/partners/bunabank.png';
import stempowerLogo from '../../assets/partners/Global STEM Education Partner.png';
import ieNetworksLogo from '../../assets/partners/Enterprise Network Infrastructure.png';
import hospitalityLogo from '../../assets/partners/Hospitality Sector.png';
import novaLogo from '../../assets/partners/Nova Printing.webp';

const CLIENTS_DIRECTORY = [
  {
    id: 'bunna-bank',
    name: 'Bunna Bank S.C',
    industry: 'Banking & Financial Services',
    logo: bunnaLogo,
    website: 'https://bunnabanksc.com/',
    profile: 'Major commercial bank delivering retail, digital, and corporate banking solutions to millions of customers.',
    system: 'Banking Core Middleware Integration & Cybersecurity Hardening',
    impact: 'Sub-50ms API response time under peak transaction load'
  },
  {
    id: 'stempower',
    name: 'STEMpower LLC',
    industry: 'Global Education Non-Profit',
    logo: stempowerLogo,
    website: 'https://www.stempower.org/',
    profile: 'Global non-profit organization promoting hands-on STEM education, electronics labs, and youth innovation centers across Africa.',
    system: 'STEM Digital Capacity Building & Student Learning Portals',
    impact: 'Empowered thousands of youth students with digital skills'
  },
  {
    id: 'ie-networks',
    name: 'IE Networks',
    industry: 'Enterprise IT & Networking',
    logo: ieNetworksLogo,
    website: 'https://www.ienetworks.co/',
    profile: 'Premier IT networking, data center infrastructure, and enterprise communications solutions provider.',
    system: 'Data Center Hardware Integration & Enterprise Security Maintenance',
    impact: 'Zero-downtime infrastructure maintenance & monitoring'
  },
  {
    id: 'hospitality-sector',
    name: '10+ Premier Hotels & Resorts',
    industry: 'Hospitality & Tourism',
    logo: hospitalityLogo,
    website: 'https://www.ethiopianhotelsassociation.org/',
    profile: 'Consortium of leading luxury hotels and resorts across Ethiopia utilizing Yomtech’s hospitality ERP suite.',
    system: 'Yomnex Hospitality ERP, POS & Inventory Management',
    impact: 'Reduced stock leakage by 95% across 10+ properties'
  },
  {
    id: 'nova-printing',
    name: 'Nova Printing & Advertising',
    industry: 'Industrial & Commercial Printing',
    logo: novaLogo,
    website: 'https://novaprintingethiopia.com/',
    profile: 'Major commercial printing, industrial packaging, and large-format outdoor advertising company.',
    system: 'Custom Order Tracking & Production ERP Module',
    impact: 'Streamlined commercial printing order workflow by 80%'
  }
];

export const ClientsPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredClients = CLIENTS_DIRECTORY.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase())
  );

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
              <Building2 size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                ENTERPRISE &amp; COMMERCIAL CLIENTS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-roboto font-extrabold tracking-tight leading-tight">
              Enterprise &amp; Commercial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200">
                Client Success
              </span>
            </h1>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Discover how Yomtech Global powers commercial banks, luxury hotel chains, global STEM non-profits, enterprise IT providers, and industrial printing corporations.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-3"
              >
                <span>Request Enterprise Demo</span>
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
                  <img src={logoEmblem} alt="YomTech" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Commercial Impact</h3>
                  <p className="text-xs text-cyan-200">100% Client Satisfaction</p>
                </div>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                Custom software solutions built from scratch to streamline commercial operations, POS billing, and enterprise asset control.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              Enterprise Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Roster</span>
            </h2>
            <div className="relative w-full sm:w-72">
              <Search size={14} className="absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search clients..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-full pl-9 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredClients.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all space-y-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white p-2 border border-slate-200 flex items-center justify-center shadow-md shrink-0">
                    <img src={c.logo} alt={c.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-black uppercase tracking-widest">
                    {c.industry}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">{c.name}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">{c.profile}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 size={14} className="text-[#0284C7] shrink-0" />
                    <span>System: {c.system}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Impact: {c.impact}</span>
                  </div>
                </div>

                <div className="pt-3 flex justify-end">
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-cyan-600"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
