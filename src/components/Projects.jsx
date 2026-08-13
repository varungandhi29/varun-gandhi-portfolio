import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ExternalLink, CheckCircle2, AlertTriangle, X, Filter } from 'lucide-react';

export default function Projects() {
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

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
      category: "Cloud Security",
      title: "AWS IAM Misconfiguration Scanner",
      subtitle: "Automated Cloud Privilege & Risk Assessment Engine",
      problem: "AWS IAM misconfigurations and overly permissive trust policies create hidden privilege escalation paths that traditional perimeter firewalls cannot detect.",
      whatItDoes: "Audits active AWS IAM infrastructure via boto3 across users, roles, policies, trust relationships, MFA status, and access key age. Calculates risk scores and maps blast-radius graphs.",
      contribution: "Authored 6 custom detection rules mapped to MITRE ATT&CK, built NetworkX one-hop role escalation graph engine, auto-generated Terraform remediation code, and verified engine with 22 passing unit tests.",
      stack: ["Python", "boto3", "NetworkX", "Streamlit", "pytest", "Terraform", "MITRE ATT&CK"],
      githubUrl: "https://github.com/varungandhi29/iam-misconfiguration-scanner",
      githubLabel: "View Repository",
      hasRulesModal: true,
      unitTests: "22 Unit Tests Passed"
    },
    {
      id: "honeyshield-v2",
      category: "Deception Systems",
      title: "HoneyShield v2",
      subtitle: "Deception-Based Intruder Telemetry & Visualization Platform",
      problem: "Traditional intrusion detection systems react after compromised entry rather than proactively luring, fingerprinting, and isolating attackers in decoy environments.",
      whatItDoes: "Simulates vulnerable honeypot assets with dual Admin and Attacker-facing portals to capture malicious payloads, visitor fingerprints, and active sessions in real time.",
      contribution: "Designed v2 microservice architecture (FastAPI + MongoDB), implemented 3D global threat map in Three.js/React Three Fiber, integrated visitor fingerprinting (geoip-lite + ua-parser-js), and built behavioral risk scoring.",
      stack: ["React", "Vite", "Tailwind CSS", "Three.js", "Node.js/Express", "FastAPI", "MongoDB", "Socket.io", "Recharts"],
      githubUrl: "https://github.com/varungandhi29/Honey-Profile-Project",
      githubLabel: "View Repository"
    },
    {
      id: "cloudseclab",
      category: "Security Learning",
      title: "CloudSecLab",
      subtitle: "Interactive Gamified Cloud Security Vulnerability Platform",
      problem: "Aspiring security engineers lack safe, structured, hands-on environments to practice real-world cloud vulnerability exploitation and remediation.",
      whatItDoes: "TryHackMe-style learning environment offering 100 progressive levels covering cloud misconfigurations, IAM exploits, and defense strategies.",
      contribution: "Developed progressive lab scenario engine, automated evaluation validator, instant certificate generation workflow, and competitive student leaderboard.",
      stack: ["Cloud Security", "Gamified Learning", "Full-Stack", "Certificates", "Linux CLI"],
      githubUrl: "https://github.com/varungandhi29",
      githubLabel: "View GitHub Profile"
    }
  ];

  const filterCategories = ['All', 'Cloud Security', 'Deception Systems', 'Security Learning'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-tech-section border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0284C7] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E5E0D8] mb-3 shadow-sm font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>PROJECT_CASE_STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Featured Security Projects
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-[#64748B] mr-1 hidden sm:block" />
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-xl border transition-all ${
                  activeFilter === cat
                    ? 'bg-[#0284C7] text-[#FFFFFF] font-bold border-[#0284C7] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#334155] border-[#E5E0D8] hover:text-[#0284C7] hover:border-[#0284C7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="tech-card rounded-2xl p-7 sm:p-9 space-y-6"
            >
              {/* Card Top Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-[#0284C7] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E5E0D8]">
                  {project.category}
                </span>

                {project.unitTests && (
                  <span className="text-xs font-mono font-bold text-[#16A34A] bg-[#FAF8F5] px-3 py-1 rounded-lg border border-[#16A34A]/40 flex items-center gap-1.5 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {project.unitTests}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  {project.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#0284C7] mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Problem / What it Does / Contribution Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2 border-t border-[#E5E0D8]">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider">
                    PROBLEM STATEMENT:
                  </h4>
                  <p className="text-xs text-[#334155] font-sans leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                    SYSTEM ARCHITECTURE:
                  </h4>
                  <p className="text-xs text-[#334155] font-sans leading-relaxed">
                    {project.whatItDoes}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-bold text-[#16A34A] uppercase tracking-wider">
                    SPECIFIC CONTRIBUTION:
                  </h4>
                  <p className="text-xs text-[#334155] font-sans leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              </div>

              {/* Rules Inspection Trigger Button */}
              {project.hasRulesModal && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowRulesModal(true)}
                    className="w-full text-xs font-mono font-bold text-[#0284C7] bg-[#FAF8F5] hover:bg-[#F3EFE6] border border-[#0284C7]/40 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <AlertTriangle className="w-4 h-4 text-[#D97706]" />
                    Inspect 6 Detection Rules & MITRE ATT&CK Mapping
                  </button>
                </div>
              )}

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#E5E0D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[#0F172A] border border-[#E5E0D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0F172A] hover:text-[#0284C7] transition-colors self-start sm:self-auto"
                >
                  <svg className="w-4 h-4 text-[#0284C7] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="underline underline-offset-4">{project.githubLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Clean Detection Rules Modal */}
        <AnimatePresence>
          {showRulesModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="tech-card max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 space-y-6 bg-[#FFFFFF] shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D8]">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      IAM Misconfiguration Detection Rules
                    </h3>
                    <p className="text-xs font-mono text-[#64748B] mt-0.5">
                      MITRE ATT&CK Mapped Detection Engine
                    </p>
                  </div>
                  <button
                    onClick={() => setShowRulesModal(false)}
                    className="p-1.5 rounded-xl bg-[#FAF8F5] text-[#64748B] hover:text-[#0F172A]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Rules List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {iamRules.map((rule) => (
                    <div
                      key={rule.id}
                      className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#0284C7] font-bold">{rule.id}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          rule.severity === 'CRITICAL' 
                            ? 'bg-rose-100 text-rose-800 border border-rose-300' 
                            : rule.severity === 'HIGH'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {rule.severity}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-[#0F172A]">
                        {rule.name}
                      </h4>
                      <div className="font-mono text-[11px] text-[#16A34A] bg-[#16A34A]/10 px-2 py-0.5 rounded w-max border border-[#16A34A]/30 font-bold">
                        MITRE: {rule.mitre}
                      </div>
                      <p className="text-xs text-[#334155] font-sans pt-1 leading-relaxed">
                        {rule.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#16A34A] font-bold">22 Pytest Unit Tests Passing</span>
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
