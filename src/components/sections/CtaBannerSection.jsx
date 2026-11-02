import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, FileText } from 'lucide-react';

export const CtaBannerSection = () => {
  return (
    <section className="bg-[#0c0b13] text-white py-8 sm:py-14 md:py-20 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#13111f] to-[#1c1930] border border-white/10 p-5 sm:p-8 md:p-12 overflow-hidden corner-crosshair">
          {/* Subtle mint glow in corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>READY TO COLLABORATE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have a project or team opening in mind?
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
              Whether you need a high-impact web application built from scratch, an existing codebase scaled, or an AI pipeline deployed — I am ready to bring engineering rigor to your team.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0df69e] text-neutral-950 font-semibold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Initialize Conversation</span>
              </Link>

              <a
                href="/images/Mijanur_Rahman_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b192c] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#25223c] transition-all border border-neutral-700"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;

