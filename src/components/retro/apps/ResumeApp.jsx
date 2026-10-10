import React, { useState } from 'react';
import resumePdf from '../../../assets/Mijanur_Rahman_Resume.pdf';
import { ResumePdfIcon } from '../RetroIcons';
import { FaDownload, FaExternalLinkAlt, FaFilePdf, FaEye } from 'react-icons/fa';

export const ResumeApp = () => {
  const [viewMode, setViewMode] = useState('embed'); // 'embed' | 'summary'

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] text-[#000000] select-text">
      {/* Viewer Toolbar */}
      <div className="bg-[#c0c0c0] px-3 py-1.5 border-b border-gray-400 flex flex-wrap items-center justify-between gap-2 select-none text-xs">
        <div className="flex items-center gap-2">
          <ResumePdfIcon className="w-5 h-5 shrink-0" />
          <span className="font-bold text-gray-800 text-xs">
            Mijanur_Rahman_Resume.pdf
          </span>
          <span className="text-[11px] text-gray-600 bg-gray-100 px-1.5 py-0.2 border border-gray-400">
            198 KB
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle view mode */}
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'embed' ? 'summary' : 'embed')}
            className="win-btn text-xs py-1 px-2.5 flex items-center gap-1.5"
          >
            <FaEye className="w-3 h-3" />
            <span>{viewMode === 'embed' ? 'Text Summary' : 'PDF Preview'}</span>
          </button>

          {/* Open in new tab */}
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="win-btn text-xs py-1 px-2.5 flex items-center gap-1.5"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            <span>Open in Tab</span>
          </a>

          {/* Download button */}
          <a
            href={resumePdf}
            download="Mijanur_Rahman_Resume.pdf"
            className="win-btn font-bold text-xs py-1 px-3 flex items-center gap-1.5 text-emerald-800 bg-emerald-50"
          >
            <FaDownload className="w-3 h-3 text-emerald-700" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 bg-white p-2">
        {viewMode === 'embed' ? (
          <div className="h-full w-full win-inset flex flex-col bg-gray-100 relative">
            <iframe
              src={`${resumePdf}#toolbar=1&navpanes=0`}
              title="Mijanur Rahman Resume PDF"
              className="w-full h-full border-none"
            />
            {/* Fallback floating button for mobile screens where PDF iframe may not auto-render */}
            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 win-outset p-2 bg-[#c0c0c0] shadow-lg flex gap-2">
              <a
                href={resumePdf}
                download="Mijanur_Rahman_Resume.pdf"
                className="win-btn text-xs font-bold"
              >
                Download PDF File
              </a>
            </div>
          </div>
        ) : (
          <div className="h-full w-full win-inset bg-white p-4 md:p-6 overflow-y-auto text-xs text-gray-800 leading-relaxed font-sans">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="border-b border-gray-300 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#000080]">
                    Mijanur Rahman
                  </h3>
                  <div className="text-xs text-gray-600">
                    Full-Stack Developer &bull; mijanrhdev@gmail.com &bull; +8801642674330
                  </div>
                </div>
                <a
                  href={resumePdf}
                  download="Mijanur_Rahman_Resume.pdf"
                  className="win-btn text-xs py-1 px-3 font-semibold"
                >
                  Download .PDF
                </a>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">
                  Professional Experience
                </h4>
                <div className="mb-2">
                  <div className="font-semibold text-gray-800">
                    Chief Technology Officer — MAJHI (Jan 2026 – Present)
                  </div>
                  <p className="text-gray-600">
                    Architected full-stack river cruise booking platform, role-based dashboards, authentication, and secure transaction handling.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Full Stack Developer Intern — Yolast (May 2025 – July 2025)
                  </div>
                  <p className="text-gray-600">
                    End-to-end authentication, multi-level RBAC, Google OAuth, OTP reset, Razorpay payment gateway integration.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">
                  Key Projects
                </h4>
                <p className="text-gray-600">
                  <strong>Clubby AI:</strong> End-to-end AI content and visual assistant (React, Tailwind, Clerk, AI APIs).<br />
                  <strong>Agro Bot:</strong> Agriculture AI assistant using RAG pipeline, AstraDB Vector Database, and Gemini LLM.<br />
                  <strong>Shuto-Shoilo:</strong> Full-stack MERN eCommerce application with JWT auth &amp; dynamic cart.<br />
                  <strong>Job Hunt:</strong> Dynamic recruitment portal with Next.js SSR, Prisma ORM, and PostgreSQL.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">
                  Education
                </h4>
                <p className="text-gray-600">
                  <strong>B.Sc. in Engineering:</strong> Khulna University of Engineering and Technology (KUET), 2023–Present.<br />
                  <strong>HSC:</strong> Meherpur Govt. College (GPA 5.00/5.00).<br />
                  <strong>SSC:</strong> Meherpur Govt. High School (GPA 5.00/5.00).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="bg-[#c0c0c0] px-2 py-0.5 border-t border-gray-400 flex items-center justify-between text-[11px] text-gray-700 select-none">
        <div>Acrobat Document Reader &bull; Page 1 of 1</div>
        <div className="font-mono text-gray-500">Document Security: Clean</div>
      </div>
    </div>
  );
};
