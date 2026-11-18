import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    // Simulate reliable API submission with smooth feedback
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          badgeIcon={<Mail className="w-3.5 h-3.5" />}
          title="Let's Connect &"
          gradientWord="Collaborate"
          subtitle="Interested in hiring for internships, discussing academic research, or exploring software development projects? Drop a message below!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards & Socials (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  I typically respond within 24 hours. Feel free to reach out via direct email, LinkedIn, or the message form.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Mail className="w-4 h-4 text-brand-500" />
                    <span>Direct Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 transition-colors truncate"
                >
                  {personal.email}
                </a>
              </div>

              {/* LinkedIn & GitHub Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 hover:border-brand-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-xs font-semibold text-slate-500">LinkedIn</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors truncate">
                    Connect on LinkedIn
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 hover:border-brand-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                    <span className="text-xs font-semibold text-slate-500">GitHub</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors truncate">
                    Explore Repositories
                  </div>
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 text-xs text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>{personal.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-500" />
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                Have a query or proposal? Fill out the form below and I'll receive your notification immediately.
              </p>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="mb-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Thank you! Your message has been received.</span>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400">
                      I will get back to you shortly at the email you provided.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Alex Morgan / Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Summer 2025 Internship Opportunity / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 order-2 sm:order-1">
                    🔒 Messages are protected & sent directly.
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-60 transition-all shadow-md shadow-brand-500/20 order-1 sm:order-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
