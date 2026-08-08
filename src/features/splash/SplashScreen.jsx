import { Sparkles } from 'lucide-react'
import AuraMark from '../../shared/components/AuraMark'

export default function SplashScreen() {
  return <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-[#0d1830] px-6 text-center text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_78%,rgba(132,91,255,.25),transparent_32%),radial-gradient(circle_at_25%_15%,rgba(40,100,255,.14),transparent_35%)]" />
    <div className="relative flex w-full max-w-sm flex-col items-center">
      <div className="mb-5 grid size-20 place-items-center rounded-3xl bg-white/10 shadow-2xl ring-1 ring-white/15"><AuraMark className="size-12" /></div>
      <h1 className="text-3xl font-extrabold tracking-tight">Aura <span className="text-[#72c5ff]">AI</span></h1>
      <p className="mt-2 text-sm text-slate-300">Academic Excellence Powered by AI</p>
      <div className="absolute -bottom-52 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em] text-slate-400"><Sparkles className="size-3 animate-pulse" /> Initializing core neurons</div>
    </div>
  </main>
}
