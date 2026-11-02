'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, MessageSquare, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scroll when side drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // If in admin dashboard, keep navbar minimal or let admin layout handle it
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const navLinks = [
    { label: 'Experience', href: '/#experience' },
    { label: 'Work', href: '/#work' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fbfbfd]/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Brand Logo & Status */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-[#0c0b13] flex items-center justify-center text-emerald-400 font-mono font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
                  MR
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-tight text-neutral-900 leading-none">
                    Mijanur Rahman
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5">
                    CTO & Full-Stack
                  </span>
                </div>
              </Link>

              {/* Live Availability Pill */}
              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Hire</span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-neutral-900 bg-neutral-100 font-semibold'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#0df69e] text-neutral-950 hover:bg-[#00e58d] transition-all shadow-sm hover:shadow"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile menu hamburger button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(true)}
                type="button"
                className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Side Drawer Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/75 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Slide-in Side Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-[290px] sm:w-[320px] bg-[#0c0b13] border-l border-neutral-800 text-white z-50 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                MR
              </div>
              <div>
                <div className="text-xs font-bold text-white">Mijanur Rahman</div>
                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close navigation drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Numbers */}
          <div className="py-6 space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2 px-2">
              // TELEPORT TO SECTION
            </div>
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono text-neutral-300 hover:text-white hover:bg-[#161427] border border-transparent hover:border-neutral-800 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-emerald-400 font-mono font-bold">0{idx + 1}.</span>
                  <span className="font-sans font-semibold text-neutral-200 group-hover:text-emerald-300 transition-colors text-sm">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-emerald-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="pt-5 border-t border-neutral-800 space-y-3">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider rounded-none bg-[#0df69e] text-neutral-950 hover:bg-[#00e58d] transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Initialize Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-neutral-400">
            <a
              href="https://wa.me/8801642674330"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <FaWhatsapp className="w-3.5 h-3.5 text-emerald-400" />
              <span>01642674330</span>
            </a>
            <a
              href="mailto:mijanrhdev@gmail.com"
              className="hover:text-emerald-400 transition-colors"
            >
              mijanrhdev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
