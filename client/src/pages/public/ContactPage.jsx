import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { submitLeadApi } from '../../services/api';
import { PageHeader } from '../../components/common/PageHeader';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare, User,
  Facebook, Instagram, Youtube, Video
} from 'lucide-react';

const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <div
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden relative ${
        open
          ? 'border-[#0284C7] shadow-[0_12px_30px_rgba(2,132,199,0.14)] ring-2 ring-[#0284C7]/20'
          : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
      }`}
    >
      {/* Top Gradient accent line when open */}
      {open && <div className="h-1.5 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2]" />}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
      >
        <div className="flex items-center gap-3.5">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-black text-xs transition-colors ${
            open ? 'bg-[#0284C7] text-white shadow-md' : 'bg-sky-100 text-[#0284C7]'
          }`}>
            Q{index + 1}
          </div>
          <div className="space-y-0.5">
            {faq.category && (
              <span className="text-[9px] font-black uppercase tracking-widest text-[#0284C7] block">
                {faq.category}
              </span>
            )}
            <span className="font-black text-slate-900 text-base sm:text-lg leading-snug">
              {faq.q}
            </span>
          </div>
        </div>
        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-extrabold transition-all duration-300 ${
          open ? 'rotate-180 bg-[#0284C7] text-white shadow-md scale-110' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
        }`}>
          ↑
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 pt-2 text-slate-700 text-sm leading-relaxed border-t border-slate-100 font-medium">
          {faq.a}
        </div>
      )}
    </div>
  );
};

export const ContactPage = () => {
  const location = useLocation();
  const [activeFaqCategory, setActiveFaqCategory] = useState('All');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'B2B_SOFTWARE',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('success');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (location.state?.inquiryType) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: location.state.inquiryType,
        message: location.state.prefillService ? `Inquiry regarding: ${location.state.prefillService}` : prev.message
      }));
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');
    try {
      const res = await submitLeadApi(formData);
      if (res.data?.success) {
        setStatus('Thank you! Your message has been sent successfully. Our team will get back to you within 24 hours.');
        setStatusType('success');
        setFormData({ fullName: '', email: '', phone: '', inquiryType: 'B2B_SOFTWARE', message: '' });
      } else {
        setStatus('Failed to submit message. Please try again.');
        setStatusType('error');
      }
    } catch {
      setStatus('Unable to connect to server. Please check your internet connection.');
      setStatusType('error');
    } finally {
      setSubmitting(false);
    }
  };

  const faqList = [
    {
      category: '⚡ ERP DEPLOYMENT',
      topic: 'Software',
      q: 'How fast can YomTech Global deploy custom ERP or CRM software for my business?',
      a: 'Our modular ERP and CRM frameworks allow us to configure and deploy tailored solutions in as little as 2 to 4 weeks, including custom department workflows, staff training, and data migration.'
    },
    {
      category: '🎓 ACADEMY BOOTCAMPS',
      topic: 'Academy',
      q: 'What is the format of WabiSkills Academy bootcamps?',
      a: 'Bootcamps are delivered in flexible hybrid models featuring live online interactive lectures, hands-on project labs, real-world repository builds, and 1-on-1 mentorship.'
    },
    {
      category: '📍 HEADQUARTERS LOCATION',
      topic: 'Office',
      q: 'Where is YomTech Global headquartered?',
      a: 'Our main headquarters is located in Addis Ababa, Ethiopia, at Megenagna Derartu Building, Office 906.'
    },
    {
      category: '☁️ CLOUD MAINTENANCE',
      topic: 'Office',
      q: 'Do you offer ongoing cloud maintenance and security monitoring after launch?',
      a: 'Yes, we provide 24/7 proactive cloud infrastructure monitoring, security audit patches, automated backup management, and dedicated SLA support tiers.'
    },
    {
      category: '💼 DEMOS & PROPOSALS',
      topic: 'Software',
      q: 'How do I request a custom software demonstration or proposal?',
      a: 'Simply fill out the inquiry form above or contact us via email at contact@yomtechglobal.org. Our engineering team will arrange a live demo within 24 hours.'
    }
  ];

  const filteredFaqs = faqList.filter(f => {
    if (activeFaqCategory === 'All') return true;
    if (activeFaqCategory === 'Software') return f.topic === 'Software';
    if (activeFaqCategory === 'Academy') return f.topic === 'Academy';
    if (activeFaqCategory === 'Office') return f.topic === 'Office';
    return true;
  });

  return (
    <div className="hero-cyan-gradient text-white min-h-screen relative overflow-hidden">
      {/* Top Ambient Cyan Spotlight Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#0ED3DD]/15 via-[#1DA1F2]/10 to-transparent blur-[160px] rounded-full pointer-events-none" />

      {/* Page Header */}
      <PageHeader
        title="Start a Project or"
        highlight="Enquiry"
        subtitle="Reach out to our engineering software consultants or WabiSkills admissions team. We respond within 24 hours."
        badge="Get In Touch"
        breadcrumbs={[{ name: 'Contact Us', path: '/contact' }]}
      >
        <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-amber-500/50 text-white font-black text-xs xl:text-sm shadow-xl hover:border-amber-400 hover:bg-amber-500/25 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 transition-all duration-300">
          <div className="w-6.5 h-6.5 rounded-full bg-amber-500/25 border border-amber-400/60 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform shrink-0">
            <MapPin size={14} />
          </div>
          <span className="text-amber-200 font-extrabold whitespace-nowrap">Megenagna Derartu Building, Office 906</span>
        </div>

        <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-cyan-400/50 text-white font-black text-xs xl:text-sm shadow-xl hover:border-cyan-300 hover:bg-cyan-500/25 hover:shadow-[0_0_30px_rgba(14,211,221,0.5)] hover:scale-105 transition-all duration-300">
          <div className="w-6.5 h-6.5 rounded-full bg-cyan-400/25 border border-cyan-400/60 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform shrink-0">
            <Phone size={14} />
          </div>
          <span className="text-cyan-200 font-extrabold whitespace-nowrap">+251 (977) 666-699</span>
        </div>

        <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-blue-500/50 text-white font-black text-xs xl:text-sm shadow-xl hover:border-blue-400 hover:bg-blue-500/25 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300">
          <div className="w-6.5 h-6.5 rounded-full bg-blue-500/25 border border-blue-400/60 flex items-center justify-center text-blue-300 group-hover:scale-110 transition-transform shrink-0">
            <Mail size={14} />
          </div>
          <span className="text-blue-200 font-extrabold whitespace-nowrap">contact@yomtechglobal.org</span>
        </div>

        <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-emerald-500/50 text-white font-black text-xs xl:text-sm shadow-xl hover:border-emerald-400 hover:bg-emerald-500/25 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:scale-105 transition-all duration-300">
          <div className="w-6.5 h-6.5 rounded-full bg-emerald-500/25 border border-emerald-400/60 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform shrink-0">
            <Clock size={14} />
          </div>
          <span className="text-emerald-200 font-extrabold whitespace-nowrap">24hr Response Guarantee</span>
        </div>
      </PageHeader>

      {/* Main Content Section (Clean Executive Background) */}
      <section className="w-full bg-[#F8FAFC] py-16 md:py-24 relative z-10 text-slate-900">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
          
          {/* TOP 4 FLOATING INFO CARDS (EXACT SCREENSHOT DESIGN) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1: OUR LOCATION */}
            <div className="bg-white p-7 rounded-[1.75rem] border border-emerald-200/80 shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-3.5 group">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100/80 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div className="text-[10px] font-black uppercase text-emerald-700 tracking-widest">OUR LOCATION</div>
              <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                Megenagna Derartu Building, Office 906
              </div>
              <div className="text-xs font-semibold text-slate-500">Addis Ababa, Ethiopia</div>
            </div>

            {/* Card 2: PHONE NUMBERS */}
            <div className="bg-white p-7 rounded-[1.75rem] border border-amber-200/80 shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-3.5 group">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-100/80 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div className="text-[10px] font-black uppercase text-amber-700 tracking-widest">PHONE NUMBERS</div>
              <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">+251 (977) 666-699</div>
              <div className="text-xs font-semibold text-slate-500">+251 (912) 625-381</div>
            </div>

            {/* Card 3: EMAIL ADDRESS */}
            <div className="bg-white p-7 rounded-[1.75rem] border border-sky-200/80 shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-3.5 group">
              <div className="w-14 h-14 mx-auto rounded-full bg-sky-100/80 text-[#0284C7] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="text-[10px] font-black uppercase text-[#0284C7] tracking-widest">EMAIL ADDRESS</div>
              <div className="text-xs sm:text-sm font-black text-slate-900 break-all leading-snug">
                contact@yomtechglobal.org
              </div>
              <div className="text-xs font-semibold text-slate-500">support@yomtechglobal.org</div>
            </div>

            {/* Card 4: OFFICE HOURS */}
            <div className="bg-white p-7 rounded-[1.75rem] border border-purple-200/80 shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-3.5 group">
              <div className="w-14 h-14 mx-auto rounded-full bg-purple-100/80 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <div className="text-[10px] font-black uppercase text-purple-700 tracking-widest">OFFICE HOURS</div>
              <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                Mon – Sat: 8:30 AM – 5:30 PM
              </div>
              <div className="text-xs font-semibold text-slate-500">Sunday: Closed</div>
            </div>
          </div>

          {/* MAIN GRID: LEFT SOCIAL & MAP / RIGHT FORM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (col-span-5): Social Platforms + Interactive Map */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Social Platforms Card */}
              <div className="bg-[#F5F3FF] p-7 sm:p-8 rounded-[2rem] border border-purple-200/70 shadow-md space-y-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-purple-600">
                  SOCIAL PLATFORMS
                </div>
                <h4 className="text-2xl font-black font-display text-slate-900">Follow Us</h4>
                <p className="text-slate-500 text-xs font-medium">Stay updated with our latest programs and news.</p>
                
                {/* 4 Social Action Buttons Grid */}
                <div className="grid grid-cols-4 gap-3 pt-2">
                  <a href="#" className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 flex flex-col items-center justify-center gap-1.5 transition-all group">
                    <Facebook size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-slate-700">Facebook</span>
                  </a>
                  <a href="#" className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-pink-400 flex flex-col items-center justify-center gap-1.5 transition-all group">
                    <Instagram size={20} className="text-pink-600 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-slate-700">Instagram</span>
                  </a>
                  <a href="#" className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-800 flex flex-col items-center justify-center gap-1.5 transition-all group">
                    <Video size={20} className="text-slate-900 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-slate-700">TikTok</span>
                  </a>
                  <a href="#" className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-500 flex flex-col items-center justify-center gap-1.5 transition-all group">
                    <Youtube size={20} className="text-red-600 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-slate-700">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Interactive Google Map Card */}
              <div className="rounded-[2rem] overflow-hidden border-2 border-slate-200/90 shadow-xl bg-white relative">
                <a
                  href="https://maps.google.com/?q=Derartu+Building+Megenagna+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200 text-[#0284C7] text-xs font-bold flex items-center gap-1.5 hover:bg-white transition-all"
                >
                  <span>Open in Maps</span>
                  <span>↗</span>
                </a>
                <div className="w-full h-72 rounded-[2rem] overflow-hidden">
                  <iframe
                    title="YomTech Global Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.548777983637!2d38.7958!3d9.0142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850000000001%3A0x0!2zOcKwMDAnNTEuMSJOIDM4wrA0Nyc0NC45IkU!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (col-span-7): We'd Love to Hear From You Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-[2.2rem] border border-slate-200/90 shadow-xl space-y-7 relative overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-[#0284C7] to-[#0ED3DD]" />

                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 inline-flex items-center gap-1.5">
                    <Send size={12} />
                    <span>SEND A MESSAGE</span>
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
                    We'd Love to Hear From You
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">
                    Fill in the form below and our team will respond within 24 hours.
                  </p>
                </div>

                {status && (
                  <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold flex items-center gap-3 ${
                    statusType === 'success'
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-red-50 border-red-300 text-red-800'
                  }`}>
                    {statusType === 'success' ? <CheckCircle size={20} className="text-emerald-600 shrink-0" /> : <AlertCircle size={20} className="text-red-600 shrink-0" />}
                    <span>{status}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abebe Kebede"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 focus:bg-white transition-all font-medium"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  {/* EMAIL & PHONE SIDE BY SIDE */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="abebe@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 focus:bg-white transition-all font-medium"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
                        PHONE *
                      </label>
                      <input
                        type="text"
                        placeholder="0910000000"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 focus:bg-white transition-all font-medium"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* INQUIRY CATEGORY */}
                  <div>
                    <label className="block text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
                      INQUIRY CATEGORY *
                    </label>
                    <select
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 focus:bg-white transition-all font-medium"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="B2B_SOFTWARE">🏢 Enterprise Software / Custom ERP &amp; CRM</option>
                      <option value="ACADEMY_ENROLLMENT">🎓 WabiSkills Academy Bootcamp Enrollment</option>
                      <option value="CLOUD_SECURITY">☁️ Cloud Infrastructure &amp; DevOps Security</option>
                      <option value="MEDIA_PARTNERSHIP">🤝 Tech Partnership &amp; Media Sponsorship</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      rows="5"
                      required
                      placeholder="Tell us how we can help you..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 focus:bg-white transition-all font-medium"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  {/* SUBMIT BUTTON (VIBRANT CYAN-BLUE GRADIENT & HOVER GLOW) */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-5 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] hover:from-[#1DA1F2] hover:via-[#0284C7] hover:to-[#0ED3DD] text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/50 hover:scale-[1.015] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer group"
                  >
                    <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                    <Send size={18} className="group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Interactive Frequently Asked Questions Section (Ultra-Advanced Level) */}
          <div className="mt-28 pt-16 border-t border-slate-300">
            <div className="text-center mb-10 space-y-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#0284C7] px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 inline-block shadow-sm">
                💬 GOT QUESTIONS?
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900">
                Frequently Asked <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mx-auto font-medium">
                Quick answers about our software engineering consulting, ERP deployments, and WabiSkills bootcamps.
              </p>

              {/* FAQ Category Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                {[
                  { key: 'All', label: 'All Questions (5)' },
                  { key: 'Software', label: '🏢 Enterprise & ERP' },
                  { key: 'Academy', label: '🎓 WabiSkills Academy' },
                  { key: 'Office', label: '📍 Office & Cloud Support' }
                ].map(tab => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveFaqCategory(tab.key)}
                    className={`px-7 py-3 rounded-full text-xs font-black transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                      activeFaqCategory === tab.key
                        ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white border-transparent shadow-lg shadow-cyan-500/30 scale-105'
                        : 'bg-white text-slate-700 border-slate-200/90 shadow-sm hover:border-[#0284C7] hover:bg-sky-50/70 hover:text-[#0284C7]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List Container (Expanded to max-w-[1720px] ultra-widescreen) */}
            <div className="w-full max-w-[1720px] mx-auto space-y-4">
              {filteredFaqs.map((faq, fIdx) => (
                <FaqItem key={fIdx} faq={faq} index={fIdx} />
              ))}
            </div>

            {/* Bottom Executive Direct Support CTA Banner (Ultra-Wide Light Theme — No Black Background) */}
            <div className="w-full max-w-[1720px] mx-auto mt-12 bg-gradient-to-r from-white via-sky-50/90 to-cyan-50/90 rounded-[2.2rem] p-8 sm:p-12 border-2 border-sky-300/80 text-slate-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="space-y-2 text-center md:text-left relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 inline-block">
                  ⚡ NEED CUSTOM ARCHITECTURE?
                </span>
                <h4 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                  Still have custom technical requirements?
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-xl">
                  Speak directly with our senior software architects for immediate technical consultation and enterprise scoping.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0 relative z-10">
                <a
                  href="tel:+251977666699"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-xs shadow-xl shadow-sky-500/25 hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <Phone size={16} />
                  <span>Call Hotline</span>
                </a>
                <a
                  href="mailto:contact@yomtechglobal.org"
                  className="px-7 py-4 rounded-2xl bg-white border border-slate-300 hover:border-[#0284C7] text-slate-900 hover:text-[#0284C7] font-black text-xs shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <Mail size={16} />
                  <span>Email Consultants</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};