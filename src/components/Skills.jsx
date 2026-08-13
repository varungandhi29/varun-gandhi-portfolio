import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Code, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Security",
      icon: Cloud,
      color: "text-[#0284C7]",
      skills: [
        "AWS (IAM, EC2, S3, CloudWatch)",
        "IAM Policy Auditing",
        "Privilege Escalation Detection",
        "MITRE ATT&CK Mapping",
        "Terraform Remediation Code",
        "Linux Hardening & Admin"
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "text-[#D97706]",
      skills: [
        "Python (boto3, NetworkX, Pandas)",
        "JavaScript (Node.js, Express)",
        "SQL (MySQL Analytics)",
        "Bash Scripting",
        "Pytest Unit Testing"
      ]
    },
    {
      title: "Security Tools",
      icon: Shield,
      color: "text-[#0284C7]",
      skills: [
        "Deception Platforms",
        "Honeypot Systems",
        "Nmap",
        "Wireshark",
        "Burp Suite",
        "Metasploit",
        "OWASP ZAP",
        "LocalStack"
      ]
    },
    {
      title: "Frameworks & Web",
      icon: Layers,
      color: "text-[#16A34A]",
      skills: [
        "React & Vite",
        "FastAPI",
        "Streamlit",
        "MongoDB",
        "Socket.io",
        "Three.js / React Three Fiber",
        "Plotly & Recharts",
        "Git & GitHub"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-tech-alt border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0284C7] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E5E0D8] mb-3 shadow-sm font-bold">
            <Shield className="w-3.5 h-3.5" />
            <span>CAPABILITY_GRID</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Technical Skills & Tooling
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: catIdx * 0.08 }}
                className="tech-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#E5E0D8]">
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8]">
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-bold text-base text-[#0F172A]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tag Chips Grid */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium px-3 py-1.5 rounded-xl bg-[#FAF8F5] text-[#0F172A] border border-[#E5E0D8] flex items-center gap-2 hover:border-[#0284C7] transition-colors shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
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
