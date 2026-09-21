import { useState } from 'react'
import { ArrowRight, BookOpen, CalendarDays, Check, GraduationCap, Mail, ShieldCheck, Target } from 'lucide-react'
import AuraMark from '../../shared/components/AuraMark'
import ProgressBar from '../../shared/components/ProgressBar'

const subjects = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science']
const exams = ['JEE Main', 'JEE Advanced', 'NEET', 'UPSC', 'IBPS', 'GATE', 'CAT', 'SSC', 'Other']

function Illustration({ icon: Icon, label }) {
  return <div className="relative mx-auto grid size-40 place-items-center rounded-[40%] bg-gradient-to-br from-[#e8e1ff] via-[#f5efff] to-[#dff4ff] sm:size-48"><div className="grid size-20 place-items-center rounded-3xl bg-white shadow-lg"><Icon className="size-10 text-[#3566ff]" /></div><span className="absolute -bottom-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">{label}</span></div>
}

export default function OnboardingFlow({ onComplete, onSignUp }) {
  const [step, setStep] = useState(1)
  const [goal, setGoal] = useState('college')
  const [chosenSubjects, setChosenSubjects] = useState([])
  const [exam, setExam] = useState('')
  const total = 7
  const next = () => step === total ? onComplete() : setStep((value) => value + 1)
  const toggleSubject = (subject) => setChosenSubjects((current) => current.includes(subject) ? current.filter((item) => item !== subject) : [...current, subject])

  const content = {
    1: <><Illustration icon={SparkleBot} label="Your study companion" /><h1>Welcome to Your Aura AI Study Planner</h1><p>Personalised plans, helpful insights, and everything you need to achieve your goals.</p></>,
    2: <><div><h1>Let’s get to know you</h1><p>This helps us personalise your study experience.</p></div><div className="space-y-4"><label>Full name<input placeholder="Enter your full name" /></label><label>Email address<input type="email" placeholder="Enter your email" /></label></div><div className="flex gap-3 rounded-2xl bg-[#e8f8f0] p-4 text-sm text-slate-700"><ShieldCheck className="size-5 shrink-0 text-emerald-600" />Your information is secure and will never be shared.</div></>,
    3: <><div><h1>What’s your goal?</h1><p>Choose what you are preparing for.</p></div><div className="space-y-3">{[['exams', Target, 'I am Preparing for Exams'], ['college', GraduationCap, 'I am Preparing for College']].map(([value, Icon, text]) => <button key={value} type="button" onClick={() => setGoal(value)} className={`choice-card ${goal === value ? 'choice-card-active' : ''}`}><span className="grid size-11 place-items-center rounded-xl bg-[#e6efff] text-[#3566ff]"><Icon className="size-5" /></span><span>{text}</span><span className={`ml-auto size-4 rounded-full border-2 ${goal === value ? 'border-[#3566ff] bg-[#3566ff] ring-2 ring-inset ring-white' : 'border-slate-300'}`} /></button>)}</div></>,
    4: <><div><h1>Select your subjects</h1><p>Choose the subjects you want Aura AI to plan around.</p></div><div className="grid grid-cols-2 gap-3">{subjects.map((subject) => <button type="button" key={subject} onClick={() => toggleSubject(subject)} className={`rounded-2xl border p-4 text-left text-sm font-bold ${chosenSubjects.includes(subject) ? 'border-[#3566ff] bg-[#eef3ff] text-[#1749ca]' : 'border-slate-200 bg-white text-slate-700'}`}>{chosenSubjects.includes(subject) && <Check className="mb-2 size-4" />}{subject}</button>)}</div></>,
    5: <><Illustration icon={BookOpen} label="Exam prep" /><div><h1>Select your exam</h1><p>We’ll tailor the plan to your exam pattern.</p></div><div className="grid grid-cols-3 gap-2">{exams.map((item) => <button key={item} type="button" onClick={() => setExam(item)} className={`rounded-xl border px-2 py-3 text-xs font-bold ${exam === item ? 'border-[#3566ff] bg-[#eef3ff] text-[#1749ca]' : 'border-slate-200 bg-white'}`}>{item}</button>)}</div></>,
    6: <><Illustration icon={CalendarDays} label="Your schedule" /><div><h1>When is your exam?</h1><p>Set a date and tell us how much time you have each week.</p></div><label>Exam date<input type="date" /></label><label>Weekly availability<select defaultValue=""><option value="" disabled>Select study hours</option><option>5–10 hours</option><option>10–20 hours</option><option>20+ hours</option></select></label></>,
    7: <><Illustration icon={Target} label="A personalised plan" /><div><h1>Ready for a quick diagnostic?</h1><p>A short assessment lets Aura AI identify your strengths and build a smarter first plan.</p></div><div className="rounded-2xl border border-[#dce7ff] bg-[#f3f7ff] p-4 text-sm text-slate-700"><strong className="block text-[#1749ca]">About 10 minutes</strong>No pressure—your results are only used to personalise your plan.</div></>
  }[step]

  return <main className="min-h-dvh bg-[#f8f6ff] text-slate-900 lg:grid lg:grid-cols-[minmax(320px,.82fr)_minmax(600px,1.18fr)]">
    <aside className="hidden bg-gradient-to-br from-[#315bf2] to-[#7651df] p-12 text-white lg:flex lg:flex-col lg:justify-between"><div className="flex items-center gap-3 text-xl font-extrabold"><AuraMark /> Aura AI</div><div><span className="text-4xl">✦</span><h2 className="mt-8 max-w-md text-5xl font-extrabold leading-[1.12]">Your study journey, made personal.</h2><p className="mt-7 max-w-sm text-lg leading-relaxed text-blue-100">Build better habits with a study plan that learns how you work.</p></div><p className="text-sm text-blue-100">Made for ambitious learners.</p></aside>
    <section className="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-5 py-5 sm:px-10 sm:py-8 lg:max-w-2xl lg:px-20">
      <header className="flex items-center gap-4"><div className="flex-1"><div className="mb-2 flex justify-between text-xs font-bold text-[#3566ff]"><span>Step {step} of {total}</span><button type="button" onClick={onComplete} className="focus-ring rounded">Skip</button></div><ProgressBar current={step} total={total} /></div></header>
      <div className="flex flex-1 flex-col justify-center py-8"><div className="mx-auto w-full max-w-md space-y-6 onboarding-content">{content}</div></div>
      <button type="button" onClick={next} className="primary-button">{step === total ? 'Create my plan' : step === 1 ? 'Get Started' : 'Continue'}<ArrowRight className="size-5" /></button>
{step === 1 && (
  <p className="mt-4 text-center text-xs text-slate-500">
    New to Aura AI?{' '}
    <button
      type="button"
      onClick={onSignUp}
      className="font-bold text-[#2457ed] focus-ring rounded"
    >
      Sign Up
    </button>
  </p>
)}
    </section>
  </main>
}

function SparkleBot() { return <AuraMark className="size-16 rounded-2xl" /> }
