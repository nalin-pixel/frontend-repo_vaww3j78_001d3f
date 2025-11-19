import { motion } from 'framer-motion'
import { Cpu, ShieldCheck, Zap, Workflow } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: deep dark with gradient glows and subtle grid */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="pointer-events-none absolute -top-48 -left-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-40 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.16),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)'
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
              Purpose‑built AI automations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.7 }}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
            >
              <span className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent [text-shadow:0_10px_40px_rgba(2,6,23,0.2)]">
                Automations that feel premium — and perform
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="mt-5 max-w-2xl text-lg text-slate-300/90"
            >
              Launch secure, end‑to‑end workflows that triage, decide, and execute across your stack. Dark, elegant UX. Enterprise‑grade reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 px-6 py-3 font-semibold text-white shadow-[0_10px_40px_rgba(99,102,241,0.45)] transition hover:shadow-[0_12px_50px_rgba(99,102,241,0.6)]"
              >
                Request a demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                See capabilities
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.7 }}
              className="mt-7 grid max-w-xl grid-cols-2 gap-3 text-sm text-slate-300/85"
            >
              {[
                { icon: Cpu, label: 'Autonomous agents' },
                { icon: Workflow, label: 'No-code orchestration' },
                { icon: ShieldCheck, label: 'SOC 2–ready' },
                { icon: Zap, label: 'Minutes to value' },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon size={16} className="text-slate-200" />
                  </span>
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Premium dark component */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-violet-600/20 blur-xl" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-5 backdrop-blur-xl"
              >
                {/* Top bar */}
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-300/90">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                    Agent: Ops Orchestrator
                  </div>
                  <div className="text-xs text-slate-400">Live</div>
                </div>

                {/* Stacked panels */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {/* Metrics */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs uppercase tracking-widest text-slate-400/80">Throughput</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-100">12.4k</p>
                    <p className="text-xs text-emerald-400">+18% this week</p>
                  </motion.div>

                  {/* Reliability */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs uppercase tracking-widest text-slate-400/80">Reliability</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-100">99.95%</p>
                    <p className="text-xs text-sky-400">SLA backed</p>
                  </motion.div>

                  {/* Flow visual */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 via-slate-900/60 to-slate-950/60 p-4"
                  >
                    <div className="flex items-center gap-3 text-slate-300/90">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                        <Workflow size={16} />
                      </span>
                      <p className="text-sm">Triage ➜ Classify ➜ Enrich ➜ Execute ➜ Log</p>
                    </div>

                    {/* Steps */}
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {['Triage', 'Classify', 'Enrich', 'Execute', 'Log'].map((step, i) => (
                        <div key={step} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center text-xs text-slate-300">
                          <div className={`h-1.5 w-full rounded-full ${i === 3 ? 'bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500' : 'bg-white/10'}`} />
                          <div className="mt-2">{step}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Console */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="col-span-2 rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-[12px] leading-relaxed text-slate-300"
                  >
                    <div className="mb-2 flex items-center gap-2 text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-xs">agent.log</span>
                    </div>
                    <code className="block whitespace-pre-wrap">
{`[08:12:01] triage: inbox → 143 new
[08:12:03] classify: 92 support · 31 sales · 20 ops
[08:12:05] enrich: pulling context from CRM, Notion, GitHub
[08:12:12] execute: 117 tasks completed • 26 escalated (HITL)
[08:12:15] audit: traces synced and signed ✓`}
                    </code>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating accent cards */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="pointer-events-none absolute -right-10 -top-8 hidden w-44 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200/90 shadow-2xl backdrop-blur lg:block"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-600/30 ring-1 ring-white/10">
                    <Cpu size={14} />
                  </span>
                  Token usage: 38% • Cost ↓ 22%
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="pointer-events-none absolute -left-10 -bottom-8 hidden w-48 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200/90 shadow-2xl backdrop-blur lg:block"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/30 to-sky-600/30 ring-1 ring-white/10">
                    <ShieldCheck size={14} />
                  </span>
                  SOC 2 controls enforced
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
