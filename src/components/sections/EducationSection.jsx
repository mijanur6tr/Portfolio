import React from 'react';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';

export const EducationSection = () => {
  const educationTimeline = [
    {
      period: '2023 — Present',
      degree: 'Bachelor of Science in Engineering',
      institution: 'Khulna University of Engineering and Technology (KUET)',
      department: 'Department of Industrial Engineering and Management (IEM)',
      detail: 'Focus on systems engineering, software development, data analysis, and optimization workflows.',
    },
    {
      period: '2021 — 2023',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Meherpur Govt. College',
      department: 'Science Division • Result: GPA 5.00 / 5.00',
      detail: 'Advanced Mathematics, Physics, Chemistry, and Information Technology.',
    },
    {
      period: 'Batch 2021',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Meherpur Govt. High School',
      department: 'Science Division • Result: GPA 5.00 / 5.00',
      detail: 'Foundational STEM coursework and academic excellence recognition.',
    },
  ];

  const leadershipRoles = [
    {
      role: 'Junior Executive — Web & Events',
      org: 'Spectrum — Professional Skill Development Club, KUET',
      period: 'Oct 2025 — Present',
      description: 'Orchestrated flagship case competitions, technical workshops, and developed the official club web platform (Next.js/React/MongoDB).',
    },
    {
      role: 'Junior Executive — Tech Operations',
      org: 'HACK — KUET Technology & Programming Club',
      period: 'Oct 2025 — Present',
      description: 'Coordinated hackathons, technical problem-solving sessions, and collaborative developer initiatives on campus.',
    },
  ];

  return (
    <section className="bg-[#fbfbfd] py-10 sm:py-16 md:py-20 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10 md:mb-14 pb-4 sm:pb-6 border-b border-neutral-200">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
            // 04. ACADEMICS & LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            Education & Co-Curricular Initiatives
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-neutral-900">
                Academic Background
              </h3>
            </div>

            <div className="space-y-6">
              {educationTimeline.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-400 transition-colors corner-crosshair"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900">{item.degree}</h4>
                  <p className="text-xs font-medium text-neutral-700 mt-1">{item.institution}</p>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">{item.department}</p>
                  <p className="text-xs text-neutral-600 mt-3 pt-3 border-t border-neutral-100 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Co-Curricular & Club Leadership */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-emerald-600" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-neutral-900">
                Campus Leadership & Organizations
              </h3>
            </div>

            <div className="space-y-6">
              {leadershipRoles.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-400 transition-colors corner-crosshair"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900">{item.role}</h4>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">{item.org}</p>
                  <p className="text-xs text-neutral-600 mt-3 pt-3 border-t border-neutral-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

              {/* Extra Accomplishment Pill Card */}
              <div className="p-6 rounded-xl bg-[#0c0b13] text-white border border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-mono uppercase text-emerald-400 font-bold">
                      Open to Collaborative Projects
                    </h5>
                    <p className="text-xs text-neutral-400 mt-1">
                      Always eager to partner with startup founders, research groups, and engineering peers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

