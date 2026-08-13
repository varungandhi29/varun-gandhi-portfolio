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
    <section id="education" className="py-24 relative bg-[#0B0E14] border-t border-[#1E2638]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#3ED6C4] bg-[#12161F] px-3 py-1 rounded-full border border-[#1E2638] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC_BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E6E9EF] tracking-tight">
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
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1E2638]">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#4ADE80] bg-[#0B0E14] px-3 py-1 rounded-full border border-[#4ADE80]/30">
                <Award className="w-3.5 h-3.5" />
                <span>FINAL-YEAR UNDERGRADUATE</span>
              </div>

              <h3 className="text-2xl font-bold text-[#E6E9EF]">
                B.Tech in Information Technology
              </h3>

              <p className="text-sm font-semibold text-[#3ED6C4]">
                Parul University
              </p>

              <div className="flex items-center gap-3 text-xs text-[#8B93A7] font-sans flex-wrap">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8B93A7]" />
                  <span>Vadodara, Gujarat, India</span>
                </div>
                <div className="font-mono text-[#4ADE80] bg-[#0B0E14] px-2.5 py-0.5 rounded border border-[#4ADE80]/30 font-semibold">
                  CGPA: 7.02 / 10
                </div>
              </div>
            </div>

            <div className="font-mono text-xs space-y-2 lg:text-right">
              <div className="inline-flex items-center gap-2 text-[#E6E9EF] bg-[#0B0E14] px-4 py-2 rounded-xl border border-[#1E2638] font-semibold">
                <Calendar className="w-4 h-4 text-[#3ED6C4]" />
                <span>EXPECTED GRADUATION: MAY 2027</span>
              </div>
              
              <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#E8A33D]/30 text-left lg:text-right">
                <span className="text-[#E8A33D] font-bold block text-[11px]">DIPLOMA-TO-DEGREE PATHWAY:</span>
                <span className="text-[#8B93A7] text-[11px] font-sans block mt-0.5">
                  Direct lateral entry admission into 2nd year B.Tech IT following completion of Diploma in IT. First generation tech engineer in family.
                </span>
              </div>
            </div>
          </div>

          {/* Key Coursework Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E6E9EF] uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#3ED6C4]" />
              <span>CORE COMPUTER SCIENCE & SECURITY COURSEWORK:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((subject) => (
                <div
                  key={subject}
                  className="text-xs px-3.5 py-1.5 rounded-xl bg-[#0B0E14] text-[#E6E9EF] border border-[#1E2638] flex items-center gap-2 font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ED6C4]"></span>
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
