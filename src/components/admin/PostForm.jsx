'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Save, ArrowLeft, Loader2, AlertCircle, Eye, Edit3 } from 'lucide-react';
import CloudinaryUploader from './CloudinaryUploader';

export default function PostForm({ initialData = null, isEditing = false }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    coverImage: initialData?.coverImage || '',
    category: initialData?.category || 'Engineering',
    tags: Array.isArray(initialData?.tags) ? initialData.tags.join(', ') : '',
    readTime: initialData?.readTime || '4 min read',
    published: initialData?.published ?? true,
    featured: initialData?.featured ?? false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  // Auto-generate slug when title changes (if new post)
  const handleTitleChange = (e) => {
    const title = e.target.value;
    if (!isEditing && !formData.slug) {
      const autoSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData({ ...formData, title, slug: autoSlug });
    } else {
      setFormData({ ...formData, title });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const url = isEditing ? `/api/posts/${initialData.id}` : '/api/posts';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/admin/posts');
        router.refresh();
      } else {
        setError(data.error || 'Failed to save post.');
      }
    } catch (err) {
      setError('Communication error with server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <Link
          href="/admin/posts"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Posts</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="px-3 py-1.5 rounded-lg bg-neutral-800 text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            {previewMode ? <Edit3 className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{previewMode ? 'Editor View' : 'Preview Markdown'}</span>
          </button>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0df69e] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all disabled:opacity-50 cursor-pointer shadow-md"
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
            <span>{isEditing ? 'Update Post' : 'Publish Post'}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Title & Slug */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Post Title *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="e.g. Building High-Performance Microservices"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            URL Slug *
          </label>
          <input
            type="text"
            required
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            placeholder="building-high-performance-microservices"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs font-mono focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Cloudinary Image Uploader */}
      <CloudinaryUploader
        label="Cover Image (Cloudinary CDN)"
        value={formData.coverImage}
        onChange={(url) => setFormData({ ...formData, coverImage: url })}
      />

      {/* Excerpt */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
          Short Summary / Excerpt *
        </label>
        <textarea
          required
          rows={2}
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          placeholder="Brief 1-2 sentence overview for cards and meta descriptions..."
          className="w-full px-3.5 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
        />
      </div>

      {/* Content Editor / Preview */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
          Content (Markdown Supported) *
        </label>
        {previewMode ? (
          <div className="p-6 rounded-xl bg-[#141322] border border-neutral-700 min-h-[300px] text-xs text-neutral-200 leading-relaxed whitespace-pre-wrap font-sans">
            {formData.content}
          </div>
        ) : (
          <textarea
            required
            rows={14}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Write your article in Markdown. Use ### for subheadings, - for lists, etc."
            className="w-full px-3.5 py-3 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs font-mono focus:outline-none focus:border-emerald-400 resize-y leading-relaxed"
          />
        )}
      </div>

      {/* Metadata: Category, Tags, Read Time */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Category
          </label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            placeholder="Engineering"
            className="w-full px-3 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="Next.js, Architecture, Neon"
            className="w-full px-3 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Read Time
          </label>
          <input
            type="text"
            value={formData.readTime}
            onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
            placeholder="5 min read"
            className="w-full px-3 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Checkboxes */}
      <div className="flex items-center gap-6 pt-2">
        <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300 font-mono">
          <input
            type="checkbox"
            checked={formData.published}
            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
            className="w-4 h-4 rounded text-emerald-500 focus:ring-0 bg-neutral-800 border-neutral-600 cursor-pointer"
          />
          <span>Published (Visible publicly)</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300 font-mono">
          <input
            type="checkbox"
            checked={formData.featured}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="w-4 h-4 rounded text-emerald-500 focus:ring-0 bg-neutral-800 border-neutral-600 cursor-pointer"
          />
          <span>Featured on Home Page</span>
        </label>
      </div>
    </form>
  );
}

