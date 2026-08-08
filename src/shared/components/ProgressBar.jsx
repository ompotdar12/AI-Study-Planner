export default function ProgressBar({ current, total }) {
  return <div className="h-1.5 overflow-hidden rounded-full bg-[#e8e5fb]" aria-label={`Step ${current} of ${total}`} role="progressbar" aria-valuemin="1" aria-valuemax={total} aria-valuenow={current}>
    <div className="h-full rounded-full bg-[#3566ff] transition-all" style={{ width: `${(current / total) * 100}%` }} />
  </div>
}
