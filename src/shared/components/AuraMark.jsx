import { Sparkles } from 'lucide-react'

export default function AuraMark({ className = 'size-8' }) {
  return <span aria-hidden="true" className={`grid place-items-center rounded-xl bg-gradient-to-br from-[#3566ff] to-[#7756ea] text-white ${className}`}><Sparkles className="size-[58%]" /></span>
}
