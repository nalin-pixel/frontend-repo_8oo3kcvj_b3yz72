import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2 text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Rocket className="h-6 w-6 text-violet-400" />
            <span className="font-semibold tracking-wide">Yeah SaaS</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="#"
              className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 ring-1 ring-white/20 hover:shadow-violet-500/40 transition-all"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
