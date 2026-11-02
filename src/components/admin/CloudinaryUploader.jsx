'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, Image as ImageIcon, X } from 'lucide-react';

export default function CloudinaryUploader({ value, onChange, label = 'Cover / Screenshot Image' }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        onChange(data.url);
      } else {
        setError(data.error || 'Upload failed. Ensure Cloudinary credentials are in .env.');
      }
    } catch (err) {
      setError('Network communication failed during image upload.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
        {label}
      </label>

      {error && (
        <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {value ? (
        <div className="relative rounded-xl border border-neutral-700 bg-[#161524] p-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-16 h-12 rounded-lg overflow-hidden bg-neutral-900 border border-neutral-700 shrink-0">
              <img src={value} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-mono text-emerald-400 truncate">{value}</div>
              <div className="text-[10px] text-neutral-400">Image attached successfully</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onChange('')}
            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-red-400 transition-colors"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-neutral-700 hover:border-emerald-500/50 rounded-xl p-6 text-center bg-[#131221] cursor-pointer transition-colors group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-3 rounded-full bg-neutral-900 text-neutral-400 group-hover:text-emerald-400 group-hover:scale-105 transition-all">
              {uploading ? (
                <Loader2 className="w-5 h-5 animate-spin text-emerald-400" />
              ) : (
                <UploadCloud className="w-5 h-5" />
              )}
            </div>

            <div className="text-xs font-medium text-neutral-300">
              {uploading ? 'Transmitting to Cloudinary...' : 'Click to select image file to upload'}
            </div>

            <p className="text-[10px] font-mono text-neutral-500">
              PNG, JPG, WEBP, or SVG • Stored on Cloudinary
            </p>
          </div>
        </div>
      )}

      {/* Manual URL input fallback */}
      <div className="pt-1">
        <input
          type="text"
          placeholder="Or paste direct image URL (e.g. /images/Clubby.png or https://...)"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-1.5 rounded-lg bg-[#1a192a] border border-neutral-800 text-[11px] font-mono text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600"
        />
      </div>
    </div>
  );
}

