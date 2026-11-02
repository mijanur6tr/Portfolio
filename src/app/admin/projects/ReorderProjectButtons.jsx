'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronUp, ChevronDown, Loader2 } from 'lucide-react';

export default function ReorderProjectButtons({ id, currentOrder }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const updateOrder = async (newOrder) => {
    if (newOrder < 0) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: newOrder }),
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (e) {
      console.error('Failed to update order', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-1.5 font-mono text-xs">
      <span className="w-6 text-center font-bold text-white bg-neutral-900 border border-neutral-700 py-0.5 rounded text-[11px]">
        {currentOrder}
      </span>

      <div className="flex flex-col gap-0.5">
        <button
          type="button"
          disabled={loading || currentOrder <= 0}
          onClick={() => updateOrder(currentOrder - 1)}
          className="p-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-emerald-400 disabled:opacity-30 cursor-pointer"
          title="Move Up (Appear Earlier)"
        >
          <ChevronUp className="w-3 h-3" />
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={() => updateOrder(currentOrder + 1)}
          className="p-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-emerald-400 disabled:opacity-30 cursor-pointer"
          title="Move Down (Appear Later)"
        >
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

