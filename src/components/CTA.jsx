import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#0B0B12] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-[36rem] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-8 sm:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Launch in minutes, not months</h3>
            <p className="mt-4 text-white/80">
              Join thousands of builders shipping faster with Yeah SaaS. No credit card required — cancel anytime.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-violet-500/30 ring-1 ring-white/20 hover:shadow-violet-500/40 transition-all"
              >
                Create your account
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-white/20 transition-colors"
              >
                View pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
