import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowUpRight, Clock, Tag } from 'lucide-react';

export const BlogPreviewSection = ({ initialPosts = [] }) => {
  return (
    <section className="bg-[#0c0b13] bg-grid-dark-pattern text-white py-10 sm:py-16 md:py-20 lg:py-24 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-12 pb-4 sm:pb-6 border-b border-neutral-800 gap-4 sm:gap-6">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              // 05. TECHNICAL WRITING & ARCHITECTURE NOTES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Recent Engineering Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            <span>Read All Articles</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialPosts.slice(0, 3).map((post) => (
            <article
              key={post.id || post.slug}
              className="p-6 rounded-xl bg-[#13121f] border border-white/10 hover:border-emerald-500/40 transition-colors flex flex-col justify-between group corner-crosshair"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-3">
                  <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-emerald-400">
                    {post.category || 'Engineering'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-neutral-500" />
                    {post.readTime || '4 min read'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight line-clamp-2 mb-3">
                  <Link href={`/blog/${post.slug || post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80 mb-4">
                  {(post.tags || []).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1a192a] text-neutral-300 border border-neutral-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug || post.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;

