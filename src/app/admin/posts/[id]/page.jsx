import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import PostForm from '@/components/admin/PostForm';

export const revalidate = 0;

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const postId = parseInt(id, 10);

  if (isNaN(postId)) {
    notFound();
  }

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-neutral-800">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">Edit Article</h1>
        <p className="text-xs text-neutral-400 font-mono mt-1">
          Modify content, slug, tags, or Cloudinary cover image for "{post.title}"
        </p>
      </div>

      <PostForm initialData={post} isEditing />
    </div>
  );
}

