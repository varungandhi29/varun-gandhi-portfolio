import React from 'react';
import { motion } from 'framer-motion';
import { Database, CheckCircle2, ShieldCheck, BarChart3 } from 'lucide-react';

export default function StatsBand() {
  const stats = [
    {
      metric: "103,000+",
      label: "Records Processed",
      detail: "OLA Ride-Hailing Analysis",
      icon: Database,
      color: "text-[#38bdf8]"
    },
    {
      metric: "22 Tests",
      label: "Passing Unit Tests",
      detail: "IAM Scanner Suite (pytest)",
      icon: CheckCircle2,
      color: "text-[#34d399]"
    },
    {
      metric: "6 Rules",
      label: "IAM Misconfig Detection",
      detail: "MITRE ATT&CK Mapped",
      icon: ShieldCheck,
      color: "text-[#f59e0b]"
    },
    {
      metric: "21 / 10,324",
      label: "Charts / Shipments",
      detail: "FedEx Logistics EDA",
      icon: BarChart3,
      color: "text-[#38bdf8]"
    }
  ];

  return (
    <section id="stats" className="relative z-20 py-10 bg-tech-alt border-y border-[#334155]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="tech-card p-5 rounded-2xl flex items-center gap-4"
              >
                <div className={`p-3 rounded-xl bg-[#0f172a] border border-[#334155] ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className={`text-2xl font-bold font-mono ${item.color}`}>
                    {item.metric}
                  </div>
                  <div className="text-xs font-bold text-[#f8fafc]">
                    {item.label}
                  </div>
                  <div className="text-[11px] font-mono text-[#cbd5e1]">
                    {item.detail}
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
