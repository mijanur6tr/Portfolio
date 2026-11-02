'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  FolderGit2,
  Mail,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Cloud,
} from 'lucide-react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // If on login page, render children without sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (e) {
      router.push('/admin/login');
    }
  };

  const menuItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Blog Posts', href: '/admin/posts', icon: <FileText className="w-4 h-4" /> },
    { label: 'Projects', href: '/admin/projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { label: 'Messages', href: '/admin/messages', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#090810] text-neutral-200 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0e0d17] border-r border-neutral-800 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand header */}
          <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                MR
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs tracking-tight text-white leading-none">
                  ADMIN CONSOLE
                </span>
                <span className="text-[10px] font-mono text-emerald-400 mt-0.5">
                  Neon PostgreSQL Active
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#181628] text-emerald-400 border border-emerald-500/20 font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-neutral-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Portfolio</span>
            </span>
          </Link>

          <button
            onClick={handleLogout}
            type="button"
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>End Session (Logout)</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 overflow-y-auto p-6 md:p-10 bg-[#090810]">
        {children}
      </main>
    </div>
  );
}

