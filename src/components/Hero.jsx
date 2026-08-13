import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, FileText, Mail, MapPin, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-36 pb-24 flex items-center justify-center overflow-hidden bg-tech-grid">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-8 flex flex-col items-center">
          
          {/* Domain Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#222d42] border border-[#334155] text-[#2dd4bf] font-mono text-xs shadow-sm"
          >
            <Shield className="w-4 h-4 text-[#2dd4bf]" />
            <span>Aspiring Cybersecurity Engineer — Cloud Security & IAM</span>
          </motion.div>

          {/* Candidate Name */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f8fafc] leading-[1.1]"
          >
            Varun Gandhi
          </motion.h1>

          {/* 2-Sentence Factual positioning Summary */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed max-w-2xl font-normal"
          >
            Final-year B.Tech IT student at Parul University, Vadodara, graduating May 2027. 
            Focused on building practical AWS IAM auditing tools, threat deception platforms, and cloud security labs for critical digital infrastructure.
          </motion.p>

          {/* Location & Academic Meta */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#f8fafc] font-mono"
          >
            <div className="flex items-center gap-2 bg-[#222d42] px-4 py-2 rounded-xl border border-[#334155]">
              <MapPin className="w-4 h-4 text-[#2dd4bf]" />
              <span>Vadodara, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-2 bg-[#222d42] px-4 py-2 rounded-xl border border-[#334155]">
              <GraduationCap className="w-4 h-4 text-[#f59e0b]" />
              <span>Parul University B.Tech IT '27</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="btn-primary text-xs px-6 py-3 rounded-xl flex items-center gap-2 focus:outline-none"
            >
              <Shield className="w-4 h-4" />
              <span>View Case Studies</span>
            </a>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs px-6 py-3 rounded-xl flex items-center gap-2 focus:outline-none"
            >
              <FileText className="w-4 h-4 text-[#2dd4bf]" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="text-xs font-semibold text-[#4ade80] bg-[#222d42] hover:bg-[#2a3750] border border-[#4ade80]/40 px-6 py-3 rounded-xl transition-all flex items-center gap-2 focus:outline-none shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <a
          href="#about"
          className="text-[#cbd5e1] hover:text-[#2dd4bf] transition-colors p-2"
          aria-label="Scroll down to About section"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-[#2dd4bf]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
