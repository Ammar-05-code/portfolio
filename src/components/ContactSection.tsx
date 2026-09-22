import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, Copy, Check, ArrowUpRight, Sparkles, Download } from 'lucide-react';
import { resumeData } from '../data/resume';
import { generateResumePdf } from '../utils/generateResumePdf';

interface ContactSectionProps {
  onOpenDossier: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDossier }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28 text-cream font-hn border-t border-white/15"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-start mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-[11px] uppercase tracking-[0.25em] text-cream/80 backdrop-blur-xl mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-cream/90" />
          <span>04 &bull; Direct Inquiries</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-cream">
          Start a Conversation
        </h2>
        <p className="mt-3 text-sm sm:text-base text-cream/75 max-w-2xl font-light leading-relaxed">
          Open to full-time Data Analyst opportunities, collaborative technical projects, and analytical problem-solving inquiries.
        </p>
      </motion.div>

      {/* High-Impact Inquiry Bento Card */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] bg-white/[0.06] border border-white/20 backdrop-blur-3xl shadow-[0_30px_90px_rgba(10,16,28,0.45)] overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Direct Call to Action */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.1] border border-white/20 text-[11px] font-mono text-cream/95 shadow-inner">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Available for Immediate Data Analyst Placement &bull; 2026</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-cream tracking-tight">
                Mohammed Ammar F
              </h3>
              <p className="text-xs sm:text-sm text-cream/75 font-mono mt-1">
                Data Analyst &bull; B.Tech Artificial Intelligence &amp; Data Science
              </p>
            </div>

            <p className="text-xs sm:text-sm text-cream/85 font-light leading-relaxed">
              Based in Chennai, India. Equipped with hands-on expertise in automated SQL data processing pipelines, predictive machine learning models, and strategic executive Power BI reporting.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={resumeData.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-primary-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-black text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
                title="Compose email directly in Gmail"
              >
                <Mail size={14} />
                <span>Send via Gmail</span>
              </a>

              <button
                id="contact-download-cv-btn"
                type="button"
                onClick={() => generateResumePdf()}
                className="apple-pill-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.12] hover:bg-white/[0.18] border border-white/25 text-cream text-xs uppercase tracking-wider backdrop-blur-xl cursor-pointer"
                title="Download Official PDF Resume"
              >
                <Download size={14} className="text-emerald-400" />
                <span>Download CV (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Channels Matrix */}
          <div className="md:col-span-5 md:border-l md:border-white/15 md:pl-8 space-y-3.5 pt-4 md:pt-0 border-t md:border-t-0 border-white/15">
            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-white/[0.055] border border-white/15 flex items-center justify-between gap-3 shadow-sm">
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-mono tracking-wider text-cream/60 block">
                  Email Dispatch (Gmail)
                </span>
                <a
                  href={resumeData.gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-mono text-cream hover:text-white truncate block mt-0.5"
                  title="Compose email directly in Gmail"
                >
                  {resumeData.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(resumeData.email, 'email')}
                className="apple-pill-btn h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-cream shrink-0 cursor-pointer"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-white/[0.055] border border-white/15 flex items-center justify-between gap-3 shadow-sm">
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-mono tracking-wider text-cream/60 block">
                  Telephone Contact
                </span>
                <a
                  href={`tel:${resumeData.phone}`}
                  className="text-xs sm:text-sm font-mono text-cream hover:text-white truncate block mt-0.5"
                >
                  {resumeData.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(resumeData.phone, 'phone')}
                className="apple-pill-btn h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-cream shrink-0 cursor-pointer"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              </button>
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={resumeData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.055] border border-white/15 hover:bg-white/[0.1] hover:border-white/25 transition-all text-xs flex items-center justify-between text-cream font-mono"
              >
                <span>LinkedIn</span>
                <ExternalLink size={12} className="text-cream/60" />
              </a>

              <a
                href={resumeData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.055] border border-white/15 hover:bg-white/[0.1] hover:border-white/25 transition-all text-xs flex items-center justify-between text-cream font-mono"
              >
                <span>GitHub</span>
                <ExternalLink size={12} className="text-cream/60" />
              </a>
            </div>

            {/* Location Capsule */}
            <div className="p-3.5 rounded-2xl bg-white/[0.035] border border-white/10 flex items-center gap-2.5 text-xs text-cream/70 font-mono">
              <MapPin size={13} className="text-cream/50 shrink-0" />
              <span className="truncate">{resumeData.location}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
