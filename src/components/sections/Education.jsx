import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Star, CheckCircle, Trophy } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academics"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
          title="Education & Academic"
          gradientWord="Achievements"
          subtitle="A rigorous academic foundation in software engineering, algorithms, and computer systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main University Credential Card (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 via-indigo-500 to-cyan-500" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {education.institution}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-600 dark:text-brand-400 font-semibold">
                    {education.department}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-[11px] uppercase font-bold text-slate-400">Current CGPA</span>
                <span className="text-lg font-black text-slate-900 dark:text-white gradient-text">
                  {education.gpa}
                </span>
              </div>
            </div>

            {/* Degree & Year Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800 mb-8">
              <div>
                <span className="text-[11px] uppercase font-semibold text-slate-400 block mb-0.5">Degree</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  {education.degree}
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase font-semibold text-slate-400 block mb-0.5">Semester</span>
                <span className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400">
                  {education.currentStanding}
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase font-semibold text-slate-400 block mb-0.5">Graduation</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  {education.duration}
                </span>
              </div>
            </div>

            {/* Academic Achievements / Honors List */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                Academic Honors & Distinctions
              </h4>
              <div className="space-y-2.5">
                {education.honors.map((honor, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 hover:border-brand-500/30 transition-colors"
                  >
                    <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0 fill-amber-500" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      {honor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Coursework (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Relevant Coursework
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Core curriculum subjects mastered
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {education.keyCoursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 hover:border-brand-500/30 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    {course}
                  </span>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              ))}
            </div>

            {/* Note box */}
            <div className="mt-6 p-4 rounded-2xl bg-brand-50/60 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50 text-xs text-brand-800 dark:text-brand-300 leading-relaxed">
              💡 Maintaining strong theoretical grounding alongside hands-on software development labs and engineering term projects.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
