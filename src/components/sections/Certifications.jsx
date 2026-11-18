import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Sparkles, Trophy } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

export const Certifications = () => {
  const { certifications } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(certifications.map((c) => c.category)))];

  const filteredCerts =
    selectedFilter === 'all'
      ? certifications
      : certifications.filter((c) => c.category === selectedFilter);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials & Honors"
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title="Certifications & Academic"
          gradientWord="Achievements"
          subtitle="Validated proficiencies, competitive hackathon recognitions, and professional vendor certificates."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                selectedFilter === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Credentials' : cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-brand-500/30 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar with Category and Verified Check */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                      {cert.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Title and Issuer */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-3">
                    Issuer: <span className="text-slate-800 dark:text-slate-200 font-semibold">{cert.issuer}</span>
                  </p>

                  {/* Meta: Issue Date & Credential ID */}
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-4 text-xs space-y-1">
                    <div className="text-slate-500 dark:text-slate-400">
                      Issued: <span className="font-medium text-slate-700 dark:text-slate-300">{cert.issueDate}</span>
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 font-mono text-[11px] truncate">
                      ID: <span className="text-slate-700 dark:text-slate-300">{cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Official Credential</span>
                  {cert.verifyUrl && cert.verifyUrl !== '#' ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Institutional Record</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
