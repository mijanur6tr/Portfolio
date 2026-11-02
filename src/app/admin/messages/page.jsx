import prisma from '@/lib/prisma';
import { Mail, Calendar, Trash2 } from 'lucide-react';
import DeleteMessageButton from './DeleteMessageButton';

export const revalidate = 0;

export default async function AdminMessagesPage() {
  let messages = [];

  try {
    messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
  }

  return (
    <div className="space-y-6">
      <div className="pb-6 border-b border-neutral-800">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Client & Opportunity Transmissions
        </h1>
        <p className="text-xs text-neutral-400 font-mono mt-1">
          Direct messages and project inquiries received from the public contact form
        </p>
      </div>

      {messages.length === 0 ? (
        <div className="p-12 text-center bg-[#131221] rounded-xl border border-neutral-800 text-neutral-500 font-mono text-xs">
          No transmissions received yet.
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-6 rounded-xl bg-[#11101e] border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-neutral-850 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold">
                    {msg.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{msg.name}</span>
                    <a
                      href={`mailto:${msg.email}`}
                      className="ml-2 text-xs font-mono text-emerald-400 hover:underline"
                    >
                      {msg.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(msg.createdAt).toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <DeleteMessageButton id={msg.id} />
                </div>
              </div>

              <div className="pt-3">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Subject: <span className="text-white">{msg.subject || 'General Inquiry'}</span>
                </div>
                <p className="text-xs text-neutral-300 whitespace-pre-wrap leading-relaxed mt-2 p-3 rounded-lg bg-[#181628]">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

