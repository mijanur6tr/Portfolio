import prisma from '@/lib/prisma';
import Link from 'next/link';
import {
  FolderGit2,
  FileText,
  Mail,
  Plus,
  ArrowUpRight,
  Database,
  Cloud,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export const revalidate = 0; // Dynamic

export default async function AdminDashboardPage() {
  let projectCount = 0;
  let postCount = 0;
  let messageCount = 0;
  let recentMessages = [];

  try {
    projectCount = await prisma.project.count();
    postCount = await prisma.post.count();
    messageCount = await prisma.contactMessage.count();
    recentMessages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    });
  } catch (error) {
    console.error('Dashboard count error:', error);
  }

  const isCloudinaryConfigured = Boolean(
    process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET
  );

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs text-neutral-400 font-mono mt-1">
            System status, content management, and real-time database state
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0df69e] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Blog Post</span>
          </Link>
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#191729] text-white border border-neutral-700 font-bold text-xs uppercase tracking-wider hover:bg-[#23203a] transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Project</span>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-[#11101d] border border-white/10 corner-crosshair">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Total Projects
            </span>
            <div className="p-2 rounded-lg bg-neutral-900 text-emerald-400">
              <FolderGit2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-mono font-bold text-white">{projectCount}</div>
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-mono mt-4"
          >
            <span>Manage Projects</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="p-6 rounded-xl bg-[#11101d] border border-white/10 corner-crosshair">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Blog Articles
            </span>
            <div className="p-2 rounded-lg bg-neutral-900 text-emerald-400">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-mono font-bold text-white">{postCount}</div>
          <Link
            href="/admin/posts"
            className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-mono mt-4"
          >
            <span>Manage Posts</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="p-6 rounded-xl bg-[#11101d] border border-white/10 corner-crosshair">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Incoming Inquiries
            </span>
            <div className="p-2 rounded-lg bg-neutral-900 text-emerald-400">
              <Mail className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-mono font-bold text-white">{messageCount}</div>
          <Link
            href="/admin/messages"
            className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-mono mt-4"
          >
            <span>View Inquiries</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Cloud & Service Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-[#11101d] border border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Neon PostgreSQL Database</div>
              <div className="text-[11px] text-neutral-400 font-mono">
                ep-fancy-cell • Database: portfolio
              </div>
            </div>
          </div>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
            <CheckCircle2 className="w-3 h-3" />
            Connected
          </span>
        </div>

        <div className="p-5 rounded-xl bg-[#11101d] border border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg ${isCloudinaryConfigured ? 'bg-emerald-500/10 text-emerald-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Cloudinary Image Storage</div>
              <div className="text-[11px] text-neutral-400 font-mono">
                {isCloudinaryConfigured ? 'API Credentials Verified' : 'Awaiting credentials in .env'}
              </div>
            </div>
          </div>
          <span
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono ${
              isCloudinaryConfigured
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
            }`}
          >
            {isCloudinaryConfigured ? (
              <>
                <CheckCircle2 className="w-3 h-3" />
                Active
              </>
            ) : (
              <>
                <AlertTriangle className="w-3 h-3" />
                Provide in .env
              </>
            )}
          </span>
        </div>
      </div>

      {/* Recent Inquiries List */}
      <div className="p-6 rounded-xl bg-[#11101d] border border-white/10 corner-crosshair">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-800">
          <h2 className="text-sm font-mono uppercase tracking-wider text-white font-bold">
            Recent Contact Form Transmissions
          </h2>
          <Link
            href="/admin/messages"
            className="text-xs font-mono text-emerald-400 hover:text-emerald-300"
          >
            View All &rarr;
          </Link>
        </div>

        {recentMessages.length === 0 ? (
          <div className="py-8 text-center text-xs font-mono text-neutral-500">
            No contact transmissions logged yet.
          </div>
        ) : (
          <div className="divide-y divide-neutral-800">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-white">{msg.name}</div>
                  <div className="text-[11px] text-neutral-400 font-mono">{msg.email} • {msg.subject}</div>
                  <div className="text-xs text-neutral-300 mt-1 line-clamp-1">{msg.message}</div>
                </div>
                <span className="text-[10px] font-mono text-neutral-500 shrink-0">
                  {new Date(msg.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

