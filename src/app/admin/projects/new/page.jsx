import ProjectForm from '@/components/admin/ProjectForm';

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-neutral-800">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">Add New Project</h1>
        <p className="text-xs text-neutral-400 font-mono mt-1">
          Publish a new project with Cloudinary cover graphic, repository link, and architecture breakdown
        </p>
      </div>

      <ProjectForm />
    </div>
  );
}

