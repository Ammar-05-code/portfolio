import React from 'react';
import { motion } from 'motion/react';
import { Code2, Award, CheckCircle2, ShieldCheck, Database, Wrench } from 'lucide-react';
import { resumeData } from '../data/resume';

interface SkillsCertificationsSectionProps {
  onOpenDossier: () => void;
}

export const SkillsCertificationsSection: React.FC<SkillsCertificationsSectionProps> = ({ onOpenDossier }) => {
  return (
    <section
      id="skills"
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
          <span>03 &bull; Technical Competencies</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-cream">
          Skills &amp; Industry Certifications
        </h2>
        <p className="mt-3 text-sm sm:text-base text-cream/70 max-w-2xl font-light leading-relaxed">
          Structured tools, data pipeline methodologies, and verified accreditations from Google, IBM, TCS iON, and IIT Bombay.
        </p>
      </motion.div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 sm:mb-20">
        {resumeData.skills.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 rounded-[26px] sm:rounded-[30px] bg-white/[0.06] border border-white/16 backdrop-blur-2xl hover:border-white/25 hover:bg-white/[0.085] transition-all duration-300 flex flex-col justify-between shadow-[0_12px_40px_rgba(10,16,28,0.35)]"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cream/60">
                  {idx === 0 ? 'Foundation' : idx === 1 ? 'Analytics' : 'Methodology'}
                </span>
                {idx === 0 ? (
                  <Code2 size={16} className="text-cream/80" />
                ) : idx === 1 ? (
                  <Database size={16} className="text-cream/80" />
                ) : (
                  <Wrench size={16} className="text-cream/80" />
                )}
              </div>

              <h3 className="text-lg font-medium text-cream mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="apple-pill-btn px-3 py-1 rounded-full text-xs font-mono bg-white/[0.08] hover:bg-white/[0.16] border border-white/15 text-cream/90 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/15 text-[11px] font-mono text-cream/50">
              {group.items.length} verified proficiencies
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Showcase */}
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cream/60 font-mono mb-6 px-1">
          <Award size={15} />
          <span>Accredited Credentials</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {resumeData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.055] border border-white/15 backdrop-blur-xl hover:bg-white/[0.085] hover:border-white/25 transition-all duration-300 flex items-start justify-between gap-4 shadow-[0_10px_30px_rgba(8,12,20,0.25)]"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cream/60 block">
                  {cert.issuer}
                </span>
                <h4 className="text-sm sm:text-base font-medium text-cream">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-cream/70 pt-1">
                  Issued: {cert.date}
                </p>
              </div>

              <div className="h-9 w-9 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-cream/80 shrink-0 shadow-inner">
                <ShieldCheck size={18} className="text-emerald-400/90" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
