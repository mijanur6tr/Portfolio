import prisma from '@/lib/prisma';
import Link from 'next/link';
import { ArrowLeft, Clock, ArrowUpRight, Tag, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Blog & Technical Articles — Mijanur Rahman',
  description: 'In-depth engineering notes on Next.js, authentication architecture, RAG pipelines, and full-stack development.',
};

export const revalidate = 60;

export default async function BlogIndexPage() {
  let posts = [];

  try {
    posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  return (
    <div className="bg-[#fbfbfd] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-14 pb-8 border-b border-neutral-200">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
            // ENGINEERING DISPATCHES
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 mb-3">
            Articles & Technical Insights
          </h1>
          <p className="text-sm text-neutral-600 max-w-2xl leading-relaxed">
            Case studies, architectural trade-offs, and lessons learned from deploying full-stack web applications and AI systems in production.
          </p>
        </div>

        {/* Posts Feed */}
        {posts.length === 0 ? (
          <div className="py-20 text-center font-mono text-neutral-500 text-xs">
            No published articles found yet. Check back soon!
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id || post.slug}
                className="group p-8 rounded-xl bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300 corner-crosshair"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-neutral-500 mb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-800 font-semibold">
                      {post.category || 'Engineering'}
                    </span>
                    <span>•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{post.readTime || '4 min read'}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors tracking-tight mb-3">
                  <Link href={`/blog/${post.slug || post.id}`}>{post.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1.5">
                    {(post.tags || []).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug || post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 group-hover:text-emerald-700 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

