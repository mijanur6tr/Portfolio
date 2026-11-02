'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Terminal, Cpu, Database, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd] bg-grid-pattern border-b border-neutral-200 pt-10 pb-12 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28">
      {/* Subtle corner crosshairs on outer container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-[11px] font-mono text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#0df69e]"></span>
              <span className="tracking-wide uppercase font-semibold">
                // CTO @ MAJHI • FULL-STACK & AI ARCHITECT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              Architecting fast, scalable, and intelligent web systems.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              I am <span className="font-semibold text-neutral-900">Mijanur Rahman</span> — Chief Technology Officer at <span className="font-semibold text-neutral-900">MAJHI</span> and Technical Specialist at <span className="font-semibold text-neutral-900">Rupantar Eco Tourism</span>. I lead engineering strategy, cloud architecture, and end-to-end full-stack platforms designed to solve real business challenges.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0df69e] text-neutral-950 font-semibold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0c0b13] text-white font-semibold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all border border-neutral-800 cursor-pointer"
              >
                <span>Initialize Contact</span>
              </Link>
            </div>

            {/* Key Micro Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-neutral-200 max-w-lg">
              <div>
                <div className="font-mono text-2xl font-bold text-neutral-900">8+</div>
                <div className="text-[11px] text-neutral-500 font-mono">Production Apps</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-neutral-900">100%</div>
                <div className="text-[11px] text-neutral-500 font-mono">Reliability Target</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-emerald-600">Active</div>
                <div className="text-[11px] text-neutral-500 font-mono">Client Availability</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Technical Diagram Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0c0b13] border border-neutral-800 text-white p-6 shadow-2xl corner-crosshair">
              {/* Card Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-neutral-400">system_manifest.json</span>
                </div>
                <span className="text-emerald-400 font-semibold">[LIVE]</span>
              </div>

              {/* Technical Node Visualizer */}
              <div className="py-6 space-y-4 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#141320] border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">Next.js 15 & React 19</div>
                      <div className="text-[10px] text-neutral-400">SSR • Server Actions • App Router</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    OPT-99%
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#141320] border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">PostgreSQL & Prisma</div>
                      <div className="text-[10px] text-neutral-400">Neon Cloud Pool • ACID Safe • Zero-Data Loss</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    CONNECTED
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#141320] border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">AI Embeddings & Vector Search</div>
                      <div className="text-[10px] text-neutral-400">AstraDB • Gemini LLM • RAG Pipelines</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    READY
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#141320] border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">Security & Cloud Payments</div>
                      <div className="text-[10px] text-neutral-400">RBAC • Razorpay • Cloudinary CDN</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Kernel: Linux / Node 22</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Latency: 18ms
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee Strip */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-neutral-200">
          <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest text-center mb-6">
            // Core Engineering Technologies & Frameworks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-neutral-700 font-semibold">
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">Next.js 15</span>
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">React 19</span>
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">TypeScript</span>
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">Neon PostgreSQL</span>
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">Prisma ORM</span>
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">MongoDB</span>
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">AstraDB RAG</span>
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">Tailwind CSS</span>
            <span className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200">Cloudinary</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

