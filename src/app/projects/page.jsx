import prisma from '@/lib/prisma';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import ProjectsClientView from './ProjectsClientView';

export const metadata = {
  title: 'Projects — Mijanur Rahman',
  description: 'Explore full-stack, AI, and web engineering projects created by Mijanur Rahman.',
};

export const revalidate = 60;

export default async function ProjectsPage() {
  let projects = [];

  try {
    projects = await prisma.project.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
  } catch (error) {
    console.error('Error fetching all projects:', error);
  }

  return (
    <div className="bg-[#fbfbfd] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Top Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-12 pb-6 border-b border-neutral-200">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
            // COMPLETE INDEX
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            Selected Works & Systems
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            A comprehensive catalog of full-stack platforms, AI/RAG assistants, and open-source applications built with modern engineering standards.
          </p>
        </div>

        {/* Client-side Search and Filter Container */}
        <ProjectsClientView initialProjects={projects} />
      </div>
    </div>
  );
}

