import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, HeartHandshake, Laptop, Flag } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

const typeIcons = {
  Internship: Briefcase,
  Volunteer: HeartHandshake,
  Freelance: Laptop,
  'University Activity': Flag,
};

export const Experience = () => {
  const { experience } = portfolioData;
  const [selectedType, setSelectedType] = useState('all');

  const types = ['all', 'Internship', 'Freelance', 'Volunteer', 'University Activity'];

  const filteredExperience =
    selectedType === 'all'
      ? experience
      : experience.filter((exp) => exp.type === selectedType);

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work & Involvement"
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          title="Practical Experience &"
          gradientWord="Leadership"
          subtitle="A track record spanning industry internships, freelance delivery, student mentorship, and campus leadership."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedType === type
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {type === 'all' ? 'All Experiences' : type}
            </button>
          ))}
        </div>

        {/* Timeline / Card List */}
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {filteredExperience.map((exp, index) => {
              const Icon = typeIcons[exp.type] || Briefcase;
              return (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/40 transition-all duration-300 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                          {exp.organization}
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 text-xs text-slate-500 dark:text-slate-400 sm:text-right">
                      <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-brand-500" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 mb-5">
                    {exp.responsibilities.map((item, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-slate-400 mr-2">
                      Competencies:
                    </span>
                    {exp.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
