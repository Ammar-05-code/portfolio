import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Languages, Sparkles, MapPin, Calendar, CheckCircle2, Download } from 'lucide-react';
import { resumeData } from '../data/resume';
import { generateResumePdf } from '../utils/generateResumePdf';

interface StorySectionProps {
  onOpenDossier: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenDossier }) => {
  return (
    <section
      id="story"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28 text-cream font-hn"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-start mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/12 text-[11px] uppercase tracking-[0.25em] text-cream/75 backdrop-blur-xl mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-cream/80" />
          <span>01 &bull; Narrative &amp; Education</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-cream">
          Story &amp; Academic Heritage
        </h2>
        <p className="mt-3 text-sm sm:text-base text-cream/70 max-w-2xl font-light leading-relaxed">
          The analytical rigor, academic benchmarks, and foundational milestones that define Mohammed Ammar&apos;s data discipline.
        </p>
      </motion.div>

      {/* Main Narrative Bento Card */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative p-6 sm:p-9 rounded-[28px] sm:rounded-[36px] bg-white/[0.06] border border-white/16 backdrop-blur-2xl shadow-[0_20px_70px_rgba(10,16,28,0.4)] hover:border-white/25 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden mb-8"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2.5 text-xs text-cream/70 font-mono uppercase tracking-wider">
            <Sparkles size={14} className="text-cream/90" />
            <span>Executive Narrative</span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-cream/75">
            {resumeData.location}
          </span>
        </div>

        <p className="text-sm sm:text-lg text-cream/90 font-light leading-relaxed sm:leading-loose">
          &ldquo;{resumeData.summary}&rdquo;
        </p>

        <div className="mt-7 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            <span className="text-cream/80 font-mono">Specialized in SQL &bull; Python &bull; Power BI</span>
          </div>
          <button
            type="button"
            onClick={() => generateResumePdf()}
            className="apple-pill-btn px-4 py-1.5 rounded-full bg-white/[0.12] hover:bg-white/[0.18] border border-white/20 text-cream text-xs tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
            title="Download Verified Curriculum Vitae (PDF)"
          >
            <Download size={12} className="text-emerald-400" />
            <span>Download CV (PDF)</span>
          </button>
        </div>
      </motion.div>

      {/* Grid: Education Cards & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
        {/* Education History (7 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 space-y-4"
        >
          <div className="flex items-center gap-2 px-1 text-xs uppercase tracking-widest text-cream/60 font-mono">
            <GraduationCap size={15} />
            <span>Academic Qualifications</span>
          </div>

          <div className="space-y-4">
            {resumeData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.055] border border-white/15 backdrop-blur-xl hover:bg-white/[0.085] hover:border-white/25 transition-all duration-300 shadow-[0_10px_30px_rgba(8,12,20,0.25)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-cream/60 uppercase tracking-wider block">
                      {edu.degree}
                    </span>
                    <h3 className="text-base sm:text-lg font-medium text-cream mt-1">
                      {edu.institution}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.1] border border-white/20 font-mono text-xs text-cream font-medium shrink-0 shadow-inner">
                    {edu.score}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cream/70 font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-cream/50" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-cream/50" />
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Honors & Languages Bento Column (5 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 space-y-4"
        >
          {/* Achievements Card */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.055] border border-white/15 backdrop-blur-xl shadow-[0_10px_30px_rgba(8,12,20,0.25)]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cream/60 font-mono mb-4">
              <Award size={15} />
              <span>Honors &amp; Merits</span>
            </div>

            <ul className="space-y-3.5">
              {resumeData.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-cream/85 leading-relaxed">
                  <CheckCircle2 size={14} className="text-emerald-400/80 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages Card */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.055] border border-white/15 backdrop-blur-xl shadow-[0_10px_30px_rgba(8,12,20,0.25)]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cream/60 font-mono mb-3">
              <Languages size={15} />
              <span>Language Proficiencies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs font-mono text-cream/90"
                >
                  {lang} &bull; Native / Fluent
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
