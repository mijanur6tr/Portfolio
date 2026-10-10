import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ContactMailIcon } from '../RetroIcons';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';

export const ContactApp = () => {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Transmitting message over TCP/IP...');

    try {
      const formData = new FormData(event.target);
      formData.append('access_key', '6e535c00-b01c-497b-a75a-7abdd0b52865');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully! I will reply shortly.');
        toast.success('Message sent to Mijanur successfully!');
        event.target.reset();
      } else {
        setResult(`Failed: ${data.message}`);
        toast.error(data.message || 'Error transmitting message');
      }
    } catch (err) {
      setResult('Network error transmitting message.');
      toast.error('Network error transmitting message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] text-[#000000] select-text">
      {/* Outlook Express Toolbar */}
      <div className="bg-[#c0c0c0] px-3 py-1.5 border-b border-gray-400 flex flex-wrap items-center justify-between gap-2 select-none text-xs">
        <div className="flex items-center gap-2">
          <ContactMailIcon className="w-5 h-5 shrink-0" />
          <span className="font-bold text-gray-800 text-xs">
            Outlook Express — New Message
          </span>
        </div>

        {/* Quick direct contact links */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <a
            href="https://wa.me/8801642674330?text=Hi%20Mijanur!%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="win-btn text-[11px] py-0.5 px-2 text-emerald-800 font-semibold"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-3 h-3 text-emerald-700" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mijanur-rahman-9508682ba/"
            target="_blank"
            rel="noreferrer"
            className="win-btn text-[11px] py-0.5 px-2 text-blue-800 font-semibold"
            title="View LinkedIn"
          >
            <FaLinkedin className="w-3 h-3 text-blue-700" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/mijanur6tr"
            target="_blank"
            rel="noreferrer"
            className="win-btn text-[11px] py-0.5 px-2 text-gray-900 font-semibold"
            title="View GitHub"
          >
            <FaGithub className="w-3 h-3" />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:mijanrhdev@gmail.com"
            className="win-btn text-[11px] py-0.5 px-2 text-red-800 font-semibold"
            title="Send direct email"
          >
            <FaEnvelope className="w-3 h-3" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Main Mail Form */}
      <div className="flex-1 min-h-0 bg-white p-3 md:p-5 overflow-y-auto">
        <form onSubmit={onSubmit} className="flex flex-col h-full space-y-3 max-w-2xl mx-auto">
          {/* Header metadata fields */}
          <div className="win-outset bg-[#e8e8e8] p-2 space-y-2 text-xs">
            {/* Recipient */}
            <div className="flex items-center gap-2">
              <label className="w-16 font-semibold text-gray-700 text-right shrink-0">
                To:
              </label>
              <div className="win-inset bg-white px-2 py-1 flex-1 text-gray-800 font-medium truncate">
                Mijanur Rahman &lt;mijanrhdev@gmail.com&gt;
              </div>
            </div>

            {/* Sender Name */}
            <div className="flex items-center gap-2">
              <label className="w-16 font-semibold text-gray-700 text-right shrink-0">
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. John Doe / Tech Recruiter"
                className="win-inset bg-white px-2 py-1 flex-1 text-xs text-gray-900 focus:outline-none"
              />
            </div>

            {/* Sender Email */}
            <div className="flex items-center gap-2">
              <label className="w-16 font-semibold text-gray-700 text-right shrink-0">
                Your Email:
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="e.g. john@company.com"
                className="win-inset bg-white px-2 py-1 flex-1 text-xs text-gray-900 focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center gap-2">
              <label className="w-16 font-semibold text-gray-700 text-right shrink-0">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                defaultValue="Project Inquiry / Job Opportunity"
                className="win-inset bg-white px-2 py-1 flex-1 text-xs text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="flex-1 flex flex-col min-h-[140px]">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1">
              Message Body:
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Hi Mijanur, I visited your retro OS portfolio and would like to discuss..."
              className="win-inset bg-white p-2.5 flex-1 text-xs text-gray-900 font-sans focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Submission and Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-gray-300">
            <button
              type="submit"
              disabled={isSubmitting}
              className="win-btn font-bold text-xs py-1.5 px-6 flex items-center gap-2 text-[#000080]"
            >
              <FaPaperPlane className="w-3 h-3 text-[#000080]" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>

            {result && (
              <div
                className={`text-xs font-semibold px-2 py-1 win-inset ${
                  result.includes('successfully')
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'bg-amber-50 text-amber-900'
                }`}
              >
                {result}
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Status Bar */}
      <div className="bg-[#c0c0c0] px-2 py-0.5 border-t border-gray-400 flex items-center justify-between text-[11px] text-gray-700 select-none">
        <div>SMTP Host: api.web3forms.com &bull; Port: 443 (SSL)</div>
        <div className="font-mono text-gray-500">Status: Connected</div>
      </div>
    </div>
  );
};
