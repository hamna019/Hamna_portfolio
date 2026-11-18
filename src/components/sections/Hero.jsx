import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, ArrowRight, Github, Linkedin, Sparkles, GraduationCap, MapPin, Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Hero = ({ onOpenCV }) => {
  const { personal, education } = portfolioData;

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const [useGithubAvatar, setUseGithubAvatar] = React.useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-grid-pattern"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/15 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Details */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/80 text-brand-700 dark:text-brand-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.statusBadge}</span>
            </div>

            {/* Main Greeting & Student Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wide text-brand-600 dark:text-brand-400 uppercase">
                Hello, Welcome to my Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                I'm <span className="gradient-text">{personal.name}</span>
              </h1>
            </div>

            {/* University Student Designation & Tagline */}
            <div className="space-y-3">
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                <span className="inline-flex items-center gap-1.5 text-brand-600 dark:text-brand-400">
                  <GraduationCap className="w-5 h-5" />
                  {personal.designation}
                </span>
                <span className="hidden sm:inline text-slate-400">•</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {personal.university}
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {personal.tagline}
              </p>
            </div>

            {/* Location & Academic Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-brand-500" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1">
                <Code2 className="w-4 h-4 text-brand-500" />
                {education.currentStanding} (CGPA: {education.gpa})
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Download CV Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenCV}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-500/25 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </motion.button>

              {/* Contact Me Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>Contact Me</span>
              </motion.a>

              {/* View Projects Link */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-2 px-3"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Follow:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-brand-600 transition-all border border-slate-200 dark:border-slate-800"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] transition-all border border-slate-200 dark:border-slate-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-white hover:bg-brand-600 transition-all border border-slate-200 dark:border-slate-800"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Photograph & Badges Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-30 dark:opacity-40 animate-pulse-subtle" />

              {/* Main Card Frame */}
              <div className="relative glass-card rounded-3xl p-6 shadow-xl border border-white/60 dark:border-slate-700/60 overflow-hidden">
                {/* Profile Photograph Placeholder Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-inner group">
                  <img
                    src={useGithubAvatar ? personal.avatarUrl : personal.profileImage}
                    alt={`${personal.name} - Student Portfolio`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* GitHub Avatar Toggle pill */}
                  <button
                    onClick={() => setUseGithubAvatar(!useGithubAvatar)}
                    className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 hover:bg-brand-600 text-white backdrop-blur-md border border-white/20 transition-all flex items-center gap-1 shadow-sm"
                    title="Toggle between Photo and GitHub Avatar"
                  >
                    <Github className="w-3 h-3" />
                    <span>{useGithubAvatar ? 'View Photo' : 'GitHub Avatar'}</span>
                  </button>

                  {/* Student Tag Inside Card */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider font-semibold text-brand-300">
                      Undergraduate Student
                    </p>
                    <p className="text-base font-bold">{personal.name}</p>
                    <p className="text-xs text-slate-300">{education.institution}</p>
                  </div>
                </div>

                {/* Floating Metric Badge 1: GPA */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-3 glass-card px-3.5 py-2 rounded-2xl shadow-lg border border-white/80 dark:border-slate-700 flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                    ★
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">CGPA</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{education.gpa}</div>
                  </div>
                </motion.div>

                {/* Floating Metric Badge 2: Projects */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-3 -right-3 glass-card px-3.5 py-2 rounded-2xl shadow-lg border border-white/80 dark:border-slate-700 flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                    🚀
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">Projects</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">6+ Shipped</div>
                  </div>
                </motion.div>
              </div>

              {/* Photo customization reminder hint */}
              <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500 italic">
                Photo placeholder is customizable via <code className="text-brand-500">portfolioData.js</code>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
