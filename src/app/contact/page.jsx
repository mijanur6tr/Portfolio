import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact — Mijanur Rahman',
  description: 'Get in touch with Mijanur Rahman for software engineering roles, contract projects, and collaborations.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#fbfbfd] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-14 pb-8 border-b border-neutral-200">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
            // COMMUNICATION CHANNELS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 mb-3">
            Initialize Contact
          </h1>
          <p className="text-sm text-neutral-600 max-w-2xl leading-relaxed">
            Interested in hiring me, collaborating on a technical venture, or discussing architecture? Send a direct message or connect via any of the verified channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Status Pill */}
            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <div className="text-xs font-bold text-emerald-900">Current Availability</div>
                <div className="text-[11px] text-emerald-700">Open to select contracts & full-time roles</div>
              </div>
            </div>

            {/* Email Card */}
            <a
              href="mailto:mijanrhdev@gmail.com"
              className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-emerald-500/50 transition-colors flex items-center gap-4 group corner-crosshair block"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Direct Email</div>
                <div className="text-sm font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                  mijanrhdev@gmail.com
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/8801642674330"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-emerald-500/50 transition-colors flex items-center gap-4 group corner-crosshair block"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">WhatsApp Instant</div>
                <div className="text-sm font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                  +880 1642 674330
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+8801642674330"
              className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-emerald-500/50 transition-colors flex items-center gap-4 group corner-crosshair block"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Phone Call</div>
                <div className="text-sm font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                  +880 1642 674330
                </div>
              </div>
            </a>

            {/* Socials Box */}
            <div className="p-5 rounded-xl bg-[#0c0b13] text-white border border-neutral-800 space-y-3">
              <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                VERIFIED PROFILES
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/mijanur-rahman-9508682ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 border border-neutral-800 transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/mijanur6tr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 border border-neutral-800 transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5 text-neutral-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs corner-crosshair">
              <h2 className="text-xl font-bold text-neutral-900 mb-1 tracking-tight">
                Send a Structured Transmission
              </h2>
              <p className="text-xs text-neutral-500 mb-6 font-mono">
                Stored in Neon PostgreSQL database. Typically answered within 12 hours.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
