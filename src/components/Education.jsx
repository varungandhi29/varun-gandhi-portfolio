import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

export default function Education() {
  const coursework = [
    "Cybersecurity",
    "Network Security",
    "Cloud Computing",
    "Web Development (MERN)",
    "Artificial Intelligence",
    "Database Management",
    "Operating Systems"
  ];

  return (
    <section id="education" className="py-24 relative bg-light-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education
          </h2>
        </div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="ent-card p-7 sm:p-9 rounded-2xl space-y-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Final-Year Undergraduate</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                B.Tech in Information Technology
              </h3>
              <p className="text-sm font-semibold text-blue-600">
                Parul University
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 font-sans">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>

            <div className="font-sans text-xs">
              <div className="inline-flex items-center gap-2 text-slate-800 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 font-semibold shadow-sm">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Expected Graduation: May 2027</span>
              </div>
            </div>
          </div>

          {/* Key Coursework Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Key Computer Science & Security Coursework:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((subject) => (
                <div
                  key={subject}
                  className="text-xs px-3.5 py-1.5 rounded-xl bg-slate-50 text-slate-800 border border-slate-200 flex items-center gap-2 font-sans font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
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
