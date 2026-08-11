import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, ArrowRight, CheckCircle2, Cpu, Wrench, Layers, Network, ShieldCheck, FolderGit2, Users2, Lightbulb, Rocket } from 'lucide-react';

export const ClassroomToRealWorld = () => {
  const classroomPoints = [
    { title: 'Fundamentals', desc: 'Core computer science, data structures, and algorithms.', icon: Cpu },
    { title: 'Modern Tools', desc: 'Git, IDEs, Docker containers, and package managers.', icon: Wrench },
    { title: 'Frameworks', desc: 'React, Node.js, Express, Python, and PyTorch.', icon: Layers },
    { title: 'Architecture', desc: 'Microservices, RESTful APIs, and database schemas.', icon: Network },
    { title: 'Best Practices', desc: 'Clean code standards, CI/CD pipelines, and security.', icon: ShieldCheck }
  ];

  const realWorldPoints = [
    { title: 'Production Projects', desc: 'Building full-fledged web and mobile applications.', icon: Code2 },
    { title: 'Live Repositories', desc: 'Managing feature branches, pull requests, and code reviews.', icon: FolderGit2 },
    { title: 'Team Collaboration', desc: 'Agile workflows, issue tracking, and peer pairing.', icon: Users2 },
    { title: 'Complex Problem Solving', desc: 'Debugging performance bottlenecks and scaling systems.', icon: Lightbulb },
    { title: 'Real Scenarios', desc: 'Deploying to cloud platforms with high uptime SLAs.', icon: Rocket }
  ];

  return (
    <section className="py-28 w-full bg-[#EAFBF4] relative text-[#334155] overflow-hidden border-b border-emerald-200/80">
      <div className="absolute top-1/4 right-1/5 w-[550px] h-[550px] bg-gradient-to-br from-emerald-200/30 via-teal-100/20 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/5 w-[450px] h-[450px] bg-gradient-to-tl from-cyan-200/20 via-emerald-100/15 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ED3DD_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-emerald-100/80 border border-emerald-300 inline-block shadow-sm">
            💡 PRACTICAL APPLICATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            From Classroom <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">to Real World</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Connecting theoretical engineering knowledge with production software craftsmanship.
          </p>
        </div>

        {/* Center Connection Banner */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white border border-emerald-300 text-slate-900 font-black text-xs uppercase tracking-widest shadow-md">
            <span>KNOWLEDGE</span>
            <ArrowRight size={16} className="text-[#0284C7]" />
            <span>APPLICATION</span>
          </div>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1720px] mx-auto">
          
          {/* Left Card — Learn the Technology */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-[2px] rounded-[2.8rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-emerald-400 shadow-xl"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2.7rem] p-8 sm:p-10 space-y-6 h-full text-[#334155] border border-white shadow-xl">
              <div className="flex items-center gap-3.5 border-b border-emerald-100 pb-4">
                <div className="p-3.5 rounded-2xl bg-emerald-50 text-[#0284C7] border border-emerald-200 shrink-0">
                  <BookOpen size={24} className="text-[#0284C7]" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0072B8] px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300">
                    PHASE 01 • THEORY &amp; PATTERNS
                  </span>
                  <h3 className="text-2xl font-black font-display text-[#071A2B] mt-1">
                    Learn the Technology
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {classroomPoints.map((pt, pIdx) => {
                  const PtIcon = pt.icon;
                  return (
                    <div key={pIdx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 hover:border-[#0ED3DD] transition-all shadow-xs">
                      <div className="p-2 rounded-xl bg-emerald-100 text-[#071A2B] border border-emerald-300 shrink-0">
                        <PtIcon size={16} className="text-[#0ED3DD]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#071A2B] font-display">{pt.title}</h4>
                        <p className="text-xs text-[#334155] font-semibold mt-0.5">{pt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Card — Build With the Technology */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-[2px] rounded-[2.8rem] bg-gradient-to-br from-[#0ED3DD] via-[#071A2B] to-emerald-400 shadow-xl"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2.7rem] p-8 sm:p-10 space-y-6 h-full text-[#334155] border border-white shadow-xl">
              <div className="flex items-center gap-3.5 border-b border-emerald-100 pb-4">
                <div className="p-3.5 rounded-2xl bg-emerald-100 text-[#071A2B] border border-emerald-300 shrink-0">
                  <Code2 size={24} className="text-[#0ED3DD]" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0072B8] px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300">
                    PHASE 02 • CRAFTSMANSHIP
                  </span>
                  <h3 className="text-2xl font-black font-display text-[#071A2B] mt-1">
                    Build With the Technology
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {realWorldPoints.map((pt, pIdx) => {
                  const PtIcon = pt.icon;
                  return (
                    <div key={pIdx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 hover:border-[#0ED3DD] transition-all shadow-xs">
                      <div className="p-2 rounded-xl bg-emerald-100 text-[#071A2B] border border-emerald-300 shrink-0">
                        <PtIcon size={16} className="text-[#0ED3DD]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#071A2B] font-display">{pt.title}</h4>
                        <p className="text-xs text-[#334155] font-semibold mt-0.5">{pt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
