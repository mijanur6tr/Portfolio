import React from 'react';
import { Compass, Ship, Globe, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Layers, CreditCard, Cpu } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#0c0b13] bg-grid-dark-pattern text-white py-10 sm:py-16 md:py-20 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10 md:mb-14 pb-4 sm:pb-6 border-b border-neutral-800">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
            // 01. EXECUTIVE LEADERSHIP & PRODUCTION ENGINEERING
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Technology Strategy & Industry Experience
            </h2>
            <div className="text-xs font-mono text-neutral-400">
              Leading product development, distributed systems & cloud deployments
            </div>
          </div>
        </div>

        {/* Major Spotlight: MAJHI (CTO) */}
        <div className="mb-8 p-6 sm:p-8 rounded-none bg-[#121120] border border-emerald-500/30 hover:border-emerald-400/60 transition-all corner-crosshair">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6 pb-6 border-b border-neutral-800">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#0df69e] text-neutral-950 font-bold">
                  EXECUTIVE LEADERSHIP
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  Full-time • Hybrid
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <Ship className="w-6 h-6 text-emerald-400 shrink-0" />
                <span>Chief Technology Officer (CTO) — MAJHI</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
                Dhaka, Bangladesh • Jan 2026 — Present (11 mos)
              </p>
            </div>

            <div className="text-left lg:text-right">
              <span className="inline-block px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400">
                Operating in the World’s Largest Delta
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
            As CTO of <span className="font-semibold text-white">Majhi</span>, a premier river cruising platform, I spearhead the comprehensive technology roadmap, architectural strategy, and product execution that digitizes river tourism across Bangladesh.
          </p>

          {/* Key Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-[#18162b] border border-neutral-800 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Scalable Full-Stack Platform</div>
                <div className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                  Architected and engineered the end-to-end booking platform from ideation to production rollout.
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#18162b] border border-neutral-800 flex items-start gap-3">
              <CreditCard className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Trip & Payment Infrastructure</div>
                <div className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                  Implemented real-time seat selection, automated trip coordination, and secure payment gateway processing.
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#18162b] border border-neutral-800 flex items-start gap-3">
              <Layers className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Modular Role Dashboards</div>
                <div className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                  Built decoupled, high-performance dashboards for cruise operators, administrative managers, and travelers.
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#18162b] border border-neutral-800 flex items-start gap-3">
              <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Database Optimization & Concurrency</div>
                <div className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                  Tuned query execution and caching to maintain zero-friction booking transactions during seasonal peaks.
                </div>
              </div>
            </div>
          </div>

          {/* Associated Skills */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mr-2">
              Core Competencies:
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-[#1a182d] text-emerald-300 border border-neutral-800">
              Technology Management
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-[#1a182d] text-emerald-300 border border-neutral-800">
              Full-Stack Architecture
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-[#1a182d] text-emerald-300 border border-neutral-800">
              Business Logic & Roadmapping
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-[#1a182d] text-emerald-300 border border-neutral-800">
              Payment Gateway Integration
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-[#1a182d] text-emerald-300 border border-neutral-800">
              Platform Scaling
            </span>
          </div>
        </div>

        {/* Secondary Experiences: Rupantar Eco Tourism & Yolast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rupantar Eco Tourism */}
          <div className="p-6 sm:p-7 rounded-none bg-[#121120] border border-neutral-800 hover:border-emerald-500/40 transition-colors corner-crosshair flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-emerald-400 border border-neutral-800">
                  Part-time • Hybrid
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  Feb 2026 — Present (10 mos)
                </span>
              </div>

              <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 mb-1">
                <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Web Developer & Technical Specialist</span>
              </h4>
              <div className="text-xs font-semibold text-emerald-400 mb-4">
                Rupantar Eco Tourism [RET] Ltd. • Khulna, Bangladesh
              </div>

              <ul className="space-y-2 text-xs text-neutral-300 leading-relaxed mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Developed, tested, and successfully deployed the company’s full-stack production website.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Maintain cloud server infrastructure, production functionality, security patches, and continuous enhancements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Provide technical operational support to streamline booking inquiries and incoming travel lead workflows.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800">
                Web Infrastructure
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800">
                Production Deployment
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800">
                Travel Operations
              </span>
            </div>
          </div>

          {/* Yolast Internship */}
          <div className="p-6 sm:p-7 rounded-none bg-[#121120] border border-neutral-800 hover:border-emerald-500/40 transition-colors corner-crosshair flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-neutral-400 border border-neutral-800">
                  Engineering Internship
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  May 2025 — July 2025
                </span>
              </div>

              <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Full Stack Intern</span>
              </h4>
              <div className="text-xs font-semibold text-neutral-400 mb-4">
                Yolast • Production Systems
              </div>

              <ul className="space-y-2 text-xs text-neutral-300 leading-relaxed mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Engineered end-to-end authentication flows with Google OAuth, credentials, and OTP verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Structured multi-tier role-based authorization (RBAC) separating consumers, affiliates, and admins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Integrated Razorpay payment gateways with transaction verification and ledger synchronization.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800">
                OAuth & RBAC
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800">
                Razorpay API
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800">
                Auth Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
