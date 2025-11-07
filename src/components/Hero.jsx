import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0B12]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft radial glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-10 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build the future, today — with Yeah SaaS
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            A cyberpunk‑inspired platform to launch, scale, and automate your product with
            stunning visuals, blazing performance, and delightful developer experience.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-violet-500/30 ring-1 ring-white/20 hover:shadow-violet-500/40 transition-all"
            >
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-white/20 transition-colors"
            >
              Explore features
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-6 text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm">Realtime, serverless, global</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
              <span className="text-sm">Cyber‑grade security</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
