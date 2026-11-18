import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, Info } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { ProjectModal } from '../common/ProjectModal';
import { portfolioData } from '../../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Innovative Software"
          gradientWord="Projects"
          subtitle="A showcase of full-stack web applications, campus portals, and developer tools built with clean code and modern frameworks."
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
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-brand-500/40 transition-all duration-300"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-slate-900/90 text-brand-600 dark:text-brand-400 backdrop-blur-md shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick View Button on Image */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-600 hover:text-white"
                      title="Inspect Architecture"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-600 dark:text-brand-400 font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-slate-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Functional Links */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Overview</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
                        aria-label={`Launch ${project.title} live demo`}
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
