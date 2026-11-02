import PostForm from '@/components/admin/PostForm';

export default function NewPostPage() {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-neutral-800">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">Create New Article</h1>
        <p className="text-xs text-neutral-400 font-mono mt-1">
          Compose and publish articles with Markdown support and Cloudinary image upload
        </p>
      </div>

      <PostForm />
    </div>
  );
}

