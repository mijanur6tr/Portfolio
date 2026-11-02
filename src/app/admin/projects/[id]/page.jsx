import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import ProjectForm from '@/components/admin/ProjectForm';

export const revalidate = 0;

export default async function EditProjectPage({ params }) {
  const { id } = await params;
  const projectId = parseInt(id, 10);

  if (isNaN(projectId)) {
    notFound();
  }

  const project = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-neutral-800">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">Edit Project</h1>
        <p className="text-xs text-neutral-400 font-mono mt-1">
          Update details, links, or Cloudinary cover graphic for "{project.title}"
        </p>
      </div>

      <ProjectForm initialData={project} isEditing />
    </div>
  );
}

