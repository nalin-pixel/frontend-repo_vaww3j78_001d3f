import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Global dark background with unified gradients and subtle grid */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="pointer-events-none absolute -top-40 -left-32 h-[55rem] w-[55rem] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.16),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-64 -right-40 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.14),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Page content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Showcase />
        <CTA />
        <footer className="py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <p className="text-sm">© {new Date().getFullYear()} AutoFlow AI. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-white/90">Privacy</a>
              <a href="#" className="hover:text-white/90">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
