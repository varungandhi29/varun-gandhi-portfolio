import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emailAddress = "2006varungandhi@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name || 'Visitor'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0b132b] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/40 mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & Communication
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Primary Email Card */}
            <div className="ent-card p-7 rounded-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                  <Mail className="w-4 h-4 text-blue-400" />
                  Primary Email
                </span>
                <span className="text-emerald-400 text-xs font-semibold">Direct Inbox</span>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-1">Direct Email Address:</p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base font-bold text-white hover:text-blue-400 transition-colors break-all"
                >
                  {emailAddress}
                </a>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full text-xs font-bold py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-500 text-slate-200 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-blue-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Communication Links */}
            <div className="ent-card p-7 rounded-2xl space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Professional Channels
              </h3>

              <div className="space-y-3">
                <a
                  href="https://github.com/varungandhi29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                    <svg className="w-4 h-4 text-blue-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>github.com/varungandhi29</span>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-blue-400">Open ↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/varun-gandhi-348716307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                    <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>linkedin.com/in/varun-gandhi-348716307</span>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-emerald-400">Connect ↗</span>
                </a>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-bold text-slate-200">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>+91 90996 04679</span>
                  </div>
                  <span className="text-xs text-slate-400 font-normal">Direct</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 ent-card p-7 sm:p-9 rounded-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs">
              <div className="flex items-center gap-2 font-bold text-white">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Send Direct Message</span>
              </div>
              <span className="text-slate-400">Via Native Email</span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="contact-email">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="contact-subject">
                  Subject / Opportunity Title *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Cloud Security Internship Opportunity"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="State your query or opportunity details..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-white" />
                <span className="text-white">Send Message via Email</span>
              </button>
            </form>

            <p className="text-[11px] text-slate-400 text-center font-sans">
              Submitting opens your mail application with prefilled details sent to 2006varungandhi@gmail.com.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
