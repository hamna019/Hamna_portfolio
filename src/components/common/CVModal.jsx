import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, GraduationCap, Award, Briefcase, Code } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, skills, projects, experience, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const cvText = `
========================================================================
                      ${personal.name.toUpperCase()}
   ${personal.designation} | ${personal.university}
========================================================================
Contact:
• Email: ${personal.email}
• Location: ${personal.location}
• GitHub: ${personal.github}
• LinkedIn: ${personal.linkedin}

------------------------------------------------------------------------
SUMMARY
------------------------------------------------------------------------
${personal.shortBio}

------------------------------------------------------------------------
EDUCATION
------------------------------------------------------------------------
${education.institution}
${education.degree} (${education.department})
Duration: ${education.duration} | Current Standing: ${education.currentStanding}
CGPA: ${education.gpa}

Academic Honors:
${education.honors.map(h => `• ${h}`).join('\n')}

Key Coursework:
${education.keyCoursework.join(', ')}

------------------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------------------
${skills.categories.map(cat => `${cat.name}:\n  ${cat.items.map(i => `${i.name} (${i.badge})`).join(', ')}`).join('\n\n')}

------------------------------------------------------------------------
NOTABLE PROJECTS
------------------------------------------------------------------------
${projects.map(p => `• ${p.title} (${p.technologies.join(', ')})\n  ${p.description}\n  Highlights:\n${p.highlights.map(h => `    - ${h}`).join('\n')}`).join('\n\n')}

------------------------------------------------------------------------
EXPERIENCE & LEADERSHIP
------------------------------------------------------------------------
${experience.map(e => `• ${e.title} - ${e.organization} (${e.period})\n  ${e.description}\n${e.responsibilities.map(r => `    - ${r}`).join('\n')}`).join('\n\n')}

------------------------------------------------------------------------
CERTIFICATIONS & HONORS
------------------------------------------------------------------------
${certifications.map(c => `• ${c.title} - ${c.issuer} (${c.issueDate})\n  Credential ID: ${c.credentialId}`).join('\n')}
========================================================================
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personal.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm print:p-0 print:bg-white print:static">
        {/* Backdrop click area */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-10 print:max-h-none print:shadow-none print:border-none print:m-0"
        >
          {/* Header Action Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b bg-white/95 dark:bg-dark-card/95 backdrop-blur border-slate-200 dark:border-slate-800 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Curriculum Vitae Preview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4 text-brand-500" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={handleDownloadText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
                title="Download formatted text resume"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CV Document Body */}
          <div className="p-6 sm:p-10 font-sans text-slate-800 dark:text-slate-200 leading-relaxed print:text-black">
            {/* Header info */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-black">
                {personal.name}
              </h1>
              <p className="text-brand-600 dark:text-brand-400 font-semibold text-base sm:text-lg mt-1 print:text-indigo-700">
                {personal.designation}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {personal.university} • {education.currentStanding}
              </p>

              <div className="flex flex-wrap gap-y-1 gap-x-4 mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-brand-500" />
                  {personal.email}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                  {personal.location}
                </span>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-500 transition-colors"
                >
                  GitHub: {personal.github.replace('https://', '')}
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-500 transition-colors"
                >
                  LinkedIn: {personal.linkedin.replace('https://', '')}
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                Executive Profile
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {personal.shortBio}
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                Education
              </h3>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {education.institution}
                  </span>
                  <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold">
                    {education.duration}
                  </span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {education.degree} — <span className="font-semibold text-slate-800 dark:text-slate-200">CGPA: {education.gpa}</span>
                </div>
                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Honors: </span>
                  {education.honors.join(' • ')}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                Technical Stack & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skills.categories.map((cat) => (
                  <div key={cat.id} className="p-3 bg-slate-50 dark:bg-slate-900/40 rounded-lg border border-slate-100 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{cat.name}: </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {cat.items.map(i => i.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                Featured Engineering Projects
              </h3>
              <div className="space-y-3">
                {projects.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="border-l-2 border-brand-500 pl-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{proj.title}</span>
                      <span className="text-xs font-mono text-slate-500">{proj.technologies.slice(0, 3).join(', ')}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                Experience & University Leadership
              </h3>
              <div className="space-y-3">
                {experience.slice(0, 3).map((exp) => (
                  <div key={exp.id} className="text-xs">
                    <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-100">
                      <span>{exp.title} — {exp.organization}</span>
                      <span className="text-slate-500">{exp.period}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                Certifications & Achievements
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {certifications.map(c => (
                  <span key={c.id} className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {c.title} ({c.issuer})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
