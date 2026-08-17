import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, ChevronDown, LayoutGrid, Cpu, Code, GraduationCap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logos/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Academy', path: '/academy', hasDropdown: false },
    { name: 'About Us', path: '/about', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false },
  ];

  const serviceCategories = [
    {
      name: 'All Services',
      path: '/services#explore-our-services',
      targetId: 'explore-our-services',
      desc: 'Browse full capabilities & enterprise solutions',
      icon: LayoutGrid,
      badge: 'Full Suite',
      gradient: 'from-[#0ED3DD] via-cyan-400 to-[#1DA1F2]',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(14,211,221,0.8)]'
    },
    {
      name: 'IT Solutions',
      path: '/services#it-solutions',
      targetId: 'it-solutions',
      desc: 'ERP, CRM, WMS & Security Systems',
      icon: Cpu,
      badge: 'Enterprise',
      gradient: 'from-emerald-400 to-[#0ED3DD]',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(52,211,153,0.8)]'
    },
    {
      name: 'Software Development',
      path: '/services#software-development',
      targetId: 'software-development',
      desc: 'Custom Web, Mobile Apps & Platforms',
      icon: Code,
      badge: 'Custom Code',
      gradient: 'from-[#1DA1F2] to-cyan-300',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(29,161,242,0.8)]'
    },
    {
      name: 'Education & Training',
      path: '/services#education-training',
      targetId: 'education-training',
      desc: 'Cybersecurity, Cloud & Professional Coaching',
      icon: GraduationCap,
      badge: 'WabiSkills',
      gradient: 'from-amber-400 to-[#0ED3DD]',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(251,191,36,0.8)]'
    },
  ];

  const handleDropdownClick = (path, targetId) => {
    setIsServicesOpen(false);
    if (location.pathname === '/services') {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-3 sm:py-3.5 md:py-3.5 ${scrolled
        ? 'bg-[#03045E]/90 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)] border-b border-white/10'
        : 'bg-transparent shadow-none border-b-0'
      }`}>
      <div className="max-w-[1380px] mx-auto w-full px-4 sm:px-8 flex items-center justify-between">

        {/* Left Brand Logo Section */}
        <Link
          to="/"
          className="flex items-center justify-center bg-white p-2 sm:p-2.5 rounded-xl border border-white/90 shadow-[0_4px_15px_rgba(0,0,0,0.15)] group shrink-0 mr-3 lg:mr-5 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300"
        >
          <img
            src={logoImg}
            alt="Yomtech Global Logo"
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain"
          />
        </Link>

        {/* Center Nav Links - Clean Transparent Navigation */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to="/services"
                    className={`relative text-base sm:text-lg xl:text-xl font-extrabold tracking-tight transition-all duration-300 px-3.5 py-1.5 flex items-center gap-1.5 ${isActive
                        ? 'text-[#0ED3DD] drop-shadow-[0_0_12px_rgba(14,211,221,0.6)] font-black'
                        : 'text-white/90 hover:text-[#0ED3DD]'
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={18} className={`text-cyan-300 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-white' : ''}`} />
                  </Link>

                  {/* High-End Enterprise Glassmorphic Dropdown Menu in Hero Colors */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[420px] hero-cyan-gradient backdrop-blur-3xl border border-white/30 rounded-[2rem] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.65),0_0_40px_rgba(255,255,255,0.2)] z-50 space-y-2 overflow-hidden text-white"
                      >
                        {/* Glow highlight top line */}
                        <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-90" />

                        {serviceCategories.map((cat) => {
                          const IconComp = cat.icon;
                          return (
                            <a
                              key={cat.name}
                              href={cat.path}
                              onClick={(e) => {
                                e.preventDefault();
                                handleDropdownClick(cat.path, cat.targetId);
                              }}
                              className="group relative flex items-start gap-4 p-3.5 rounded-2xl border border-white/20 bg-black/20 hover:bg-white/20 backdrop-blur-xl hover:border-white/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-md hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                            >
                              {/* Hover Light Sweep Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                              {/* Glass Icon Box with Hero Accent */}
                              <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#042B24] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300 shrink-0">
                                <IconComp size={20} />
                              </div>

                              <div className="flex flex-col flex-grow">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-sm font-black text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                                    {cat.name}
                                  </span>

                                  {/* Glass Technology Badge */}
                                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 border border-white/40 text-white group-hover:bg-white group-hover:text-[#042B24] transition-all">
                                    {cat.badge}
                                  </span>
                                </div>

                                <span className="text-xs font-medium text-white/85 leading-relaxed mt-1 group-hover:text-white">
                                  {cat.desc}
                                </span>
                              </div>

                              {/* Interactive Arrow Indicator */}
                              <div className="self-center opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-white">
                                <ArrowRight size={16} />
                              </div>
                            </a>
                          );
                        })}

                        {/* Featured Bottom Enterprise Banner in Glass */}
                        <div className="pt-2 mt-2 border-t border-white/20">
                          <Link
                            to="/services"
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center justify-between p-3 rounded-2xl bg-white/20 hover:bg-white border border-white/40 text-xs font-black text-white hover:text-[#042B24] transition-all duration-300 group/footer shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] relative overflow-hidden"
                          >
                            <span className="flex items-center gap-2 relative z-10">
                              <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300" />
                              </span>
                              <Sparkles size={14} className="text-cyan-200 group-hover/footer:text-[#042B24] animate-pulse transition-colors" />
                              <span>Explore Full Capabilities & Systems Matrix</span>
                            </span>
                            <div className="w-6 h-6 rounded-full bg-white text-[#042B24] group-hover/footer:bg-[#042B24] group-hover/footer:text-white flex items-center justify-center group-hover/footer:translate-x-1 transition-all shadow-md">
                              <ArrowRight size={13} />
                            </div>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-base sm:text-lg xl:text-xl font-extrabold tracking-tight transition-all duration-300 px-3.5 py-1.5 flex items-center gap-1.5 ${isActive
                    ? 'text-[#0ED3DD] drop-shadow-[0_0_12px_rgba(14,211,221,0.6)] font-black'
                    : 'text-white/90 hover:text-[#0ED3DD]'
                  }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Section: Advanced Phone Capsule + CTA Button */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-3 lg:ml-5 shrink-0">

          {/* Advanced Glassmorphic Phone Button */}
          <a
            href="tel:+251977666699"
            className="group relative flex items-center gap-2.5 px-4 xl:px-4.5 py-2.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/60 hover:border-white text-white shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300 hover:scale-105"
          >
            <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-[#1DA1F2] to-[#0ED3DD] flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform duration-300 shrink-0">
              <Phone size={14} className="text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#042B24] animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-200/90 leading-none mb-0.5 flex items-center gap-1">
                <span>24/7 Hotline</span>
              </span>
              <span className="font-sans font-extrabold tracking-tight text-xs xl:text-sm text-white group-hover:text-cyan-200 transition-colors whitespace-nowrap">
                +251 (977) 666-699
              </span>
            </div>
          </a>

          {/* Advanced High-Contrast Get Started Button */}
          <Link
            to="/contact"
            className="relative group overflow-hidden px-5 xl:px-6 py-3 rounded-full bg-white text-[#042B24] font-black text-xs xl:text-sm flex items-center gap-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0"
          >
            <span className="relative z-10 font-black whitespace-nowrap">Get Started</span>
            <div className="w-6.5 h-6.5 rounded-full bg-[#0ED3DD]/20 flex items-center justify-center group-hover:bg-[#0ED3DD] transition-colors duration-300 shrink-0">
              <ArrowRight size={14} className="text-[#042B24] group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-white/20 border border-white/50 text-white hover:border-white focus:outline-none transition-colors backdrop-blur-md"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/80 backdrop-blur-2xl border-b border-white/20 px-6 py-7 space-y-5 shadow-2xl mt-4"
          >
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-5 rounded-2xl font-black text-lg transition-all ${location.pathname === link.path
                      ? 'bg-white/25 text-white border border-white/40 shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/20 space-y-3.5">
              <a
                href="tel:+251977666699"
                className="flex items-center justify-center gap-3 text-lg font-black text-white py-3.5 bg-white/10 border border-white/30 rounded-2xl shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1DA1F2] to-[#0ED3DD] flex items-center justify-center text-white">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-200/90 leading-none">24/7 Hotline</span>
                  <span className="font-sans font-black text-base">+251 (977) 666-699</span>
                </div>
              </a>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-white text-[#042B24] font-black rounded-2xl text-center flex items-center justify-center gap-2.5 shadow-xl text-base"
              >
                <span>Get Started</span>
                <ArrowRight size={20} className="text-[#042B24]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};