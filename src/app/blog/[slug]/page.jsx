import prisma from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Share2, Tag, BookOpen, ArrowUpRight } from 'lucide-react';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await prisma.post.findFirst({
    where: {
      OR: [
        { slug: slug },
        ...(isNaN(parseInt(slug, 10)) ? [] : [{ id: parseInt(slug, 10) }]),
      ],
    },
  });

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} — Mijanur Rahman`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = await prisma.post.findFirst({
    where: {
      OR: [
        { slug: slug },
        ...(isNaN(parseInt(slug, 10)) ? [] : [{ id: parseInt(slug, 10) }]),
      ],
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#fbfbfd] min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Post Meta Header */}
        <header className="mb-10 pb-8 border-b border-neutral-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-xs font-mono uppercase tracking-wider">
              {post.category || 'Engineering'}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime || '4 min read'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-base text-neutral-600 leading-relaxed font-normal italic border-l-2 border-emerald-500 pl-4 py-1">
            {post.excerpt}
          </p>

          {/* Author Badge */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0c0b13] flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                MR
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-900">Mijanur Rahman</div>
                <div className="text-[11px] font-mono text-neutral-500">Full-Stack Engineer & AI Builder</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {(post.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Post Cover Image if present */}
        {post.coverImage && (
          <div className="mb-10 rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
            <img src={post.coverImage} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Content Body */}
        <div className="prose prose-neutral max-w-none text-neutral-800 text-sm sm:text-base leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-bold text-neutral-950 mt-8 mb-3 tracking-tight font-mono">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-neutral-950 mt-10 mb-4 tracking-tight">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="list-disc pl-5 space-y-1.5 text-neutral-700 text-sm">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-neutral-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="text-xs font-mono text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            &larr; Back to all articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#0df69e] text-neutral-950 hover:bg-[#00e58d] transition-all"
          >
            <span>Discuss this article with Mijanur</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </footer>
      </div>
    </article>
  );
}

