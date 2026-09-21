import { useState } from 'react'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import AuraMark from '../../shared/components/AuraMark'

export default function Signup({ onBack, onComplete }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setError('')

    // Signup successful → open dashboard
    onComplete()
  }

  return (
    <main className="min-h-dvh bg-[#f8f6ff] text-slate-900 lg:grid lg:grid-cols-[minmax(320px,.82fr)_minmax(600px,1.18fr)]">

      {/* Left branding section */}
      <aside className="hidden bg-gradient-to-br from-[#315bf2] to-[#7651df] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3 text-xl font-extrabold">
          <AuraMark />
          Aura AI
        </div>

        <div>
          <Sparkles className="mb-6 size-10" />

          <h1 className="max-w-md text-5xl font-extrabold leading-tight">
            Your smarter study journey starts here.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-blue-100">
            Create your Aura AI account and build a personalised study
            experience designed around your goals.
          </p>
        </div>

        <p className="text-sm text-blue-100">
          Made for ambitious learners.
        </p>
      </aside>

      {/* Signup form */}
      <section className="mx-auto flex min-h-dvh w-full max-w-xl flex-col justify-center px-5 py-8 sm:px-10 lg:max-w-2xl lg:px-20">

        <div className="mb-8 lg:hidden">
          <div className="flex items-center gap-3 text-xl font-extrabold text-[#2457ed]">
            <AuraMark />
            Aura AI
          </div>
        </div>

        <div className="mb-8">
          <p className="mb-3 text-sm font-bold text-[#3566ff]">
            START YOUR JOURNEY
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Create your account
          </h2>

          <p className="mt-3 text-slate-500">
            Join Aura AI and make your study journey personal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              Full name
            </span>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              Email address
            </span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              Password
            </span>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              Confirm password
            </span>

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
            />
          </label>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {error}
            </p>
          )}

          <div className="flex items-start gap-3 rounded-2xl bg-[#eef3ff] p-4 text-sm text-slate-600">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#3566ff]" />

            <span>
              Your information is protected and used only to personalise your
              study experience.
            </span>
          </div>

          <button
            type="submit"
            className="primary-button w-full"
          >
            Create Account
            <ArrowRight className="size-5" />
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onBack}
            className="font-bold text-[#2457ed]"
          >
            Sign In
          </button>
        </p>

      </section>
    </main>
  )
}