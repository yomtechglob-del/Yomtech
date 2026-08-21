import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, Layers, Users, Zap, CheckCircle2, Award } from 'lucide-react';

export const LearningModel = () => {
  const pillars = [
    {
      step: '01.',
      stage: 'LEARN',
      title: 'Understand Concepts & Architecture',
      desc: 'Grasp fundamental computer science principles, modern software engineering patterns, and enterprise cloud architecture.',
      deliverables: ['System Patterns', 'Data Structures', 'Cloud Concepts'],
      icon: BookOpen,
      gradient: 'from-[#F97316] via-[#EA580C] to-[#C2410C]',
      lightBg: 'bg-orange-50',
      badgeText: 'text-orange-700',
      badgeBorder: 'border-orange-300',
    },
    {
      step: '02.',
      stage: 'PRACTICE',
      title: 'Apply Knowledge & Deep Code Labs',
      desc: 'Cement understanding through hands-on coding exercises, interactive sandbox labs, algorithm drills, and unit test suites.',
      deliverables: ['Interactive Labs', 'Algorithm Drills', 'Code Challenges'],
      icon: Terminal,
      gradient: 'from-[#E11D48] via-[#D946EF] to-[#9333EA]',
      lightBg: 'bg-pink-50',
      badgeText: 'text-pink-700',
      badgeBorder: 'border-pink-300',
    },
    {
      step: '03.',
      stage: 'BUILD',
      title: 'Real-World Production Applications',
      desc: 'Architect and deploy production-ready web platforms, high-concurrency microservices, AI model endpoints, and apps.',
      deliverables: ['Production Apps', 'AI Endpoints', 'MERN & Mobile'],
      icon: Layers,
      gradient: 'from-[#8B5CF6] via-[#6366F1] to-[#4338CA]',
      lightBg: 'bg-purple-50',
      badgeText: 'text-purple-700',
      badgeBorder: 'border-purple-300',
    },
    {
      step: '04.',
      stage: 'MENTOR',
      title: 'Guidance, PR Audits & Career Growth',
      desc: 'Accelerate career trajectory with direct 1-on-1 code reviews, senior lead developer feedback, and portfolio validation.',
      deliverables: ['1-on-1 PR Audits', 'Lead Feedback', 'Code Standards'],
      icon: Users,
      gradient: 'from-[#0EA5E9] via-[#0284C7] to-[#1E40AF]',
      lightBg: 'bg-sky-50',
      badgeText: 'text-sky-700',
      badgeBorder: 'border-sky-300',
    },
    {
      step: '05.',
      stage: 'DEPLOY',
      title: 'Enterprise Release & Job Placement',
      desc: 'Deploy live client projects on Yomtech infrastructure and transition seamlessly into enterprise tech placements.',
      deliverables: ['Live Cloud Release', 'Vetted Portfolio', 'WabiJob Placement'],
      icon: Zap,
      gradient: 'from-[#10B981] via-[#059669] to-[#047857]',
      lightBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      badgeBorder: 'border-emerald-300',
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[600px] bg-cyan-400/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header matching Image 2 */}
        <div className="text-left space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>DEVELOPMENT METHODOLOGY</span>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
            5-Stage Progressive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Software Learning Methodology</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            Our progressive 5-stage engineering methodology transforms beginners into production-ready software leads through structured concepts, practice labs, project builds, PR audits, and enterprise deployment.
          </p>
        </div>

        {/* Modern 5-Column Business Infographic Layout (Matching Screenshot 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;

            return (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-[2.2rem] p-[3.5px] bg-gradient-to-b ${pillar.gradient} shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2.5 flex flex-col justify-between`}
              >
                <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col justify-between h-full border border-slate-100">
                  
                  {/* Top Angled Gradient Ribbon Header Tab (Matching Screenshot 2) */}
                  <div
                    className={`p-6 bg-gradient-to-r ${pillar.gradient} text-white relative overflow-hidden flex items-center justify-between shadow-md`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 78%, 0 100%)' }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white drop-shadow-md">
                        {pillar.step}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                      <IconComp size={24} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Inner White Body Plate */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-widest ${pillar.lightBg} ${pillar.badgeText} border ${pillar.badgeBorder}`}>
                        {pillar.stage}
                      </span>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Key Deliverables Bullet Pills */}
                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Deliverables</div>
                      <div className="space-y-1.5">
                        {pillar.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
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

export default LearningModel;
