import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  Briefcase, Users, GraduationCap, Code, Sparkles, ArrowRight, Phone,
  CheckCircle2, Star, Layers, ShieldCheck, Globe, Cpu, Heart, Award,
  Search, MapPin, Clock, Send, FileText, Check
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';

/* ─── OPEN POSITIONS DATA ─── */
const OPEN_POSITIONS = [
  {
    id: 'fullstack-engineer',
    title: 'Senior Fullstack Software Engineer',
    department: 'Software Engineering',
    type: 'Full-Time',
    location: 'Addis Ababa / Hybrid',
    experience: '3+ Years',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    desc: 'Engineer custom Yomnex ERP modules, high-concurrency microservices, and e-government platforms for public and private sector clients.'
  },
  {
    id: 'erp-specialist',
    title: 'ERP Systems Implementation Specialist',
    department: 'Enterprise Delivery',
    type: 'Full-Time',
    location: 'Addis Ababa, Ethiopia',
    experience: '2+ Years',
    tech: ['ERP Systems', 'PostgreSQL', 'Workflow BPA', 'Client UAT'],
    desc: 'Lead real-world deployment of Yomnex ERP across government institutions, banks, and commercial hotel enterprises.'
  },
  {
    id: 'ai-vision-developer',
    title: 'AI & Computer Vision Developer',
    department: 'Product & Innovation (R&D)',
    type: 'Full-Time',
    location: 'Addis Ababa / Remote',
    experience: '2+ Years',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'AI Surveillance'],
    desc: 'Develop AI vision algorithms for automated CCTV surveillance zones, motion anomaly detection, and predictive security monitoring.'
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity & Infrastructure Analyst',
    department: 'Operations & Tech Support',
    type: 'Full-Time',
    location: 'Addis Ababa, Ethiopia',
    experience: '3+ Years',
    tech: ['Penetration Testing', 'Network Defense', 'Data Center Hardening'],
    desc: 'Conduct enterprise security audits, vulnerability assessments, data center maintenance, and zero-downtime infrastructure defense.'
  },
  {
    id: 'ui-ux-designer',
    title: 'Senior UI/UX Product Designer',
    department: 'Product Design',
    type: 'Full-Time / Contract',
    location: 'Addis Ababa / Remote',
    experience: '2+ Years',
    tech: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
    desc: 'Design intuitive, accessible, and high-converting user interfaces for Yomtech platforms, WabiJob, WabiSkills, and custom web apps.'
  },
  {
    id: 'data-analyst',
    title: 'Business Intelligence & Data Analyst',
    department: 'Data Analytics',
    type: 'Full-Time',
    location: 'Addis Ababa, Ethiopia',
    experience: '2+ Years',
    tech: ['SQL', 'Python', 'PowerBI', 'Dashboards'],
    desc: 'Transform complex organizational data into actionable business intelligence dashboards, executive reports, and forecasting models.'
  }
];

export const CareersPage = () => {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState('All');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantRole, setApplicantRole] = useState('');
  const [applicationSuccess, setApplicationSuccess] = useState(false);

  const departments = ['All', 'Software Engineering', 'Enterprise Delivery', 'Product & Innovation (R&D)', 'Operations & Tech Support', 'Product Design', 'Data Analytics'];

  const filteredJobs = selectedDept === 'All'
    ? OPEN_POSITIONS
    : OPEN_POSITIONS.filter(j => j.department === selectedDept);

  const handleApply = (e) => {
    e.preventDefault();
    if (applicantName && applicantEmail) {
      setApplicationSuccess(true);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantRole('');
      setTimeout(() => setApplicationSuccess(false), 5000);
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          HERO SECTION (Matching Site Design Language)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        
        {/* Background Image Layers */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover object-left-top origin-top-left opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover object-right-top origin-top-right opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
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
              <Briefcase size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                CAREERS &amp; WABIJOB TALENT ECOSYSTEM
              </span>
            </div>

            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Build the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  African Technology
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Join Yomtech Global and WabiJob recruitment ecosystem. We empower developers, software engineers, and IT specialists with high-impact projects, continuous career growth, and global enterprise opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <a
                href="#open-positions"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>View Open Positions</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </a>

              <a
                href="https://wabijob.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-md"
              >
                <img src={wabiJobsLogo} alt="WabiJob" className="w-5 h-5 object-contain" />
                <span>Visit WabiJob Portal ↗</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-2 w-full min-h-[380px]"
          >
            <div className="relative w-full max-w-md aspect-square p-4 z-10 flex flex-col justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center">
                    <img src={wabiJobsLogo} alt="WabiJob" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">WabiJob Ecosystem</h3>
                    <p className="text-xs text-cyan-200">Pan-African Recruitment</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Connecting vetted software developers, UI/UX designers, and tech leaders directly with enterprises and high-growth technology projects.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          OPEN POSITIONS & JOB LISTINGS
      ════════════════════════════════════════════════════ */}
      <section id="open-positions" className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          <div className="text-left space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Briefcase className="w-4 h-4" />
              <span>Careers Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Current Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Positions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              Explore engineering and technical delivery roles available at Yomtech Global and across our partner enterprise ecosystem.
            </p>
          </div>

          {/* Department Filter Bar */}
          <div className="overflow-x-auto flex items-center gap-2 scrollbar-none pb-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedDept === dept
                    ? 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white border-transparent shadow-lg'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-300'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-mono font-black uppercase tracking-widest">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                      {job.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold mt-1">
                      <span className="flex items-center gap-1"><MapPin size={13} className="text-[#0284C7]" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={13} className="text-[#0284C7]" /> {job.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{job.desc}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800 text-[10px] font-mono font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <a
                    href="#talent-form"
                    onClick={() => setApplicantRole(job.title)}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
                  >
                    <span>Apply for Position</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          TALENT APPLICATION FORM
      ════════════════════════════════════════════════════ */}
      <section id="talent-form" className="py-20 lg:py-28 bg-white relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Send className="w-4 h-4" />
              <span>Submit Your Application</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Talent Pool</span>
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              Submit your resume or join the WabiJob vetted developer network for global projects.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleApply}
              style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
              className="rounded-3xl p-8 sm:p-12 border-2 border-indigo-200/80 shadow-xl space-y-5"
            >
              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Target Position / Skill Role</label>
                <input
                  type="text"
                  placeholder="e.g. Senior Fullstack Engineer"
                  value={applicantRole}
                  onChange={(e) => setApplicantRole(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-xs uppercase tracking-widest shadow-lg transition-all hover:scale-105"
              >
                Submit Application
              </button>

              {applicationSuccess && (
                <div className="text-xs font-extrabold text-[#0284C7] text-center pt-2 animate-pulse">
                  ✓ Application received! Our HR team will contact you shortly.
                </div>
              )}
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CareersPage;
