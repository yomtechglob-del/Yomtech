import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, ChevronDown, LayoutGrid, Cpu, Code, GraduationCap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.jpg';

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
    { name: 'All Services', path: '/services#explore-our-services', targetId: 'explore-our-services', desc: 'Browse full capabilities & solutions', icon: LayoutGrid },
    { name: 'IT Solutions', path: '/services#it-solutions', targetId: 'it-solutions', desc: 'ERP, CRM, WMS & Security Systems', icon: Cpu },
    { name: 'Software Development', path: '/services#software-development', targetId: 'software-development', desc: 'Custom Web, Mobile Apps & Platforms', icon: Code },
    { name: 'Education & Training', path: '/services#education-training', targetId: 'education-training', desc: 'Cybersecurity, Cloud & Coaching', icon: GraduationCap },
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
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-4 sm:py-4.5 md:py-5 hero-cyan-gradient border-b border-white/10 ${
      scrolled
        ? 'shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md'
        : 'shadow-xl'
    }`}>
      <div className="w-full px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left Brand Logo Section */}
        <Link 
          to="/" 
          className="flex items-center justify-center bg-white p-2.5 sm:p-3 rounded-2xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group shrink-0 mr-4 lg:mr-8 xl:mr-12 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-300"
        >
          <img
            src={logoImg}
            alt="Yomtech Global Logo"
            className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        </Link>

        {/* Center Nav Links - Advanced Glass Pill Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 bg-black/20 p-1.5 rounded-full backdrop-blur-xl border border-white/20 shadow-inner">
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
                    className={`relative text-base xl:text-lg font-black tracking-tight transition-all duration-300 px-5 py-2.5 rounded-full flex items-center gap-2 ${
                      isActive
                        ? 'bg-white/25 text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/50 backdrop-blur-md'
                        : 'text-white/90 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={18} className={`text-cyan-300 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-white' : ''}`} />
                  </Link>

                  {/* Advanced Glassmorphic Dropdown Menu */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-black/75 backdrop-blur-2xl border border-white/20 rounded-3xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 space-y-1.5"
                      >
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
                              className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/15 text-white transition-all cursor-pointer"
                            >
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1DA1F2]/30 to-[#0ED3DD]/30 border border-white/20 flex items-center justify-center text-[#0ED3DD] group-hover:scale-110 group-hover:bg-[#0ED3DD] group-hover:text-black transition-all shrink-0 shadow-md">
                                <IconComp size={20} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-base font-black text-white group-hover:text-[#0ED3DD] transition-colors">
                                  {cat.name}
                                </span>
                                <span className="text-xs font-semibold text-white/70 leading-snug">
                                  {cat.desc}
                                </span>
                              </div>
                            </a>
                          );
                        })}
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
                className={`relative text-base xl:text-lg font-black tracking-tight transition-all duration-300 px-5 py-2.5 rounded-full flex items-center gap-2 ${
                  isActive
                    ? 'bg-white/25 text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/50 backdrop-blur-md'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Section: Advanced Phone Capsule + CTA Button */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-4 lg:ml-8">
          
          {/* Advanced Glassmorphic Phone Button */}
          <a
            href="tel:+251977666699"
            className="group relative flex items-center gap-3.5 px-8 py-3 rounded-full bg-black/30 backdrop-blur-xl border border-white/40 hover:border-white/80 text-white shadow-lg hover:shadow-[0_0_25px_rgba(14,211,221,0.4)] transition-all duration-300 hover:scale-105"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#1DA1F2] to-[#0ED3DD] flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform duration-300 shrink-0">
              <Phone size={15} className="text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#042B24] animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-200/90 leading-none mb-0.5 flex items-center gap-1">
                <span>24/7 Hotline</span>
              </span>
              <span className="font-sans font-black tracking-tight text-base xl:text-lg text-white group-hover:text-cyan-200 transition-colors whitespace-nowrap">
                +251 (977) 666-699
              </span>
            </div>
          </a>

          {/* Advanced High-Contrast Get Started Button */}
          <Link
            to="/contact"
            className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-white text-[#042B24] font-black text-base xl:text-lg flex items-center gap-3 shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="relative z-10 font-black whitespace-nowrap">Get Started</span>
            <div className="w-7 h-7 rounded-full bg-[#0ED3DD]/20 flex items-center justify-center group-hover:bg-[#0ED3DD] transition-colors duration-300 shrink-0">
              <ArrowRight size={16} className="text-[#042B24] group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-3 rounded-2xl bg-black/30 border border-white/30 text-white hover:border-white/70 focus:outline-none transition-colors backdrop-blur-md"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
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
                  className={`py-3 px-5 rounded-2xl font-black text-lg transition-all ${
                    location.pathname === link.path
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