import React from 'react';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Target, Briefcase, MapPin, Mail, Phone, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-tech-section border-t border-[#D6CFB5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0D9488] bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D6CFB5] mb-3 shadow-sm font-semibold">
            <Shield className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>PROFILE_DOSSIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 tech-card p-7 sm:p-9 rounded-2xl space-y-6"
          >
            <div className="space-y-4 text-[#334155] leading-relaxed font-sans text-base">
              <p>
                I am a final-year <strong className="text-[#0F172A] font-semibold">B.Tech Information Technology</strong> student 
                at <strong className="text-[#0D9488] font-semibold">Parul University</strong> in Vadodara, Gujarat, India, graduating in May 2027.
              </p>

              <p>
                Following a <strong className="text-[#D97706] font-semibold">Diploma-to-Degree (lateral entry) pathway</strong>, 
                I became the first in my family to pursue a formal degree in engineering and technology. This journey built a pragmatic, 
                hands-on engineering mindset focused on systems execution and real-world utility.
              </p>
              
              <p>
                My technical specialization centers on <strong className="text-[#0F172A]">Cloud Security & Infrastructure Auditing</strong>. 
                I design and build tools for automated <strong className="text-[#0D9488]">AWS IAM misconfiguration detection</strong>, 
                honeypot threat deception, and interactive cloud vulnerability training.
              </p>

              <p>
                My long-term career focus is dedicated to securing India's critical digital infrastructure across the 
                <strong className="text-[#15803D] font-semibold"> fintech, banking, and government sectors</strong>.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="pt-4 border-t border-[#D6CFB5]">
              <div className="p-4 rounded-xl bg-[#F6F3E7] border border-[#15803D]/40 flex items-start gap-3.5 shadow-sm">
                <Briefcase className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#15803D] uppercase tracking-wider">
                    CURRENT AVAILABILITY
                  </h3>
                  <p className="text-xs text-[#334155] mt-1 font-medium">
                    Open to cybersecurity internships, entry-level cloud security roles, and remote opportunities.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Diploma-to-Degree Educational Milestone Card */}
            <div className="tech-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#D97706] font-mono text-xs font-bold">
                <Award className="w-4 h-4" />
                <span>MILESTONE_PATHWAY</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">
                Diploma-to-Degree (Lateral Entry)
              </h3>
              <p className="text-xs text-[#334155] font-sans leading-relaxed">
                Completed Diploma in Information Technology before joining B.Tech IT at Parul University in the 2nd year. First generation tech engineer in family.
              </p>
            </div>

            {/* Long-Term Career Target Card */}
            <div className="tech-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#0D9488] font-mono text-xs font-bold">
                <Target className="w-4 h-4" />
                <span>CAREER_OBJECTIVE</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">
                Cloud Security Engineer (India)
              </h3>
              <p className="text-xs text-[#334155] font-sans leading-relaxed">
                Dedicated to cloud defense, IAM policy auditing, and threat deception for fintech, banking, and government networks.
              </p>
            </div>

            {/* Location & Contact Info */}
            <div className="tech-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#0F172A] font-mono text-xs font-bold">
                <MapPin className="w-4 h-4 text-[#0D9488]" />
                <span>LOCATION & DIRECT CHANNELS</span>
              </div>
              <div className="text-xs text-[#334155] space-y-2 font-sans">
                <div className="text-[#0F172A] font-medium">Vadodara, Gujarat, India</div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                  <a href="mailto:2006varungandhi@gmail.com" className="text-[#0D9488] hover:underline font-semibold">2006varungandhi@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#15803D]" />
                  <a href="tel:+919099604679" className="hover:text-[#0F172A] transition-colors font-medium">+91 90996 04679</a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
