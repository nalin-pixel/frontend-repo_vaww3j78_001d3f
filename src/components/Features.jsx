import { motion } from 'framer-motion'
import { Zap, Workflow, FileSpreadsheet, Mail, MessageSquare, Bot, Link2, Clock, Gauge } from 'lucide-react'

const items = [
  {
    icon: Bot,
    title: 'AI Assistants',
    desc: 'Deploy agents that triage tickets, summarize calls, draft replies, and execute actions.'
  },
  {
    icon: Workflow,
    title: 'End-to-end Workflows',
    desc: 'Automations triggered from forms, webhooks, CRMs, or spreadsheets with human-in-the-loop.'
  },
  {
    icon: Link2,
    title: 'Integrations',
    desc: 'Connect your stack: Slack, HubSpot, Notion, Gmail, Sheets, Zapier, Make, custom APIs.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Data Ops',
    desc: 'Clean, validate, and enrich data with LLMs and deterministic rules before it hits your systems.'
  },
  {
    icon: Mail,
    title: 'Outbound at Scale',
    desc: 'Personalized campaigns that research prospects and write emails your team can approve.'
  },
  {
    icon: Clock,
    title: '24/7 Reliability',
    desc: 'Observability, retries, alerts, and SLAs ensure your automations don\'t miss a beat.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_60%,rgba(99,102,241,0.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-bold text-white">
            Automations that compound time
          </motion.h2>
          <motion.p initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="mt-4 text-slate-300">
            We build reliable, production-grade pipelines around LLMs so your team can focus on the work that matters.
          </motion.p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}, i) => (
            <motion.div key={title} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-cyan-400/40">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-900 grid place-content-center shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
