import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export default function Writeups() {
  const writeups = [
    {
      title: "AWS IAM Privilege Escalation Vector Analysis",
      type: "Technical Research Note",
      badge: "Cloud Security",
      date: "August 2026",
      summary: "Detailed breakdown of the iam:PassRole + ec2:RunInstances privilege escalation pathway. Analyzed policy evaluation logic and authored automated boto3 detection logic with NetworkX role assumption graph mapping.",
      topics: ["AWS IAM", "boto3", "Policy Evaluation", "MITRE ATT&CK T1548.003"],
      linkText: "View Detection Rule Spec"
    },
    {
      title: "Deception Architecture: Telemetry & Fingerprinting",
      type: "System Architecture Note",
      badge: "Deception Systems",
      date: "July 2026",
      summary: "Engineering real-time threat deception platforms using visitor fingerprinting (geoip-lite + ua-parser-js), MongoDB payload logging, and dynamic attacker redirection to honeypot profiles.",
      topics: ["Honeypots", "FastAPI", "Threat Telemetry", "Three.js Map"],
      linkText: "View Architecture Note"
    },
    {
      title: "OWASP Top 10 API Security: BOLA & IAM Controls",
      type: "Security Analysis",
      badge: "Web & API Defense",
      date: "June 2026",
      summary: "Case study analyzing Broken Object Level Authorization (BOLA) vulnerabilities in modern REST APIs, examining token verification patterns, authorization middleware, and mitigation strategies.",
      topics: ["OWASP API #1", "BOLA", "REST Security", "Node.js Middleware"],
      linkText: "View Analysis Spec"
    }
  ];

  return (
    <section id="writeups" className="py-24 relative bg-tech-alt border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D97706] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E5E0D8] mb-3 shadow-sm font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TECHNICAL_WRITEUPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Security Writeups & Research Notes
          </h2>
          <p className="text-xs text-[#334155] font-sans mt-2 max-w-2xl font-medium">
            Compact technical notes on cloud security evaluation, deception architecture, and vulnerability analysis.
          </p>
        </div>

        {/* Writeups Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {writeups.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="tech-card p-6 rounded-2xl flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#D97706] font-bold">{item.badge}</span>
                  <span className="text-[#64748B]">{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#334155] font-sans leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#E5E0D8]">
                <div className="flex flex-wrap gap-1">
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#FAF8F5] text-[#0F172A] border border-[#E5E0D8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#0284C7] hover:underline"
                >
                  <span>{item.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
