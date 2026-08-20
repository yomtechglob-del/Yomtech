import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  Briefcase, Users, GraduationCap, Code, Sparkles, ArrowRight, Phone,
  CheckCircle2, Star, Layers, ShieldCheck, Globe, Cpu, Heart, Award,
  Search, MapPin, Clock, Send, FileText, Upload, Calendar, Check,
  ChevronRight, AlertCircle, RefreshCw, X, User, Mail, DollarSign, ExternalLink
} from 'lucide-react';

// Background Assets & Logos
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';

/* ─── 1. JOB VACANCY LISTINGS DATA ─── */
const JOB_VACANCIES = [
  {
    id: 'YOM-JOB-101',
    title: 'Senior Fullstack Software Engineer',
    department: 'Software Engineering',
    type: 'Full-Time',
    location: 'Addis Ababa, Ethiopia (Hybrid)',
    experience: '3+ Years',
    salary: 'Competitive ETB / USD',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind'],
    overview: 'Lead the architectural design and fullstack development of custom Yomnex ERP modules, high-concurrency microservices, and e-government platforms.',
    responsibilities: [
      'Architect scalable frontend & backend components using React and Node.js',
      'Design sub-50ms database queries in PostgreSQL with Redis caching',
      'Collaborate with project delivery teams for smooth Docker deployments',
      'Conduct code reviews and mentor junior software developers'
    ],
    requirements: [
      'Strong proficiency in JavaScript/TypeScript, React, Node.js, and SQL',
      'Experience building RESTful APIs and containerized microservices',
      'Solid understanding of Git, CI/CD pipelines, and software security',
      'Bachelor’s degree in Computer Science, Software Engineering, or equivalent'
    ],
    benefits: [
      'Competitive salary + performance bonuses',
      'Full health insurance coverage',
      'Continuous skills training via WabiSkills Academy',
      'Flexible remote/hybrid work schedule'
    ]
  },
  {
    id: 'YOM-JOB-102',
    title: 'Enterprise ERP Implementation Specialist',
    department: 'Enterprise Delivery',
    type: 'Full-Time',
    location: 'Addis Ababa, Ethiopia',
    experience: '2+ Years',
    salary: 'Industry Leading',
    tech: ['Yomnex ERP', 'PostgreSQL', 'Workflow Automation', 'Client UAT'],
    overview: 'Drive real-world deployment and operational customization of Yomnex ERP across government trade bureaus, commercial banks, and luxury hotels.',
    responsibilities: [
      'Map client business workflows to Yomnex ERP modules (Finance, HRM, Inventory)',
      'Manage client data migration, database seeding, and user acceptance testing (UAT)',
      'Conduct staff onboarding workshops and administrator technical coaching',
      'Provide tier-2 technical support and client workflow troubleshooting'
    ],
    requirements: [
      '2+ years experience deploying ERP, CRM, or enterprise business software',
      'Strong database query skills (SQL) and system integration knowledge',
      'Excellent client communication and project management abilities',
      'Degree in Information Systems, Business IT, or Software Engineering'
    ],
    benefits: [
      'Career growth into Enterprise Delivery Lead',
      'Client travel allowances & project milestone bonuses',
      'Comprehensive medical insurance'
    ]
  },
  {
    id: 'YOM-JOB-103',
    title: 'AI & Computer Vision Engineer',
    department: 'Product & Innovation (R&D)',
    type: 'Full-Time',
    location: 'Addis Ababa / Remote',
    experience: '2+ Years',
    salary: 'High Performance Tier',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'AI Vision', 'RTSP'],
    overview: 'Develop artificial intelligence models for automated CCTV surveillance zones, motion anomaly detection, and predictive security monitoring.',
    responsibilities: [
      'Train computer vision models for real-time object detection and perimeter tracking',
      'Optimize RTSP high-definition video stream processing for low latency',
      'Integrate AI alerts with command dashboards and incident management systems',
      'Research cutting-edge vision algorithms and AI model compression'
    ],
    requirements: [
      'Solid experience with Python, OpenCV, PyTorch or TensorFlow',
      'Knowledge of video streaming protocols (RTSP, H.264/265)',
      'Strong linear algebra and machine learning fundamentals',
      'Degree in Computer Science, AI, or Electrical Engineering'
    ],
    benefits: [
      'Access to high-performance GPU server infrastructure',
      'Research publishing & conference sponsorship',
      'Flexible remote work options'
    ]
  },
  {
    id: 'YOM-JOB-104',
    title: 'Cybersecurity & Infrastructure Analyst',
    department: 'Operations & Tech Support',
    type: 'Full-Time',
    location: 'Addis Ababa, Ethiopia',
    experience: '3+ Years',
    salary: 'Competitive Salary',
    tech: ['Penetration Testing', 'Nginx', 'Docker', 'TLS/SSL', 'Linux'],
    overview: 'Perform enterprise vulnerability audits, network defense, data center infrastructure maintenance, and zero-downtime security hardening.',
    responsibilities: [
      'Monitor enterprise server networks and data centers for cyber threats',
      'Perform regular penetration testing and vulnerability patch management',
      'Configure firewalls, TLS encryption, and secure VPN connections',
      'Maintain 99.99% server uptime SLAs across all cloud and on-premise builds'
    ],
    requirements: [
      'Hands-on experience with Linux administration, Nginx, Docker, and firewalls',
      'Relevant certifications (CEH, Security+, CISSP, or Linux LPIC) preferred',
      'Deep understanding of network security, OAuth2, and data encryption',
      'Degree in Computer Science, Cybersecurity, or Network Engineering'
    ],
    benefits: [
      'Professional security certification sponsorship',
      '24/7 on-call stipend & performance rewards',
      'Health insurance & wellness benefits'
    ]
  },
  {
    id: 'YOM-JOB-105',
    title: 'Senior UI/UX Product Designer',
    department: 'Product Design',
    type: 'Full-Time / Contract',
    location: 'Addis Ababa / Remote',
    experience: '2+ Years',
    salary: 'Competitive',
    tech: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
    overview: 'Design intuitive, accessible, and high-converting user interfaces for Yomtech platforms, WabiJob, WabiSkills, and custom client web apps.',
    responsibilities: [
      'Create high-fidelity wireframes, interactive prototypes, and design systems in Figma',
      'Conduct user research and usability testing with corporate clients and end users',
      'Collaborate with frontend developers to ensure 100% design fidelity implementation',
      'Maintain brand visual guidelines across web and mobile platforms'
    ],
    requirements: [
      'Proven portfolio showcasing web apps, mobile UI, or enterprise dashboards',
      'Expert mastery of Figma, auto-layout, design tokens, and prototyping',
      'Strong understanding of responsive layouts and web accessibility standards',
      'Degree or formal training in Design, HCI, or Multimedia'
    ],
    benefits: [
      'Work station setup allowance',
      'Creative autonomy & design team leadership',
      'Flexible work hours'
    ]
  }
];

/* ─── DEMO TRACKING DATA FOR APPLICANT TRACKER ─── */
const MOCK_TRACKING_DB = {
  'YOM-2025-8492': {
    code: 'YOM-2025-8492',
    name: 'Abebe Bikila',
    role: 'Senior Fullstack Software Engineer',
    appliedDate: '2026-08-10',
    status: 'Interview Scheduled',
    stepIndex: 3, // 0: Submitted, 1: Under Review, 2: Shortlisted, 3: Interview Scheduled, 4: Final Offer
    interviewDate: 'August 22, 2026 at 10:00 AM (EAT)',
    notes: 'Technical assessment passed with 94% score. Final panel interview scheduled.'
  },
  'YOM-2025-1049': {
    code: 'YOM-2025-1049',
    name: 'Tigist Haile',
    role: 'Enterprise ERP Implementation Specialist',
    appliedDate: '2026-08-14',
    status: 'Under Review',
    stepIndex: 1,
    interviewDate: 'Pending Review',
    notes: 'Application and CV received. HR team currently reviewing candidate background.'
  }
};

const STAGES = [
  { name: 'Application Received', desc: 'CV & Documents Submitted' },
  { name: 'Under HR Review', desc: 'Screening Experience' },
  { name: 'Technical Assessment', desc: 'Skill Verification' },
  { name: 'Interview Scheduled', desc: 'Live Panel Discussion' },
  { name: 'Final Decision / Offer', desc: 'Offer Package' }
];

export const CareersPage = () => {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeJobModal, setActiveJobModal] = useState(null);
  
  // Application Form State
  const [applicantRole, setApplicantRole] = useState('Senior Fullstack Software Engineer');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [experienceYears, setExperienceYears] = useState('3-5 Years');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);
  const [appliedRefCode, setAppliedRefCode] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Application Tracking State
  const [trackCode, setTrackCode] = useState('');
  const [trackedResult, setTrackedResult] = useState(null);
  const [trackError, setTrackError] = useState('');

  // Interview Scheduling State
  const [schedDate, setSchedDate] = useState('2026-08-25');
  const [schedTime, setSchedTime] = useState('10:00 AM');
  const [schedConfirmed, setSchedConfirmed] = useState(false);

  const departments = ['All', 'Software Engineering', 'Enterprise Delivery', 'Product & Innovation (R&D)', 'Operations & Tech Support', 'Product Design'];

  const filteredJobs = selectedDept === 'All'
    ? JOB_VACANCIES
    : JOB_VACANCIES.filter(j => j.department === selectedDept);

  // File Upload Handler
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  // Submit Online Application
  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (fullName && email && phone) {
      const generatedCode = `YOM-2025-${Math.floor(1000 + Math.random() * 9000)}`;
      setAppliedRefCode(generatedCode);
      setFormSubmitted(true);
    }
  };

  // Track Application Status
  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setTrackError('');
    const codeKey = trackCode.trim().toUpperCase();
    if (MOCK_TRACKING_DB[codeKey]) {
      setTrackedResult(MOCK_TRACKING_DB[codeKey]);
    } else if (codeKey === appliedRefCode) {
      setTrackedResult({
        code: appliedRefCode,
        name: fullName,
        role: applicantRole,
        appliedDate: new Date().toISOString().split('T')[0],
        status: 'Submitted',
        stepIndex: 0,
        interviewDate: 'Pending Review',
        notes: 'Your application has been received and logged in our candidate portal.'
      });
    } else {
      setTrackedResult(null);
      setTrackError('Tracking reference code not found. Try YOM-2025-8492 or submit a new application below.');
    }
  };

  // Schedule Interview
  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    setSchedConfirmed(true);
    setTimeout(() => setSchedConfirmed(false), 5000);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          HERO SECTION (Matching Site Design System)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        
        {/* Background Image Layers */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
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
                CAREERS &amp; RECRUITMENT PORTAL
              </span>
            </div>

            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Build Your Tech Career <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  With Yomtech Global
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Discover engineering vacancies, submit your CV, track your application status in real-time, and schedule panel interviews through our integrated recruitment portal.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <a
                href="#job-vacancies"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Browse Open Vacancies</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </a>

              <a
                href="#track-status"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-md"
              >
                <RefreshCw size={15} className="text-cyan-300" />
                <span>Track Application Status</span>
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
                    <h3 className="text-lg font-black text-white">Full-Cycle Recruitment</h3>
                    <p className="text-xs text-cyan-200">Online Tracking &amp; Interviews</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Job Vacancies → CV Upload → Real-Time Application Tracking → Interactive Interview Scheduling → Direct Hiring.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          2. JOB VACANCY LISTINGS SECTION
      ════════════════════════════════════════════════════ */}
      <section id="job-vacancies" className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          <div className="text-left space-y-3 max-w-full">
            <div className="flex items-center gap-0 w-full">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
                <span>JOB VACANCY LISTINGS</span>
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Explore Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Positions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              Select any role below to view detailed job descriptions, responsibilities, technical requirements, salary range, and benefits.
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

          {/* Job Vacancy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-mono font-black uppercase tracking-widest">
                      {job.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[9px] font-mono font-bold">
                      {job.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold mt-1">
                      <span className="flex items-center gap-1"><MapPin size={13} className="text-[#0284C7]" /> {job.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{job.overview}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800 text-[10px] font-mono font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                  <button
                    onClick={() => setActiveJobModal(job)}
                    className="flex-1 py-3 rounded-xl bg-white border border-slate-300 hover:border-cyan-400 text-slate-800 font-black text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    View Details
                  </button>
                  <a
                    href="#apply-form"
                    onClick={() => setApplicantRole(job.title)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] transition-transform"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          3. DETAILED JOB DESCRIPTION MODAL
      ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeJobModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 border-2 border-cyan-300 shadow-2xl my-8 space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveJobModal(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-black flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
                    {activeJobModal.department}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">Ref: {activeJobModal.id}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {activeJobModal.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 pt-1">
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-[#0284C7]" /> {activeJobModal.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} className="text-[#0284C7]" /> {activeJobModal.experience}</span>
                  <span className="flex items-center gap-1"><DollarSign size={14} className="text-[#0284C7]" /> {activeJobModal.salary}</span>
                </div>
              </div>

              {/* Overview */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium leading-relaxed text-slate-700">
                <span className="font-extrabold text-slate-900 block uppercase tracking-wider text-[10px] mb-1">Job Overview:</span>
                {activeJobModal.overview}
              </div>

              {/* Responsibilities */}
              <div className="space-y-2 text-xs">
                <h4 className="font-black uppercase tracking-widest text-slate-900">Key Responsibilities:</h4>
                <div className="space-y-1.5">
                  {activeJobModal.responsibilities.map((resp) => (
                    <div key={resp} className="flex items-start gap-2 text-slate-700 font-semibold">
                      <CheckCircle2 size={15} className="text-[#0284C7] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-2 text-xs">
                <h4 className="font-black uppercase tracking-widest text-slate-900">Technical Requirements:</h4>
                <div className="space-y-1.5">
                  {activeJobModal.requirements.map((req) => (
                    <div key={req} className="flex items-start gap-2 text-slate-700 font-semibold">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-2 text-xs">
                <h4 className="font-black uppercase tracking-widest text-slate-900">Perks &amp; Benefits:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeJobModal.benefits.map((ben) => (
                    <div key={ben} className="flex items-center gap-2 p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 font-bold text-slate-800">
                      <Star size={14} className="text-[#0284C7] shrink-0" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
                <a
                  href="#apply-form"
                  onClick={() => {
                    setApplicantRole(activeJobModal.title);
                    setActiveJobModal(null);
                  }}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black text-xs uppercase tracking-widest shadow-lg flex items-center gap-2"
                >
                  <span>Apply for this Role</span>
                  <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => setActiveJobModal(null)}
                  className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ════════════════════════════════════════════════════
          4, 5, 6. ONLINE APPLICATION & CV UPLOAD FORM
      ════════════════════════════════════════════════════ */}
      <section id="apply-form" className="py-20 lg:py-28 bg-white relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-left space-y-3 max-w-full">
            <div className="flex items-center gap-0 w-full">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
                <span>ONLINE JOB APPLICATION</span>
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">CV &amp; Profile</span>
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              Complete your applicant profile and upload your CV/resume to apply directly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {!formSubmitted ? (
              <form
                onSubmit={handleApplySubmit}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-8 sm:p-12 border-2 border-indigo-200/80 shadow-xl space-y-6"
              >
                {/* Selected Role */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-400 block">Applying For:</span>
                    <span className="font-extrabold text-slate-900 text-sm">{applicantRole}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-50 text-[#0284C7] text-[10px] font-black uppercase">Active Role</span>
                </div>

                {/* Profile Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abebe Bikila"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="abebe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+251 911 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Current Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Addis Ababa, Ethiopia"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Years of Experience</label>
                    <select
                      value={experienceYears}
                      onChange={(e) => setExperienceYears(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                    >
                      <option>1-2 Years</option>
                      <option>3-5 Years</option>
                      <option>5-8 Years</option>
                      <option>8+ Years Senior</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Portfolio / GitHub / LinkedIn URL</label>
                    <input
                      type="url"
                      placeholder="https://github.com/yourprofile"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>
                </div>

                {/* CV & Document Upload Field */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider flex items-center justify-between">
                    <span>CV / Resume Document (PDF or DOCX) *</span>
                    <span className="text-[10px] text-slate-500 font-normal">Max 10MB</span>
                  </label>

                  <div className="border-2 border-dashed border-cyan-300 rounded-2xl bg-cyan-50/50 p-6 text-center hover:bg-cyan-50 transition-colors relative cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <Upload size={32} className="mx-auto text-[#0284C7] mb-2" />
                    {attachedFile ? (
                      <div className="space-y-1">
                        <span className="text-xs font-black text-slate-900 block">✓ Attached: {attachedFile.name}</span>
                        <span className="text-[10px] text-emerald-700 font-bold">{(attachedFile.size / 1024).toFixed(1)} KB — Ready to submit</span>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs font-extrabold text-slate-800">Click or drag &amp; drop to upload your CV</p>
                        <p className="text-[10px] text-slate-500 mt-1">Supports PDF, DOCX, or DOC formats</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-1">
                  <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Cover Letter / Additional Information</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly explain your key accomplishments and why you're a great fit for Yomtech Global..."
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-xs uppercase tracking-widest shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Submit Application &amp; Upload CV</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-300 shadow-2xl text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">Application Successfully Received!</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-lg mx-auto">
                    Thank you, <strong className="text-slate-900">{fullName}</strong>. Your application and CV for <strong className="text-[#0284C7]">{applicantRole}</strong> have been logged in our system.
                  </p>
                </div>

                {/* Ref Code Box */}
                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 inline-block text-center space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block">Your Application Reference Code:</span>
                  <span className="text-2xl font-mono font-black text-[#0284C7] tracking-wider">{appliedRefCode}</span>
                </div>

                <p className="text-xs text-slate-500 font-medium">Use this reference code below to track your application status in real-time.</p>

                <button
                  onClick={() => {
                    setTrackCode(appliedRefCode);
                    setFormSubmitted(false);
                  }}
                  className="px-8 py-3 rounded-full bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:bg-slate-800"
                >
                  Track Application Now
                </button>
              </motion.div>
            )}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          7, 9. APPLICATION STATUS TRACKER & WORKFLOW
      ════════════════════════════════════════════════════ */}
      <section id="track-status" className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-left space-y-3 max-w-full">
            <div className="flex items-center gap-0 w-full">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
                <span>REAL-TIME STATUS TRACKING</span>
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Application Progress</span>
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              Enter your tracking reference code (e.g. <code className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-[#0284C7]">YOM-2025-8492</code>) to check your real-time status.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form onSubmit={handleTrackSubmit} className="flex gap-3">
              <input
                type="text"
                required
                placeholder="Enter Reference Code (e.g. YOM-2025-8492)"
                value={trackCode}
                onChange={(e) => setTrackCode(e.target.value)}
                className="flex-1 bg-white border-2 border-slate-300 rounded-2xl px-5 py-3.5 text-xs sm:text-sm font-mono uppercase text-slate-900 focus:outline-none focus:border-[#0284C7] shadow-sm"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black text-xs uppercase tracking-widest shadow-md hover:scale-105 transition-transform"
              >
                Track Status
              </button>
            </form>
            {trackError && <p className="text-xs text-rose-600 font-bold pt-2 text-center">{trackError}</p>}
          </div>

          {/* Tracked Result View */}
          {trackedResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border-2 border-cyan-300 shadow-2xl space-y-8"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 font-mono">Reference Code: {trackedResult.code}</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">{trackedResult.role}</h3>
                  <p className="text-xs font-bold text-[#0284C7]">Candidate: {trackedResult.name}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs uppercase tracking-widest">
                  Status: {trackedResult.status}
                </span>
              </div>

              {/* Progress Timeline */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Application Pipeline:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {STAGES.map((st, idx) => {
                    const isPassed = idx <= trackedResult.stepIndex;
                    const isCurrent = idx === trackedResult.stepIndex;
                    return (
                      <div
                        key={st.name}
                        className={`p-3.5 rounded-2xl border text-left space-y-1 transition-all ${
                          isCurrent
                            ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-lg scale-105'
                            : isPassed
                            ? 'bg-emerald-50 text-slate-800 border-emerald-200'
                            : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-black">Step 0{idx + 1}</span>
                          {isPassed && <CheckCircle2 size={13} className={isCurrent ? 'text-white' : 'text-emerald-500'} />}
                        </div>
                        <p className="text-xs font-black leading-snug">{st.name}</p>
                        <p className={`text-[9px] ${isCurrent ? 'text-cyan-100' : 'text-slate-500'}`}>{st.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Notes & Next Step */}
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-1 text-xs">
                <span className="font-extrabold text-[#0284C7] uppercase tracking-wider block text-[10px]">HR Officer Notes:</span>
                <p className="text-slate-700 font-semibold">{trackedResult.notes}</p>
                <p className="text-slate-500 font-bold pt-1">Scheduled Date: {trackedResult.interviewDate}</p>
              </div>
            </motion.div>
          )}

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          8. INTERVIEW SCHEDULING PORTAL
      ════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-left space-y-3 max-w-full">
            <div className="flex items-center gap-0 w-full">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
                <span>SHORTLISTED CANDIDATES</span>
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Panel Interview</span>
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              If your application has been shortlisted, pick an available calendar slot for your technical interview.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleScheduleSubmit}
              style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
              className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-xl space-y-5"
            >
              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Interview Date</label>
                <input
                  type="date"
                  required
                  value={schedDate}
                  onChange={(e) => setSchedDate(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Available Time Slot</label>
                <select
                  value={schedTime}
                  onChange={(e) => setSchedTime(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7]"
                >
                  <option>09:00 AM - 10:00 AM (EAT)</option>
                  <option>10:00 AM - 11:00 AM (EAT)</option>
                  <option>02:00 PM - 03:00 PM (EAT)</option>
                  <option>04:00 PM - 05:00 PM (EAT)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all"
              >
                Confirm Interview Slot
              </button>

              {schedConfirmed && (
                <div className="text-xs font-extrabold text-[#0284C7] text-center pt-2 animate-pulse">
                  ✓ Interview Slot Confirmed for {schedDate} at {schedTime}! Calendar invite sent.
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
