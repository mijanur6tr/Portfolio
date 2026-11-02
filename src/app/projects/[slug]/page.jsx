import prisma from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await prisma.project.findFirst({
    where: {
      OR: [
        { slug: slug },
        ...(isNaN(parseInt(slug, 10)) ? [] : [{ id: parseInt(slug, 10) }]),
      ],
    },
  });

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Mijanur Rahman`,
    description: project.cardDescription || project.description.slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = await prisma.project.findFirst({
    where: {
      OR: [
        { slug: slug },
        ...(isNaN(parseInt(slug, 10)) ? [] : [{ id: parseInt(slug, 10) }]),
      ],
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#fbfbfd] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Title Header */}
        <div className="mb-8 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-xs font-mono uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4">
            {project.title}
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            {project.cardDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            {project.previewLink && (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0df69e] text-neutral-950 font-semibold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all shadow-sm"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0c0b13] text-white font-semibold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all border border-neutral-800"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Image preview */}
        {project.image && (
          <div className="mb-12 rounded-xl overflow-hidden border border-neutral-200 shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Deep Dive Description */}
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-white border border-neutral-200 corner-crosshair">
            <h2 className="text-lg font-bold text-neutral-900 mb-4 font-mono uppercase tracking-wider">
              // System Overview & Purpose
            </h2>
            <div className="prose prose-neutral max-w-none text-sm text-neutral-700 leading-relaxed space-y-4">
              <p>{project.description}</p>
            </div>
          </div>

          {/* Solved Problems */}
          {project.problems && project.problems.length > 0 && (
            <div className="p-8 rounded-xl bg-white border border-neutral-200 corner-crosshair">
              <h2 className="text-lg font-bold text-neutral-900 mb-4 font-mono uppercase tracking-wider">
                // Engineering Challenges Overcome
              </h2>
              <ul className="space-y-3">
                {project.problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="p-8 rounded-xl bg-[#0c0b13] text-white border border-neutral-800">
            <h2 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-4">
              // Technologies & Libraries Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {(project.technologies || []).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-[#171626] border border-neutral-700 text-xs font-mono text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
