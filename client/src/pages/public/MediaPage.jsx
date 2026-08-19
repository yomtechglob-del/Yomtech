import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Video, Film, Tv, Radio, Play, Sparkles, ArrowRight, Phone,
  CheckCircle2, Star, Layers, ShieldCheck, Globe, Cpu, Award,
  ExternalLink, Eye, Share2, Calendar, FileText
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import documentaryImg from '../../assets/services/documentary.png';

// Partner Logos
import fanaLogo from '../../assets/partners/fana televisions.png';
import balageruLogo from '../../assets/partners/Balageru TV.png';
import addisAiLogo from '../../assets/partners/addisai_logo.jpg';
import yonileLogo from '../../assets/partners/yonile.webp';

/* ─── FEATURED DOCUMENTARIES DATA ─── */
const DOCUMENTARIES = [
  {
    id: 'eaii-ai-awakening',
    title: 'Ethiopia’s AI Awakening: Inside EAII',
    category: 'AI & Machine Learning',
    partner: 'Ethiopian Artificial Intelligence Institute & Addis AI',
    duration: '45 Mins',
    year: '2025',
    img: documentaryImg,
    logo: addisAiLogo,
    desc: 'An in-depth documentary exploring Ethiopia’s leap into artificial intelligence research, computer vision models, and national AI strategies.',
    highlights: ['Exclusive EAII Lab Access', 'Computer Vision Demonstrations', 'Interviews with AI Researchers']
  },
  {
    id: 'ssgi-space-frontier',
    title: 'Space Science & Geospatial Frontier',
    category: 'Space & Geospatial',
    partner: 'Space Science & Geospatial Institute (SSGI)',
    duration: '38 Mins',
    year: '2025',
    img: documentaryImg,
    logo: logoEmblem,
    desc: 'Documenting satellite data processing, spatial analytics, and space science exploration driving sustainable development across East Africa.',
    highlights: ['Satellite Ground Station Tour', 'Geospatial Mapping Case Studies', 'Space Scientist Profiles']
  },
  {
    id: 'digital-trade-government',
    title: 'Digital Government & Municipal Trade',
    category: 'E-Government',
    partner: 'Addis Ababa City Trade Bureau & MInT',
    duration: '30 Mins',
    year: '2025',
    img: documentaryImg,
    logo: logoEmblem,
    desc: 'Showcasing the paperless revolution in commercial trade licensing, document archiving, and citizen workflow automation.',
    highlights: ['Before vs After Digital Impact', 'Citizen Interview Testimonials', 'Municipal System Workflow']
  },
  {
    id: 'wabiskills-pan-african-talent',
    title: 'Pan-African Tech Talent: WabiSkills Story',
    category: 'EdTech & Talent',
    partner: 'WabiSkills Academy & Broadcast Media',
    duration: '40 Mins',
    year: '2025',
    img: documentaryImg,
    logo: fanaLogo,
    desc: 'Following 2,000+ young software developers trained through WabiSkills bootcamps and their impact on global tech innovation.',
    highlights: ['Graduate Hiring Journeys', 'Bootcamp Live Coding', 'Tech Leader Mentorship']
  }
];

export const MediaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          HERO SECTION (Matching Site System)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        
        {/* Background Image Layers */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover object-left-top origin-top-left opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover object-right-top origin-top-right opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
        </div>

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left items-start flex flex-col"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
              <Video size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                TECH MEDIA &amp; DOCUMENTARY PRODUCTION
              </span>
            </div>

            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Technology Storytelling &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Innovation Documentaries
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Yomtech Media produces high-definition technology documentaries, innovation broadcasts, and digital media stories in partnership with Fana Media Corporation SC, Balageru TV, Addis AI, and Yonile Digitals.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Commission Tech Media</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>

              <a
                href="tel:+251977666699"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-md">
                  <Phone size={15} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-cyan-200 font-bold uppercase tracking-wider">Media Desk</p>
                  <p className="text-xs font-black text-white">+251 (977) 666-699</p>
                </div>
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
                    <Video size={24} className="text-[#0284C7]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">YomTech Media</h3>
                    <p className="text-xs text-cyan-200">Television &amp; Digital Broadcasts</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Inspiring the next generation of African technology leaders through broadcast documentaries and digital innovation storytelling.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FEATURED DOCUMENTARIES CATALOGUE
      ════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          <div className="text-left space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Film className="w-4 h-4" />
              <span>Documentary Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Featured Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Documentaries</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              Broadcasted across national networks to promote digital literacy, space research, artificial intelligence, and technological self-reliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOCUMENTARIES.map((doc) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-mono font-black uppercase tracking-widest">
                      {doc.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-mono flex items-center gap-1">
                      <Clock size={12} /> {doc.duration} · {doc.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight">
                      {doc.title}
                    </h3>
                    <p className="text-xs font-bold text-[#0284C7] mt-1">Partner: {doc.partner}</p>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{doc.desc}</p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Documentary Highlights:</span>
                    <div className="space-y-1">
                      {doc.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                          <CheckCircle2 size={13} className="text-[#0284C7] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
                  >
                    <Play size={15} fill="currentColor" />
                    <span>Watch / Request Screening</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default MediaPage;
