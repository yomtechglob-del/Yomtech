import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, FileText, Compass, Layers, 
  Code, ShieldCheck, Server, GraduationCap, TrendingUp 
} from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';

/* ─── SERVICES CHALLENGE TO IMPACT (WATERMARK LOGO IN RIGHT BOTTOM CORNER) ─── */
export const ServicesChallengeToImpact = () => {
  const steps = [
    {
      step: '01',
      optionLabel: 'Option 01',
      stage: 'Challenge',
      title: 'Problem Identification & Operational Audit',
      desc: 'Identify operational bottlenecks, fragmented legacy systems, workflow inefficiencies, and core technical requirements across client workflows.',
      icon: Search,
      baseGradient: 'bg-gradient-to-br from-[#D97706] via-[#B45309] to-[#78350F]',
      textColor: 'text-[#B45309]',
      borderColor: 'border-[#B45309]',
      tiltBase: '-rotate-2',
      tiltCard: 'rotate-3',
    },
    {
      step: '02',
      optionLabel: 'Option 02',
      stage: 'Scoping',
      title: 'Technical SRS & Roadmap Scoping',
      desc: 'Translate organizational goals into detailed Software Requirement Specifications (SRS), milestone roadmaps, risk matrices, and SLA frameworks.',
      icon: FileText,
      baseGradient: 'bg-gradient-to-br from-[#1E40AF] via-[#1E3A8A] to-[#172554]',
      textColor: 'text-[#1E40AF]',
      borderColor: 'border-[#1E40AF]',
      tiltBase: 'rotate-2',
      tiltCard: '-rotate-3',
    },
    {
      step: '03',
      optionLabel: 'Option 03',
      stage: 'Strategy',
      title: 'Strategic System & Data Blueprints',
      desc: 'Architect high-concurrency database schemas, microservice API contracts, zero-trust security frameworks, and scalable cloud foundations.',
      icon: Compass,
      baseGradient: 'bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#7F1D1D]',
      textColor: 'text-[#DC2626]',
      borderColor: 'border-[#DC2626]',
      tiltBase: '-rotate-2',
      tiltCard: 'rotate-3',
    },
    {
      step: '04',
      optionLabel: 'Option 04',
      stage: 'Design',
      title: 'Interactive UX & System Prototypes',
      desc: 'Design intuitive enterprise user interfaces, system wireframes, role-based dashboards, and interactive prototypes for client validation.',
      icon: Layers,
      baseGradient: 'bg-gradient-to-br from-[#9333EA] via-[#7E22CE] to-[#581C87]',
      textColor: 'text-[#9333EA]',
      borderColor: 'border-[#9333EA]',
      tiltBase: 'rotate-2',
      tiltCard: '-rotate-3',
    },
    {
      step: '05',
      optionLabel: 'Option 05',
      stage: 'Solution',
      title: 'Agile Build & Custom Software',
      desc: 'Engineering custom software, Yomnex ERP modules, mobile applications, and AI surveillance engines using clean, version-controlled code.',
      icon: Code,
      baseGradient: 'bg-gradient-to-br from-[#059669] via-[#047857] to-[#064E3B]',
      textColor: 'text-[#059669]',
      borderColor: 'border-[#059669]',
      tiltBase: '-rotate-2',
      tiltCard: 'rotate-3',
    },
    {
      step: '06',
      optionLabel: 'Option 06',
      stage: 'QA & Security',
      title: 'Performance, Penetration & QA Validation',
      desc: 'Execute automated unit test suites, vulnerability penetration audits, sub-50ms latency load validation, and formal user acceptance testing (UAT).',
      icon: ShieldCheck,
      baseGradient: 'bg-gradient-to-br from-[#0891B2] via-[#0E7490] to-[#164E63]',
      textColor: 'text-[#0891B2]',
      borderColor: 'border-[#0891B2]',
      tiltBase: 'rotate-2',
      tiltCard: '-rotate-3',
    },
    {
      step: '07',
      optionLabel: 'Option 07',
      stage: 'Integration',
      title: 'Zero-Downtime Deployment & Migration',
      desc: 'Containerized deployment via Docker/Kubernetes on cloud or on-premise data centers, accompanied by seamless system migration and data sync.',
      icon: Server,
      baseGradient: 'bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#4C1D95]',
      textColor: 'text-[#7C3AED]',
      borderColor: 'border-[#7C3AED]',
      tiltBase: '-rotate-2',
      tiltCard: 'rotate-3',
    },
    {
      step: '08',
      optionLabel: 'Option 08',
      stage: 'Capacity',
      title: 'Institutional Onboarding & Staff Mentorship',
      desc: 'Conduct hands-on technical workshops, administrator onboarding, user training manuals, and WabiSkills capability transfer for client teams.',
      icon: GraduationCap,
      baseGradient: 'bg-gradient-to-br from-[#E11D48] via-[#BE123C] to-[#881337]',
      textColor: 'text-[#E11D48]',
      borderColor: 'border-[#E11D48]',
      tiltBase: 'rotate-2',
      tiltCard: '-rotate-3',
    },
    {
      step: '09',
      optionLabel: 'Option 09',
      stage: 'Evolution',
      title: '24/7 SLA Support & Continuous Scaling',
      desc: 'Enable round-the-clock technical support, continuous performance tuning, periodic security patch updates, feature expansions, and long-term scaling.',
      icon: TrendingUp,
      baseGradient: 'bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0C4A6E]',
      textColor: 'text-[#0284C7]',
      borderColor: 'border-[#0284C7]',
      tiltBase: '-rotate-2',
      tiltCard: 'rotate-3',
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-emerald-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>Engineering Process Methodology</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
            From Complex Challenges to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Practical Solutions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-4xl font-sans">
            Technology creates value when it solves real problems. YomTech Global connects business challenges with software engineering, digital platforms, and practical tech talent.
          </p>
        </div>

        {/* Tilted Stitched Leather Patch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[90rem] mx-auto">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="relative group cursor-pointer"
              >
                {/* Tilted Outer Gradient Base Plate */}
                <div className={`w-full h-full ${item.baseGradient} rounded-[2.8rem] p-3 sm:p-4 shadow-2xl ${item.tiltBase} group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-500`}>
                  
                  {/* Inner Counter-Tilted White Stitched Patch Card */}
                  <div className={`bg-white rounded-[2.3rem] p-7 sm:p-9 shadow-inner border-2 border-solid border-slate-300 relative ${item.tiltCard} group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between space-y-6 h-full overflow-hidden`}>
                    
                    {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                    <div className="absolute right-2 bottom-2 opacity-[0.18] pointer-events-none z-0">
                      <img src={logoEmblem} alt="" className="w-28 sm:w-36 h-28 sm:h-36 object-contain" />
                    </div>

                    {/* Top Row: Option Label & Step Number */}
                    <div className="space-y-1 relative z-10">
                      <span className={`text-[11px] font-mono font-bold tracking-wider ${item.textColor} block`}>
                        {item.optionLabel}
                      </span>
                      <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${item.textColor} leading-none block`}>
                        {item.step}
                      </span>
                    </div>

                    {/* Middle Section: Title & Description */}
                    <div className="space-y-3 flex-1 relative z-10">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold tracking-wider mb-1">
                        {item.stage}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Right: Circular Icon Badge */}
                    <div className="self-end pt-2 relative z-10">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 ${item.borderColor} bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className={`w-7 h-7 ${item.textColor}`} strokeWidth={2.2} />
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesChallengeToImpact;
