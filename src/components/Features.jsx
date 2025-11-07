import { motion } from "framer-motion";
import { Shield, Zap, Sparkles, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Zero‑Trust Security",
    desc: "End‑to‑end encryption, SSO, and role‑based access baked in.",
    gradient: "from-fuchsia-500 to-violet-600",
  },
  {
    icon: Zap,
    title: "Blazing Performance",
    desc: "Edge‑first compute with sub‑50ms responses across the globe.",
    gradient: "from-violet-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "AI‑Native Workflows",
    desc: "Automate the boring parts with intelligent pipelines.",
    gradient: "from-pink-500 to-fuchsia-600",
  },
  {
    icon: Globe,
    title: "Planet‑Scale",
    desc: "Auto‑scaling infra that grows with your ambitions.",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0B0B12] py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-3xl rounded-full bg-violet-600/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          Everything you need to ship faster
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${f.gradient} opacity-30 blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
