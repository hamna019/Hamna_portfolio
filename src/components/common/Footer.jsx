import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter, Heart, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const { personal, education } = portfolioData;

  return (
    <footer className="relative bg-white dark:bg-dark-card border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio & designation */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white font-black text-lg">
                H
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  {personal.name}
                </h3>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                  {personal.degree}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {personal.tagline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{personal.statusBadge}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors inline-block py-0.5"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-brand-500" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-brand-500" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>{personal.email}</span>
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4 text-brand-500" />
                <span>Twitter / X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Designed & Engineered by</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{personal.name}</span>
            <span>• {education.institution}</span>
          </p>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Built with React, Tailwind & Vite</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 text-slate-600 dark:text-slate-300 transition-all"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
