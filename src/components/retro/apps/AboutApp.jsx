import React from 'react';
import aboutImg from '../../../assets/about.jpeg';
import resumePdf from '../../../assets/Mijanur_Rahman_Resume.pdf';
import { useWindowManager } from '../../../context/WindowManagerContext';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const AboutApp = () => {
  const { openWindow } = useWindowManager();

  return (
    <div className="p-4 md:p-6 bg-white min-h-full flex flex-col justify-between text-gray-900 select-text">
      <div>
        {/* Header section with photo */}
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start pb-5 border-b border-gray-300">
          <div className="win-outset p-1 bg-[#c0c0c0] shrink-0">
            <img
              src={aboutImg}
              alt="Mijanur Rahman"
              className="w-32 h-36 md:w-36 md:h-40 object-cover object-top"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-[#000080]">
              Mijanur Rahman
            </h2>
            <div className="text-sm font-semibold text-gray-700 mt-0.5">
              Full-Stack Developer &amp; CTO @ MAJHI
            </div>
            <div className="text-xs text-gray-600 mt-0.5">
              Industrial Engineering &amp; Management, KUET (Khulna University of Engineering &amp; Technology)
            </div>

            <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="bg-blue-100 text-blue-800 text-[11px] font-medium px-2 py-0.5 border border-blue-300">
                Full-Stack Systems
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-medium px-2 py-0.5 border border-emerald-300">
                AI &amp; RAG Architectures
              </span>
              <span className="bg-purple-100 text-purple-800 text-[11px] font-medium px-2 py-0.5 border border-purple-300">
                Secure Auth &amp; Payments
              </span>
            </div>

            {/* Social link buttons */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <a
                href="https://github.com/mijanur6tr"
                target="_blank"
                rel="noreferrer"
                className="win-btn text-xs py-1 px-2.5"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mijanur-rahman-9508682ba/"
                target="_blank"
                rel="noreferrer"
                className="win-btn text-xs py-1 px-2.5 text-blue-700"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/8801642674330?text=Hi%20Mijanur!%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="win-btn text-xs py-1 px-2.5 text-emerald-700"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#000080] mb-2">
            Professional Summary
          </h3>
          <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
            I am a full-stack web developer focused on building fast, modern, and scalable web applications.
            I enjoy solving real-world problems with clean architecture, secure authentication, and user-friendly interfaces.
            Currently serving as the <strong>Chief Technology Officer (CTO) at MAJHI</strong>, architecting end-to-end river cruise
            booking solutions with automated payment gateways, role-based dashboards, and high-performance serverless backends.
          </p>
        </div>

        {/* Specifications / System Properties table */}
        <div className="mt-4 win-inset p-3 bg-[#fafafa]">
          <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-2">
            Developer Specifications
          </div>
          <table className="w-full text-xs text-gray-800">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-1 font-semibold text-gray-600 w-32">Current Role:</td>
                <td className="py-1">Chief Technology Officer (MAJHI) &amp; Full-Stack Freelance / Contract</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-1 font-semibold text-gray-600">Education:</td>
                <td className="py-1">B.Sc. in Industrial Engineering &amp; Management (KUET, 2023–Present)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-1 font-semibold text-gray-600">Core Stack:</td>
                <td className="py-1">React, Next.js, Node.js, Express, TypeScript, PostgreSQL, MongoDB, Prisma</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-1 font-semibold text-gray-600">Specializations:</td>
                <td className="py-1">RAG Pipelines, AstraDB Vector Search, Clerk/NextAuth, Razorpay, Tailwind CSS</td>
              </tr>
              <tr>
                <td className="py-1 font-semibold text-gray-600">Direct Contact:</td>
                <td className="py-1">mijanrhdev@gmail.com &bull; +8801642674330</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-3 border-t border-gray-300 flex flex-wrap justify-between items-center gap-2">
        <a
          href={resumePdf}
          download="Mijanur_Rahman_Resume.pdf"
          className="win-btn font-semibold text-xs py-1.5 px-3"
        >
          <span>Download Resume (.PDF)</span>
        </a>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => openWindow('projects')}
            className="win-btn text-xs py-1.5 px-3"
          >
            Explore Projects
          </button>
          <button
            type="button"
            onClick={() => openWindow('contact')}
            className="win-btn font-bold text-xs py-1.5 px-3 text-[#000080]"
          >
            Contact Mijanur
          </button>
        </div>
      </div>
    </div>
  );
};
