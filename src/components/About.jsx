import React from 'react';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Target, Briefcase, MapPin, Mail, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-enterprise-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cobalt-400 bg-cobalt-950/60 px-3 py-1 rounded-full border border-cobalt-500/30 mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 ent-card p-7 sm:p-9 rounded-2xl space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-base">
              <p>
                I am a final-year <strong className="text-white font-semibold">B.Tech Information Technology</strong> student 
                at <strong className="text-cobalt-400 font-semibold">Parul University</strong> in Vadodara, Gujarat, India, graduating in May 2027.
              </p>
              
              <p>
                My technical work spans cloud security engineering, data analytics, and full-stack system development. 
                I focus on building practical tools for <strong className="text-white">AWS IAM auditing</strong>, automated risk scoring, deception platforms, 
                and interactive security learning environments.
              </p>

              <p>
                My long-term career goal is to return to India as a <strong className="text-emerald-400 font-semibold">Cloud Security Engineer</strong>, 
                focused on securing infrastructure across the <strong className="text-white">fintech, banking, and government sectors</strong>.
              </p>
            </div>

            {/* Availability Pill */}
            <div className="pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/30 flex items-start gap-3.5">
                <Briefcase className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Current Availability
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
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
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Education Card */}
            <div className="ent-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2.5 text-cobalt-400 font-semibold text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Education</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                B.Tech in Information Technology
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Parul University — Vadodara, Gujarat, India<br />
                <span className="text-slate-300 font-medium">Expected Graduation: May 2027</span>
              </p>
            </div>

            {/* Career Objective Card */}
            <div className="ent-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-xs">
                <Target className="w-4 h-4" />
                <span>Long-Term Objective</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Cloud Security Engineer (India)
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Dedicated to cloud defense, IAM policy auditing, and threat deception for fintech, banking, and government networks.
              </p>
            </div>

            {/* Direct Contact Box */}
            <div className="ent-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2.5 text-slate-300 font-semibold text-xs">
                <MapPin className="w-4 h-4 text-cobalt-400" />
                <span>Location & Direct Contact</span>
              </div>
              <div className="text-xs text-slate-300 space-y-1.5 font-sans">
                <div>Vadodara, Gujarat, India</div>
                <div className="text-slate-400 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cobalt-400" />
                  <a href="mailto:2006varungandhi@gmail.com" className="text-cobalt-400 hover:underline">2006varungandhi@gmail.com</a>
                </div>
                <div className="text-slate-400 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a href="tel:+919099604679" className="hover:text-white transition-colors">+91 90996 04679</a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
