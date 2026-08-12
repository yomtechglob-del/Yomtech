import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Code, ShieldCheck, Rocket, RefreshCw, Sparkles, CheckCircle2, Cpu, FileCode, Shield } from 'lucide-react';

export const EngineeringApproach = () => {
  const [activeStage, setActiveStage] = useState(1); // Default to Architect stage
  const [activeSubTab, setActiveSubTab] = useState('deliverables');

  const stages = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Discovery, requirements mapping, & strategic business alignment.',
      icon: Search,
      badge: 'Discovery Phase',
      tags: ['Requirements', 'Strategy', 'Alignment'],
      deliverable: 'Business Architecture Blueprint & Technical Requirements Matrix',
      metric: '100% Scope Clarity',
      artifacts: ['SRS Requirement Matrix', 'Domain Capability Map', 'Business ROI Blueprint'],
      techStack: ['Figma UI System', 'Mermaid Architecture', 'Jira Enterprise'],
      safeguards: ['Stakeholder Alignment Check', 'Feasibility Assessment', 'Budget Optimization']
    },
    {
      num: '02',
      title: 'Architect',
      desc: 'System design, database schemas, & cloud infrastructure topology.',
      icon: Compass,
      badge: 'Design Phase',
      tags: ['System Design', 'Schemas', 'Cloud Topology'],
      deliverable: 'High-Availability Cloud Architecture & Microservices Schema',
      metric: '99.99% Uptime Design',
      artifacts: ['AWS/Azure Cloud Diagram', 'PostgreSQL ERD Schema', 'gRPC/REST API Specs'],
      techStack: ['PostgreSQL & Redis', 'Kubernetes Topology', 'Terraform IaC'],
      safeguards: ['High-Availability Multi-AZ', 'Disaster Recovery Strategy', 'SOC2 Compliant Topo']
    },
    {
      num: '03',
      title: 'Engineer',
      desc: 'Precision full-stack code craftsmanship & API integrations.',
      icon: Code,
      badge: 'Build Phase',
      tags: ['Full-Stack', 'Clean Code', 'REST/GraphQL'],
      deliverable: 'Enterprise Codebase & Production RESTful/gRPC API Suite',
      metric: '<50ms Response Time',
      artifacts: ['Modular Monolith / Microservices', 'TypeScript Strict Codebase', 'API Gateway Route Table'],
      techStack: ['React / Vite', 'Node.js & Python', 'Docker Containers'],
      safeguards: ['SonarQube Code Audit', 'Strict Type Checking', 'Zero Hardcoded Secrets']
    },
    {
      num: '04',
      title: 'Validate',
      desc: 'Automated test suite, performance optimization, & security audits.',
      icon: ShieldCheck,
      badge: 'QA Phase',
      tags: ['Unit Testing', 'Security Audit', 'Performance'],
      deliverable: 'Automated CI Test Suite & Vulnerability Penetration Report',
      metric: 'Zero Critical Flaws',
      artifacts: ['Jest / Cypress Test Reports', 'OWASP Penetration Audit', 'k6 Stress Load Benchmarks'],
      techStack: ['Vitest & Cypress', 'OWASP ZAP Scanner', 'k6 Load Testing'],
      safeguards: ['95%+ Test Coverage', 'Penetration Resistance', 'Memory Leak Profiling']
    },
    {
      num: '05',
      title: 'Deploy',
      desc: 'Seamless CI/CD deployment pipeline & active production release.',
      icon: Rocket,
      badge: 'Release Phase',
      tags: ['CI/CD Pipeline', 'Docker/K8s', 'Zero Downtime'],
      deliverable: 'Automated Multi-Region Deployment & Disaster Recovery Pipeline',
      metric: 'Zero-Downtime Rollout',
      artifacts: ['GitHub Actions CI/CD Script', 'Helm Charts Manifests', 'ArgoCD Deployment Log'],
      techStack: ['GitHub Actions', 'ArgoCD & Docker', 'AWS ECS / EKS'],
      safeguards: ['Blue/Green Deployment', 'Canary Rollout Strategy', 'Instant Automated Rollback']
    },
    {
      num: '06',
      title: 'Evolve',
      desc: 'Continuous SLA monitoring, performance tuning, & feature scaling.',
      icon: RefreshCw,
      badge: 'Scale Phase',
      tags: ['SLA Monitor', 'Auto-Tune', 'Feature Scale'],
      deliverable: 'Real-time Telemetry Dashboard & Continuous Feature Enhancement',
      metric: '24/7 SLA Guarantee',
      artifacts: ['Prometheus & Grafana Dashboards', 'Datadog APM Traces', 'Quarterly Roadmap Updates'],
      techStack: ['Grafana & Prometheus', 'Datadog APM', 'OpenTelemetry Traces'],
      safeguards: ['24/7 Incident Escalation', 'Auto-Scaling Clusters', 'Proactive SLA Alerts']
    }
  ];

  const currentStageData = stages[activeStage];

  return (
    <div className="py-12 w-full text-slate-900 relative overflow-hidden">
      {/* Soft Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[550px] bg-gradient-to-r from-sky-200/40 via-cyan-100/30 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-gradient-to-l from-indigo-100/30 via-sky-100/30 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-6 py-2.5 rounded-full bg-sky-100/90 border border-sky-300 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={14} className="text-[#0284C7] animate-pulse" />
            <span>ENGINEERING ROADMAP</span>
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900">
            Our Engineering <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Approach</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            An interactive, enterprise-grade technology roadmap ensuring predictability, security, and long-term performance.
          </p>

          {/* Quick Node Selector Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {stages.map((st, sIdx) => (
              <button
                key={sIdx}
                type="button"
                onClick={() => setActiveStage(sIdx)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                  activeStage === sIdx
                    ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black shadow-lg shadow-sky-500/25 scale-105 border-transparent'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${activeStage === sIdx ? 'bg-white animate-pulse' : 'bg-[#0284C7]'}`} />
                <span>{st.num} {st.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Continuous Horizontal Journey Timeline */}
        <div className="relative">
          {/* Connecting Line Backdrop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-slate-200 -translate-y-1/2 z-0 rounded-full border border-slate-300/60" />
          
          {/* Active Glowing Laser Progress Beam */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 h-2 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] -translate-y-1/2 z-0 transition-all duration-500 rounded-full shadow-md"
            style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -10, scale: 1.025 }}
                  onClick={() => setActiveStage(idx)}
                  onMouseEnter={() => setActiveStage(idx)}
                  className={`p-[2px] rounded-[2.2rem] transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-[0_20px_50px_rgba(2,132,199,0.25)] -translate-y-3'
                      : 'bg-slate-200 hover:bg-slate-300 shadow-sm'
                  }`}
                >
                  <div className="bg-white rounded-[2.1rem] p-6 space-y-5 h-full flex flex-col justify-between relative overflow-hidden text-slate-900 border border-slate-100 shadow-md">
                    <div className="space-y-4 relative z-10">
                      {/* Top Row: Stage Badge Pin + Icon */}
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black shadow-md scale-110'
                            : 'bg-sky-50 text-[#0284C7] border border-sky-200'
                        }`}>
                          {stage.num}
                        </div>

                        <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white shadow-md scale-110'
                            : 'bg-sky-50 text-[#0284C7] border border-sky-200'
                        }`}>
                          <Icon size={20} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className={`text-[9.5px] font-black uppercase tracking-wider px-3 py-1 rounded-md border inline-block ${
                          isActive
                            ? 'bg-sky-100 border-sky-300 text-[#0284C7]'
                            : 'bg-slate-100 border-slate-200 text-slate-600'
                        }`}>
                          {stage.badge}
                        </span>

                        <h3 className="text-xl font-black font-display text-slate-900 group-hover:text-[#0284C7] transition-colors">
                          {stage.title}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {stage.desc}
                        </p>
                      </div>
                    </div>

                    {/* Micro Capability Tags */}
                    <div className="space-y-3 relative z-10 pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5">
                        {stage.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[9px] font-black uppercase tracking-tight px-2.5 py-0.5 rounded-full border ${
                              isActive
                                ? 'bg-sky-50 border-sky-300 text-[#0284C7]'
                                : 'bg-slate-100 border-slate-200 text-slate-600'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Active Progress Line */}
                      <div className={`h-2 w-full rounded-full transition-all duration-300 ${
                        isActive ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-sm' : 'bg-slate-200'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Phase Inspection Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStageData.num}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-[2px] rounded-[2.5rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl"
          >
            <div className="bg-white rounded-[2.4rem] p-8 sm:p-12 text-slate-900 relative overflow-hidden space-y-7 border border-slate-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284C7] shadow-xs">
                      ACTIVE STAGE INSPECTION • {currentStageData.num}
                    </span>
                    <Sparkles size={18} className="text-amber-500 animate-pulse" />
                  </div>

                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-slate-900">
                    Stage {currentStageData.num}: <span className="bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] bg-clip-text text-transparent">{currentStageData.title}</span> Deliverable Blueprint
                  </h4>
                </div>

                <div className="px-6 py-3.5 rounded-2xl bg-sky-50 border-2 border-sky-200 shadow-md text-center md:text-right shrink-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block">
                    STAGE BENCHMARK
                  </span>
                  <span className="text-xl font-black font-display text-[#0284C7] flex items-center gap-2 justify-center md:justify-end">
                    <CheckCircle2 size={20} className="text-[#0ED3DD]" />
                    {currentStageData.metric}
                  </span>
                </div>
              </div>

              {/* Sub-Tab Selector */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5 relative z-10 overflow-x-auto">
                {[
                  { id: 'deliverables', label: 'Delivered Artifacts', icon: FileCode },
                  { id: 'tech', label: 'Tech Ecosystem', icon: Cpu },
                  { id: 'safeguards', label: 'Enterprise Safeguards', icon: Shield }
                ].map(sub => {
                  const SubIcon = sub.icon;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setActiveSubTab(sub.id)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 border cursor-pointer shrink-0 ${
                        activeSubTab === sub.id
                          ? 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white shadow-md scale-105 border-transparent'
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                      }`}
                    >
                      <SubIcon size={16} />
                      <span>{sub.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sub-Tab Content Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                {activeSubTab === 'deliverables' &&
                  currentStageData.artifacts.map((art, aIdx) => (
                    <div key={aIdx} className="p-4.5 rounded-2xl bg-sky-50/80 border border-sky-200/80 hover:border-[#0284C7] hover:bg-sky-50 transition-all flex items-center gap-3.5 shadow-sm">
                      <CheckCircle2 size={20} className="text-[#0284C7] shrink-0" />
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">{art}</span>
                    </div>
                  ))}

                {activeSubTab === 'tech' &&
                  currentStageData.techStack.map((tech, tIdx) => (
                    <div key={tIdx} className="p-4.5 rounded-2xl bg-cyan-50/80 border border-cyan-200/80 hover:border-[#0ED3DD] hover:bg-cyan-50 transition-all flex items-center gap-3.5 shadow-sm">
                      <Cpu size={20} className="text-[#0284C7] shrink-0" />
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">{tech}</span>
                    </div>
                  ))}

                {activeSubTab === 'safeguards' &&
                  currentStageData.safeguards.map((sg, sgIdx) => (
                    <div key={sgIdx} className="p-4.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 hover:border-emerald-500 hover:bg-emerald-50 transition-all flex items-center gap-3.5 shadow-sm">
                      <Shield size={20} className="text-emerald-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">{sg}</span>
                    </div>
                  ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};
