import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function CTA(){
  return (
    <section id="cta" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_300px_at_80%_0%,rgba(56,189,248,0.25),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl sm:text-4xl font-bold text-white">
                See your manual work vanish in weeks, not months
              </motion.h3>
              <ul className="mt-6 space-y-3 text-slate-300/90">
                {['Discovery & design sprint','Pilot automation shipped','Expand with playbooks','Monitoring & SLAs included'].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="text-cyan-300" size={18} /> {item}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 text-slate-400 text-sm">
                <ShieldCheck size={18} className="text-emerald-300" /> SOC2-ready process, encrypted secrets, role-based approvals
              </div>
            </div>
            <div>
              <form className="grid gap-3">
                <input type="text" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your name" />
                <input type="email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Work email" />
                <textarea rows="4" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="What would you like to automate?" />
                <button type="button" onClick={() => alert('Thanks! We will reach out shortly.')} className="rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.45)] hover:shadow-[0_10px_50px_rgba(56,189,248,0.65)] transition">
                  Request a demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
