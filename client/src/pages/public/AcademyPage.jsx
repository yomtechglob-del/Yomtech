import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Cpu, Layout, Monitor, BarChart, GraduationCap, ArrowRight, BookOpen,
  Award, Zap, Users, Check, Sparkles, ChevronRight, ShieldCheck, Code, Globe,
  Layers, CheckCircle2, Star, ExternalLink, Phone, MapPin, Calendar, Bell
} from 'lucide-react';
import { AcademyRadialHero } from '../../components/academy/AcademyRadialHero';
import { LearningModel } from '../../components/academy/LearningModel';
import { ClassroomToRealWorld } from '../../components/academy/ClassroomToRealWorld';
import { MentorshipExperience } from '../../components/academy/MentorshipExperience';
import { CareerReadiness } from '../../components/academy/CareerReadiness';
import { AcademyEcosystem } from '../../components/academy/AcademyEcosystem';
import { PracticalLearning } from '../../components/academy/PracticalLearning';
import { GlobalLearningVision } from '../../components/academy/GlobalLearningVision';
import { AcademyCTA } from '../../components/academy/AcademyCTA';

// Dedicated unique SVG image assets for Academy page
import academyHeroImg from '../../assets/academy/wabiskills.jpg';
import academyCoursesImg from '../../assets/academy/wabiskills_courses.png';
import academyBootcampImg from '../../assets/academy/wabiskills_bootcamp.png';
import logoImg from '../../assets/academy/wabiskills-logo.jpg';
import { AboutHeroBackground } from '../../components/common/AboutHeroBackground';

const ACADEMY_COURSES = [
  {
    id: 'fullstack',
    category: 'FULLSTACK',
    stepNumber: '01.',
    icon: Code,
    title: 'Fullstack Web & Mobile Development',
    desc: 'Become a Fullstack Developer in 6 months with live classes, projects, and group support. Master HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MERN Stack.',
    badge: 'MERN Stack • 6 Months',
    duration: '5.5–6 Months',
    format: 'Live Classes + Daily Follow-ups',
    projectsCount: '1000+ Students Enrolled',
    rating: '5.0 ★★★★★',
    tags: ['HTML & CSS', 'JavaScript & React', 'Node.js & Express', 'MongoDB & MERN', 'Live Projects'],
    gradientHeader: 'from-[#F97316] via-[#EA580C] to-[#C2410C]',
    url: 'https://wabiskills.com/'
  },
  {
    id: 'ai',
    category: 'AI',
    stepNumber: '02.',
    icon: Cpu,
    title: 'Artificial Intelligence (AI with Python)',
    desc: 'Master AI and Python in a few months with hands-on projects, real-world applications, and live mentorship. Deep Learning, Machine Learning models & LLM integration.',
    badge: 'AI & Machine Learning',
    duration: '2–6 Months Self-Paced',
    format: 'Hands-on Projects + Live Labs',
    projectsCount: '125+ Students Enrolled',
    rating: '5.0 ★★★★★',
    tags: ['Python Fundamentals', 'Machine Learning', 'Deep Learning', 'PyTorch & Neural Networks', 'AI Projects'],
    gradientHeader: 'from-[#E11D48] via-[#D946EF] to-[#9333EA]',
    url: 'https://wabiskills.com/'
  },
  {
    id: 'uiux',
    category: 'DESIGN',
    stepNumber: '03.',
    icon: Layout,
    title: 'UI/UX & Product Design',
    desc: 'Master UI/UX design through live sessions, projects, and daily follow-ups. Learn Figma, User Research, Wireframing, Product Design, and Interactive Prototyping.',
    badge: 'UI/UX & Product Design',
    duration: '1.5–2 Months',
    format: 'Live Design Studio Workshops',
    projectsCount: '956+ Students Enrolled',
    rating: '4.9 ★★★★★',
    tags: ['Figma Mastery', 'UX Research', 'Product Design', 'Interactive Prototypes', 'Design Systems'],
    gradientHeader: 'from-[#8B5CF6] via-[#6366F1] to-[#4338CA]',
    url: 'https://wabiskills.com/'
  },
  {
    id: 'cyber',
    category: 'SECURITY',
    stepNumber: '04.',
    icon: ShieldCheck,
    title: 'Cyber Security Training Program',
    desc: 'Learn Cybersecurity in 3 months with practical defense projects and become job-ready professionals. Network security, threat auditing, and hands-on labs.',
    badge: 'Cyber Security',
    duration: '3 Months Intensive',
    format: 'Practical Security Labs',
    projectsCount: 'Job-Ready Certificate',
    rating: '4.9 ★★★★★',
    tags: ['Network Security', 'Ethical Auditing', 'Threat Analysis', 'Defensive Labs', 'Practical Cyber'],
    gradientHeader: 'from-[#0EA5E9] via-[#0284C7] to-[#1E40AF]',
    url: 'https://wabiskills.com/'
  },
  {
    id: 'kids',
    category: 'KIDS TECH',
    stepNumber: '05.',
    icon: Sparkles,
    title: 'Kids Tech & Physical Summer Camp',
    desc: 'Weekend physical classes for talented, tech-passionate students (Grade 4–11) at Derartu Tower, Megenagna. Programming fundamentals, AI for kids, and video editing.',
    badge: 'Grade 4–11 Physical Camp',
    duration: '2–3 Months Summer/Weekend',
    format: 'In-Person at Derartu Tower 9th Fl',
    projectsCount: 'Admission by Interview',
    rating: '5.0 ★★★★★',
    tags: ['Programming Fundamentals', 'AI for Kids', 'Video Editing', 'Basic Computers', 'Hands-on Projects'],
    gradientHeader: 'from-[#10B981] via-[#059669] to-[#047857]',
    url: 'https://wabiskills.com/'
  }
];

const WABISKILLS_TESTIMONIALS = [
  {
    quote: "I struggled to understand programming. WabiSkills made it feel like a movie—fun and clear. Instructors taught in local language, simplifying everything. Now I’m a developer building my own websites. Highly recommended!",
    author: "Ms. Hewan Worku",
    role: "University Student",
    bg: "bg-gradient-to-br from-sky-50 to-indigo-50/40 border-sky-200"
  },
  {
    quote: "After joining WabiSkills' 4th round, I transformed into a Full stack Developer. The journey was incredible, and I truly wish I had joined earlier. I highly recommend it to everyone from Assosa Ethiopia.",
    author: "Mr. Kassa Mamo",
    role: "Non-tech background with zero experience",
    bg: "bg-gradient-to-br from-purple-50 to-fuchsia-50/40 border-purple-200"
  },
  {
    quote: "Online resources were hard to follow—until I found WabiSkills. After earning a scholarship, I became both a Fullstack and AI Developer. I’m now actively building projects. Grateful—greetings!",
    author: "Amir Awel",
    role: "Grade 10 student passionate about programming",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50/40 border-amber-200"
  },
  {
    quote: "WabiSkills helped me understand real-world project structures and development. Thanks to their paid internship opportunity, I’m now part of the WabiSkills team. Grateful for the hands-on experience!",
    author: "Natnael Mesfin",
    role: "ECE Student at AASTU / WabiSkills Developer",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50/40 border-emerald-200"
  }
];

const WABISKILLS_NEWS = [
  {
    tag: "News • Until Apr 2026",
    title: "Wabiskills Summer Physical Camp for Students",
    desc: "A practical, engaging, and beginner-friendly program to help students build essential digital and personal skills at Megenagna, Derartu Tower, 9th Floor.",
    date: "Summer 2026",
    badge: "In-Person & Online"
  },
  {
    tag: "Announcement • 9th Round",
    title: "WabiSkills 9th Round MERN Stack Registration Open!",
    desc: "A comprehensive MERN Stack program structured from complete beginner to advanced level with live classes 3 days/week and 2 days practice.",
    date: "Registration Open",
    badge: "MERN Stack"
  },
  {
    tag: "Announcement • Cyber Security",
    title: "WabiSkills Cyber Security Training Program",
    desc: "Build strong, practical skills in cybersecurity and become a job-ready professional with 3-month intensive hands-on defense projects.",
    date: "Ongoing",
    badge: "Job Ready"
  }
];

export const AcademyPage = () => {
  const [activeCourseTab, setActiveCourseTab] = useState('ALL');

  const filteredCourses = activeCourseTab === 'ALL'
    ? ACADEMY_COURSES
    : ACADEMY_COURSES.filter(c => c.category === activeCourseTab);

  const handleEnrollClick = (url = 'https://wabiskills.com/') => {
    window.open(url, '_blank');
  };

  return (
    <div className="hero-cyan-gradient text-white min-h-screen relative overflow-hidden font-sans">
      
      {/* 1. RADIAL PRODUCT HERO WITH WABISKILLS ANNOUNCEMENT */}
      <AcademyRadialHero />

      {/* 2. ANNOUNCING WABISKILLS OFFICIAL COURSES SECTION */}
      <section className="py-24 bg-white text-slate-900 relative z-20 border-b border-slate-200">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-left space-y-4 max-w-full relative">
            {/* Blueprint Dot Grid Background matching Image 2 */}
            <div
              className="absolute -inset-4 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.25) 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Pill Capsule Badge + Cyan Horizontal Line Extension */}
            <div className="flex items-center gap-0 w-full relative z-10">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
                <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
                <span>OFFICIAL WABISKILLS COURSES</span>
                <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              </div>
              <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-display leading-tight relative z-10">
              What You’ll Learn with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">WabiSkills Courses</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl relative z-10">
              Master in-demand skills from technology to personal growth — all in one place. Live classes, real-world projects, and daily instructor support.
            </p>

            {/* Course Filter Tabs */}
            <div className="flex flex-wrap items-center gap-3 pt-4 relative z-10">
              {['ALL', 'FULLSTACK', 'AI', 'DESIGN', 'SECURITY', 'KIDS TECH'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveCourseTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                    activeCourseTab === tab
                      ? 'bg-[#0284C7] text-white shadow-lg shadow-sky-500/25 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid (5-Pillar Modern Business Infographic Style Matching Screenshot 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => {
              const CourseIcon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-[2.2rem] p-[3.5px] bg-gradient-to-b ${course.gradientHeader} shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2.5 flex flex-col justify-between`}
                >
                  <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col justify-between h-full border border-slate-100">
                    
                    {/* Angled Ribbon Header matching Screenshot 2 */}
                    <div
                      className={`p-6 bg-gradient-to-r ${course.gradientHeader} text-white relative overflow-hidden flex items-center justify-between shadow-md`}
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 0 100%)' }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-black font-mono tracking-tighter text-white drop-shadow-md">
                          {course.stepNumber}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider border border-white/30">
                          {course.badge}
                        </span>
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-inner">
                        <CourseIcon size={24} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-black uppercase tracking-widest text-slate-400">
                            {course.category}
                          </span>
                          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shadow-2xs flex items-center gap-1">
                            <span>{course.rating}</span>
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug">
                          {course.title}
                        </h3>

                        <p className="text-sm text-slate-600 font-medium leading-relaxed">
                          {course.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {course.tags.map(tag => (
                            <span key={tag} className="text-[11px] font-bold bg-slate-50 text-slate-600 px-3 py-1 rounded-xl border border-slate-200/80 shadow-2xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration</div>
                          <div className="text-xs font-black text-slate-800">{course.duration}</div>
                        </div>

                        <button
                          onClick={() => handleEnrollClick(course.url)}
                          className={`px-5 py-2.5 rounded-2xl bg-gradient-to-r ${course.gradientHeader} text-white text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 flex items-center gap-2 transition-all`}
                        >
                          <span>ENROLL NOW</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. WABISKILLS LEARNING METHODOLOGY */}
      <LearningModel />

      {/* 4. CLASSROOM TO REAL WORLD */}
      <ClassroomToRealWorld />

      {/* 5. MENTORSHIP & LIVE-ONLY EXPERIENCE */}
      <MentorshipExperience />

      {/* 6. TECHNICAL PROGRESSION 3D PENCIL INFOGRAPHIC (EXACT WABISKILLS.COM COPY) */}
      <CareerReadiness />

      {/* 7. WABISKILLS ACADEMY CORE ECOSYSTEM */}
      <AcademyEcosystem />

      {/* 8. PRACTICAL HANDS-ON LEARNING */}
      <PracticalLearning />

      {/* 9. WABISKILLS STUDENT TESTIMONIALS SECTION */}
      <section className="py-24 bg-white text-slate-900 relative z-20 border-b border-slate-200">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-left space-y-4 max-w-full relative">
            <div className="flex items-center gap-0 w-full relative z-10">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
                <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
                <span>WHAT OUR STUDENTS SAY</span>
                <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              </div>
              <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-display leading-tight relative z-10">
              Nurturing Skills That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Shape Your Future</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl relative z-10">
              We collect feedback from both our online and physical class students after every training round. Here are a few testimonials reflecting their transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WABISKILLS_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border-2 ${t.bg} shadow-lg space-y-6 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base text-slate-700 font-medium leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-black text-slate-900 font-display">{t.author}</h4>
                    <p className="text-xs font-bold text-[#0284C7]">{t.role}</p>
                  </div>
                  <a 
                    href="https://wabiskills.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-black text-slate-700 shadow-sm hover:bg-slate-50"
                  >
                    Verified Review
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. WABISKILLS SUMMER CAMP & NEWS ANNOUNCEMENTS */}
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20 border-b border-slate-200">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-left space-y-4 max-w-full relative">
            <div className="flex items-center gap-0 w-full relative z-10">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
                <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
                <span>OFFICIAL ANNOUNCEMENTS &amp; NEWS</span>
                <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              </div>
              <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-display leading-tight relative z-10">
              Latest News &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Physical Camps</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl relative z-10">
              Stay updated with WabiSkills training rounds, physical summer camps at Derartu Tower, Megenagna, and scholarship registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WABISKILLS_NEWS.map((n, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      {n.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{n.date}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-display">{n.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{n.desc}</p>
                </div>

                <a 
                  href="https://wabiskills.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-[#0284C7] text-white text-xs font-black uppercase tracking-wider text-center block transition-colors shadow-md"
                >
                  APPLY / REGISTER ON WABISKILLS.COM
                </a>
              </motion.div>
            ))}
          </div>

          {/* SPONSOR A STUDENT BANNER */}
          <div className="p-10 rounded-3xl bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 max-w-3xl">
              <span className="px-4 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-black uppercase tracking-widest">
                SPONSOR A STUDENT
              </span>
              <h3 className="text-3xl font-black font-display">Help Shape the Future of Tech Talent in Ethiopia</h3>
              <p className="text-sm font-medium text-white/90 leading-relaxed">
                By sponsoring a student, you become a catalyst for transformation not just in one life, but across families, communities, and the tech ecosystem.
              </p>
            </div>
            
            <a 
              href="https://wabiskills.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white text-[#0284C7] hover:bg-slate-100 text-sm font-black uppercase tracking-wider shadow-xl shrink-0 transition-transform hover:scale-105"
            >
              SPONSOR NOW ON WABISKILLS.COM
            </a>
          </div>

        </div>
      </section>

      {/* 11. GLOBAL INCLUSIVE VISION */}
      <GlobalLearningVision />

      {/* 12. ACADEMY CTA WITH DIRECT WABISKILLS CONTACT */}
      <AcademyCTA />

    </div>
  );
};

export default AcademyPage;
