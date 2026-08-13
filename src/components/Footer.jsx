import React from 'react';
import { Shield, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F3EFE6] border-t border-[#E5E0D8] text-[#334155] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5E0D8]">
          {/* Brand Logo & Subtitle */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center text-[#0284C7] shadow-sm">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-base font-bold text-[#0F172A] tracking-tight">
                Varun Gandhi
              </span>
              <p className="text-xs text-[#64748B] font-mono font-medium">
                Aspiring Cybersecurity Engineer · Cloud Security & IAM Focus
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#334155] font-semibold font-sans">
            <a href="#about" className="hover:text-[#0284C7] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#0284C7] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#0284C7] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#0284C7] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#0284C7] transition-colors">Education</a>
            <a href="#writeups" className="hover:text-[#0284C7] transition-colors">Writeups</a>
            <a href="#contact" className="hover:text-[#0284C7] transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/varungandhi29"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] text-[#0F172A] hover:text-[#0284C7] hover:border-[#0284C7] transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/varun-gandhi-348716307"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] text-[#0F172A] hover:text-[#16A34A] hover:border-[#16A34A] transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a
              href="mailto:2006varungandhi@gmail.com"
              className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] text-[#0F172A] hover:text-[#0284C7] hover:border-[#0284C7] transition-all shadow-sm"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright & Location Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-medium">
          <div>
            © {currentYear} Varun Gandhi. All rights reserved.
          </div>

          <div className="text-[11px] text-[#64748B]">
            Vadodara, Gujarat, India · Cloud Security Portfolio
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] text-[#0F172A] hover:text-[#0284C7] transition-colors flex items-center gap-1.5 text-xs font-mono font-bold shadow-sm"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
