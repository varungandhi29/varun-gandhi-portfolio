import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Code, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Security",
      icon: Cloud,
      color: "text-[#3ED6C4]",
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
      color: "text-[#E8A33D]",
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
      color: "text-[#3ED6C4]",
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
      color: "text-[#4ADE80]",
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
    <section id="skills" className="py-24 relative bg-[#0B0E14] border-t border-[#1E2638]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#3ED6C4] bg-[#12161F] px-3 py-1 rounded-full border border-[#1E2638] mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>CAPABILITY_GRID</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E6E9EF] tracking-tight">
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
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#1E2638]">
                    <div className="p-2.5 rounded-xl bg-[#0B0E14] border border-[#1E2638]">
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-bold text-base text-[#E6E9EF]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tag Chips Grid */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#0B0E14] text-[#E6E9EF] border border-[#1E2638] flex items-center gap-2 hover:border-[#3ED6C4]/50 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3ED6C4]"></span>
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
