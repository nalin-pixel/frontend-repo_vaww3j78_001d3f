import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950 pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(56,189,248,0.25)]"
            >
              Automate Your Business with AI Assembly Lines
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-lg sm:text-xl text-slate-200/85 max-w-2xl"
            >
              We design custom AI workflows that replace repetitive tasks with fast, reliable automations. Save hours every week across ops, sales, support, and finance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.45)] hover:shadow-[0_10px_50px_rgba(56,189,248,0.65)] transition">
                Get a tailored demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur px-6 py-3 text-white/90 hover:text-white border border-white/10">
                Explore capabilities
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex items-center gap-4 text-slate-300/80"
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/64?img=${i+10}`} alt="avatar" className="h-8 w-8 rounded-full border border-white/20" />
                ))}
              </div>
              <p className="text-sm">Trusted by modern teams to ship faster</p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
