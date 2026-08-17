import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Cpu, LayoutGrid, Monitor, GraduationCap, Video, ShieldCheck, Smartphone,
  Globe, Code, UserCheck, Cloud, Camera, ArrowRight, Mail, Filter, Check, Sparkles, ChevronLeft, ChevronRight
} from 'lucide-react';
// Real high quality visual image assets for each service card
import erpImg from '../../assets/services/erp.png';
import crmImg from '../../assets/services/crm.png';
import sfaImg from '../../assets/services/sfa.png';
import wmsImg from '../../assets/services/wms.png';
import securityImg from '../../assets/services/security.png';
import mobileImg from '../../assets/services/mobile.png';
import webImg from '../../assets/services/web.png';
import customImg from '../../assets/services/custom.png';
import documentaryImg from '../../assets/services/documentary.png';
import cybersecurityImg from '../../assets/services/cybersecurity.png';
import cloudImg from '../../assets/services/cloud.png';
import coachingImg from '../../assets/services/coaching.png';
import educationImg from '../../assets/services/education.png';
import academyBgImg from '../../assets/academy/product/background.png';

// Premium 3-pillar composite hero images
import pillarITImg from '../../assets/services/pillar_it_solutions.png';
import pillarSoftwareImg from '../../assets/services/pillar_software_dev.png';
import pillarEducationImg from '../../assets/services/pillar_education_training.png';

// 4 New Enterprise Strategy Sections
import { ServicesEngineeringApproach } from '../../components/services/ServicesEngineeringApproach';
import { ServicesChallengeToImpact } from '../../components/services/ServicesChallengeToImpact';
import { ServicesScalableTechnology } from '../../components/services/ServicesScalableTechnology';
import { ServicesPartnershipModel } from '../../components/services/ServicesPartnershipModel';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const ServicesPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeHighlightId, setActiveHighlightId] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [hoveredServiceTitle, setHoveredServiceTitle] = useState(null);

  useEffect(() => {

    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }

    // Smooth scroll to exact service ID from hash or query param
    const hash = window.location.hash.replace('#', '');
    const serviceParam = searchParams.get('service');
    const targetId = hash || serviceParam;

    if (targetId) {
      // Find if target belongs to a specific category
      if (['erp-software-solutions', 'crm-software-solutions', 'sfa-software-solutions', 'wms-software-solutions', 'surveillance-security-integration'].includes(targetId)) {
        setSelectedCategory('IT Solutions');
      } else if (['mobile-app-development', 'web-app-development', 'custom-software-development'].includes(targetId)) {
        setSelectedCategory('Software Development');
      } else if (['tech-based-documentaries', 'cybersecurity-it-consulting', 'cloud-services-deployment', 'tech-coaching-mentorship', 'online-tech-education'].includes(targetId)) {
        setSelectedCategory('Education & Training');
      }

      setActiveHighlightId(targetId);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
    }
  }, [searchParams]);

  const handleCategoryFilter = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  const quickServices = [
    { title: 'ERP Software Solution', icon: Cpu, img: erpImg },
    { title: 'WMS Software Solution', icon: LayoutGrid, img: wmsImg },
    { title: 'SFA Software Solution', icon: Monitor, img: sfaImg },
    { title: 'Online Tech Education', icon: GraduationCap, img: educationImg },
    { title: 'Tech Documentary', icon: Video, img: documentaryImg },
    { title: 'Cybersecurity & IT Consulting', icon: ShieldCheck, img: cybersecurityImg },
    { title: 'Mobile App Development', icon: Smartphone, img: mobileImg },
    { title: 'Web App Development', icon: Globe, img: webImg },
    { title: 'Build Custom Software', icon: Code, img: customImg },
    { title: 'Give Tech Related Coach', icon: UserCheck, img: coachingImg },
    { title: 'Cloud Service & Deployment', icon: Cloud, img: cloudImg },
    { title: 'Surveillance & Security', icon: Camera, img: securityImg }
  ];

  const serviceCategories = [
    {
      categoryTitle: 'IT Solutions',
      items: [
        {
          title: 'ERP Software Solutions',
          desc: 'Our Enterprise Resource Planning (ERP) solutions help businesses centralize data, automate workflows, and improve efficiency. From finance and HR to supply chain and procurement, ERP systems enable seamless integration between departments and provide real-time insights for smarter decision-making.',
          image: erpImg,
          layout: 'right-image'
        },
        {
          title: 'CRM Software Solutions',
          desc: 'Our Customer Relationship Management (CRM) software enhances customer engagement by helping you track leads, monitor customer interactions, and streamline sales processes. With advanced analytics and reporting, you can personalize customer experiences and build long-lasting partnerships.',
          image: crmImg,
          layout: 'left-image'
        },
        {
          title: 'SFA Software Solutions',
          desc: 'Sales Force Automation (SFA) solutions empower your sales team with tools to manage prospects, automate repetitive tasks, and optimize territory management. Gain deeper visibility into performance metrics and close deals faster with data-driven strategies.',
          image: sfaImg,
          layout: 'right-image'
        },
        {
          title: 'WMS Software Solutions',
          desc: 'Our Warehouse Management Systems (WMS) help optimize inventory control, improve order accuracy, and automate logistics. With barcode scanning, real-time tracking, and integration with ERP systems, you can achieve a smarter and more efficient supply chain.',
          image: wmsImg,
          layout: 'left-image'
        },
        {
          title: 'Surveillance & Security Integration',
          desc: 'We provide advanced surveillance and security solutions, including IP & CCTV camera systems, real-time monitoring, motion detection, and automated alerts. Our services integrate seamlessly with existing IT infrastructure to ensure maximum protection of assets, property, and people.',
          image: securityImg,
          layout: 'right-image'
        }
      ]
    },
    {
      categoryTitle: 'Software Development',
      items: [
        {
          title: 'Mobile App Development',
          desc: 'We design and develop user-friendly mobile applications for Android and iOS. Our apps are built with modern frameworks, ensuring high performance, scalability, and seamless integration with third-party services.',
          image: mobileImg,
          layout: 'left-image'
        },
        {
          title: 'Web App Development',
          desc: 'Our web application development services focus on creating secure, scalable, and responsive applications. Whether it’s an e-commerce platform, enterprise portal, or custom solution, we ensure high performance and excellent user experience.',
          image: webImg,
          layout: 'right-image'
        },
        {
          title: 'Custom Software Development',
          desc: 'We build tailor-made software solutions designed to solve unique business challenges. From initial planning and UI/UX design to deployment and support, we deliver software that aligns perfectly with your goals.',
          image: customImg,
          layout: 'left-image'
        }
      ]
    },
    {
      categoryTitle: 'Education & Training',
      items: [
        {
          title: 'Tech-Based Documentaries',
          desc: 'We produce educational tech-based documentaries that simplify complex concepts and highlight industry trends. These resources help organizations, schools, and individuals stay informed about technological advancements.',
          image: documentaryImg,
          layout: 'right-image'
        },
        {
          title: 'Cybersecurity & IT Consulting',
          desc: 'Our cybersecurity and IT consulting services provide businesses with expert guidance on securing systems, managing risk, and implementing best practices. We help organizations strengthen their digital defenses and comply with industry standards.',
          image: cybersecurityImg,
          layout: 'left-image'
        },
        {
          title: 'Cloud Services & Deployment',
          desc: 'We offer end-to-end cloud migration, hosting, and deployment services to help organizations move their workloads securely and efficiently. From multi-cloud to hybrid cloud, we ensure scalability, cost-efficiency, and maximum uptime.',
          image: cloudImg,
          layout: 'right-image'
        },
        {
          title: 'Tech Coaching & Mentorship',
          desc: 'Our coaching programs provide personalized mentorship in programming, software development, cybersecurity, and emerging technologies. We help students and professionals upskill and grow in their careers.',
          image: coachingImg,
          layout: 'left-image'
        },
        {
          title: 'Online Tech Education',
          desc: 'We deliver interactive online tech education covering software engineering, fullstack development, AI, and cloud computing. Learners gain hands-on experience with projects designed for real-world scenarios.',
          image: educationImg,
          layout: 'right-image'
        }
      ]
    }
  ];

  const handleContactClick = (serviceTitle) => {
    navigate('/contact', { state: { inquiryType: 'B2B_SOFTWARE', prefillService: serviceTitle } });
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 min-h-screen relative overflow-hidden" style={{ backgroundColor: '#F8FAFC', color: '#0f172a', minHeight: '100vh' }}>
      {/* 1. HERO HEADER SECTION */}
      <section
        className="w-full pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 relative z-10 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #edf7ff 0%, #dbeefe 52%, #d8f3ff 100%)' }}
      >
        <div className="absolute inset-0">
          <img
            src={academyBgImg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover scale-110 opacity-95 blur-[10px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.74)_0%,rgba(240,249,255,0.68)_40%,rgba(219,234,254,0.74)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(255,255,255,0.95),transparent_24%),radial-gradient(circle_at_76%_24%,rgba(14,165,233,0.18),transparent_24%),radial-gradient(circle_at_60%_78%,rgba(59,130,246,0.2),transparent_26%)]" />
        </div>

        {/* CSS for infinite smooth marquee and pause on hover */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 34s linear infinite;
          }
          .carousel-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>

        {/* Ambient background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-sky-400/15 blur-[170px] rounded-full" />
          <div className="absolute bottom-[-12%] left-1/2 -translate-x-1/2 w-[1200px] h-[320px] bg-blue-500/20 blur-[140px] rounded-full" />
        </div>

        <div className="mx-auto flex flex-col items-center text-center relative z-10 w-full">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full backdrop-blur-md border text-[#0284C7] text-xs font-bold tracking-widest uppercase shadow-md"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.72)', borderColor: 'rgba(56, 189, 248, 0.3)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
            ENTERPRISE SOLUTIONS & TALENT
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-slate-900 leading-tight mb-6"
          >
            Our <span style={{ color: '#0284C7', textShadow: '0 0 20px rgba(56, 189, 248, 0.24)' }}>Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl px-4 leading-relaxed font-normal mb-20"
            style={{ color: 'rgba(15, 23, 42, 0.78)' }}
          >
            We help businesses and individuals leverage cutting-edge technology to solve
            complex problems and drive real-world impact.
          </motion.p>

          {/* Moving Service Track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full py-10 max-w-[1500px] mx-auto px-4"
          >
            <div className="absolute left-0 right-0 top-[44%] h-[6px] rounded-full bg-gradient-to-r from-transparent via-sky-400/70 to-transparent blur-[1px]" />
            <div className="absolute left-0 right-0 top-[44%] h-px rounded-full bg-sky-200/80" />

            <div className="pointer-events-none absolute left-0 top-[44%] -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/60 bg-white/90 shadow-[0_0_18px_rgba(59,130,246,0.18)]">
              <ChevronLeft size={22} className="text-[#0284C7]" />
            </div>
            <div className="pointer-events-none absolute right-0 top-[44%] -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/60 bg-white/90 shadow-[0_0_18px_rgba(59,130,246,0.18)]">
              <ChevronRight size={22} className="text-[#0284C7]" />
            </div>

            <div className="carousel-container relative overflow-hidden px-12">
              <div className="animate-marquee items-start gap-10">
                {[...quickServices, ...quickServices].map((service, index) => {
                  const Icon = service.icon;
                  const isHovered = hoveredServiceTitle === service.title;
                  const isDimmed = hoveredServiceTitle && !isHovered;

                  return (
                    <motion.div
                      key={`${service.title}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index % quickServices.length) * 0.04 }}
                      onClick={() => {
                        handleCategoryFilter('all');
                        const targetId = slugify(service.title);
                        setTimeout(() => {
                          const el = document.getElementById(targetId);
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 150);
                      }}
                      className={`group relative flex min-w-[132px] max-w-[132px] cursor-pointer flex-col items-center text-center transition-all duration-300 ${
                        isDimmed ? 'blur-[2.5px] opacity-35 scale-[0.97]' : 'blur-0 opacity-100 scale-100'
                      }`}
                      onMouseEnter={() => setHoveredServiceTitle(service.title)}
                      onMouseLeave={() => setHoveredServiceTitle(null)}
                    >
                      <div
                        className="relative z-10 mb-5 flex h-[108px] w-[108px] items-center justify-center rounded-full border-2 transition-all duration-300"
                        style={{
                          borderColor: isHovered ? '#38bdf8' : 'rgba(59, 130, 246, 0.95)',
                          background: isHovered
                            ? 'radial-gradient(circle at 50% 40%, rgba(14,211,221,0.22), rgba(5,23,90,0.95) 72%)'
                            : 'radial-gradient(circle at 50% 40%, rgba(56,189,248,0.16), rgba(4,23,96,0.95) 72%)',
                          boxShadow: isHovered
                            ? '0 0 28px rgba(56, 189, 248, 0.75), inset 0 0 24px rgba(56, 189, 248, 0.18)'
                            : '0 0 18px rgba(37, 99, 235, 0.65), inset 0 0 18px rgba(56, 189, 248, 0.12)'
                        }}
                      >
                        <div className="absolute inset-2 rounded-full border border-sky-300/35" />
                        <div className="absolute -bottom-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-cyan-300 bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                        <div
                          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-105"
                          style={{ background: 'linear-gradient(135deg, rgba(8,145,178,0.2) 0%, rgba(2,132,199,0.28) 100%)' }}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-sm font-semibold leading-snug text-slate-900">
                          {service.title}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Explore Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <a
              href="#explore-our-services"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-white font-semibold text-sm hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: '#1DA1F2',
                boxShadow: '0 0 20px rgba(29, 161, 242, 0.35)',
                border: '2px solid rgba(29, 161, 242, 0.3)'
              }}
            >
              <span>Explore All Services</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* 2. THREE PILLARS — ULTIMATE PREMIUM */}
      <section id="explore-our-services" className="py-32 relative text-slate-900 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #e0f2fe 0%, #f8fafc 55%, #ecfdf5 100%)' }}>

        {/* Dot-grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }} />

        {/* Ambient orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-200/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-200/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-200/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-4 pt-4"
          >
            <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0284C7] px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-sky-200 shadow-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ED3DD] animate-pulse" />
              EXPLORE DETAILED CAPABILITIES
            </div>
            <h2 className="text-5xl md:text-6xl font-black font-display text-slate-900 leading-tight mb-4">
              Three Pillars of{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Innovation</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] rounded-full origin-left block"
                />
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything we build falls under three core domains — each meticulously engineered for real-world enterprise impact.
            </p>
          </motion.div>

          {/* Stats Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-14 flex-wrap"
          >
            {[
              { value: '13+', label: 'Total Services', color: 'text-sky-600', bg: 'bg-sky-50 border-sky-200' },
              { value: '3', label: 'Core Pillars', color: 'text-violet-600', bg: 'bg-violet-50 border-violet-200' },
              { value: '500+', label: 'Projects Delivered', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
              { value: '100%', label: 'Client Focused', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.07 }}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border ${stat.bg} shadow-sm`}
              >
                <span className={`text-xl font-black ${stat.color}`}>{stat.value}</span>
                <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                num: '01', featured: false,
                title: 'IT Solutions',
                subtitle: 'Enterprise Infrastructure',
                image: pillarITImg,
                Icon: Cpu,
                iconBg: 'from-[#0EA5E9] to-[#0ED3DD]',
                iconGlowColor: 'rgba(14,211,221,0.45)',
                topBar: 'from-[#0EA5E9] to-[#0ED3DD]',
                bloom: 'from-sky-100/80 via-cyan-50/40',
                numColor: 'text-sky-100/70',
                count: 5, countBg: 'bg-sky-50 text-sky-800 border-sky-200',
                desc: 'Enterprise-grade systems that automate and interconnect every operational layer of your business.',
                exploreColor: 'text-[#0284C7]', exploreBg: 'bg-sky-50 border-sky-200',
                ctaBtnHover: 'group-hover:bg-gradient-to-r group-hover:from-[#0EA5E9] group-hover:to-[#0ED3DD] group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-sky-500/20',
                arrowColor: '#0284C7',
                arrowCircleHover: 'group-hover:bg-[#0284C7] group-hover:border-[#0284C7] group-hover:text-white group-hover:shadow-md group-hover:shadow-sky-500/30',
                hoverBorder: 'hover:border-[#0EA5E9]/60 hover:shadow-[0_16px_40px_rgba(14,165,233,0.15)]',
                titleHover: 'group-hover:text-[#0284C7]',
                id: 'it-solutions',
                services: [
                  { label: 'ERP Software Solutions', icon: '🏢' },
                  { label: 'CRM Management Platform', icon: '🤝' },
                  { label: 'WMS Warehouse System', icon: '🏭' },
                  { label: 'SFA Field Automation', icon: '📊' },
                  { label: 'Security & Surveillance', icon: '🔒' },
                ],
              },
              {
                num: '02', featured: true,
                title: 'Software Development',
                subtitle: 'Digital Product Engineering',
                image: pillarSoftwareImg,
                Icon: Code,
                iconBg: 'from-[#8B5CF6] to-[#A855F7]',
                iconGlowColor: 'rgba(168,85,247,0.45)',
                topBar: 'from-[#7C3AED] to-[#C084FC]',
                bloom: 'from-violet-100/80 via-purple-50/40',
                numColor: 'text-violet-100/70',
                count: 3, countBg: 'bg-violet-50 text-violet-800 border-violet-200',
                desc: 'Custom-built, production-ready digital products for mobile, web, and enterprise — scalable from day one.',
                exploreColor: 'text-[#7C3AED]', exploreBg: 'bg-violet-50 border-violet-200',
                ctaBtnHover: 'group-hover:bg-gradient-to-r group-hover:from-[#7C3AED] group-hover:to-[#C084FC] group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-violet-500/20',
                arrowColor: '#7C3AED',
                arrowCircleHover: 'group-hover:bg-[#7C3AED] group-hover:border-[#7C3AED] group-hover:text-white group-hover:shadow-md group-hover:shadow-violet-500/30',
                hoverBorder: 'hover:border-[#7C3AED]/60 hover:shadow-[0_16px_40px_rgba(124,58,237,0.15)]',
                titleHover: 'group-hover:text-[#7C3AED]',
                id: 'software-development',
                services: [
                  { label: 'Mobile App Development', icon: '📱' },
                  { label: 'Web App Development', icon: '🌐' },
                  { label: 'Custom Software Build', icon: '⚙️' },
                ],
              },
              {
                num: '03', featured: false,
                title: 'Education & Training',
                subtitle: 'Tech Learning Ecosystem',
                image: pillarEducationImg,
                Icon: GraduationCap,
                iconBg: 'from-[#059669] to-[#34D399]',
                iconGlowColor: 'rgba(52,211,153,0.45)',
                topBar: 'from-[#059669] to-[#34D399]',
                bloom: 'from-emerald-100/80 via-teal-50/40',
                numColor: 'text-emerald-100/70',
                count: 5, countBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                desc: 'From cinematic tech documentaries to live bootcamps — empowering the next generation of tech leaders.',
                exploreColor: 'text-[#059669]', exploreBg: 'bg-emerald-50 border-emerald-200',
                ctaBtnHover: 'group-hover:bg-gradient-to-r group-hover:from-[#059669] group-hover:to-[#34D399] group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-emerald-500/20',
                arrowColor: '#059669',
                arrowCircleHover: 'group-hover:bg-[#059669] group-hover:border-[#059669] group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/30',
                hoverBorder: 'hover:border-[#059669]/60 hover:shadow-[0_16px_40px_rgba(5,150,105,0.15)]',
                titleHover: 'group-hover:text-[#059669]',
                id: 'education-training',
                services: [
                  { label: 'Tech-Based Documentaries', icon: '🎬' },
                  { label: 'Cybersecurity Consulting', icon: '🛡️' },
                  { label: 'Cloud Deployment', icon: '☁️' },
                  { label: 'Tech Coaching & Mentorship', icon: '🎯' },
                  { label: 'Online Tech Education', icon: '💡' },
                ],
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.13 }}
                className="relative"
              >
                {/* Featured ribbon */}
                {cat.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC] text-white text-[10px] font-black tracking-widest uppercase shadow-lg shadow-violet-400/30 whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}

                <motion.button
                  onClick={() => {
                    handleCategoryFilter(cat.title);
                    setTimeout(() => {
                      const el = document.getElementById(cat.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative w-full h-full text-left rounded-[2rem] overflow-hidden flex flex-col cursor-pointer transition-all duration-400 bg-white ${cat.hoverBorder}
                    ${cat.featured
                      ? 'shadow-[0_8px_32px_rgba(124,58,237,0.18)] border-2 border-violet-300/60'
                      : 'shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-200/90'
                    }`}
                >
                  {/* Top gradient accent bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${cat.topBar}`} />

                  <div className="p-7 pb-7 relative flex-1 flex flex-col justify-between">
                    {/* Background bloom */}
                    <div className={`absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl ${cat.bloom} to-transparent rounded-bl-[9rem] opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    {/* Watermark number */}
                    <span className={`absolute bottom-3 right-4 text-[6.5rem] font-black ${cat.numColor} pointer-events-none select-none transition-all duration-500 group-hover:scale-105`} style={{ lineHeight: 1 }}>
                      {cat.num}
                    </span>

                    <div>
                      {/* Icon + Count badge row */}
                      <div className="flex items-center justify-between mb-5 relative z-10">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-md`}
                          style={{ boxShadow: `0 8px 24px ${cat.iconGlowColor}` }}
                        >
                          <cat.Icon size={26} className="text-white" strokeWidth={2} />
                        </div>
                        <span className={`text-[10px] font-black tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border ${cat.countBg} shadow-xs`}>
                          {cat.count} Capabilities
                        </span>
                      </div>

                      {/* Visual Image Showcase Banner */}
                      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-5 border border-slate-200/80 shadow-md group-hover:shadow-lg transition-all duration-500">
                        <img
                          src={cat.image}
                          alt={`${cat.title} Pillar Visual`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                      </div>

                      {/* Title block */}
                      <div className="relative z-10 mb-5 space-y-1">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{cat.subtitle}</p>
                        <h3 className={`text-[1.4rem] font-black text-slate-900 leading-snug transition-colors duration-300 ${cat.titleHover}`}>
                          {cat.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                          {cat.desc}
                        </p>
                      </div>

                      {/* Service Checklist */}
                      <div className="relative z-10 space-y-2.5 mb-6">
                        {cat.services.map((s, si) => (
                          <motion.div
                            key={s.label}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 + si * 0.06 }}
                            className="flex items-center gap-2.5 px-2 py-1 -mx-2 rounded-xl group-hover:bg-slate-50/90 transition-colors"
                          >
                            <span
                              className="w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black text-white shadow-xs"
                              style={{ background: `linear-gradient(135deg, ${cat.arrowColor}, ${cat.arrowColor}CC)` }}
                            >
                              ✓
                            </span>
                            <span className="text-xs text-slate-700 font-semibold">{s.icon} {s.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Domain coverage bar */}
                      <div className="relative z-10 mb-6">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Domain Coverage</span>
                          <span className="text-[9px] font-black" style={{ color: cat.arrowColor }}>{Math.round((cat.count / 5) * 100)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(cat.count / 5) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                            className={`h-full rounded-full bg-gradient-to-r ${cat.topBar}`}
                          />
                        </div>
                      </div>

                      {/* Bottom CTA Action Row */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 relative z-10">
                        <div className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full border text-xs font-black tracking-widest uppercase transition-all duration-300 ${cat.exploreBg} ${cat.exploreColor} ${cat.ctaBtnHover}`}>
                          <cat.Icon size={13} strokeWidth={2.5} />
                          <span>EXPLORE ALL</span>
                        </div>
                        <div className={`w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-xs transition-all duration-300 ${cat.arrowCircleHover}`}>
                          <ArrowRight size={16} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </div>

                    {/* Subtle glass shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none z-20" />
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-14 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0ED3DD] flex items-center justify-center shadow-md flex-shrink-0">
                <Cpu size={18} className="text-white" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm">13 Total Services Across 3 Pillars</p>
                <p className="text-xs text-slate-500 font-medium">Click any card above to jump directly to that capability section</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[{ t: 'IT Solutions', id: 'it-solutions', c: 'bg-sky-400' }, { t: 'Software Development', id: 'software-development', c: 'bg-violet-400' }, { t: 'Education & Training', id: 'education-training', c: 'bg-emerald-400' }].map(p => (
                <button key={p.t} onClick={() => { handleCategoryFilter(p.t); setTimeout(() => { const el = document.getElementById(p.id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100); }}
                  className={`w-3 h-3 rounded-full ${p.c} hover:scale-150 transition-transform shadow-sm`} title={p.t} />
              ))}
            </div>
          </motion.div>

          {serviceCategories.map((catGroup) => {
            const pathD = (() => {
              const count = catGroup.items.length;
              if (!count) return '';
              const firstIsLeft = catGroup.items[0].layout === 'left-image';

              // SVG Double-Line Laser Track runs inside the channel between Inner (-inset-3.5) & Outer (-inset-8.5) Dashed Borders (at -inset-6)
              const H = 200 + 260 * count;
              const headerTopY = parseFloat(((27 / H) * 100).toFixed(1));
              const headerBottomY = parseFloat(((133 / H) * 100).toFixed(1));
              const headerMidY = parseFloat(((headerTopY + headerBottomY) / 2).toFixed(1));

              const startY = headerBottomY + 5;
              const step = (100 - startY - 4) / count;
              const points = catGroup.items.map((item, i) => {
                const y = (startY + step * (i + 0.5)).toFixed(1);
                const x = item.layout === 'left-image' ? 40 : 60;
                return `${x} ${y}`;
              });

              // Custom tailored Concentric Pill SVG Loop centered inside the two dashed borders
              const title = catGroup.categoryTitle;
              let leftX = 35.5;
              let rightX = 64.5;

              if (title === 'Software Development') {
                leftX = 30.0;
                rightX = 70.0;
              } else if (title === 'Education & Training') {
                leftX = 31.5;
                rightX = 68.5;
              }

              // Exact Semicircular Pill Cap Radius (capR = half of pill height for 100% smooth arc curvature)
              const capR = parseFloat(((headerBottomY - headerTopY) / 2).toFixed(2));
              const topFlatR = parseFloat((rightX - capR).toFixed(2));
              const topFlatL = parseFloat((leftX + capR).toFixed(2));

              const headerLoop = `M 50 ${headerTopY} L ${topFlatR} ${headerTopY} Q ${rightX} ${headerTopY} ${rightX} ${headerMidY} Q ${rightX} ${headerBottomY} ${topFlatR} ${headerBottomY} L ${topFlatL} ${headerBottomY} Q ${leftX} ${headerBottomY} ${leftX} ${headerMidY} Q ${leftX} ${headerTopY} ${topFlatL} ${headerTopY} L 50 ${headerTopY}`;
              const startX = firstIsLeft ? leftX : rightX;

              return `${headerLoop} M ${startX} ${headerBottomY} L ${points.join(' L ')} L 50 100`;
            })();

            return (
              <div key={catGroup.categoryTitle} id={slugify(catGroup.categoryTitle)} className="space-y-24 pt-12 relative w-full">

                {/* Neon Zigzag Double Line Track (SVG covering entire Category Section including Header) */}
                <svg
                  className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`neonZigzag_${slugify(catGroup.categoryTitle)}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <filter id={`neonBlur_${slugify(catGroup.categoryTitle)}`} x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="0.8" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Faint Ambient Background Glow Track */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={`url(#neonZigzag_${slugify(catGroup.categoryTitle)})`}
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.15"
                    filter={`url(#neonBlur_${slugify(catGroup.categoryTitle)})`}
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Double Line Track - Outer Rail Base */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={`url(#neonZigzag_${slugify(catGroup.categoryTitle)})`}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Double Line Track - Inner Core Gap (Creating 2 Parallel Lines) */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Double Line Track - Dashed Outer Stream */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={`url(#neonZigzag_${slugify(catGroup.categoryTitle)})`}
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Double Line Track - Dynamic Traveling White Laser Dashes */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    strokeDasharray="4 10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-zigzag-dash"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Category Header */}
                <div className="text-center mb-20 flex flex-col items-center relative z-10">
                  <div className="relative inline-block group cursor-default">
                    {/* OUTER DASHED BORDER - Perfectly Concentric Scaled-Up Duplicate */}
                    <div className="absolute -inset-8 rounded-[3.25rem] border-2 border-dashed border-[#0284C7]/80 animate-spin-slow pointer-events-none" />

                    {/* INNER DASHED BORDER - Master Geometry */}
                    <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-dashed border-[#0284C7]/80 animate-spin-slow pointer-events-none" />

                    {/* Ethereal Glow */}
                    <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />

                    <div className="relative px-10 py-4.5 rounded-[2rem] bg-white/95 backdrop-blur-2xl border-2 border-sky-100 shadow-[0_15px_40px_rgba(2,132,199,0.12)] flex items-center justify-center">
                      <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-none">
                        {catGroup.categoryTitle}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* ZIG-ZAG CONTENT CONTAINER */}
                <div className="relative w-full">

                  {catGroup.items.map((item, itemIdx) => {
                    const isLeftImage = item.layout === 'left-image';
                    return (
                      <motion.div
                        key={item.title}
                        id={slugify(item.title)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`flex flex-col lg:flex-row ${isLeftImage ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between items-center relative z-10 w-full mb-36 last:mb-0`}
                      >
                        {/* TEXT CONTENT CARD */}
                        <div className="w-full lg:w-[40%] perspective-1000">
                          <div className="relative w-full rounded-[2.5rem] bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(2,132,199,0.1)] transition-all duration-500 p-8 md:p-12 cursor-pointer group">

                            <div className="flex items-center gap-3 mb-6">
                              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0284C7] px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 shadow-xs">
                                {catGroup.categoryTitle} • STEP 0{itemIdx + 1}
                              </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black font-display text-slate-900 group-hover:text-[#0284C7] transition-colors leading-tight mb-4">
                              {item.title}
                            </h3>

                            <p className="text-slate-600 text-base leading-relaxed font-medium mb-8">
                              {item.desc}
                            </p>

                            <div>
                              <button
                                onClick={() => handleContactClick(item.title)}
                                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-sm shadow-lg shadow-sky-500/20 hover:scale-105 transition-all duration-300"
                              >
                                <span>For More Contact us</span>
                                <ArrowRight size={16} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* IMAGE SHOWCASE CONTAINER (Decreased Compact Size) */}
                        <div className={`w-full lg:w-[40%] h-full flex items-center ${isLeftImage ? 'justify-end' : 'justify-start'} relative`}>
                          {/* Animated Glow Behind Image */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-sky-400/20 blur-[80px] opacity-30 animate-pulse-slow pointer-events-none" />

                          {/* Image Wrapper (Compact Max Width) */}
                          <div className="relative w-full max-w-md aspect-[4/3] rounded-[2rem] bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-4 md:p-6 hover:scale-[1.02] transition-transform duration-500 group">
                            {/* Inner Image Frame */}
                            <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-50 relative flex items-center justify-center p-3 md:p-4">
                              <img
                                src={item.image}
                                alt={`${item.title} Illustration`}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>

                            {/* Step Node Badge anchored directly to inner border of Image Wrapper */}
                            <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center transition-all duration-500 ${isLeftImage ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}>
                              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0ED3DD] border-[2.5px] border-white shadow-[0_4px_25px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-500 hover:scale-125">

                                {/* Rotating Angle Ring over Node Icon */}
                                <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-[#0284C7]/80 animate-spin-slow pointer-events-none" />

                                <Cpu className="w-6 h-6 text-white relative z-10" strokeWidth={2.2} />

                                {/* Mini Step Number Badge (Matching Reference Screenshot) */}
                                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-white shadow-md text-[11px] font-black flex items-center justify-center">
                                  <span className="w-full h-full rounded-full bg-gradient-to-br from-[#0284C7] to-[#0ED3DD] text-white flex items-center justify-center">
                                    {itemIdx + 1}
                                  </span>
                                </span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </motion.div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* NEW SECTION 01: ENGINEERING APPROACH */}
      <ServicesEngineeringApproach />

      {/* NEW SECTION 02: FROM CHALLENGE TO IMPACT */}
      <ServicesChallengeToImpact />

      {/* NEW SECTION 03: SCALABLE TECHNOLOGY */}
      <ServicesScalableTechnology />

      {/* NEW SECTION 04: PARTNERSHIP MODEL */}
      <ServicesPartnershipModel />

      {/* 3. SUBSCRIBE TO OUR NEWSLETTER SECTION (White-Gray Theme) */}
      <section className="py-24 bg-[#E2E8F0] relative text-slate-900">
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-300 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden text-slate-900"
          >
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Get the latest tech updates, tutorials, and engineering insights straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <div className="relative w-full">
                <Mail size={18} className="absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-xs md:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-bold text-xs md:text-sm shrink-0 shadow-lg shadow-sky-500/20 transition-all"
              >
                Subscribe
              </button>
            </form>
            {newsletterSuccess && (
              <div className="text-xs font-semibold text-[#0284C7] animate-pulse">
                ✓ Thank you for subscribing!
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
