import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, FileText, ChevronDown, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { ResumeDossier, DossierTab } from './components/ResumeDossier';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { StorySection } from './components/StorySection';
import { ExperienceProjectsSection } from './components/ExperienceProjectsSection';
import { SkillsCertificationsSection } from './components/SkillsCertificationsSection';
import { ContactSection } from './components/ContactSection';
import { DataPointsParticleCanvas } from './components/DataPointsParticleCanvas';
import { resumeData } from './data/resume';

type SectionId = 'hero' | 'story' | 'jobs' | 'skills' | 'contact';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dossierOpen, setDossierOpen] = useState(false);
  const [dossierTab, setDossierTab] = useState<DossierTab>('all');
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  // Lock body scroll while mobile drawer or dossier modal is open
  useEffect(() => {
    if (isDrawerOpen || dossierOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isDrawerOpen, dossierOpen]);

  // Dynamic Scroll Spy for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['hero', 'story', 'jobs', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section === 'hero' ? 'hero-viewport' : section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDossier = (tab: DossierTab = 'all') => {
    setDossierTab(tab);
    setDossierOpen(true);
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  const scrollToSection = (id: SectionId) => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
    const targetEl = document.getElementById(id === 'hero' ? 'hero-viewport' : id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems: { label: string; id: SectionId; tab: DossierTab }[] = [
    { label: 'Story', id: 'story', tab: 'story' },
    { label: 'Jobs', id: 'jobs', tab: 'jobs' },
    { label: 'Skills', id: 'skills', tab: 'skills' },
    { label: 'Message', id: 'contact', tab: 'contact' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', url: resumeData.linkedinUrl },
    { label: 'GitHub', url: resumeData.githubUrl },
    { label: 'Email', url: `mailto:${resumeData.email}` },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#18202c] via-[#131823] to-[#0e121a] text-cream font-hn selection:bg-cream selection:text-black overflow-x-hidden">
      {/* Precision Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Fixed Background image layer with optical depth-of-field blur & lighter professional studio gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <img
          id="background-image"
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
          alt=""
          className="h-full w-full object-cover anim-fade-in opacity-40 brightness-90 blur-[2.5px] sm:blur-[3.5px] scale-105 transform-gpu transition-all duration-700"
        />
        {/* Apple-style ambient luminous radial light & depth gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_0%,rgba(185,210,240,0.22),transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_85%_70%,rgba(140,170,205,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#18202c]/65 via-[#131823]/75 to-[#0e121a]/95" />
        {/* Soft, airy studio ambient occlusion vignette */}
        <div
          id="inner-depth-shadow"
          className="absolute inset-0 shadow-[inset_0_0_100px_rgba(14,19,28,0.55)]"
        />
      </div>

      {/* Floating Apple-Style Navigation Dock Header (Layer z-40) */}
      <header
        id="main-header"
        className="fixed inset-x-4 sm:inset-x-8 top-4 sm:top-6 z-40 flex items-center justify-between pointer-events-none"
      >
        {/* Brand Logo Capsule */}
        <a
          id="brand-logo"
          href="#hero-viewport"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="apple-capsule pointer-events-auto flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#161d2a]/70 border border-white/20 backdrop-blur-2xl hover:bg-white/15 hover:border-white/30 active:scale-[0.98] transition-all cursor-pointer group anim-fade-up shadow-[0_8px_28px_rgba(10,15,25,0.35)]"
          style={{ animationDelay: '800ms' }}
        >
          <span className="font-hn font-medium text-sm tracking-wide text-cream">
            Mohammed Ammar
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-cream/80 font-mono tracking-wider uppercase border border-white/10">
            Data Analyst
          </span>
        </a>

        {/* Desktop Navigation Dock (Segmented Apple Capsule) */}
        <div
          id="desktop-nav-cluster"
          className="hidden sm:flex items-center gap-3 text-cream pointer-events-auto"
        >
          {/* Main nav segmented capsule with live active scroll indicator */}
          <nav
            id="desktop-nav"
            className="apple-capsule flex items-center gap-1 p-1.5 rounded-full bg-[#161d2a]/70 border border-white/20 backdrop-blur-2xl anim-fade-up shadow-[0_8px_32px_rgba(10,15,25,0.4)]"
            style={{ animationDelay: '950ms' }}
            aria-label="Main Navigation"
          >
            <span className="px-3 py-1 text-xs font-mono text-cream/50 select-none">
              2026
            </span>
            <span className="h-3 w-px bg-white/15" />
            {navItems.map((item) => (
              <button
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-cream text-black font-semibold shadow-[0_2px_12px_rgba(255,255,255,0.25)]'
                    : 'text-cream/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Socials Capsule & Quick Dossier Button */}
          <div
            id="desktop-socials"
            className="apple-capsule flex items-center gap-1 p-1.5 rounded-full bg-[#161d2a]/70 border border-white/20 backdrop-blur-2xl anim-fade-up shadow-[0_8px_32px_rgba(10,15,25,0.4)]"
            style={{ animationDelay: '1100ms' }}
          >
            {socialLinks.map((item) => (
              <a
                key={item.label}
                id={`social-link-${item.label.toLowerCase()}`}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-3 py-1.5 rounded-full text-xs text-cream/70 hover:text-cream hover:bg-white/10 active:bg-white/20 active:scale-[0.95] flex items-center gap-1 transition-all"
              >
                <span>{item.label}</span>
                {item.url.startsWith('http') && (
                  <ArrowUpRight size={11} className="text-cream/50" />
                )}
              </a>
            ))}

            <button
              type="button"
              onClick={() => openDossier('all')}
              className="apple-pill-btn ml-1 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-cream/90 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <FileText size={12} />
              <span>CV</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger toggle button */}
        <button
          id="mobile-hamburger-btn"
          type="button"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isDrawerOpen}
          className="apple-capsule pointer-events-auto relative z-50 sm:hidden h-11 w-11 rounded-full bg-[#161d2a]/80 border border-white/20 backdrop-blur-2xl flex items-center justify-center text-cream anim-fade-up focus:outline-none hover:bg-white/10 active:scale-[0.93] transition-all cursor-pointer"
          style={{ animationDelay: '900ms' }}
        >
          <div
            className={`absolute h-3.5 w-5 flex flex-col justify-between transition-opacity duration-300 ${
              isDrawerOpen ? 'opacity-0 delay-300' : 'opacity-100'
            }`}
          >
            <span
              className={`h-0.5 w-full bg-cream rounded-full transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
                isDrawerOpen ? 'translate-y-[6px] rotate-45' : 'translate-y-0 rotate-0'
              }`}
            />
            <span
              className={`h-0.5 w-full bg-cream rounded-full transition-opacity duration-300 ${
                isDrawerOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-full bg-cream rounded-full transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
                isDrawerOpen ? '-translate-y-[6px] -rotate-45' : 'translate-y-0 rotate-0'
              }`}
            />
          </div>

          <X
            size={22}
            strokeWidth={1.8}
            className={`text-cream transition-all duration-300 ${
              isDrawerOpen
                ? 'rotate-0 opacity-100 delay-300'
                : 'rotate-90 opacity-0 pointer-events-none'
            }`}
          />
        </button>
      </header>

      {/* Hero Section Viewport */}
      <main
        id="hero-viewport"
        className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 z-10 px-4 sm:px-6 md:px-8"
      >
        {/* Marquee (continuous horizontal scroll typography) */}
        <div
          id="marquee-container"
          className="absolute inset-x-0 top-[14vh] sm:top-[12vh] z-0 overflow-hidden anim-fade-up pointer-events-none"
          style={{ animationDelay: '500ms' }}
        >
          <div
            id="marquee-track"
            className="marquee flex w-max whitespace-nowrap font-hn text-[14vh] sm:text-[22vh] leading-none text-cream/75 blur-[0.3px]"
          >
            <span className="pr-[6vw]">Mohammed &mdash; Ammar&nbsp;</span>
            <span className="pr-[6vw]">Mohammed &mdash; Ammar&nbsp;</span>
          </div>
        </div>

        {/* Spacer to push bento down cleanly */}
        <div className="flex-1" />

        {/* Center Editorial Glass Card (Apple VisionOS Bento Fit) */}
        <div
          id="center-editorial-block"
          className="relative z-10 w-full max-w-5xl mx-auto anim-fade-up"
          style={{ animationDelay: '1000ms' }}
        >
          {/* Subtle floating data points particle field */}
          <DataPointsParticleCanvas />

          <div className="relative w-full p-5 sm:p-7 md:p-8 rounded-[28px] sm:rounded-[36px] bg-white/[0.07] border border-white/20 backdrop-blur-3xl shadow-[0_30px_90px_-20px_rgba(10,16,28,0.65),inset_0_1px_1.5px_rgba(255,255,255,0.3)] hover:border-white/30 hover:bg-white/[0.09] transition-all duration-500 overflow-hidden">
            {/* Specular glass highlight line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent pointer-events-none" />

            {/* 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
              {/* Left Section: Core Narrative & Primary CTAs (7 columns) */}
              <div className="md:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.1] border border-white/20 text-[11px] uppercase tracking-[0.2em] text-cream/95 backdrop-blur-md shadow-inner">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="font-medium font-mono text-[10px] sm:text-[11px]">
                    Data Analyst &bull; Available 2026
                  </span>
                </div>

                <h1 className="mt-3 text-lg sm:text-2xl font-medium tracking-tight text-cream">
                  Bridging Raw Data &amp; Actionable Strategy
                </h1>

                <p className="mt-2 text-xs sm:text-sm text-cream/85 font-light leading-relaxed max-w-lg">
                  Transforming complex data architectures into clear, actionable business strategies. Specializing in exploratory data analysis, predictive statistical modeling, and interactive dashboards.
                </p>

                {/* Quick Launch Buttons */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    id="open-full-dossier-btn"
                    type="button"
                    onClick={() => openDossier('all')}
                    className="apple-primary-btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-black text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    <FileText size={14} />
                    <span>Curriculum Vitae</span>
                  </button>

                  <button
                    id="open-projects-btn"
                    type="button"
                    onClick={() => scrollToSection('jobs')}
                    className="apple-pill-btn flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-white/[0.12] hover:bg-white/[0.18] text-cream text-xs uppercase tracking-wider backdrop-blur-xl cursor-pointer"
                  >
                    <span>Projects &amp; Experience</span>
                    <ArrowUpRight size={14} className="text-cream/70" />
                  </button>
                </div>
              </div>

              {/* Right Section: Academic Metrics & Competency Matrix (5 columns) */}
              <div className="md:col-span-5 md:border-l md:border-white/15 md:pl-7 flex flex-col justify-between space-y-4 pt-4 md:pt-0 border-t md:border-t-0 border-white/15">
                {/* Academic credential cards */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-cream/60 block">
                      Academic Rank
                    </span>
                    <p className="text-sm font-medium text-cream mt-0.5 font-mono">
                      7.9 CGPA
                    </p>
                    <span className="text-[10px] text-cream/70 block truncate">
                      First Class &bull; Consistent
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-cream/60 block">
                      Specialization
                    </span>
                    <p className="text-sm font-medium text-cream mt-0.5 truncate">
                      B.Tech AI &amp; DS
                    </p>
                    <span className="text-[10px] text-cream/70 block truncate">
                      Mohamed Sathak AJCE
                    </span>
                  </div>
                </div>

                {/* Core Skill Pills */}
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-cream/60 block mb-2">
                    Core Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'SQL / Postgres', 'Power BI', 'Machine Learning', 'Statistical EDA'].map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => scrollToSection('skills')}
                        className="apple-pill-btn px-2.5 py-1 rounded-full text-[11px] bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 text-cream/90 backdrop-blur-sm transition-all cursor-pointer"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Scroll Invitation Indicator */}
        <div className="relative z-10 pt-8 sm:pt-10 flex flex-col items-center">
          <button
            type="button"
            onClick={() => scrollToSection('story')}
            aria-label="Scroll to explore portfolio"
            className="apple-pill-btn group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs font-mono text-cream/60 hover:text-cream transition-all cursor-pointer shadow-lg backdrop-blur-md"
          >
            <span>Scroll to Explore</span>
            <ChevronDown size={14} className="text-cream/50 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </main>

      {/* Dynamic Scroll Showcase Sections */}
      <div className="relative z-10">
        <StorySection onOpenDossier={() => openDossier('story')} />
        <ExperienceProjectsSection onOpenDossier={() => openDossier('jobs')} />
        <SkillsCertificationsSection onOpenDossier={() => openDossier('skills')} />
        <ContactSection onOpenDossier={() => openDossier('contact')} />
      </div>

      {/* Floating Apple-Style Bottom Island Footer */}
      <footer
        id="main-footer"
        className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-xs font-hn text-cream"
      >
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.055] border border-white/15 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_15px_40px_rgba(8,12,20,0.35)]">
          {/* Footer left: Profile Capsule */}
          <div id="footer-left-block" className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            <div className="leading-tight">
              <p className="font-medium text-cream text-[13px]">Mohammed Ammar</p>
              <p className="text-cream/70 text-[11px]">B.Tech AI &amp; Data Science &bull; 2026</p>
            </div>
          </div>

          {/* Center: Back to top */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="apple-pill-btn flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-cream/80 hover:text-cream text-xs font-mono transition-all cursor-pointer"
          >
            <ArrowUp size={12} />
            <span>Back to Top</span>
          </button>

          {/* Footer right: Location & Contact Capsule */}
          <div id="footer-right-block" className="text-center sm:text-right leading-tight">
            <p className="text-cream/70 text-[11px]">Chennai, Tamil Nadu</p>
            <a
              href={`mailto:${resumeData.email}`}
              className="text-cream hover:text-white font-mono text-[12px] transition-colors"
            >
              {resumeData.email}
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Drawer Backdrop */}
      <div
        id="mobile-drawer-backdrop"
        onClick={() => setIsDrawerOpen(false)}
        className={`fixed inset-0 z-50 sm:hidden bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        id="mobile-drawer-panel"
        aria-label="Mobile Navigation"
        className={`fixed inset-y-2 right-2 z-50 sm:hidden w-[85%] max-w-sm rounded-[32px] bg-[#161d2a]/95 border border-white/20 backdrop-blur-3xl p-7 transition-transform duration-600 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-between shadow-[0_20px_70px_rgba(5,10,18,0.6)] ${
          isDrawerOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-[110%] pointer-events-none'
        }`}
      >
        <button
          id="mobile-drawer-close-btn"
          type="button"
          onClick={() => setIsDrawerOpen(false)}
          aria-label="Close navigation"
          className="apple-pill-btn absolute right-5 top-5 z-50 h-10 w-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-cream hover:bg-white/20 active:scale-90 transition-all cursor-pointer"
        >
          <X size={20} strokeWidth={1.8} className="text-cream" />
        </button>

        <div className="pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] uppercase tracking-[0.2em] text-cream/60">
            Navigation
          </div>
          <nav id="mobile-nav" className="flex flex-col gap-2.5 mt-5" aria-label="Mobile Site Index">
            {navItems.map((item, idx) => (
              <button
                key={item.label}
                id={`mobile-nav-${item.label.toLowerCase()}`}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/5 hover:border-white/15 text-lg font-hn text-cream text-left active:scale-[0.98] transition-all duration-300 cursor-pointer ${
                  isDrawerOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{
                  transitionDelay: isDrawerOpen ? `${250 + idx * 70}ms` : '0ms',
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} className="text-cream/40" />
              </button>
            ))}

            <button
              type="button"
              onClick={() => openDossier('all')}
              className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-cream text-black font-semibold text-base mt-2 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Curriculum Vitae</span>
              <FileText size={16} />
            </button>
          </nav>
        </div>

        <div className="pb-2">
          <p
            id="mobile-find-me-label"
            className={`text-[10px] uppercase tracking-[0.2em] text-cream/50 font-hn transition-all duration-500 ease-out ${
              isDrawerOpen ? 'translate-y-0 opacity-100 delay-[450ms]' : 'translate-y-4 opacity-0'
            }`}
          >
            Connect
          </p>
          <div id="mobile-socials" className="flex flex-wrap gap-2 mt-3">
            {socialLinks.map((item, idx) => (
              <a
                key={item.label}
                id={`mobile-social-${item.label.toLowerCase()}`}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`apple-pill-btn px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs font-hn text-cream transition-all duration-500 hover:bg-white/[0.12] hover:border-white/25 ${
                  isDrawerOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isDrawerOpen ? `${500 + idx * 50}ms` : '0ms',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Full Resume Dossier Modal */}
      <ResumeDossier
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
        activeTab={dossierTab}
        onTabChange={setDossierTab}
      />
    </div>
  );
}
