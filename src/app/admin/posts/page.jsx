import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Edit3, Trash2, ExternalLink, Clock, Tag } from 'lucide-react';
import DeletePostButton from './DeletePostButton';

export const revalidate = 0;

export default async function AdminPostsPage() {
  let posts = [];

  try {
    posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Error fetching admin posts:', error);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Blog Post Management
          </h1>
          <p className="text-xs text-neutral-400 font-mono mt-1">
            Author, edit, or archive technical articles and development notes
          </p>
        </div>

        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0df69e] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Article</span>
        </Link>
      </div>

      {/* Posts Table */}
      {posts.length === 0 ? (
        <div className="p-12 text-center bg-[#131221] rounded-xl border border-neutral-800 text-neutral-500 font-mono text-xs">
          No articles created yet. Click "New Article" to write your first post.
        </div>
      ) : (
        <div className="bg-[#11101e] rounded-xl border border-neutral-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#181628] text-neutral-400 font-mono uppercase text-[10px] tracking-wider border-b border-neutral-800">
                <tr>
                  <th className="px-6 py-3.5">Title & Category</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Date</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/70">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-[#161427]/60 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-white text-sm line-clamp-1">
                        {post.title}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5 flex items-center gap-2">
                        <span className="text-emerald-400">/{post.slug}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {post.published ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                          Published
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 text-[10px] font-mono">
                          Draft
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 font-mono text-neutral-400 text-[11px]">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.slug || post.id}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                          title="View Live"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/admin/posts/${post.id}`}
                          className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-emerald-400 transition-colors"
                          title="Edit Post"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </Link>
                        <DeletePostButton id={post.id} title={post.title} />
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

