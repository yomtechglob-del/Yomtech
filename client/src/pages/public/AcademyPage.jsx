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
    title: 'Fullstack Web & Mobile Development',
    desc: 'Become a Fullstack Developer in 6 months with live classes, projects, and group support. Master HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MERN Stack.',
    badge: 'MERN Stack • 6 Months',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    duration: '5.5–6 Months',
    format: 'Live Classes + Daily Follow-ups',
    projectsCount: '1000+ Students Enrolled',
    rating: '5.0 ★★★★★',
    tags: ['HTML & CSS', 'JavaScript & React', 'Node.js & Express', 'MongoDB & MERN', 'Live Projects'],
    layout: 'left-image',
    url: 'https://wabiskills.com/'
  },
  {
    id: 'ai',
    category: 'AI',
    title: 'Artificial Intelligence (AI with Python)',
    desc: 'Master AI and Python in a few months with hands-on projects, real-world applications, and live mentorship. Deep Learning, Machine Learning models & LLM integration.',
    badge: 'AI & Machine Learning',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    duration: '2–6 Months Self-Paced',
    format: 'Hands-on Projects + Live Labs',
    projectsCount: '125+ Students Enrolled',
    rating: '5.0 ★★★★★',
    tags: ['Python Fundamentals', 'Machine Learning', 'Deep Learning', 'PyTorch & Neural Networks', 'AI Projects'],
    layout: 'right-image',
    url: 'https://wabiskills.com/'
  },
  {
    id: 'uiux',
    category: 'DESIGN',
    title: 'UI/UX & Product Design',
    desc: 'Master UI/UX design through live sessions, projects, and daily follow-ups. Learn Figma, User Research, Wireframing, Product Design, and Interactive Prototyping.',
    badge: 'UI/UX & Product Design',
    badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
    duration: '1.5–2 Months',
    format: 'Live Design Studio Workshops',
    projectsCount: '956+ Students Enrolled',
    rating: '4.9 ★★★★★',
    tags: ['Figma Mastery', 'UX Research', 'Product Design', 'Interactive Prototypes', 'Design Systems'],
    layout: 'left-image',
    url: 'https://wabiskills.com/'
  },
  {
    id: 'cyber',
    category: 'SECURITY',
    title: 'Cyber Security Training Program',
    desc: 'Learn Cybersecurity in 3 months with practical defense projects and become job-ready professionals. Network security, threat auditing, and hands-on labs.',
    badge: 'Cyber Security',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    duration: '3 Months Intensive',
    format: 'Practical Security Labs',
    projectsCount: 'Job-Ready Certificate',
    rating: '4.9 ★★★★★',
    tags: ['Network Security', 'Ethical Auditing', 'Threat Analysis', 'Defensive Labs', 'Practical Cyber'],
    layout: 'right-image',
    url: 'https://wabiskills.com/'
  },
  {
    id: 'kids',
    category: 'KIDS TECH',
    title: 'Kids Tech & Physical Summer Camp',
    desc: 'Weekend physical classes for talented, tech-passionate students (Grade 4–11) at Derartu Tower, Megenagna. Programming fundamentals, AI for kids, and video editing.',
    badge: 'Grade 4–11 Physical Camp',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    duration: '2–3 Months Summer/Weekend',
    format: 'In-Person at Derartu Tower 9th Fl',
    projectsCount: 'Admission by Interview',
    rating: '5.0 ★★★★★',
    tags: ['Programming Fundamentals', 'AI for Kids', 'Video Editing', 'Basic Computers', 'Hands-on Projects'],
    layout: 'left-image',
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
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-50 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-sm">
              <Award className="w-4 h-4 text-[#0284C7]" />
              <span>OFFICIAL WABISKILLS COURSES</span>
              <span className="text-[#0284C7] font-bold">◆</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-display">
              What You’ll Learn with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                WabiSkills Courses
              </span>
            </h2>
            <p className="text-lg text-slate-500 font-semibold max-w-2xl mx-auto">
              Master in-demand skills from technology to personal growth — all in one place. Live classes, real-world projects, and daily instructor support.
            </p>

            {/* Course Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
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

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${course.badgeColor}`}>
                      {course.badge}
                    </span>
                    <span className="text-xs font-bold text-amber-500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {course.rating}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-display group-hover:text-[#0284C7] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {course.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {course.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-bold bg-slate-50 text-slate-500 px-3 py-1 rounded-lg border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Duration</div>
                    <div className="text-sm font-black text-slate-800">{course.duration}</div>
                  </div>

                  <button
                    onClick={() => handleEnrollClick(course.url)}
                    className="px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-sky-600 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-sky-500/20 flex items-center gap-2 transition-all hover:gap-3"
                  >
                    <span>ENROLL NOW</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
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
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-50 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-sm">
              <Users className="w-4 h-4 text-[#0284C7]" />
              <span>WHAT OUR STUDENTS SAY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-display">
              Nurturing Skills That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                Shape Your Future
              </span>
            </h2>
            <p className="text-lg text-slate-500 font-semibold max-w-2xl mx-auto">
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
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-50 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-sm">
              <Bell className="w-4 h-4 text-[#0284C7]" />
              <span>OFFICIAL ANNOUNCEMENTS &amp; NEWS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-display">
              Latest News &amp; Physical Camps
            </h2>
            <p className="text-lg text-slate-500 font-semibold max-w-2xl mx-auto">
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
