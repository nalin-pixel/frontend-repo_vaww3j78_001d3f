import { useState } from 'react'
import { Menu, X, Sparkles, Bot, Workflow, ChevronRight } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300 grid place-content-center text-white shadow-[0_0_30px_rgba(56,189,248,0.6)]">
              <Bot size={20} />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">AutoFlow AI</p>
              <p className="text-slate-300/70 text-xs">Automation Studio</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#cta">Pricing</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white backdrop-blur transition hover:bg-white/20">
              <Sparkles size={18} className="text-cyan-300" />
              <span>Get a Demo</span>
              <ChevronRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/90 p-4 backdrop-blur md:hidden">
            <div className="grid gap-3">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#solutions">Solutions</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#cta">Pricing</NavLink>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white backdrop-blur transition hover:bg-white/20">
                <Workflow size={18} className="text-cyan-300" />
                <span>Get a Demo</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
