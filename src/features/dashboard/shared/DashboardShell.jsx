import { useState } from 'react'
import {
  BarChart3,
  Bell,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Home,
  Menu,
  Search,
  Settings as SettingsIcon,
  Target,
  TrendingUp,
  UserRound,
  X,
} from 'lucide-react'

import AuraMark from '../../../shared/components/AuraMark'
import StudyPlanner from '../../studyPlanner/StudyPlanner'
import PerformanceAnalytics from '../../performanceAnalytics/PerformanceAnalytics'
import Settings from '../../settings/Settings'
import ProgressReport from '../../progressReport/progressReport'

const items = [
  [Home, 'Dashboard'],
  [CalendarDays, 'Study Planner'],
  [BarChart3, 'Performance Analytics'],
  [BrainCircuit, 'AI Insights'],
  [BarChart3, 'Progress Report'],
  [SettingsIcon, 'Settings'],
]

const dashboardSessions = [
  {
    id: 1,
    subject: 'Mathematics',
    topic: 'Calculus',
    time: '09:00 AM',
    duration: '1 hr',
    completed: true,
  },
  {
    id: 2,
    subject: 'Physics',
    topic: 'Electromagnetism',
    time: '11:00 AM',
    duration: '1.5 hrs',
    completed: false,
  },
  {
    id: 3,
    subject: 'Computer Science',
    topic: 'Data Structures',
    time: '02:00 PM',
    duration: '1 hr',
    completed: false,
  },
]

export default function DashboardShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('Dashboard')

  const handleNavigation = (label) => {
    setActivePage(label)
    setMenuOpen(false)
  }

  const renderDashboard = () => {
    return (
      <div className="space-y-6">

        {/* Welcome */}
        <section>
          <p className="text-sm font-bold text-[#3566ff]">
            AURA AI DASHBOARD
          </p>

          <h1 className="mt-1 text-3xl font-extrabold">
            Good morning 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here is your personalised study overview for today.
          </p>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Today's Sessions
              </p>

              <div className="grid size-10 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
                <CalendarDays className="size-5" />
              </div>
            </div>

            <p className="mt-4 text-3xl font-extrabold">
              4
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Planned for today
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Completed
              </p>

              <div className="grid size-10 place-items-center rounded-xl bg-green-50 text-green-500">
                <CheckCircle2 className="size-5" />
              </div>
            </div>

            <p className="mt-4 text-3xl font-extrabold">
              1
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Session completed today
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Study Time
              </p>

              <div className="grid size-10 place-items-center rounded-xl bg-purple-50 text-purple-500">
                <Clock3 className="size-5" />
              </div>
            </div>

            <p className="mt-4 text-3xl font-extrabold">
              3.5h
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Planned study time
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">
                Weekly Progress
              </p>

              <div className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-500">
                <TrendingUp className="size-5" />
              </div>
            </div>

            <p className="mt-4 text-3xl font-extrabold">
              68%
            </p>

            <p className="mt-1 text-xs text-green-500">
              +12% from last week
            </p>
          </div>

        </section>

        {/* AI Recommendation */}
        <section className="rounded-3xl bg-gradient-to-r from-[#315bf2] to-[#7651df] p-6 text-white">

          <div className="flex items-center gap-2">
            <BrainCircuit className="size-5" />

            <p className="text-xs font-bold tracking-wide text-blue-100">
              AURA AI RECOMMENDATION
            </p>
          </div>

          <h2 className="mt-2 text-xl font-extrabold">
            Focus on Physics today
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-blue-100">
            Based on your recent study activity, Physics needs more
            attention. Complete your Electromagnetism session before
            starting a new topic.
          </p>

          <button
            onClick={() => handleNavigation('Study Planner')}
            className="mt-5 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#315bf2] transition hover:bg-blue-50"
          >
            Open Study Planner
          </button>

        </section>

        {/* Main Dashboard Grid */}
        <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">

          {/* Today's Schedule */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-xl font-extrabold">
                  Today's Schedule
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  1 of 4 sessions completed
                </p>
              </div>

              <button
                onClick={() => handleNavigation('Study Planner')}
                className="text-sm font-bold text-[#3566ff] hover:underline"
              >
                View all
              </button>

            </div>

            <div className="mt-5 space-y-3">

              {dashboardSessions.map((session) => (
                <div
                  key={session.id}
                  className={`flex items-center gap-4 rounded-2xl border p-4 ${
                    session.completed
                      ? 'border-green-100 bg-green-50/40'
                      : 'border-slate-200'
                  }`}
                >

                  <div>
                    {session.completed ? (
                      <CheckCircle2 className="size-6 text-green-500" />
                    ) : (
                      <Target className="size-6 text-[#3566ff]" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">

                    <p
                      className={`font-bold ${
                        session.completed
                          ? 'text-slate-400 line-through'
                          : 'text-slate-900'
                      }`}
                    >
                      {session.subject}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {session.topic}
                    </p>

                  </div>

                  <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
                    <Clock3 className="size-4" />
                    {session.time}
                  </div>

                  <span className="rounded-lg bg-[#eef3ff] px-3 py-1.5 text-xs font-bold text-[#3566ff]">
                    {session.duration}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Progress Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

            <div className="flex items-center gap-3">

              <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
                <TrendingUp className="size-5" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold">
                  Your Progress
                </h2>

                <p className="text-sm text-slate-500">
                  This week's performance
                </p>
              </div>

            </div>

            <div className="mt-7">

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-4xl font-extrabold">
                    68%
                  </p>

                  <p className="mt-1 text-sm text-green-500">
                    Good progress
                  </p>
                </div>

                <p className="text-sm font-bold text-slate-500">
                  17 / 25 sessions
                </p>

              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-[#3566ff]"
                  style={{ width: '68%' }}
                />

              </div>

            </div>

            <button
              onClick={() => handleNavigation('Performance Analytics')}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <BarChart3 className="size-4" />
              View Performance Analytics
            </button>

          </div>

        </section>

        {/* Quick Actions */}
        <section>

          <h2 className="mb-4 text-xl font-extrabold">
            Quick Actions
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <button
              onClick={() => handleNavigation('Study Planner')}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-md"
            >

              <div className="grid size-12 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
                <CalendarDays />
              </div>

              <div>
                <p className="font-bold">
                  Plan Study Session
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Organise today's study
                </p>
              </div>

            </button>

            <button
              onClick={() => handleNavigation('Performance Analytics')}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-md"
            >

              <div className="grid size-12 place-items-center rounded-xl bg-purple-50 text-purple-500">
                <BarChart3 />
              </div>

              <div>
                <p className="font-bold">
                  Check Analytics
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Analyse your performance
                </p>
              </div>

            </button>

            <button
              onClick={() => handleNavigation('AI Insights')}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-md"
            >

              <div className="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-500">
                <BrainCircuit />
              </div>

              <div>
                <p className="font-bold">
                  AI Insights
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Get personalised recommendations
                </p>
              </div>

            </button>

          </div>

        </section>

      </div>
    )
  }

  const renderPage = () => {

    if (activePage === 'Dashboard') {
      return renderDashboard()
    }

    if (activePage === 'Study Planner') {
      return <StudyPlanner />
    }

    if (activePage === 'Performance Analytics') {
      return <PerformanceAnalytics />
    }
    if (activePage === 'Progress Report') {
  return <ProgressReport />
}
    if (activePage === 'Settings') {
  return <Settings />
    }

    return (
      <section className="grid min-h-[calc(100dvh-7rem)] place-items-center">

        <div className="w-full max-w-2xl rounded-3xl border border-dashed border-[#b8cdfb] bg-white p-7 text-center shadow-sm sm:p-12">

          <AuraMark className="mx-auto size-14" />

          <h1 className="mt-5 text-2xl font-extrabold">
            {activePage}
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
            This feature is coming soon.
          </p>

        </div>

      </section>
    )
  }

  return (
    <div className="min-h-dvh bg-[#f7f8fe] text-slate-900 lg:grid lg:grid-cols-[248px_1fr]">

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-72 flex-col border-r border-slate-200 bg-white p-5 transition-transform lg:static lg:w-auto lg:translate-x-0 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Main navigation"
      >

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3 font-extrabold text-[#1749ca]">
            <AuraMark />
            Aura AI
          </div>

          <button
            className="icon-button lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X />
          </button>

        </div>

        <p className="mt-1 text-xs text-slate-500">
          Academic Analytics
        </p>

        <nav className="mt-8 space-y-1">

          {items.map(([Icon, label]) => (
            <button
              key={label}
              type="button"
              onClick={() => handleNavigation(label)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold focus-ring ${
                activePage === label
                  ? 'bg-[#ddebff] text-[#1749ca]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}

        </nav>

        <div className="mt-auto rounded-2xl bg-[#f1f5ff] p-4">

          <div className="flex items-center gap-2">

            <span className="grid size-9 place-items-center rounded-full bg-[#3566ff] text-sm font-bold text-white">
              A
            </span>

            <div>
              <p className="text-sm font-bold">
                Your profile
              </p>

              <p className="text-xs text-slate-500">
                Plan settings
              </p>
            </div>

          </div>

        </div>

      </aside>

      {/* Mobile overlay */}
      {menuOpen && (
        <button
          aria-label="Close navigation overlay"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-20 bg-slate-950/30 lg:hidden"
        />
      )}

      {/* Main application */}
      <div className="min-w-0">

        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-7">

          <div className="flex items-center gap-3">

            <button
              className="icon-button lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
            >
              <Menu />
            </button>

            <div>
              <p className="text-sm font-extrabold sm:text-lg">
                {activePage === 'Dashboard'
                  ? 'Good morning'
                  : activePage}
              </p>

              <p className="hidden text-xs text-slate-500 sm:block">
                {activePage === 'Dashboard'
                  ? 'Your personalised study overview'
                  : 'Aura AI academic workspace'}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2">

            <label className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-400 md:flex">

              <Search className="size-4" />

              <input
                className="w-36 border-0 p-0 text-sm outline-none"
                placeholder="Search analytics…"
              />

            </label>

            <button
              className="icon-button"
              aria-label="Notifications"
            >
              <Bell />
            </button>

            <button
              className="icon-button"
              aria-label="Profile"
            >
              <UserRound />
            </button>

          </div>

        </header>

        {/* Page content */}
        <main className="min-h-[calc(100dvh-4rem)] p-5 sm:p-8">
          {renderPage()}
        </main>

      </div>

    </div>
  )
}
