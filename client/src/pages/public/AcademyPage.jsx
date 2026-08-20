import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Cpu, Layout, Monitor, BarChart, GraduationCap, ArrowRight, BookOpen,
  Award, Zap, Users, Check, Sparkles, ChevronRight, ShieldCheck, Code, Globe,
  Layers, CheckCircle2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube,
  Instagram, Star, Clock, Briefcase, User, Calendar, MessageCircle, Search, Settings, Bell, Lock, Share2, Download, Upload,
} from 'lucide-react';
import { LearningModel } from '../../components/academy/LearningModel';
import { ClassroomToRealWorld } from '../../components/academy/ClassroomToRealWorld';
import { MentorshipExperience } from '../../components/academy/MentorshipExperience';
import { CareerReadiness } from '../../components/academy/CareerReadiness';
import { AcademyEcosystem } from '../../components/academy/AcademyEcosystem';
import { PracticalLearning } from '../../components/academy/PracticalLearning';
import { GlobalLearningVision } from '../../components/academy/GlobalLearningVision';
import { AcademyCTA } from '../../components/academy/AcademyCTA';

// Dedicated unique SVG image assets for Academy page
import academyHeroImg from '../../assets/academy/product/wabiskills.jpg';


// Primary color: #11688E
const PRIMARY_COLOR = '#11688E';
const PRIMARY_LIGHT = '#1A7FA8';
const PRIMARY_DARK = '#0D4F6E';
const PRIMARY_GRADIENT = `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_LIGHT})`;

const ACADEMY_COURSES = [
  {
    id: 'fullstack',
    category: 'FULLSTACK',
    title: 'Fullstack Web & Mobile Development',
    desc: 'Master frontend React, backend Node.js, Express, MongoDB/PostgreSQL, and mobile React Native development through end-to-end production software engineering.',
    badge: 'Fullstack Engineering',
    badgeColor: `bg-[${PRIMARY_COLOR}]/10 text-[${PRIMARY_COLOR}] border-[${PRIMARY_COLOR}]/20`,
    duration: '16 Weeks',
    format: 'Live Bootcamps + Hands-on',
    projectsCount: '6+ Apps',
    rating: '4.9 ★★★★★',
    tags: ['React & Next.js', 'Node.js & Express', 'React Native Mobile', 'PostgreSQL & MongoDB', 'Cloud Deployment'],
    layout: 'left-image'
  },
  {
    id: 'ai',
    category: 'AI',
    title: 'Artificial Intelligence & Machine Learning',
    desc: 'Deep dive into PyTorch, neural network architectures, computer vision, natural language processing, and LLM fine-tuning built for production environments.',
    badge: 'AI & Data Science',
    badgeColor: `bg-[${PRIMARY_COLOR}]/10 text-[${PRIMARY_COLOR}] border-[${PRIMARY_COLOR}]/20`,
    duration: '20 Weeks',
    format: 'Project Bootcamps',
    projectsCount: '5+ AI Models',
    rating: '5.0 ★★★★★',
    tags: ['PyTorch & Python', 'Computer Vision (YOLO)', 'LLMs & Fine-Tuning', 'NLP & Vector DBs', 'Model Deployment'],
    layout: 'right-image'
  },
  {
    id: 'uiux',
    category: 'DESIGN',
    title: 'UI/UX & Modern Product Design',
    desc: 'Learn user research, wireframing, interactive prototyping in Figma, design systems creation, and usability testing with real startup client projects.',
    badge: 'Product Design',
    badgeColor: `bg-[${PRIMARY_COLOR}]/10 text-[${PRIMARY_COLOR}] border-[${PRIMARY_COLOR}]/20`,
    duration: '12 Weeks',
    format: 'Design Studio Workshops',
    projectsCount: '4+ Portfolios',
    rating: '4.9 ★★★★★',
    tags: ['Figma Mastery', 'User Research & Journey', 'Design Systems', 'Interactive Prototyping', 'Usability Audits'],
    layout: 'left-image'
  },
  {
    id: 'data',
    category: 'DATA',
    title: 'Data Engineering & Business Intelligence',
    desc: 'Build scalable data pipelines, automated ETL workflows, SQL analytical queries, and executive dashboards with Python, PostgreSQL, and PowerBI/Tableau.',
    badge: 'Data Engineering',
    badgeColor: `bg-[${PRIMARY_COLOR}]/10 text-[${PRIMARY_COLOR}] border-[${PRIMARY_COLOR}]/20`,
    duration: '14 Weeks',
    format: 'Data Lab Bootcamps',
    projectsCount: '5+ Dashboards',
    rating: '4.8 ★★★★★',
    tags: ['Python & Pandas', 'Advanced SQL & Postgres', 'ETL Data Pipelines', 'PowerBI Dashboards', 'Data Warehouse'],
    layout: 'right-image'
  }
];

export const AcademyPage = () => {
  const [activeCourseTab, setActiveCourseTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = activeCourseTab === 'ALL'
    ? ACADEMY_COURSES
    : ACADEMY_COURSES.filter(c => c.category === activeCourseTab);

  const handleEnrollClick = (title) => {
    window.open('https://wabiskills.com/', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">

      <section className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={academyHeroImg}
            alt="WabiSkills Academy Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.58)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 w-full max-w-4xl mx-auto pt-24 pb-12">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)' }}>
            <GraduationCap size={14} style={{ color: '#0ED3DD' }} />
            <span className="text-white text-xs font-bold uppercase tracking-widest">WabiSkills Academy — Addis Ababa, Ethiopia</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            Unlock Potential{' '}
            <span className="block" style={{ background: 'linear-gradient(90deg, #0ED3DD, #38BDF8, #0284C7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Shape Tomorrow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-medium max-w-2xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Our mission is to help people to find the best course online and learn with expert anytime, anywhere.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ opacity: 0.6 }}>
          <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1" style={{ border: '2px solid rgba(255,255,255,0.5)' }}>
            <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.7)' }} />
          </div>
        </div>
      </section>

      <AcademyEcosystem />


      <section id="educational-courses" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header with Webstrot Style */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#11688E]/10 rounded-full border border-[#11688E]/20 mb-6">
              <span className="text-[#11688E] text-xs font-bold tracking-wider">01</span>
              <span className="text-[#11688E] text-xs font-bold tracking-wider">|</span>
              <span className="text-[#11688E] text-xs font-bold tracking-wider">EDUCATIONAL COURSES & BOOTCAMPS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Educational <span style={{ color: PRIMARY_COLOR }}>Courses</span> &{' '}
              <span style={{ color: PRIMARY_COLOR }}>Bootcamps</span>
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Industry-driven bootcamps designed to transform ambitious learners into lead engineers, AI specialists, product designers, and data strategists.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {[
                { id: 'ALL', label: 'All Bootcamps' },
                { id: 'FULLSTACK', label: 'Full Stack' },
                { id: 'AI', label: 'AI & ML' },
                { id: 'DESIGN', label: 'UI/UX Design' },
                { id: 'DATA', label: 'Data Analytics' }
              ].map(tab => {
                const isActive = activeCourseTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCourseTab(tab.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${isActive
                      ? 'bg-[#11688E] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-200'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredCourses.map((course) => {
                const isLeftImage = course.layout === 'left-image';

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
                  >

                    {/* Mockup Side */}
                    <div className={`w-full lg:w-[45%] flex flex-col gap-4 ${isLeftImage ? 'order-1' : 'order-1 lg:order-2'}`}>

                      {/* Interactive Visual Canvas / Mockup Box */}
                      {course.id === 'fullstack' && (
                        <div className="w-full aspect-[4/3.2] bg-[#0f172a] rounded-3xl overflow-hidden relative flex border-[8px] border-gray-100 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                          {/* Mobile Mockup */}
                          <div className="w-[34%] h-[88%] bg-[#1e293b] absolute bottom-0 left-5 rounded-t-2xl border-x border-t border-slate-700 flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-20 transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="h-6 w-full border-b border-slate-700 flex justify-center items-center">
                              <div className="w-1/3 h-1 bg-slate-600 rounded-full" />
                            </div>
                            <div className="flex-1 p-3 flex flex-col gap-2.5">
                              <div className="w-full h-8 bg-[#11688E]/20 rounded border border-[#11688E]/30 flex items-center px-2.5">
                                <span className="text-[10px] text-[#11688E] font-bold">App Dashboard</span>
                              </div>
                              <div className="grid grid-cols-2 gap-1.5">
                                <div className="h-10 bg-slate-700 rounded-lg" />
                                <div className="h-10 bg-slate-700 rounded-lg" />
                              </div>
                              <div className="flex-1 bg-slate-700/60 rounded-lg" />
                            </div>
                          </div>

                          {/* Code Editor Mockup */}
                          <div className="w-[62%] h-[64%] bg-[#020617] absolute top-1/2 -translate-y-1/2 right-4 rounded-xl border border-slate-800 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10 transition-transform duration-500 group-hover:translate-x-2">
                            <div className="h-7 bg-[#0f172a] border-b border-slate-800 flex items-center px-3 gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                            </div>
                            <div className="p-4 font-mono text-[10px] text-slate-300 leading-relaxed">
                              <span className="text-[#c084fc]">const</span> <span className="text-[#60a5fa]">app</span> = <span className="text-[#fcd34d]">express</span>();<br />
                              <span className="text-[#60a5fa]">app</span>.<span className="text-[#34d399]">use</span>(cors());<br />
                              <span className="text-[#60a5fa]">app</span>.<span className="text-[#34d399]">get</span>(<span className="text-[#fcd34d]">'/api'</span>, (req, res) =&gt; &#123;<br />
                              &nbsp;&nbsp;res.<span className="text-[#34d399]">json</span>(&#123; status: <span className="text-[#fcd34d]">'success'</span> &#125;);<br />
                              &#125;);<span className="animate-pulse font-bold text-[#38bdf8]">_</span>
                            </div>
                          </div>

                          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] text-slate-400 tracking-widest font-semibold z-30">
                            React &bull; Node &bull; React Native
                          </div>
                        </div>
                      )}

                      {course.id === 'ai' && (
                        <div className="w-full aspect-[4/3.2] bg-[#09090b] rounded-3xl overflow-hidden relative flex items-center justify-center border-[8px] border-gray-100 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#11688E]/30 via-[#09090b] to-[#09090b]" />

                          <div className="w-full h-full relative flex items-center justify-center z-10">
                            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                              <path d="M50 50 L150 50 L150 150 L50 150 Z" fill="none" stroke="#11688E" strokeWidth="0.5" strokeDasharray="2 4" />
                              <path d="M100 20 L180 100 L100 180 L20 100 Z" fill="none" stroke="#11688E" strokeWidth="0.5" strokeDasharray="2 4" />
                              <line x1="50" y1="50" x2="150" y2="150" stroke="#11688E" strokeWidth="1" opacity="0.5" />
                              <line x1="150" y1="50" x2="50" y2="150" stroke="#11688E" strokeWidth="1" opacity="0.5" />
                            </svg>

                            <div className="absolute top-[25%] left-[25%] w-3 h-3 rounded-full bg-[#11688E] shadow-[0_0_20px_#11688E] animate-pulse" />
                            <div className="absolute bottom-[25%] right-[25%] w-3 h-3 rounded-full bg-[#11688E] shadow-[0_0_20px_#11688E] animate-pulse" />
                            <div className="absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-[#11688E] shadow-[0_0_15px_#11688E]" />
                            <div className="absolute bottom-[25%] left-[25%] w-2 h-2 rounded-full bg-[#11688E] shadow-[0_0_15px_#11688E]" />

                            <div className="absolute w-[72%] bg-[#18181b]/90 border border-slate-700/50 rounded-xl backdrop-blur-md p-4 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 transition-transform duration-500 group-hover:scale-105">
                              <div className="flex gap-1.5 mb-2.5 border-b border-slate-700 pb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                              </div>
                              <div className="font-mono text-[10px] text-indigo-300 leading-relaxed">
                                &gt; import torch<br />
                                &gt; model = NeuralNet()<br />
                                &gt; model.train(epochs=100)<br />
                                <span className="text-[#34d399] mt-1.5 block">&gt; Epoch 100/100: Accuracy: 99.8%</span>
                                &gt; <span className="animate-pulse font-bold text-white">_</span>
                              </div>
                            </div>
                          </div>

                          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] text-slate-400 tracking-widest font-semibold z-30">
                            AI Neural Models &bull; PyTorch
                          </div>
                        </div>
                      )}

                      {course.id === 'uiux' && (
                        <div className="w-full aspect-[4/3.2] bg-[#1e1e1e] rounded-3xl overflow-hidden relative flex border-[8px] border-gray-100 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                          <div className="w-[22%] h-full bg-[#2c2c2c] border-r border-[#3a3a3a] p-3 flex flex-col gap-2.5 z-20">
                            <div className="flex items-center gap-1.5 mb-1">
                              <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                              <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="w-full h-2 bg-[#4a4a4a] rounded-sm" />
                            <div className="w-3/4 h-2 bg-[#4a4a4a] rounded-sm" />
                            <div className="w-full h-2 bg-[#4a4a4a] rounded-sm mt-2" />
                            <div className="w-1/2 h-2 bg-[#4a4a4a] rounded-sm" />
                          </div>

                          <div className="flex-1 bg-[#1e1e1e] relative p-4 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                            <div className="flex gap-4 transition-transform duration-500 group-hover:scale-105 relative z-10 w-full h-full items-center justify-center">
                              <div className="w-[45%] h-[85%] bg-[#0b0c10] rounded-xl shadow-2xl border border-[#2f3542] p-3 flex flex-col gap-2.5 relative overflow-hidden">
                                <div className="w-full h-4 bg-[#2f3542] rounded-md" />
                                <div className="flex-1 bg-[#11688E]/20 rounded-md border border-[#11688E]/40" />
                                <div className="w-full h-8 bg-[#11688E]/20 rounded-md border border-[#11688E]/40" />
                              </div>
                              <div className="w-[45%] h-[85%] bg-[#0b0c10] rounded-xl shadow-2xl border border-[#2f3542] p-3 flex flex-col gap-2.5 relative">
                                <div className="absolute -inset-1 border-[1.5px] border-[#11688E] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                  <div className="absolute -top-3 -left-1 bg-[#11688E] text-white text-[8px] font-bold px-1 rounded-sm">Component</div>
                                </div>
                                <div className="flex gap-2 h-8">
                                  <div className="w-8 bg-[#2f3542] rounded-full" />
                                  <div className="flex-1 bg-[#2f3542] rounded-md" />
                                </div>
                                <div className="flex-1 bg-[#2f3542] rounded-md" />
                              </div>
                            </div>
                          </div>

                          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] text-slate-400 tracking-widest font-semibold z-30">
                            Figma &bull; Design Tokens &bull; Prototyping
                          </div>
                        </div>
                      )}

                      {course.id === 'data' && (
                        <div className="w-full aspect-[4/3.2] bg-[#020617] rounded-3xl overflow-hidden relative flex border-[8px] border-gray-100 shadow-xl group-hover:shadow-2xl transition-shadow duration-500 p-5 flex-col">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#020617] z-0" />

                          <div className="flex-1 w-full bg-[#1e293b] rounded-2xl border border-slate-700/50 p-3.5 shadow-2xl flex flex-col gap-3 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="w-1/2 h-2.5 bg-slate-600 rounded-md" />

                            <div className="flex gap-2.5 h-16">
                              <div className="flex-1 bg-[#11688E]/10 border border-[#11688E]/20 rounded-lg flex items-end p-2.5 gap-1.5 overflow-hidden">
                                <div className="w-full bg-[#11688E] h-[30%] rounded-t-sm group-hover:h-[60%] transition-all duration-500" />
                                <div className="w-full bg-[#1A7FA8] h-[50%] rounded-t-sm group-hover:h-[80%] transition-all duration-500 delay-75" />
                                <div className="w-full bg-[#2A8FC8] h-[90%] rounded-t-sm group-hover:h-[40%] transition-all duration-500 delay-100" />
                                <div className="w-full bg-[#0D4F6E] h-[60%] rounded-t-sm group-hover:h-[95%] transition-all duration-500 delay-150" />
                              </div>
                              <div className="w-16 bg-[#0f172a] rounded-lg border border-slate-700 flex flex-col justify-center items-center gap-1">
                                <div className="text-[#34d399] font-bold text-sm">+24%</div>
                                <div className="w-6 h-1 bg-slate-700 rounded-full" />
                              </div>
                            </div>

                            <div className="flex-1 bg-[#0f172a] rounded-lg border border-slate-700/50 p-2.5 font-mono text-[9px] text-[#34d399] leading-relaxed overflow-hidden">
                              <span className="text-[#c084fc]">SELECT</span> user_id, count(*)<br />
                              <span className="text-[#c084fc]">FROM</span> activity_log<br />
                              <span className="text-[#c084fc]">GROUP BY</span> user_id;
                            </div>
                          </div>

                          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] text-slate-400 tracking-widest font-semibold z-30">
                            Data Engine &bull; Python &bull; SQL
                          </div>
                        </div>
                      )}

                      {/* Integrated Stats Grid */}
                      <div className="grid grid-cols-4 gap-1 bg-gray-50 rounded-2xl p-1.5 border border-gray-200">
                        <div className="text-center p-2">
                          <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">Duration</p>
                          <p className="text-sm font-bold" style={{ color: PRIMARY_COLOR }}>{course.duration}</p>
                        </div>
                        <div className="text-center p-2 border-l border-gray-200">
                          <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">Format</p>
                          <p className="text-sm font-bold text-gray-700">{course.format.split('+')[0]}</p>
                        </div>
                        <div className="text-center p-2 border-l border-gray-200">
                          <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">Projects</p>
                          <p className="text-sm font-bold text-gray-700">{course.projectsCount}</p>
                        </div>
                        <div className="text-center p-2 border-l border-gray-200">
                          <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">Rating</p>
                          <p className="text-sm font-bold text-amber-500">{course.rating.split(' ')[0]}</p>
                        </div>
                      </div>

                    </div>

                    {/* Content Side */}
                    <div className={`w-full lg:w-[55%] flex flex-col justify-center py-2 ${isLeftImage ? 'lg:pl-6 order-2' : 'lg:pr-6 order-2 lg:order-1'}`}>

                      {/* Badges Row */}
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className="px-3.5 py-1 rounded-full bg-[#11688E]/10 text-[#11688E] text-[10px] font-bold uppercase tracking-widest border border-[#11688E]/20">
                          Educational Bootcamp
                        </span>
                        <span className={`px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${course.badgeColor}`}>
                          {course.badge}
                        </span>
                        <span className="px-3.5 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest border border-green-100 ml-auto hidden sm:block">
                          Open Enrollment
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                        {course.title}
                      </h3>

                      {/* Course Description */}
                      <p className="text-base text-gray-600 mb-8 leading-relaxed">
                        {course.desc}
                      </p>

                      {/* Technology Stack Pills */}
                      <div className="mb-8">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Key Skills & Technology Stack:</p>
                        <div className="flex flex-wrap gap-2.5">
                          {course.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold flex items-center gap-2 bg-white shadow-sm hover:shadow-md transition-shadow">
                              <CheckCircle2 size={15} style={{ color: PRIMARY_COLOR }} />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-4 mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleEnrollClick(course.title)}
                          className="px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                          style={{ background: PRIMARY_GRADIENT, boxShadow: `0 8px 25px ${PRIMARY_COLOR}40` }}
                        >
                          <span>Enroll / Apply Now</span>
                          <ArrowRight size={16} />
                        </motion.button>

                        <a
                          href="https://wabiskills.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-bold hover:border-[#11688E] hover:text-[#11688E] transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                        >
                          <span>View Syllabus ↗</span>
                        </a>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 04. FOUR-PILLAR ECOSYSTEM (LEARNING MODEL) */}
      <LearningModel />

      {/* 05. PRACTICAL APPLICATION (CLASSROOM TO REAL WORLD) */}
      <ClassroomToRealWorld />

      {/* 06. 1-ON-1 GUIDANCE & SENIOR MENTORSHIP */}
      <MentorshipExperience />

      {/* 07. TECHNICAL PROGRESSION & CAREER ROADMAP */}
      <CareerReadiness />

      {/* 08. EDITORIAL PHILOSOPHY (WHY PRACTICAL LEARNING MATTERS) */}
      <PracticalLearning />

      {/* 09. GLOBAL VISION (LEARNING WITHOUT BORDERS) */}
      <GlobalLearningVision />

      {/* 10. FINAL CONVERSION CTA - Webstrot Style */}
      <section className="py-16" style={{ background: PRIMARY_GRADIENT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <span className="text-white text-xs font-bold tracking-wider">START YOUR LEARNING JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your <br />
            <span className="text-white/90">Future in Tech?</span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Join 500+ students who have transformed their careers through our bootcamps. Get hands-on experience, mentorship, and a path to your dream job.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://wabiskills.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-white text-[#11688E] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Get Started Today</span>
              <ArrowRight size={18} />
            </motion.a>

            <a
              href="tel:+251877666699"
              className="px-8 py-4 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>+251 (877) 666-699</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-white/70 text-sm">Students Enrolled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-white/70 text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">90%</p>
              <p className="text-white/70 text-sm">Placement Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-white/70 text-sm">Expert Mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Webstrot Style */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">WabiSkills</h3>
              <p className="text-sm leading-relaxed">Empowering the next generation of tech leaders through hands-on learning and mentorship.</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Youtube size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bootcamps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentors</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>+251 (877) 666-699</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>info@wabiskills.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>Addis Ababa, Ethiopia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} WabiSkills. All rights reserved. | The Art Of Design & Development</p>
          </div>
        </div>
      </footer>

    </div>
  );
};