import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ExternalLink, ChevronRight, CheckCircle2, AlertTriangle, X } from 'lucide-react';

export default function Projects() {
  const [showRulesModal, setShowRulesModal] = useState(false);

  const iamRules = [
    {
      id: "RULE-01",
      name: "Wildcard Admin Permissions",
      mitre: "T1078.004",
      severity: "CRITICAL",
      desc: "Detects IAM policies containing Action: '*' and Resource: '*' which grant unrestricted cloud control."
    },
    {
      id: "RULE-02",
      name: "Privilege Escalation Paths",
      mitre: "T1548.003",
      severity: "CRITICAL",
      desc: "Identifies permission combinations (e.g. iam:PassRole + ec2:RunInstances) enabling unauthorized root escalation."
    },
    {
      id: "RULE-03",
      name: "Permissive Trust Policies",
      mitre: "T1199",
      severity: "HIGH",
      desc: "Flags role trust relationships allowing external AWS accounts or unverified principal assumption without ExternalId."
    },
    {
      id: "RULE-04",
      name: "Missing MFA on High-Privilege Users",
      mitre: "T1556",
      severity: "HIGH",
      desc: "Scans active IAM users with administrative permissions lacking mandatory Multi-Factor Authentication enforcement."
    },
    {
      id: "RULE-05",
      name: "Stale & Unused Access Keys",
      mitre: "T1078",
      severity: "MEDIUM",
      desc: "Detects programmatic access keys active for >90 days without recent CloudTrail activity."
    },
    {
      id: "RULE-06",
      name: "Inline Policy Overuse",
      mitre: "T1098",
      severity: "MEDIUM",
      desc: "Identifies unmanaged inline policies embedded directly in identities instead of centralized managed policies."
    }
  ];

  const projects = [
    {
      id: "iam-scanner",
      title: "IAM Misconfiguration Scanner",
      subtitle: "AWS Cloud Security Audit Tool",
      badge: "Cloud Security",
      badgeColor: "bg-blue-950/80 text-blue-400 border-blue-500/40",
      description: "Python tool auditing AWS IAM via boto3 across users, roles, policies, trust relationships, MFA status, and access key age. Calculates identity risk scores and visualizes blast-radius graph.",
      highlights: [
        "6 detection rules, each mapped to a specific MITRE ATT&CK technique and severity level",
        "Weighted risk-scoring model + NetworkX 'blast radius' graph mapping one-hop role assumption chains",
        "Auto-generates Terraform remediation code for flagged security issues",
        "Streamlit interactive dashboard + auto-generated PDF executive reports",
        "Validated with 22 passing unit tests (pytest) across detection rules, risk scoring, and graph generation"
      ],
      stack: ["Python", "boto3", "NetworkX", "Streamlit", "pytest", "Terraform"],
      githubUrl: "https://github.com/varungandhi29/iam-misconfiguration-scanner",
      githubLabel: "View Repository",
      hasRulesModal: true,
      unitTests: "22 Unit Tests Passed"
    },
    {
      id: "honeyshield-v2",
      title: "HoneyShield v2",
      subtitle: "Deception-Based Security Visualization Platform",
      badge: "Deception Platform",
      badgeColor: "bg-emerald-950/80 text-emerald-400 border-emerald-500/40",
      description: "Honeypot simulation platform featuring dual Admin and Attacker-facing dashboards for deception-based threat monitoring and intruder behavioral analysis.",
      highlights: [
        "Real-time visitor fingerprinting (IP, geolocation, browser, OS, device type) via geoip-lite and ua-parser-js",
        "Interactive 3D global threat map (Three.js / React Three Fiber) visualizing attack origins",
        "v2 architecture: FastAPI microservice layer, MongoDB storage, Socket.io real-time updates",
        "Behavioral risk scoring engine and honey-profile redirection to lure and isolate attackers",
        "Analytics dashboards (Recharts) tracking active sessions, threat frequency, and risk trends"
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Three.js", "Node.js/Express", "FastAPI", "MongoDB", "Socket.io", "Recharts"],
      githubUrl: "https://github.com/varungandhi29/Honey-Profile-Project",
      githubLabel: "View Repository"
    },
    {
      id: "cloudseclab",
      title: "CloudSecLab",
      subtitle: "Gamified Hands-On Cloud Security Learning Platform",
      badge: "Learning Platform",
      badgeColor: "bg-blue-950/80 text-blue-400 border-blue-500/40",
      description: "TryHackMe-style interactive platform designed for practicing cloud security concepts through progressive, scenario-based labs and automated validation.",
      highlights: [
        "100 progressive levels covering cloud misconfigurations, IAM exploits, and defense mechanisms",
        "Automated lab evaluation engine, instant certificate generation, and competitive leaderboard",
        "Hands-on practice scenarios matching real-world cloud security incident responses"
      ],
      stack: ["Cloud Security", "Gamified Learning", "Full-Stack", "Certificates"],
      githubUrl: "https://github.com/varungandhi29",
      githubLabel: "View GitHub Profile"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#070d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/40 mb-3 shadow-sm">
              <Shield className="w-3.5 h-3.5" />
              <span>Core Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Security Projects
            </h2>
          </div>

          <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 self-start sm:self-auto font-sans shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>3 Security Projects Featured</span>
          </div>
        </div>

        {/* Cloud Security Visual Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="ent-card rounded-2xl overflow-hidden mb-12 grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-7 p-7 sm:p-9 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/40">
              <Shield className="w-3.5 h-3.5" />
              <span>Infrastructure & Cloud Defense</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Cloud Security Architecture & IAM Threat Auditing
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Engineering deception honeypots, automated IAM privilege scanners, and cloud learning platforms to detect, isolate, and audit infrastructure vulnerabilities.
            </p>
          </div>
          <div className="lg:col-span-5 relative aspect-[16/9] lg:aspect-auto h-full overflow-hidden bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800">
            <img
              src="/assets/cloud_security.jpg"
              alt="Cloud Security Infrastructure Illustration"
              className="w-full h-full object-cover filter contrast-[1.05]"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="ent-card rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Header Strip */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  
                  {project.unitTests && (
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/40 flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {project.unitTests}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Main Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Key Architectural Features:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Button for IAM Scanner Rules */}
                {project.hasRulesModal && (
                  <div className="pt-2">
                    <button
                      onClick={() => setShowRulesModal(true)}
                      className="w-full text-xs font-semibold text-blue-300 bg-blue-950/80 hover:bg-blue-900/80 border border-blue-500/40 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <AlertTriangle className="w-4 h-4 text-blue-400" />
                      Inspect 6 Detection Rules & MITRE Mapping
                    </button>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-blue-400 transition-colors group/link"
                  >
                    <svg className="w-4 h-4 text-blue-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span className="underline underline-offset-4">{project.githubLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Clean Detection Rules Modal */}
        <AnimatePresence>
          {showRulesModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="ent-card max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 space-y-6 bg-[#0a101d] shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      IAM Misconfiguration Detection Rules
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      MITRE ATT&CK Mapped Detection Modules
                    </p>
                  </div>
                  <button
                    onClick={() => setShowRulesModal(false)}
                    className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Rules List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {iamRules.map((rule) => (
                    <div
                      key={rule.id}
                      className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-blue-400 font-bold">{rule.id}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          rule.severity === 'CRITICAL' 
                            ? 'bg-rose-950 text-rose-400 border border-rose-500/40' 
                            : rule.severity === 'HIGH'
                            ? 'bg-amber-950 text-amber-400 border border-amber-500/40'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {rule.severity}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-white">
                        {rule.name}
                      </h4>
                      <div className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded w-max border border-emerald-500/40 font-semibold">
                        MITRE: {rule.mitre}
                      </div>
                      <p className="text-xs text-slate-300 font-sans pt-1 leading-relaxed">
                        {rule.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono font-semibold">22 Pytest Unit Tests Passing</span>
                  <button
                    onClick={() => setShowRulesModal(false)}
                    className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
