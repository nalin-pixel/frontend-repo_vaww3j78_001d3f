import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Background: Spline + dark gradient overlays */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Darkening layers to ensure strong contrast on copy */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/95 mix-blend-multiply" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.25),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(closest-side,rgba(236,72,153,0.18),transparent_70%)] blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-md"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 shadow-[0_0_20px_rgba(147,51,234,0.6)]" />
              AI automations for modern teams
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.8 }}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
            >
              <span className="bg-gradient-to-br from-sky-300 via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
                Ship more with autonomous workflows
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8 }}
              className="mt-5 max-w-2xl text-lg text-slate-300/90"
            >
              Replace repetitive work with reliable AI pipelines that connect your tools, triage requests, and execute tasks end‑to‑end — securely and at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-[0_10px_40px_rgba(99,102,241,0.45)] transition hover:shadow-[0_12px_50px_rgba(99,102,241,0.6)]"
              >
                Get a tailored demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Explore capabilities
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.8 }}
              className="mt-7 flex flex-wrap items-center gap-2 text-xs text-slate-300/80"
            >
              {[
                '24/7 execution',
                'Human-in-the-loop',
                'No-code handoffs',
                'SOC 2–ready',
                'Audit trails',
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur"
                >
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right side visual spacer for large screens */}
          <div className="lg:col-span-4" />
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-14"
        >
          <p className="text-xs uppercase tracking-widest text-slate-400/70">Trusted by teams building the modern world</p>
          <div className="mt-4 grid grid-cols-2 gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
            {['Acme', 'Volt', 'Nimbus', 'Zenith', 'Atlas', 'Quanta'].map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-300/90 backdrop-blur-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
