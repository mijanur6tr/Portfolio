'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Save, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import CloudinaryUploader from './CloudinaryUploader';

export default function ProjectForm({ initialData = null, isEditing = false }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    cardDescription: initialData?.cardDescription || '',
    description: initialData?.description || '',
    image: initialData?.image || '',
    previewLink: initialData?.previewLink || '',
    githubLink: initialData?.githubLink || '',
    category: initialData?.category || 'Full-Stack Web',
    technologies: Array.isArray(initialData?.technologies)
      ? initialData.technologies.join(', ')
      : '',
    problems: Array.isArray(initialData?.problems)
      ? initialData.problems.join('\n')
      : '',
    featured: initialData?.featured ?? true,
    order: initialData?.order ?? 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      const url = isEditing ? `/api/projects/${initialData.id}` : '/api/projects';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/admin/projects');
        router.refresh();
      } else {
        setError(data.error || 'Failed to save project.');
      }
    } catch (err) {
      setError('Network communication error with server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <Link
          href="/admin/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0df69e] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all disabled:opacity-50 cursor-pointer shadow-md"
        >
          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
          <span>{isEditing ? 'Update Project' : 'Save Project'}</span>
        </button>
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
            Project Title *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="e.g. Clubby AI"
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
            placeholder="clubby-ai"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs font-mono focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Cloudinary Screenshot Uploader */}
      <CloudinaryUploader
        label="Project Screenshot / Preview (Cloudinary CDN)"
        value={formData.image}
        onChange={(url) => setFormData({ ...formData, image: url })}
      />

      {/* Card Short Description */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
          Card Short Summary (1-2 sentences) *
        </label>
        <textarea
          required
          rows={2}
          value={formData.cardDescription}
          onChange={(e) => setFormData({ ...formData, cardDescription: e.target.value })}
          placeholder="Concise description displayed on project cards..."
          className="w-full px-3.5 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
        />
      </div>

      {/* Full Description */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
          Full Architectural Description *
        </label>
        <textarea
          required
          rows={6}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Comprehensive breakdown of architecture, stack, features, and target users..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400 resize-y leading-relaxed"
        />
      </div>

      {/* Links: Live & GitHub */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Live Preview URL
          </label>
          <input
            type="url"
            value={formData.previewLink}
            onChange={(e) => setFormData({ ...formData, previewLink: e.target.value })}
            placeholder="https://myproject.vercel.app/"
            className="w-full px-3 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            GitHub Repository URL
          </label>
          <input
            type="url"
            value={formData.githubLink}
            onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
            placeholder="https://github.com/mijanur6tr/my-repo"
            className="w-full px-3 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Category & Order */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          >
            <option value="Full-Stack Web">Full-Stack Web</option>
            <option value="AI & RAG">AI & RAG</option>
            <option value="Platforms & Tools">Platforms & Tools</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Sort Order (Lower appears first)
          </label>
          <input
            type="number"
            value={formData.order}
            onChange={(e) => setFormData({ ...formData, order: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Technologies */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
          Technologies (comma-separated)
        </label>
        <input
          type="text"
          value={formData.technologies}
          onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
          placeholder="Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS"
          className="w-full px-3.5 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400"
        />
      </div>

      {/* Problems Solved */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
          Key Challenges Solved (one per line)
        </label>
        <textarea
          rows={3}
          value={formData.problems}
          onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
          placeholder="Handling multi-step AI workflow with Clerk authentication&#10;Fixing serverless lambda compatibility issues..."
          className="w-full px-3.5 py-2 rounded-lg bg-[#141322] border border-neutral-700 text-white text-xs focus:outline-none focus:border-emerald-400 font-mono leading-relaxed"
        />
      </div>

      {/* Featured checkbox */}
      <div className="pt-2">
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

