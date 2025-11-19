import { motion } from 'framer-motion'
import { Building2, Headphones, ShoppingCart, Landmark, ArrowRight } from 'lucide-react'

const verticals = [
  {
    icon: Building2,
    title: 'Operations',
    bullets: ['Invoice reconciliation', 'Vendor onboarding', 'QA checks', 'Weekly reporting']
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    bullets: ['Ticket triage', 'Summaries & macros', 'RCA drafts', 'CSAT follow-ups']
  },
  {
    icon: ShoppingCart,
    title: 'Sales',
    bullets: ['Prospect research', 'Personalized emails', 'Meeting notes → CRM', 'Lead qualification']
  },
  {
    icon: Landmark,
    title: 'Finance',
    bullets: ['Expense categorization', 'Anomaly detection', 'Month-end close prep']
  }
]

export default function Showcase(){
  return (
    <section id="solutions" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-bold text-white">
              Built for your team, not a template
            </motion.h2>
            <motion.p initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="mt-4 text-slate-300">
              We map your processes, design human-in-the-loop moments, and ship secure, monitored automations.
            </motion.p>
            <a href="#cta" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10">
              See how it works <ArrowRight size={18} />
            </a>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {verticals.map(({icon:Icon,title,bullets}, idx) => (
              <motion.div key={title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:idx*0.05}} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-400 to-purple-500 text-slate-900 grid place-content-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300/90 list-disc list-inside">
                  {bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
