import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Phone, MessageSquare, ExternalLink, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage(null);

    try {
      // Send via EmailJS if credentials exist or fallback to mailto dispatch
      const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name || 'Visitor'}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Fallback native trigger
      window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setStatusMessage({ type: 'success', text: 'Message prepared! Opening your mail application to send to 2006varungandhi@gmail.com' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Unable to open mail client automatically. Please email 2006varungandhi@gmail.com directly.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0E14] border-t border-[#1E2638]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#3ED6C4] bg-[#12161F] px-3 py-1 rounded-full border border-[#1E2638] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION_CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E6E9EF] tracking-tight">
            Contact & Connections
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Primary Email Card */}
            <div className="tech-card p-7 rounded-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
                <span className="flex items-center gap-2 text-[#3ED6C4] font-mono font-bold text-xs">
                  <Mail className="w-4 h-4 text-[#3ED6C4]" />
                  PRIMARY EMAIL
                </span>
                <span className="text-[#4ADE80] font-mono text-xs font-medium">Direct Inbox</span>
              </div>

              <div>
                <p className="text-xs text-[#8B93A7] mb-1">Direct Email Address:</p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base font-bold text-[#E6E9EF] hover:text-[#3ED6C4] transition-colors break-all"
                >
                  {emailAddress}
                </a>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full text-xs font-mono font-bold py-2.5 px-3 rounded-xl bg-[#0B0E14] border border-[#1E2638] hover:border-[#3ED6C4]/50 text-[#E6E9EF] flex items-center justify-center gap-2 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#4ADE80]" />
                    <span className="text-[#4ADE80]">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#3ED6C4]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Communication Links */}
            <div className="tech-card p-7 rounded-2xl space-y-4">
              <h3 className="text-xs font-mono font-bold text-[#8B93A7] uppercase tracking-wider">
                PROFESSIONAL CHANNELS
              </h3>

              <div className="space-y-3">
                <a
                  href="https://github.com/varungandhi29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#1E2638] hover:border-[#3ED6C4]/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3 text-xs font-mono font-medium text-[#E6E9EF]">
                    <svg className="w-4 h-4 text-[#3ED6C4] fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>github.com/varungandhi29</span>
                  </div>
                  <span className="text-xs text-[#8B93A7] group-hover:text-[#3ED6C4]">Open ↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/varun-gandhi-348716307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#1E2638] hover:border-[#4ADE80]/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3 text-xs font-mono font-medium text-[#E6E9EF]">
                    <svg className="w-4 h-4 text-[#4ADE80] fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>linkedin.com/in/varun-gandhi-348716307</span>
                  </div>
                  <span className="text-xs text-[#8B93A7] group-hover:text-[#4ADE80]">Connect ↗</span>
                </a>

                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#1E2638] hover:border-[#3ED6C4]/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3 text-xs font-mono font-medium text-[#E6E9EF]">
                    <FileText className="w-4 h-4 text-[#3ED6C4]" />
                    <span>Download Official Resume (.PDF)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8B93A7] group-hover:text-[#3ED6C4]" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Working Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="lg:col-span-7 tech-card p-7 sm:p-9 rounded-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-[#1E2638] pb-4 text-xs font-mono">
              <div className="flex items-center gap-2 font-bold text-[#E6E9EF]">
                <MessageSquare className="w-4 h-4 text-[#3ED6C4]" />
                <span>SEND DIRECT MESSAGE</span>
              </div>
              <span className="text-[#8B93A7]">Email Delivery</span>
            </div>

            {statusMessage && (
              <div className={`p-3.5 rounded-xl border text-xs font-sans ${
                statusMessage.type === 'success'
                  ? 'bg-[#4ADE80]/10 border-[#4ADE80]/40 text-[#4ADE80]'
                  : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
              }`}>
                {statusMessage.text}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-[#8B93A7] mb-1.5" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Aris Thorne / Recruiter"
                    className="w-full bg-[#0B0E14] border border-[#1E2638] rounded-xl px-4 py-2.5 text-sm text-[#E6E9EF] font-sans focus:outline-none focus:border-[#3ED6C4] focus:ring-1 focus:ring-[#3ED6C4] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#8B93A7] mb-1.5" htmlFor="contact-email">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@university.edu or company.com"
                    className="w-full bg-[#0B0E14] border border-[#1E2638] rounded-xl px-4 py-2.5 text-sm text-[#E6E9EF] font-sans focus:outline-none focus:border-[#3ED6C4] focus:ring-1 focus:ring-[#3ED6C4] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#8B93A7] mb-1.5" htmlFor="contact-subject">
                  Subject / Topic *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. MS Admissions Query / Cloud Security Internship"
                  className="w-full bg-[#0B0E14] border border-[#1E2638] rounded-xl px-4 py-2.5 text-sm text-[#E6E9EF] font-sans focus:outline-none focus:border-[#3ED6C4] focus:ring-1 focus:ring-[#3ED6C4] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#8B93A7] mb-1.5" htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="State your query or opportunity details..."
                  className="w-full bg-[#0B0E14] border border-[#1E2638] rounded-xl px-4 py-2.5 text-sm text-[#E6E9EF] font-sans focus:outline-none focus:border-[#3ED6C4] focus:ring-1 focus:ring-[#3ED6C4] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full btn-primary text-xs font-mono font-bold py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{sending ? 'Sending Message...' : 'Send Message via Email'}</span>
              </button>
            </form>

            <p className="text-[11px] text-[#8B93A7] text-center font-mono">
              Submitting opens prefilled email details sent to 2006varungandhi@gmail.com.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
