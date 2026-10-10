import React, { useState } from 'react';
import spectrumLogo from '../../../assets/spectrum.png';
import hackLogo from '../../../assets/hack.png';
import { useWindowManager } from '../../../context/WindowManagerContext';
import { FaBriefcase, FaGraduationCap, FaUsers, FaPrint } from 'react-icons/fa';

export const ExperienceApp = () => {
  const { openWindow } = useWindowManager();
  const [activeSection, setActiveSection] = useState('all');

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] text-[#000000] select-text">
      {/* WordPad Menu Bar */}
      <div className="bg-[#c0c0c0] px-2 py-0.5 border-b border-gray-400 flex items-center gap-4 text-[11px] text-gray-800 select-none">
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>F</u>ile</span>
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>E</u>dit</span>
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>V</u>iew</span>
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>I</u>nsert</span>
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default">F<u>o</u>rmat</span>
      </div>

      {/* WordPad Style Toolbar */}
      <div className="bg-[#c0c0c0] px-2 py-1 border-b border-gray-400 flex flex-wrap items-center justify-between gap-2 select-none text-xs">
        <div className="flex items-center gap-1">
          <div className="win-inset bg-white px-2 py-0.5 text-[11px] font-serif text-gray-700">
            Times New Roman
          </div>
          <div className="win-inset bg-white px-1.5 py-0.5 text-[11px] font-sans text-gray-700">
            11
          </div>
          <div className="h-4 w-[1px] bg-gray-400 mx-1" />
          <button type="button" className="win-btn font-bold px-2 py-0.5 text-[11px]">B</button>
          <button type="button" className="win-btn italic px-2 py-0.5 text-[11px]">I</button>
          <button type="button" className="win-btn underline px-2 py-0.5 text-[11px]">U</button>
        </div>

        {/* Section Filters */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveSection('all')}
            className={`win-btn text-[11px] py-0.5 px-2 ${activeSection === 'all' ? 'is-active' : ''}`}
          >
            All Document
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('work')}
            className={`win-btn text-[11px] py-0.5 px-2 ${activeSection === 'work' ? 'is-active' : ''}`}
          >
            Work Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('activities')}
            className={`win-btn text-[11px] py-0.5 px-2 ${activeSection === 'activities' ? 'is-active' : ''}`}
          >
            Co-Curricular
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('education')}
            className={`win-btn text-[11px] py-0.5 px-2 ${activeSection === 'education' ? 'is-active' : ''}`}
          >
            Education
          </button>
        </div>
      </div>

      {/* Document Viewport */}
      <div className="flex-1 win-inset bg-white p-4 md:p-8 overflow-y-auto min-h-0 text-gray-900 font-sans">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Document Header */}
          <div className="border-b-2 border-black pb-4 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-black">
              Mijanur Rahman
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Curriculum Vitae &bull; Professional Engineering &amp; Academic Timeline
            </p>
          </div>

          {/* 1. WORK EXPERIENCE */}
          {(activeSection === 'all' || activeSection === 'work') && (
            <div>
              <div className="flex items-center gap-2 border-b-2 border-[#000080] pb-1 mb-4">
                <FaBriefcase className="text-[#000080]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#000080]">
                  Professional Work Experience
                </h3>
              </div>

              <div className="space-y-6">
                {/* MAJHI */}
                <div className="relative pl-4 border-l-2 border-orange-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-base font-bold text-gray-900">
                      Chief Technology Officer (CTO) — MAJHI
                    </h4>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 border border-gray-300 w-fit sm:w-auto mt-1 sm:mt-0">
                      Jan 2026 – Present
                    </span>
                  </div>
                  <div className="text-xs font-medium text-gray-700 mt-0.5">
                    River Cruise &amp; Tourism Booking Platform
                  </div>

                  <ul className="mt-2.5 space-y-1.5 text-xs text-gray-800 list-disc list-inside leading-relaxed">
                    <li>Defined the technical roadmap and led core product development from inception.</li>
                    <li>Architected and built the full-stack river cruise booking platform.</li>
                    <li>Implemented authentication, trip booking, seat selection, and payment systems.</li>
                    <li>Developed role-based dashboards and optimized backend and database performance.</li>
                  </ul>
                </div>

                {/* Yolast */}
                <div className="relative pl-4 border-l-2 border-blue-600">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-base font-bold text-gray-900">
                      Full Stack Developer Intern — Yolast
                    </h4>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 border border-gray-300 w-fit sm:w-auto mt-1 sm:mt-0">
                      May 2025 – July 2025
                    </span>
                  </div>
                  <div className="text-xs font-medium text-gray-700 mt-0.5">
                    Production Full-Stack Internship
                  </div>

                  <ul className="mt-2.5 space-y-1.5 text-xs text-gray-800 list-disc list-inside leading-relaxed">
                    <li>Designed and implemented end-to-end authentication systems for production-ready flows.</li>
                    <li>Built role-based authorization for multiple user types (users, affiliates, service providers, multi-level admins).</li>
                    <li>Developed secure flows including custom registration, Google OAuth, OTP-based reset password, and user data persistence.</li>
                    <li>Integrated Razorpay Payment Gateway to handle transactions, subscription logic, and order validations.</li>
                    <li>Managed and debugged complex application structures.</li>
                  </ul>
                  <div className="mt-2 p-2 bg-[#f0f9ff] border border-blue-200 text-[11px] text-blue-900">
                    <strong>Key Impact:</strong> Strengthened auth security, streamlined user onboarding, and ensured secure payment handling.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. CO-CURRICULAR ACTIVITIES */}
          {(activeSection === 'all' || activeSection === 'activities') && (
            <div>
              <div className="flex items-center gap-2 border-b-2 border-[#000080] pb-1 mb-4">
                <FaUsers className="text-[#000080]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#000080]">
                  Leadership &amp; Co-Curricular Activities
                </h3>
              </div>

              <div className="space-y-4">
                {/* Spectrum */}
                <div className="flex flex-col sm:flex-row gap-4 items-start p-3 win-inset bg-[#fafafa]">
                  <div className="w-20 sm:w-24 shrink-0 win-outset p-1 bg-white">
                    <img src={spectrumLogo} alt="Spectrum Club" className="w-full h-auto" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-bold text-gray-900 text-sm">
                        Junior Executive — Spectrum KUET
                      </h4>
                      <span className="text-[11px] text-gray-500 font-medium">
                        Oct 2025 – Present
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5">
                      Professional Skill Development Club at KUET
                    </div>
                    <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                      Handled case competitions, organized skill-related university events, and managed web development and digital interfaces for official initiatives.
                    </p>
                  </div>
                </div>

                {/* HACK */}
                <div className="flex flex-col sm:flex-row gap-4 items-start p-3 win-inset bg-[#fafafa]">
                  <div className="w-20 sm:w-24 shrink-0 win-outset p-1 bg-white">
                    <img src={hackLogo} alt="HACK Club" className="w-full h-auto" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-bold text-gray-900 text-sm">
                        Junior Executive — HACK KUET
                      </h4>
                      <span className="text-[11px] text-gray-500 font-medium">
                        Oct 2025 – Present
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5">
                      Hardware Acceleration Club at KUET
                    </div>
                    <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                      Worked on Arduino implementations, robotics and hardware competitions, and supported project-related technical activities across departments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. EDUCATION */}
          {(activeSection === 'all' || activeSection === 'education') && (
            <div>
              <div className="flex items-center gap-2 border-b-2 border-[#000080] pb-1 mb-4">
                <FaGraduationCap className="text-[#000080]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#000080]">
                  Academic Background
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-3 border-l-2 border-amber-600 bg-[#fffdf5]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Bachelor of Science in Engineering (B.Sc. Engg.)
                    </h4>
                    <span className="text-[11px] text-gray-600 font-semibold">
                      2023 – Present
                    </span>
                  </div>
                  <div className="text-xs text-gray-800 mt-0.5">
                    Department of Industrial Engineering and Management
                  </div>
                  <div className="text-xs font-semibold text-gray-600">
                    Khulna University of Engineering and Technology (KUET)
                  </div>
                </div>

                <div className="p-3 border-l-2 border-amber-600 bg-[#fffdf5]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Higher Secondary Certificate (HSC)
                    </h4>
                    <span className="text-[11px] text-gray-600 font-semibold">
                      2021 – 2023
                    </span>
                  </div>
                  <div className="text-xs text-gray-800 mt-0.5">
                    Meherpur Govt. College &bull; Science Group
                  </div>
                  <div className="text-xs font-bold text-emerald-700 mt-0.5">
                    Result: GPA 5.00 / 5.00
                  </div>
                </div>

                <div className="p-3 border-l-2 border-amber-600 bg-[#fffdf5]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Secondary School Certificate (SSC)
                    </h4>
                    <span className="text-[11px] text-gray-600 font-semibold">
                      Batch 2021
                    </span>
                  </div>
                  <div className="text-xs text-gray-800 mt-0.5">
                    Meherpur Govt. High School &bull; Science Group
                  </div>
                  <div className="text-xs font-bold text-emerald-700 mt-0.5">
                    Result: GPA 5.00 / 5.00
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick link button to view official resume */}
          <div className="pt-4 border-t border-gray-300 flex justify-end">
            <button
              type="button"
              onClick={() => openWindow('resume')}
              className="win-btn text-xs py-1.5 px-3 font-semibold text-[#000080]"
            >
              Open Official Resume File (.pdf) →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-[#c0c0c0] px-2 py-0.5 border-t border-gray-400 flex items-center justify-between text-[11px] text-gray-700 select-none">
        <div>Doc 1, Sec 1 &bull; 1/1 at 1.2" Ln 1 Col 1</div>
        <div className="font-mono text-gray-500">100% Zoom</div>
      </div>
    </div>
  );
};
