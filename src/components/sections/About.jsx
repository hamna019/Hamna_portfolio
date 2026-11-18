import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Target, Sparkles, CheckCircle2, Compass, Lightbulb, Rocket } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

export const About = () => {
  const { about, personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          badgeIcon={<User className="w-3.5 h-3.5" />}
          title="Curious Student,"
          gradientWord="Passionate Builder"
          subtitle="Discover my academic path, technical aspirations, and what drives my journey in computer science."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Educational Background (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Personal Intro Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Personal Introduction
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.intro}
              </p>
            </motion.div>

            {/* Educational Background Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Educational Background
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {about.educationalBackground}
              </p>
              <div className="bg-slate-100/60 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{education.degree}</span>
                  <div className="text-slate-500">{education.institution}</div>
                </div>
                <span className="px-3 py-1 rounded-full font-bold bg-brand-500/15 text-brand-700 dark:text-brand-300">
                  CGPA: {education.gpa}
                </span>
              </div>
            </motion.div>

            {/* Career Goals Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Career Goals
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.careerGoals}
              </p>
            </motion.div>
          </div>

          {/* Academic Interests & Personal Strengths (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 sm:p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Academic Interests
                </h3>
              </div>
              <ul className="space-y-3">
                {about.academicInterests.map((interest, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Personal Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 sm:p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Personal Strengths
                </h3>
              </div>
              <div className="space-y-3.5">
                {about.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800"
                  >
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {str.title}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {str.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
