import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

export default function Education() {
  const coursework = [
    "Cybersecurity & Threat Defense",
    "Network Security & Cryptography",
    "Cloud Computing & AWS",
    "Web Development (MERN Stack)",
    "Artificial Intelligence Fundamentals",
    "Database Management Systems (RDBMS)",
    "Operating Systems & Linux Admin"
  ];

  return (
    <section id="education" className="py-24 relative bg-tech-section border-t border-[#334155]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38bdf8] bg-[#1e293b] px-3 py-1 rounded-full border border-[#334155] mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC_BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
            Academic Education
          </h2>
        </div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="tech-card p-7 sm:p-9 rounded-2xl space-y-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#334155]/60">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#34d399] bg-[#0f172a] px-3 py-1 rounded-full border border-[#34d399]/40 shadow-sm">
                <Award className="w-3.5 h-3.5" />
                <span>FINAL-YEAR UNDERGRADUATE</span>
              </div>

              <h3 className="text-2xl font-bold text-[#f8fafc]">
                B.Tech in Information Technology
              </h3>

              <p className="text-sm font-semibold text-[#38bdf8]">
                Parul University
              </p>

              <div className="flex items-center gap-3 text-xs text-[#cbd5e1] font-sans flex-wrap">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#94a3b8]" />
                  <span>Vadodara, Gujarat, India</span>
                </div>
              </div>
            </div>

            <div className="font-mono text-xs space-y-2 lg:text-right">
              <div className="inline-flex items-center gap-2 text-[#f8fafc] bg-[#0f172a] px-4 py-2 rounded-xl border border-[#334155] font-semibold shadow-sm">
                <Calendar className="w-4 h-4 text-[#38bdf8]" />
                <span>EXPECTED GRADUATION: MAY 2027</span>
              </div>
              
              <div className="p-3 rounded-xl bg-[#0f172a] border border-[#f59e0b]/40 text-left lg:text-right shadow-sm">
                <span className="text-[#f59e0b] font-bold block text-[11px]">DIPLOMA-TO-DEGREE PATHWAY:</span>
                <span className="text-[#cbd5e1] text-[11px] font-sans block mt-0.5">
                  Direct lateral entry admission into 2nd year B.Tech IT following completion of Diploma in IT. First generation tech engineer in family.
                </span>
              </div>
            </div>
          </div>

          {/* Key Coursework Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f8fafc] uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#38bdf8]" />
              <span>CORE COMPUTER SCIENCE & SECURITY COURSEWORK:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((subject) => (
                <div
                  key={subject}
                  className="text-xs px-3.5 py-1.5 rounded-xl bg-[#0f172a] text-[#f8fafc] border border-[#334155] flex items-center gap-2 font-mono shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                  {subject}
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
