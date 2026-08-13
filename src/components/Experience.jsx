import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, BarChart2, Database, Map, ExternalLink } from 'lucide-react';

export default function Experience() {
  const internProjects = [
    {
      title: "OLA Ride Insights",
      category: "Data Engineering & SQL Analytics",
      icon: Database,
      metrics: "103,000+ Records Processed",
      whatWasBuilt: "Engineered automated data cleaning pipeline in Python (Pandas) for 103,000+ ride-hailing records across 20 schema fields. Loaded structured datasets into MySQL, executed relational SQL queries to identify driver cancellation causes and peak booking hours, and delivered an interactive Streamlit executive dashboard.",
      outcome: "Identified key booking cancellation drivers and peak operational windows across ride tiers, delivering actionable recommendations for service dispatch reliability.",
      stack: ["Python", "Pandas", "MySQL", "SQL", "Streamlit"],
      githubUrl: "https://github.com/varungandhi29/OLA-Ride-Insights"
    },
    {
      title: "FedEx Logistics EDA",
      category: "Exploratory Analytics & Visualization",
      icon: BarChart2,
      metrics: "10,324 Records / 21 Visualizations",
      whatWasBuilt: "Conducted statistical exploratory data analysis on 10,324 global shipment records (33 columns). Generated 21 multi-variable charts using Matplotlib, Seaborn, and Plotly to evaluate transport modes, delivery latency, and freight cost distribution.",
      outcome: "Discovered air freight dominance (59% of total shipments) and identified that Sub-Saharan Africa receives 80%+ of volume, pinpointing supply chain optimization targets.",
      stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
      githubUrl: "https://github.com/varungandhi29/FedEx-Logistics-EDA"
    },
    {
      title: "PhonePe Pulse Dashboard",
      category: "Geospatial & Digital Payment Analytics",
      icon: Map,
      metrics: "State-Level Choropleth Maps",
      whatWasBuilt: "Extracted and transformed digital transaction telemetry from PhonePe Pulse data repository. Built an interactive Streamlit geospatial application featuring state-level India choropleth maps, multi-year trend filters, and device brand market share breakdown.",
      outcome: "Enabled granular state-by-state visualization of transaction volume, user registration growth, and mobile device market distribution across India.",
      stack: ["Python", "Streamlit", "Pandas", "Plotly", "GeoJSON"],
      githubUrl: "https://github.com/varungandhi29/PhonePe_Pulse_Project"
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-tech-alt border-t border-[#D6CFB5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0D9488] bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D6CFB5] mb-3 shadow-sm font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>INDUSTRY_EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Work Experience Timeline
          </h2>
        </div>

        {/* Experience Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="tech-card p-7 sm:p-9 rounded-2xl space-y-8"
        >
          {/* Role Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D6CFB5]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0D9488] mb-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]"></span>
                <span>Internship · 7th Semester</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Data Analyst Intern — Inovexia
              </h3>
              <p className="text-xs font-mono text-[#64748B] mt-1 font-medium">
                3 End-to-End Analytics, Data Engineering & Visualization Workstreams
              </p>
            </div>

            <div className="text-xs font-mono text-[#15803D] bg-[#F6F3E7] px-4 py-2 rounded-xl border border-[#15803D]/40 flex items-center gap-2 self-start md:self-auto shadow-sm font-bold">
              <Calendar className="w-4 h-4 text-[#15803D]" />
              <span>3 Project Workstreams Delivered</span>
            </div>
          </div>

          {/* 3 Workstreams Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="p-5 rounded-2xl bg-[#F6F3E7] border border-[#D6CFB5] flex flex-col justify-between space-y-4 hover:border-[#0D9488] transition-all group shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#0D9488] font-bold">{project.category}</span>
                      <Icon className="w-4 h-4 text-[#64748B]" />
                    </div>

                    <h4 className="text-base font-bold text-[#0F172A] group-hover:text-[#0D9488] transition-colors">
                      {project.title}
                    </h4>

                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#15803D] bg-[#15803D]/10 px-2.5 py-0.5 rounded-md border border-[#15803D]/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {project.metrics}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#D6CFB5] text-xs font-sans">
                      <div>
                        <span className="text-[#D97706] font-mono text-[11px] font-bold block">WHAT WAS BUILT:</span>
                        <p className="text-[#334155] leading-relaxed mt-0.5">{project.whatWasBuilt}</p>
                      </div>
                      <div>
                        <span className="text-[#15803D] font-mono text-[11px] font-bold block">OUTCOME & METRIC:</span>
                        <p className="text-[#334155] leading-relaxed mt-0.5">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stack & Repo Link */}
                  <div className="space-y-3 pt-3 border-t border-[#D6CFB5]">
                    <div className="flex flex-wrap gap-1">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#FDFBF7] text-[#0F172A] border border-[#D6CFB5]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0F172A] hover:text-[#0D9488] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-[#0D9488] fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span className="underline underline-offset-2">View Repository</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
