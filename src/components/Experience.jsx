import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, BarChart2, Database, Map, ExternalLink, TrendingUp } from 'lucide-react';

export default function Experience() {
  const internProjects = [
    {
      title: "OLA Ride Insights",
      category: "Data Cleaning & SQL Analytics",
      icon: Database,
      metrics: "103,000+ Records Analyzed",
      description: "Cleaned and structured 103,000+ ride-hailing records (20 fields) with Pandas, loaded data into MySQL, wrote SQL queries for booking trends and cancellation causes, and presented insights in Streamlit.",
      stack: ["Python", "Pandas", "MySQL", "SQL", "Streamlit"],
      githubUrl: "https://github.com/varungandhi29/OLA-Ride-Insights"
    },
    {
      title: "FedEx Logistics EDA",
      category: "Exploratory Data Analysis",
      icon: BarChart2,
      metrics: "10,324 Records / 21 Charts",
      description: "Exploratory analysis on 10,324 shipment records (33 columns) with 21 visualizations; identified that air freight dominates 59% of shipments despite higher costs and Sub-Saharan Africa receives 80%+ of total shipment volume.",
      stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
      githubUrl: "https://github.com/varungandhi29/FedEx-Logistics-EDA"
    },
    {
      title: "PhonePe Pulse Dashboard",
      category: "Geospatial & Digital Payments",
      icon: Map,
      metrics: "State Choropleth Map",
      description: "Interactive dashboard evaluating India digital payment data, featuring state-level choropleth map, year/quarter/transaction-type filters, and device-brand analytics.",
      stack: ["Python", "Streamlit", "Pandas", "Plotly", "GeoJSON"],
      githubUrl: "https://github.com/varungandhi29/PhonePe_Pulse_Project"
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#0b132b] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40 mb-3 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Industry Internship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Data Growth
          </h2>
        </div>

        {/* Analytics Growth Visual Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="ent-card rounded-2xl overflow-hidden mb-12 grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-7 p-7 sm:p-9 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Data Growth & Analytics Engineering</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Data Analyst Internship — Inovexia
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Processing 100,000+ ride-hailing & logistics records, engineering SQL pipelines, and building interactive data growth dashboards to drive key operational decision-making.
            </p>
          </div>
          <div className="lg:col-span-5 relative aspect-[16/9] lg:aspect-auto h-full overflow-hidden bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800">
            <img
              src="/assets/growth_analytics.jpg"
              alt="Data Growth and Analytics Illustration"
              className="w-full h-full object-cover filter contrast-[1.05]"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Timeline Projects Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="ent-card p-7 sm:p-9 rounded-2xl space-y-8"
        >
          {/* Role Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>Internship · 7th Semester</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Data Analyst Intern — Inovexia
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Executed 3 end-to-end analytics, data engineering, and visualization projects.
              </p>
            </div>

            <div className="text-xs text-slate-300 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 flex items-center gap-2 self-start md:self-auto font-sans font-semibold shadow-sm">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>3 End-To-End Projects Delivered</span>
            </div>
          </div>

          {/* 3 Projects Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-blue-500/50 transition-all group shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-blue-400">{project.category}</span>
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>

                    <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-500/40 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {project.metrics}
                    </div>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Stack & Repo Link */}
                  <div className="space-y-3 pt-3 border-t border-slate-800">
                    <div className="flex flex-wrap gap-1">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-blue-400 transition-colors font-bold"
                    >
                      <svg className="w-3.5 h-3.5 text-blue-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span className="underline underline-offset-2">View Repository</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
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
