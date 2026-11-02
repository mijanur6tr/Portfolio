import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageSquare, ArrowUpRight, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#0c0b13] text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                MR
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Mijanur Rahman</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Full-stack web developer focused on building fast, modern, and scalable web solutions.
              Specialized in Next.js, React, Node.js, PostgreSQL/Neon, MongoDB, and AI/RAG architectures.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/mijanur6tr"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mijanur-rahman-9508682ba/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:mijanrhdev@gmail.com"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801642674330"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-4">
              [ NAVIGATION ]
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  All Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Me
                </Link>
              </li>
              <li>
                <a
                  href="/images/Mijanur_Rahman_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-4">
              [ DIRECT CONTACT ]
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <a href="mailto:mijanrhdev@gmail.com" className="hover:text-white transition-colors">
                  mijanrhdev@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <a href="tel:+8801642674330" className="hover:text-white transition-colors">
                  +880 1642 674330
                </a>
              </p>
              <p className="text-[11px] text-neutral-500 pt-2">
                Location: Khulna / Meherpur, Bangladesh (UTC+6)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Mijanur Rahman. Built with Next.js, Neon PostgreSQL & Cloudinary.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin/login" className="hover:text-neutral-400 font-mono">
              [Admin Login]
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              All systems normal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
