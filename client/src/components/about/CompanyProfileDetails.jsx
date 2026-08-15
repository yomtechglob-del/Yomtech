import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, ShieldCheck, Award, Users, CheckCircle2, Globe, Sparkles, 
  Cpu, FileText, ChevronRight, Phone, Mail, MapPin, ExternalLink, Calendar,
  Layers, Lock, Server, Video, Briefcase, GraduationCap, ArrowRight, Zap, Target
} from 'lucide-react';

import logoEmblem from '../../assets/logos/logo.png';
import companyImg from '../../assets/about/company.png';
import consultingTeamImg from '../../assets/about/consulting_team.jpg';

export const CompanyProfileDetails = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  // Client & Partner Data directly from official document
  const publicInstitutions = [
    { name: 'SSGI', fullName: 'Space Science & Geospatial Institute' },
    { name: 'INSA', fullName: 'Information Network Security Administration' },
    { name: 'MInT', fullName: 'Ministry of Innovation and Technology' },
    { name: 'EAII', fullName: 'Ethiopian Artificial Intelligence Institute' },
    { name: 'City Admin', fullName: 'Addis Ababa City Trade Bureau' },
  ];

  const academicPartners = [
    { name: 'AASTU', fullName: 'Addis Ababa Science & Technology University' },
    { name: 'ASTU', fullName: 'Adama Science & Technology University' },
    { name: 'Arsi Uni', fullName: 'Arsi University' },
    { name: 'Kotebe', fullName: 'Kotebe University of Education' },
    { name: 'Select College', fullName: 'Select Business & Technology College' },
  ];

  const mediaPartners = [
    { name: 'Fana Media', fullName: 'Fana Media Corporation S.C' },
    { name: 'Balageru TV', fullName: 'Balageru Television Network' },
    { name: 'Addis AI', fullName: 'Addis AI Media & Research' },
    { name: 'Yonile Digitals', fullName: 'Yonile Digital Productions' },
  ];

  const enterpriseClients = [
    { name: 'Bunna Bank', category: 'Banking & Financial Sector' },
    { name: 'STEMpower LLC', category: 'Global STEM Education Partner' },
    { name: 'IE Networks', category: 'Enterprise Network Infrastructure' },
    { name: 'Hospitality Sector', category: '10+ Premier Hotels & Resorts' },
    { name: 'Nova Printing', category: 'Publishing & Industrial Advertising' },
  ];

  const platforms = [
    { id: 'wabiskills', name: 'WabiSkills', tag: 'Talent Academy', desc: 'Technology training and digital skills development platform' },
    { id: 'wabijob', name: 'WabiJob', tag: 'Recruitment', desc: 'Talent and recruitment platform connecting professionals with opportunities' },
    { id: 'yomnex', name: 'Yomnex ERP', tag: 'Enterprise ERP', desc: 'Fully custom-built enterprise resource planning system for organizations' },
    { id: 'wabix', name: 'WabiX', tag: 'Collaboration', desc: 'Virtual meeting and collaboration platform for online engagement' },
    { id: 'mari', name: 'Mari', tag: 'Social Media', desc: 'Next-generation social media application developed by YomTech Global' },
    { id: 'media', name: 'YomTech Media', tag: 'Tech Media', desc: 'Technology storytelling, documentaries, and innovation media platform' },
  ];

  const methodologySteps = [
    { step: '01', title: 'Requirement Analysis', desc: 'Understanding client needs, defining scope, and setting clear project objectives.' },
    { step: '02', title: 'System Architecture', desc: 'Creating scalable, secure, and efficient system blueprints from scratch.' },
    { step: '03', title: 'Agile Development', desc: 'Iterative full-stack development with continuous feedback and code reviews.' },
    { step: '04', title: 'QA & Security Testing', desc: 'Rigorous performance tuning, vulnerability scans, and security audits.' },
    { step: '05', title: 'Deployment Rollout', desc: 'Smooth CI/CD system rollout with minimal operational disruption.' },
    { step: '06', title: 'Continuous Support', desc: 'Ongoing updates, 24/7 SLA monitoring, and long-term technical support.' },
  ];

  return (
    <section className="relative py-20 lg:py-28 font-sans bg-[#F4F9FF] text-slate-900 overflow-hidden">
      
      {/* Background Dot Matrix Texture */}
      <div 
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* ========================================================
            1. FOUNDER & CEO MESSAGE SECTION
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">CEO &amp; Founder Message</span>
              <span>◆</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-200/80 shadow-xl">
            {/* Left Column: Founder Photo & Emblem */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="relative inline-block mx-auto lg:mx-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#0284C7] to-cyan-400 p-1.5 shadow-2xl overflow-hidden mx-auto">
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center p-6 text-white relative">
                    <img src={logoEmblem} alt="YomTech Global" className="w-16 h-16 object-contain mb-3" />
                    <span className="text-sm font-extrabold font-display uppercase tracking-wider text-cyan-300">YomTech Global</span>
                    <span className="text-[10px] text-slate-400 font-mono">EST. 2015</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 px-4 py-1.5 rounded-full bg-[#0284C7] text-white text-xs font-black shadow-md border-2 border-white">
                  FOUNDER &amp; CEO
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  Ermias Alemayehu
                </h3>
                <p className="text-sm font-bold text-[#0284C7] uppercase tracking-wider">
                  Founder &amp; Chief Executive Officer
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  YomTech Global Software &amp; Technology Ecosystem
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 italic text-xs font-semibold leading-relaxed">
                "Technology is not merely a tool; it is the foundation for innovation, opportunity, and sustainable growth."
              </div>
            </div>

            {/* Right Column: Official Message Statement */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
                Empowering Pan-African Innovation &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                  Digital Transformation
                </span>
              </h2>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base font-sans">
                <p>
                  <strong className="text-slate-900">Dear Partners, Clients, and Stakeholders,</strong> Welcome to YomTech Global. Founded with a clear vision to empower organizations and individuals through technology, innovation, and digital transformation, we recognized the vital need to help enterprises overcome inefficient processes while creating high-impact career opportunities for talented African professionals.
                </p>
                <p>
                  Today, YomTech Global has grown into a dynamic multi-dimensional technology ecosystem delivering enterprise software solutions, custom ERP platforms, artificial intelligence, cybersecurity, tech talent development programs, and technology-focused media productions.
                </p>
                <p>
                  Through initiatives such as <strong className="text-[#0284C7]">WabiSkills, WabiJob, Yomnex ERP, WabiX, Mari</strong>, and our technology documentary platforms, we are driving digital sovereignty and inspiring the next generation of technology leaders.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Pan-African Vision
                </span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Custom Systems
                </span>
                <span className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  Talent Academy
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* ========================================================
            2. PRODUCTS & DIGITAL PLATFORMS
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">Our Flagship Platforms</span>
              <span>◆</span>
            </div>
          </div>

          <div className="text-left space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Integrated Digital Platforms &amp; Products
            </h2>
            <p className="text-slate-500 font-medium text-base">
              YomTech Global builds and operates proprietary digital platforms that support education, recruitment, collaboration, and enterprise resource management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl p-7 border-2 border-slate-200/80 shadow-md hover:shadow-xl hover:border-cyan-300 transition-all text-left flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-black uppercase tracking-wider">
                      {p.tag}
                    </span>
                    <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#0284C7]">
                  <span>Explore Platform</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ========================================================
            3. LEADERSHIP & TEAM STRUCTURE
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">Organizational Structure</span>
              <span>◆</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-200/80 shadow-xl space-y-10 text-left">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Structured, Results-Driven Organization
              </h2>
              <p className="text-slate-500 font-medium text-base">
                Our teams are organized into specialized functional units collaborating from initial architecture to long-term operational support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 font-display">Project Delivery Team</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Custom software development, enterprise ERP systems, and public sector digital transformation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 font-display">Product &amp; Innovation Team</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Engineering proprietary platforms including WabiSkills, WabiJob, WabiX, Mari, and Yomnex ERP.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 font-display">Training &amp; Capacity Building</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Professional bootcamp programs, practical repository labs, and university developer mentorship.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 font-display">Operations &amp; Tech Support</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Cloud infrastructure, cybersecurity, 24/7 hotline support, and AI-integrated surveillance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 md:col-span-2 lg:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 font-display">Marketing, Sales &amp; Partnerships</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Strategic client relations, institutional agreements, and long-term public/private partnership development across Pan-African markets.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* ========================================================
            4. DEVELOPMENT METHODOLOGY (6 PHASES)
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">Development Methodology</span>
              <span>◆</span>
            </div>
          </div>

          <div className="text-left space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Structured &amp; Agile Engineering Execution
            </h2>
            <p className="text-slate-500 font-medium text-base">
              We follow a disciplined 6-phase agile methodology ensuring transparency, security, and precision alignment with client objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologySteps.map((m) => (
              <div key={m.step} className="bg-white rounded-3xl p-7 border-2 border-slate-200/80 shadow-md text-left space-y-3 relative overflow-hidden">
                <span className="text-4xl font-black text-cyan-100 font-display absolute top-4 right-6 select-none">
                  {m.step}
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-[#0284C7] text-xs font-black font-mono">
                  PHASE {m.step}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 font-display">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* ========================================================
            5. CLIENTS & STRATEGIC PARTNERSHIPS MATRIX
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">Clients &amp; Strategic Partners</span>
              <span>◆</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-200/80 shadow-xl space-y-12 text-left">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Trusted by Leading Public &amp; Private Institutions
              </h2>
              <p className="text-slate-500 font-medium text-base">
                YomTech Global works closely with government ministries, national security agencies, universities, media networks, and financial institutions.
              </p>
            </div>

            {/* Public Sector & Government */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0284C7] flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Government &amp; Public Sector Partners</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {publicInstitutions.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-1">
                    <span className="text-sm font-extrabold text-slate-900 font-display block">{item.name}</span>
                    <span className="text-[10px] text-slate-500 font-semibold block leading-tight">{item.fullName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & University Partners */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic &amp; University Partners</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {academicPartners.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1">
                    <span className="text-sm font-extrabold text-slate-900 font-display block">{item.name}</span>
                    <span className="text-[10px] text-slate-500 font-semibold block leading-tight">{item.fullName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Media & Innovation Organizations */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>Media &amp; Tech Storytelling Organizations</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {mediaPartners.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                    <span className="text-sm font-extrabold text-slate-900 font-display block">{item.name}</span>
                    <span className="text-[10px] text-slate-500 font-semibold block leading-tight">{item.fullName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise & Private Sector Clients */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-600 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Enterprise &amp; Commercial Sector Clients</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {enterpriseClients.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                    <span className="text-sm font-extrabold text-slate-900 font-display block">{item.name}</span>
                    <span className="text-[10px] text-slate-600 font-semibold block leading-tight">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ========================================================
            6. LEGAL, CERTIFICATIONS & OFFICIAL COMPANY PROFILE
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">Legal &amp; Official Company Credentials</span>
              <span>◆</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Left: Official Business License Details */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border-2 border-slate-200/80 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 text-[#0284C7] text-xs font-black uppercase tracking-widest border border-cyan-200">
                  <FileText className="w-4 h-4" />
                  <span>Official Registration &amp; Trade License</span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                  Certified Commercial Entity &amp; IP Holder
                </h3>

                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Issued under Commercial Registration &amp; Business License Proclamation No. 980/2016 by the Addis Ababa City Administration Trade Bureau.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Company Name:</span>
                    <span className="text-sm font-extrabold text-slate-900 font-display block">YomTech Eng.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Trade License No:</span>
                    <span className="text-sm font-extrabold text-cyan-700 font-mono block">14/667/3936102/2014</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Registered Capital:</span>
                    <span className="text-sm font-extrabold text-emerald-700 font-display block">10,000,000 ETB</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Core Field:</span>
                    <span className="text-sm font-extrabold text-slate-900 font-display block">Software Design &amp; Systems</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Intellectual Property Authority Certified
                </span>
                <span className="font-mono text-[10px] bg-emerald-200/60 px-2 py-0.5 rounded font-black">ACTIVE 2025</span>
              </div>
            </div>

            {/* Right: Direct Contact & Location Info */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 border-2 border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-black uppercase tracking-widest border border-cyan-400/30">
                  <MapPin className="w-4 h-4" />
                  <span>Headquarters &amp; Direct Hotline</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white font-display">
                  Get in Touch with YomTech Global
                </h3>

                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Connect with our executive leadership, project delivery teams, or WabiSkills academy leads.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Official Telephones:</p>
                      <p className="text-xs sm:text-sm font-extrabold text-white font-mono">+251 11 668 7546 / +251 97 766 6699</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Official Web &amp; Email:</p>
                      <p className="text-xs sm:text-sm font-extrabold text-cyan-300 font-mono">www.yomtechglobal.org</p>
                      <p className="text-[11px] text-slate-300 font-mono">ealemayehu3@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Headquarters Address:</p>
                      <p className="text-xs font-bold text-white">Megenagna / Kolfe Keraniyo, Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>© 2025 YomTech Global</span>
                <span className="text-cyan-400 font-bold">Pan-African Powerhouse</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyProfileDetails;
