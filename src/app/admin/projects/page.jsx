import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Edit3, ExternalLink, FolderGit2 } from 'lucide-react';
import DeleteProjectButton from './DeleteProjectButton';
import ReorderProjectButtons from './ReorderProjectButtons';

export const revalidate = 0;

export default async function AdminProjectsPage() {
  let projects = [];

  try {
    projects = await prisma.project.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
  } catch (error) {
    console.error('Error fetching admin projects:', error);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Project Showcase Management
          </h1>
          <p className="text-xs text-neutral-400 font-mono mt-1">
            Maintain project portfolio entries, live demo links, repository URLs, and Cloudinary graphics
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0df69e] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </Link>
      </div>

      {/* Projects Table */}
      {projects.length === 0 ? (
        <div className="p-12 text-center bg-[#131221] rounded-xl border border-neutral-800 text-neutral-500 font-mono text-xs">
          No projects found in database.
        </div>
      ) : (
        <div className="bg-[#11101e] rounded-xl border border-neutral-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#181628] text-neutral-400 font-mono uppercase text-[10px] tracking-wider border-b border-neutral-800">
                <tr>
                  <th className="px-6 py-3.5">Project & Category</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Order</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/70">
                {projects.map((proj) => (
                  <tr key={proj.id} className="hover:bg-[#161427]/60 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-white text-sm line-clamp-1">
                        {proj.title}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5 flex items-center gap-2">
                        <span className="text-emerald-400">/{proj.slug}</span>
                        <span>•</span>
                        <span>{proj.category}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {proj.featured ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                          Featured
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 text-[10px] font-mono">
                          Standard
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4">
                      <ReorderProjectButtons id={proj.id} currentOrder={proj.order} />
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {proj.previewLink && (
                          <a
                            href={proj.previewLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <Link
                          href={`/admin/projects/${proj.id}`}
                          className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-emerald-400 transition-colors"
                          title="Edit Project"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </Link>
                        <DeleteProjectButton id={proj.id} title={proj.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
