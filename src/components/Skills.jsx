import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Code, Database, Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Security & Threat Auditing",
      icon: Shield,
      color: "text-blue-400",
      skills: [
        "IAM Auditing", "Risk Scoring", "MITRE ATT&CK Mapping", "OWASP Top 10",
        "Deception Systems", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "OWASP ZAP"
      ]
    },
    {
      title: "Cloud Security & Infrastructure",
      icon: Cloud,
      color: "text-emerald-400",
      skills: [
        "AWS (IAM, EC2, S3, CloudWatch)", "Cloud Security Fundamentals", "Linux Administration"
      ]
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      color: "text-blue-400",
      skills: [
        "Python", "JavaScript", "SQL", "Bash"
      ]
    },
    {
      title: "Data Analytics & Web Platforms",
      icon: Database,
      color: "text-emerald-400",
      skills: [
        "Pandas", "Streamlit", "Plotly", "Matplotlib", "Seaborn",
        "MySQL", "React", "Node.js/Express", "REST API Design", "GeoJSON"
      ]
    },
    {
      title: "Development & Analytics Tools",
      icon: Wrench,
      color: "text-blue-400",
      skills: [
        "Git", "GitHub", "Postman", "VS Code", "Linux CLI"
      ]
    },
    {
      title: "Core Competencies",
      icon: CheckCircle,
      color: "text-emerald-400",
      skills: [
        "English (B2 Professional)", "Self-Directed Learning", "Problem Solving"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#0b132b] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40 mb-3 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Capability Grid</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills & Tools
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: catIdx * 0.08 }}
                className="ent-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-bold text-sm text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-800 font-sans hover:border-blue-500/50 hover:bg-blue-950/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
