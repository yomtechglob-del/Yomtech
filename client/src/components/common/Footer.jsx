import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowRight, ShieldCheck, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#0084C8] via-[#0072B8] to-[#0084C8] border-t-2 border-white text-white pt-20 pb-12 relative overflow-hidden shadow-2xl">
      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-300/20 blur-[160px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
        {/* Brand & About Column (Spans 2 cols on lg) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Yomtech Global Logo"
              className="w-12 h-12 object-cover rounded-full border-2 border-[#1E90FF] shadow-sm"
            />
            <div>
              <span className="font-extrabold font-display text-xl tracking-wider text-white">
                Yomtech <span className="text-[#38BDF8]">Global</span>
              </span>
              <div className="text-[10px] text-cyan-200/90 uppercase font-bold tracking-widest">
                Software &amp; Talent Platform
              </div>
            </div>
          </div>

          <p className="text-slate-200 text-sm leading-relaxed max-w-sm font-normal">
            Building digital enterprise solutions, powering ERP &amp; cloud systems, and training the next generation of workforce tech leaders via <a href="https://wabiskills.com/" target="_blank" rel="noopener noreferrer" className="text-[#0ED3DD] hover:text-white font-semibold transition-colors">WabiSkills Academy</a>.
          </p>

          {/* Prominent Professional Admin Sign In Button in Footer */}
          <div className="pt-2">
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-purple-500/25 border border-purple-400/50 text-purple-200 hover:text-white hover:bg-purple-500/40 text-xs font-extrabold transition-all shadow-sm group"
            >
              <ShieldCheck size={16} className="text-purple-300 group-hover:scale-110 transition-transform" />
              <span>Admin Portal Sign In</span>
            </Link>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              aria-label="LinkedIn profile"
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-300 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              aria-label="Twitter profile"
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-300 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              aria-label="GitHub repository"
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-300 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Github size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook page"
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-300 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-extrabold font-display text-sm uppercase tracking-wider text-white mb-5 border-l-2 border-[#0ED3DD] pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-slate-200 font-medium">
            <li><Link to="/" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"><ArrowRight size={12} className="text-[#0ED3DD]" /> Home</Link></li>
            <li><Link to="/services" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"><ArrowRight size={12} className="text-[#0ED3DD]" /> Services</Link></li>
            <li><a href="https://wabiskills.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"><ArrowRight size={12} className="text-[#0ED3DD]" /> WabiSkills Academy ↗</a></li>
            <li><Link to="/about" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"><ArrowRight size={12} className="text-[#0ED3DD]" /> About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"><ArrowRight size={12} className="text-[#0ED3DD]" /> Contact Us</Link></li>
            <li>
              <Link to="/admin/login" className="hover:text-purple-300 transition-colors flex items-center gap-1.5 text-purple-300 font-bold">
                <ShieldCheck size={14} />
                <span>Admin Gateway</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services Column */}
        <div>
          <h4 className="font-extrabold font-display text-sm uppercase tracking-wider text-white mb-5 border-l-2 border-[#0ED3DD] pl-3">
            Capabilities
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
            <li className="hover:text-white transition-colors">ERP &amp; CRM Solutions</li>
            <li className="hover:text-white transition-colors">WMS &amp; Logistics Systems</li>
            <li className="hover:text-white transition-colors">Custom Web &amp; Mobile Apps</li>
            <li className="hover:text-white transition-colors">Cybersecurity &amp; Audits</li>
            <li className="hover:text-white transition-colors">Cloud DevOps &amp; Migration</li>
            <li className="hover:text-white transition-colors">Data Analytics &amp; BI</li>
          </ul>
        </div>

        {/* Contact & Newsletter Column */}
        <div className="space-y-6">
          <h4 className="font-extrabold font-display text-sm uppercase tracking-wider text-white mb-5 border-l-2 border-[#0ED3DD] pl-3">
            Contact &amp; Updates
          </h4>

          <div className="space-y-3 text-xs text-slate-200 font-medium">
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-[#0ED3DD] shrink-0" />
              <a href="mailto:contact@yomtechglobal.org" className="hover:text-white transition-colors">contact@yomtechglobal.org</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-[#0ED3DD] shrink-0" />
              <a href="tel:+251977666699" className="hover:text-white transition-colors">+251 (977) 666-699</a>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-[#0ED3DD] shrink-0 mt-0.5" />
              <span>Megenagna, Derartu Building, 9th Floor, Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Newsletter Input */}
          <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
            <div className="text-[11px] font-bold text-white uppercase">Subscribe to Tech Insights</div>
            <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-1 focus-within:border-[#0ED3DD]">
              <input
                type="email"
                required
                placeholder="Enter email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-transparent border-0 px-3 py-1.5 text-xs text-white placeholder-slate-300 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit newsletter subscription"
                className="p-2 rounded-lg bg-[#0ED3DD] hover:bg-[#1DA1F2] text-[#042B24] transition-colors shrink-0 font-bold"
              >
                <Send size={14} />
              </button>
            </div>
            {subscribed && (
              <div className="text-[10px] text-[#0ED3DD] font-semibold animate-pulse">
                ✓ Thank you for subscribing!
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Copyright Divider */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-medium">
        <div>
          © 2026 Yomtech Global. All rights reserved. Built with precision software engineering.
        </div>
        <div className="flex items-center gap-6 text-[11px]">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <Link to="/admin/login" className="hover:text-purple-300 transition-colors flex items-center gap-1 text-purple-300 font-bold">
            <ShieldCheck size={12} />
            <span>Admin Portal</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};