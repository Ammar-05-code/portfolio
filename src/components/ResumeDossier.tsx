import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Copy,
  Check,
  Languages,
  Trophy,
} from 'lucide-react';
import { resumeData } from '../data/resume';

export type DossierTab = 'all' | 'story' | 'jobs' | 'skills' | 'contact';

interface ResumeDossierProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: DossierTab;
  onTabChange: (tab: DossierTab) => void;
}

export const ResumeDossier: React.FC<ResumeDossierProps> = ({
  isOpen,
  onClose,
  activeTab,
  onTabChange,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const tabs: { id: DossierTab; label: string }[] = [
    { id: 'all', label: 'Complete Dossier' },
    { id: 'story', label: 'Story & Education' },
    { id: 'jobs', label: 'Experience & Projects' },
    { id: 'skills', label: 'Skills & Certifications' },
    { id: 'contact', label: 'Contact & Links' },
  ];

  return (
    <div
      id="resume-dossier-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xl transition-all duration-300"
      onClick={onClose}
    >
      <div
        id="resume-dossier-dialog"
        className="relative w-full max-w-4xl max-h-[88vh] rounded-[32px] sm:rounded-[40px] bg-[#151d2a]/95 border border-white/20 text-cream font-hn flex flex-col shadow-[0_30px_100px_rgba(8,14,24,0.7)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Apple macOS window style */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/15 bg-white/[0.04] backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/50 font-mono">
                Curriculum Vitae &bull; Dossier
              </span>
              <h2 className="text-xl sm:text-2xl font-hn tracking-tight text-cream mt-0.5 font-medium">
                {resumeData.name}
              </h2>
              <p className="text-xs text-cream/70 mt-0.5 font-hn">
                {resumeData.title} &bull; {resumeData.location}
              </p>
            </div>
          </div>

          <button
            id="close-dossier-btn"
            type="button"
            onClick={onClose}
            aria-label="Close dossier"
            className="apple-pill-btn h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-cream/90 flex items-center justify-center transition-all focus:outline-none active:shadow-[inset_0_0_12px_rgba(255,255,255,0.4)] cursor-pointer"
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        </div>

        {/* Apple-style Segmented Tab Pill Navigation */}
        <div className="px-6 sm:px-8 py-3.5 border-b border-white/10 bg-white/[0.015]">
          <div className="p-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl flex items-center gap-1 overflow-x-auto no-scrollbar shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.18)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cream text-black font-semibold shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(0,0,0,0.25),0_3px_12px_rgba(255,255,255,0.2)]'
                    : 'text-cream/70 hover:text-cream hover:bg-white/[0.08] active:bg-white/[0.14] active:shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] active:scale-[0.97]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-8 space-y-10 text-cream/90 text-sm leading-relaxed">
          {/* Executive Summary (Story) */}
          {(activeTab === 'all' || activeTab === 'story') && (
            <section id="dossier-executive-summary" className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                <span className="h-1.5 w-1.5 rounded-full bg-cream" />
                <span>Executive Summary</span>
              </div>
              <p className="text-base text-cream/90 font-light leading-relaxed">
                {resumeData.summary}
              </p>
            </section>
          )}

          {/* Education */}
          {(activeTab === 'all' || activeTab === 'story') && (
            <section id="dossier-education" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                <GraduationCap size={14} className="text-cream/70" />
                <span>Education &amp; Academic Foundation</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-medium text-cream">
                          {edu.institution}
                        </h4>
                        <span className="text-xs text-cream/50 whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs text-cream/70 mt-1">{edu.degree}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-cream/60">{edu.location}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/10 font-mono text-cream text-[11px]">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Work Experience */}
          {(activeTab === 'all' || activeTab === 'jobs') && (
            <section id="dossier-experience" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                <Briefcase size={14} className="text-cream/70" />
                <span>Professional Experience</span>
              </div>

              <div className="space-y-4">
                {resumeData.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 space-y-3 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <h4 className="text-base font-medium text-cream">
                          {exp.role}
                        </h4>
                        <p className="text-xs text-cream/70 font-mono">
                          {exp.company} &bull; {exp.location}
                        </p>
                      </div>
                      <span className="text-xs text-cream/50 font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-cream/80 pt-1">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-cream/40 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {(activeTab === 'all' || activeTab === 'jobs') && (
            <section id="dossier-projects" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                <Code2 size={14} className="text-cream/70" />
                <span>Featured Projects</span>
              </div>

              <div className="space-y-4">
                {resumeData.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 space-y-3 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <h4 className="text-base font-medium text-cream">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-cream/70 font-mono">
                          {proj.subtitle}
                        </p>
                      </div>
                      <span className="text-xs text-cream/50 font-mono">
                        {proj.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-cream/80 pt-1">
                      {proj.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-cream/40 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <section id="dossier-skills" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                <Code2 size={14} className="text-cream/70" />
                <span>Skills &amp; Technical Competencies</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resumeData.skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-3 shadow-sm"
                  >
                    <h5 className="text-xs uppercase tracking-wider text-cream/60 font-medium">
                      {skillGroup.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-full text-xs bg-white/[0.06] border border-white/10 text-cream hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <section id="dossier-certifications" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                <Award size={14} className="text-cream/70" />
                <span>Verified Certifications</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resumeData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/20 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-3 shadow-sm"
                  >
                    <div>
                      <h5 className="text-xs sm:text-sm font-medium text-cream">
                        {cert.title}
                      </h5>
                      <span className="text-xs text-cream/60">{cert.issuer}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-cream/50 whitespace-nowrap font-mono">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages & Achievements */}
          {(activeTab === 'all' || activeTab === 'story') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Languages */}
              <section id="dossier-languages" className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                  <Languages size={14} className="text-cream/70" />
                  <span>Languages</span>
                </div>
                <div className="flex gap-2">
                  {resumeData.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full border border-white/15 bg-white/[0.06] text-xs text-cream tracking-wide font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section id="dossier-achievements" className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                  <Trophy size={14} className="text-cream/70" />
                  <span>Key Achievements</span>
                </div>
                <ul className="space-y-2.5 text-xs text-cream/80">
                  {resumeData.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cream/40 mt-1 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}

          {/* Contact & Links */}
          {(activeTab === 'all' || activeTab === 'contact') && (
            <section id="dossier-contact" className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/75">
                <Mail size={14} className="text-cream/70" />
                <span>Direct Inquiries &amp; Connect</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="p-5 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all flex items-center justify-between gap-3 shadow-sm">
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase tracking-wider text-cream/50 block font-mono">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${resumeData.email}`}
                      className="text-xs sm:text-sm text-cream hover:underline truncate block mt-0.5"
                    >
                      {resumeData.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(resumeData.email, 'email')}
                    className="apple-pill-btn h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-cream transition-all flex items-center justify-center cursor-pointer shrink-0 active:shadow-[inset_0_0_12px_rgba(255,255,255,0.4)]"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all flex items-center justify-between gap-3 shadow-sm">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cream/50 block font-mono">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${resumeData.phone}`}
                      className="text-xs sm:text-sm text-cream hover:underline block mt-0.5"
                    >
                      {resumeData.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(resumeData.phone, 'phone')}
                    className="apple-pill-btn h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-cream transition-all flex items-center justify-center cursor-pointer shrink-0 active:shadow-[inset_0_0_12px_rgba(255,255,255,0.4)]"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={resumeData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-pill-btn p-5 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/25 hover:bg-white/[0.07] transition-all flex items-center justify-between group cursor-pointer shadow-sm active:shadow-[inset_0_0_14px_rgba(255,255,255,0.2)]"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cream/50 block font-mono">
                      Professional Network
                    </span>
                    <span className="text-xs sm:text-sm text-cream block mt-0.5">
                      {resumeData.linkedin}
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/15 transition-all">
                    <ExternalLink
                      size={14}
                      className="text-cream/60 group-hover:text-cream transition-colors"
                    />
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={resumeData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-pill-btn p-5 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/25 hover:bg-white/[0.07] transition-all flex items-center justify-between group cursor-pointer shadow-sm active:shadow-[inset_0_0_14px_rgba(255,255,255,0.2)]"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cream/50 block font-mono">
                      Code Repositories
                    </span>
                    <span className="text-xs sm:text-sm text-cream block mt-0.5">
                      {resumeData.github}
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/15 transition-all">
                    <ExternalLink
                      size={14}
                      className="text-cream/60 group-hover:text-cream transition-colors"
                    />
                  </div>
                </a>
              </div>
            </section>
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-t border-white/10 bg-white/[0.03] backdrop-blur-xl text-xs text-cream/60">
          <span>Mohammed Ammar &bull; 2026</span>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${resumeData.email}`}
              className="apple-pill-btn px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-cream text-xs transition-all active:shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]"
            >
              Send Email
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="apple-primary-btn px-4 py-1.5 rounded-full bg-cream text-black font-medium hover:bg-cream/90 text-xs transition-all cursor-pointer"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
