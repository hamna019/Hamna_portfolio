import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Database, Wrench, Users, Cpu, Check, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Database: Database,
  Wrench: Wrench,
  Users: Users,
  Cpu: Cpu,
};

export const Skills = () => {
  const { categories } = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Competencies"
          badgeIcon={<Cpu className="w-3.5 h-3.5" />}
          title="Skills & Technical"
          gradientWord="Expertise"
          subtitle="A comprehensive toolkit spanning modern frontend development, backend systems, database design, and collaborative engineering."
        />

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                : 'bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                    : 'bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Code2;
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-6 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-brand-500/30 transition-all duration-300"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-900 dark:text-white">
                          {cat.name}
                        </h3>
                        <span className="text-[11px] text-slate-400">
                          {cat.items.length} skills indexed
                        </span>
                      </div>
                    </div>

                    {/* Skill items */}
                    <div className="space-y-4">
                      {cat.items.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              {skill.name}
                            </span>
                            <span className="px-2 py-0.5 rounded-full font-bold text-[10px] bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400">
                              {skill.badge}
                            </span>
                          </div>

                          {/* Proficiency Bar */}
                          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                              className="h-full bg-gradient-to-r from-brand-600 to-cyan-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
