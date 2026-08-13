import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Writeups', href: '#writeups' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#EDE8D0]/95 backdrop-blur-xl border-b border-[#D6CFB5] shadow-md py-3.5' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-[#FDFBF7] border border-[#D6CFB5] flex items-center justify-center text-[#0D9488] group-hover:border-[#0D9488] transition-all shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-[#0F172A] tracking-tight flex items-center gap-2.5">
                Varun Gandhi
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#FDFBF7] text-[#15803D] border border-[#15803D]/40 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse mr-1.5"></span>
                  Open to Roles
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-mono hidden sm:block font-medium">
                Aspiring Cloud Security Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#334155] hover:text-[#0D9488] transition-colors focus:outline-none"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 focus:outline-none"
            >
              <span>Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#FDFBF7] border border-[#D6CFB5] text-[#334155] hover:text-[#0D9488] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EDE8D0]/98 backdrop-blur-xl border-b border-[#D6CFB5] px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#334155] hover:text-[#0D9488] py-2 border-b border-[#D6CFB5]/60"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full btn-primary text-xs text-center py-2.5 rounded-xl flex items-center justify-center gap-2"
          >
            <span>Download Resume (.PDF)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
