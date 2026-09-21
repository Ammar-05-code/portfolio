import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, FolderGit2, Calendar, MapPin, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { resumeData } from '../data/resume';

interface ExperienceProjectsSectionProps {
  onOpenDossier: () => void;
}

export const ExperienceProjectsSection: React.FC<ExperienceProjectsSectionProps> = ({ onOpenDossier }) => {
  return (
    <section
      id="jobs"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28 text-cream font-hn border-t border-white/10"
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
          <span>02 &bull; Experience &amp; Projects</span>
        </div>
        <div className="flex flex-wrap items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-cream">
              Practical Analytics &amp; Deployments
            </h2>
            <p className="mt-3 text-sm sm:text-base text-cream/70 max-w-2xl font-light leading-relaxed">
              Real-world corporate internships, machine learning architectures, and production dashboard pipelines.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenDossier}
            className="apple-pill-btn hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs uppercase tracking-wider text-cream cursor-pointer"
          >
            <span>Inspect Full Timeline</span>
            <ArrowUpRight size={13} className="text-cream/60" />
          </button>
        </div>
      </motion.div>

      {/* Part 1: Professional Experience */}
      <div className="mb-14 sm:mb-20">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cream/50 font-mono mb-6 px-1">
          <Briefcase size={15} />
          <span>Work History</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-7 rounded-[26px] sm:rounded-[32px] bg-white/[0.06] border border-white/16 backdrop-blur-2xl hover:border-white/25 hover:bg-white/[0.085] transition-all duration-300 flex flex-col justify-between group shadow-[0_12px_40px_rgba(10,16,28,0.35)]"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.1] border border-white/15 text-[10px] font-mono uppercase tracking-wider text-cream/90 shadow-inner">
                    {exp.period}
                  </span>
                  <span className="text-[11px] text-cream/60 font-mono flex items-center gap-1">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-cream mt-2 group-hover:text-white transition-colors">
                  {exp.role}
                </h3>
                <p className="text-xs sm:text-sm text-cream/80 font-mono mt-0.5">
                  {exp.company}
                </p>

                <ul className="mt-5 space-y-2.5 text-xs text-cream/85 leading-relaxed">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={13} className="text-emerald-400/80 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-cream/60 font-mono">
                <span>Verified Internship</span>
                <span className="text-cream/90">Python &bull; SQL &bull; Power BI</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 2: Featured Technical Projects */}
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cream/60 font-mono mb-6 px-1">
          <FolderGit2 size={15} />
          <span>Engineered Analytical Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-7 rounded-[26px] sm:rounded-[32px] bg-white/[0.06] border border-white/16 backdrop-blur-2xl hover:border-white/25 hover:bg-white/[0.085] transition-all duration-300 flex flex-col justify-between group shadow-[0_12px_40px_rgba(10,16,28,0.35)]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[11px] font-mono text-cream/60 uppercase tracking-wider">
                    {proj.subtitle}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.1] border border-white/15 text-[10px] font-mono text-cream/85">
                    {proj.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-cream mt-1 group-hover:text-white transition-colors">
                  {proj.title}
                </h3>

                <ul className="mt-5 space-y-3 text-xs text-cream/85 leading-relaxed">
                  {proj.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cream/70 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {idx === 0
                    ? ['Scikit-learn', 'TensorFlow', 'Python', 'ML Evaluation'].map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[10px] font-mono text-cream/70"
                        >
                          {t}
                        </span>
                      ))
                    : ['PostgreSQL', 'Power BI', 'Python', 'EDA'].map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[10px] font-mono text-cream/70"
                        >
                          {t}
                        </span>
                      ))}
                </div>
                <button
                  type="button"
                  onClick={onOpenDossier}
                  className="apple-pill-btn h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream cursor-pointer"
                  aria-label={`View ${proj.title} details`}
                >
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
