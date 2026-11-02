'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { success: boolean, message: string }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          success: true,
          message: 'Transmission received successfully! I will reply shortly.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          success: false,
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (err) {
      setStatus({
        success: false,
        message: 'Network error occurred. Please contact via WhatsApp or email.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status && (
        <div
          className={`p-4 rounded-xl text-xs flex items-center gap-2.5 font-medium ${
            status.success
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {status.success ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
            Your Name <span className="text-emerald-500">*</span>
          </label>
          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Vance"
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
            Your Email <span className="text-emerald-500">*</span>
          </label>
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
          Subject / Project Scope
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Full-Stack Next.js Project / Team Opportunity"
          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
          Message Specification <span className="text-emerald-500">*</span>
        </label>
        <textarea
          required
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Outline project timeline, goals, deliverables, or role requirements..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#0df69e] text-neutral-950 font-semibold text-xs uppercase tracking-wider hover:bg-[#00e58d] transition-all disabled:opacity-50 cursor-pointer shadow-sm"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>Transmit Message</span>
          </>
        )}
      </button>
    </form>
  );
}

