import {
  BarChart3,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flame,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  AlertCircle,
  ChevronRight,
} from 'lucide-react'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts'

const performanceData = [
  { week: 'W1', score: 62 },
  { week: 'W2', score: 68 },
  { week: 'W3', score: 74 },
  { week: 'W4', score: 81 },
  { week: 'W5', score: 86 },
  { week: 'W6', score: 91 },
]

const weeklyHours = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3.2 },
  { day: 'Wed', hours: 1.8 },
  { day: 'Thu', hours: 4.1 },
  { day: 'Fri', hours: 3.6 },
  { day: 'Sat', hours: 4.8 },
  { day: 'Sun', hours: 3.9 },
]

const subjects = [
  {
    subject: 'Mathematics',
    score: 86,
    sessions: 8,
    color: 'blue',
    status: 'Strong',
  },
  {
    subject: 'Physics',
    score: 68,
    sessions: 6,
    color: 'purple',
    status: 'Needs Focus',
  },
  {
    subject: 'Computer Science',
    score: 91,
    sessions: 10,
    color: 'green',
    status: 'Excellent',
  },
  {
    subject: 'English',
    score: 78,
    sessions: 5,
    color: 'orange',
    status: 'Good',
  },
]

const recentSessions = [
  {
    subject: 'Computer Science',
    topic: 'Data Structures',
    date: 'Today, 2:00 PM',
    duration: '1 hr',
    score: '94%',
    status: 'Completed',
  },
  {
    subject: 'Mathematics',
    topic: 'Calculus',
    date: 'Yesterday, 9:00 AM',
    duration: '1 hr',
    score: '88%',
    status: 'Completed',
  },
  {
    subject: 'Physics',
    topic: 'Electromagnetism',
    date: 'Yesterday, 11:00 AM',
    duration: '1.5 hrs',
    score: '72%',
    status: 'Completed',
  },
  {
    subject: 'English',
    topic: 'Reading Comprehension',
    date: 'Mon, 5:00 PM',
    duration: '45 min',
    score: '81%',
    status: 'Completed',
  },
]

const heatmap = [
  1, 2, 3, 0, 4, 2, 3,
  2, 4, 1, 3, 4, 2, 3,
  0, 2, 4, 3, 1, 4, 2,
  3, 1, 2, 4, 3, 4, 2,
]

export default function PerformanceAnalytics() {
  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <section>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">

          <div>
            <p className="text-sm font-bold text-[#3566ff]">
              PERFORMANCE ANALYTICS
            </p>

            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
              Understand your performance
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track your study habits, progress and academic performance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
              <CalendarDays className="size-4" />
              This month
            </button>

            <button className="rounded-xl bg-[#3566ff] px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#2855df]">
              Export Report
            </button>
          </div>

        </div>
      </section>

      {/* TOP PERFORMANCE CARD */}
      <section className="grid gap-5 xl:grid-cols-[1.1fr_2fr]">

        {/* Overall Score */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-500">
                OVERALL PERFORMANCE
              </p>

              <h2 className="mt-1 text-xl font-extrabold">
                Excellent progress
              </h2>
            </div>

            <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
              <Target className="size-5" />
            </div>
          </div>

          <div className="mt-7 flex items-center gap-6">

            <div
              className="grid size-32 shrink-0 place-items-center rounded-full"
              style={{
                background:
                  'conic-gradient(#3566ff 0deg 327deg, #e8edff 327deg 360deg)',
              }}
            >
              <div className="grid size-24 place-items-center rounded-full bg-white">
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-slate-900">
                    91
                  </p>
                  <p className="text-xs font-semibold text-slate-400">
                    / 100
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-4 text-green-500" />
                <span className="text-sm font-bold text-green-600">
                  +12% this month
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Your performance is improving consistently. You are
                performing above your previous monthly average.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <Flame className="size-4 text-orange-500" />
                <span className="text-xs font-bold text-slate-600">
                  7 day study streak
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Key Insights */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6">

          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl bg-purple-50 text-purple-600">
              <BrainCircuit className="size-5" />
            </div>

            <div>
              <h2 className="text-xl font-extrabold">
                AI Performance Insights
              </h2>

              <p className="text-sm text-slate-500">
                Personalised analysis from Aura AI
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            <div className="rounded-2xl bg-green-50 p-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-600" />
                <p className="text-sm font-bold text-green-700">
                  Strongest Subject
                </p>
              </div>

              <p className="mt-2 text-lg font-extrabold text-slate-900">
                Computer Science
              </p>

              <p className="mt-1 text-xs text-slate-500">
                91% average score
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="size-4 text-orange-600" />
                <p className="text-sm font-bold text-orange-700">
                  Needs Attention
                </p>
              </div>

              <p className="mt-2 text-lg font-extrabold text-slate-900">
                Physics
              </p>

              <p className="mt-1 text-xs text-slate-500">
                68% average score
              </p>
            </div>

          </div>

          <div className="mt-4 rounded-2xl bg-[#f5f7ff] p-4">
            <p className="text-sm leading-6 text-slate-600">
              <span className="font-bold text-[#3566ff]">
                Aura recommends:
              </span>{' '}
              Add two focused Physics sessions this week and revise
              Electromagnetism before starting a new chapter.
            </p>
          </div>

        </div>

      </section>

      {/* KPI CARDS */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
              <Clock3 className="size-5" />
            </div>

            <TrendingUp className="size-5 text-green-500" />
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Study Time
          </p>

          <h2 className="mt-1 text-2xl font-extrabold">
            23.9 hrs
          </h2>

          <p className="mt-1 text-xs font-semibold text-green-600">
            +12.4% this week
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div className="grid size-11 place-items-center rounded-xl bg-purple-50 text-purple-600">
              <Target className="size-5" />
            </div>

            <TrendingUp className="size-5 text-green-500" />
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Average Score
          </p>

          <h2 className="mt-1 text-2xl font-extrabold">
            81%
          </h2>

          <p className="mt-1 text-xs font-semibold text-green-600">
            +7% improvement
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="grid size-11 place-items-center rounded-xl bg-green-50 text-green-600">
            <CheckCircle2 className="size-5" />
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Sessions Completed
          </p>

          <h2 className="mt-1 text-2xl font-extrabold">
            18 / 24
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            75% completion rate
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="grid size-11 place-items-center rounded-xl bg-orange-50 text-orange-500">
            <Flame className="size-5" />
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Current Streak
          </p>

          <h2 className="mt-1 text-2xl font-extrabold">
            7 days
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Keep your momentum going
          </p>
        </div>

      </section>

      {/* PERFORMANCE TREND + WEEKLY HOURS */}
      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">

        {/* Performance Trend */}
        <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-extrabold">
                Performance Trend
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your academic score over the last six weeks.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
              +29%
            </div>
          </div>

          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient
                    id="performanceGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#3566ff"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="100%"
                      stopColor="#3566ff"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="week"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />

                <YAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#3566ff"
                  strokeWidth={3}
                  fill="url(#performanceGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </section>

        {/* Weekly Hours */}
        <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

          <div>
            <h2 className="text-xl font-extrabold">
              Weekly Study Time
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Hours studied each day.
            </p>
          </div>

          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyHours}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="hours"
                  fill="#7651df"
                  radius={[7, 7, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>
          </div>

        </section>

      </section>

      {/* CONSISTENCY + ACHIEVEMENTS */}
      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">

        {/* Study Consistency */}
        <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold">
                Study Consistency
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your study activity over the last 28 days.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
              Less
              <span className="size-3 rounded-sm bg-slate-100" />
              <span className="size-3 rounded-sm bg-blue-100" />
              <span className="size-3 rounded-sm bg-blue-300" />
              <span className="size-3 rounded-sm bg-blue-500" />
              More
            </div>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-2 sm:gap-3">
            {heatmap.map((level, index) => (
              <div
                key={index}
                className={`aspect-square rounded-md ${
                  level === 0
                    ? 'bg-slate-100'
                    : level === 1
                    ? 'bg-blue-100'
                    : level === 2
                    ? 'bg-blue-200'
                    : level === 3
                    ? 'bg-blue-400'
                    : 'bg-[#3566ff]'
                }`}
                title={`Study activity: ${level}`}
              />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
            <span>4 weeks ago</span>
            <span>This week</span>
          </div>

        </section>

        {/* Achievements */}
        <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold">
                Recent Achievements
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Keep building your momentum.
              </p>
            </div>

            <Award className="size-6 text-[#3566ff]" />
          </div>

          <div className="mt-5 space-y-3">

            <div className="flex items-center gap-3 rounded-2xl bg-blue-50 p-3">
              <div className="grid size-10 place-items-center rounded-xl bg-white text-[#3566ff]">
                <Flame className="size-5" />
              </div>

              <div>
                <p className="text-sm font-bold">
                  7 Day Streak
                </p>
                <p className="text-xs text-slate-500">
                  Studied every day
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-purple-50 p-3">
              <div className="grid size-10 place-items-center rounded-xl bg-white text-purple-600">
                <Target className="size-5" />
              </div>

              <div>
                <p className="text-sm font-bold">
                  Score Master
                </p>
                <p className="text-xs text-slate-500">
                  Achieved 90%+ score
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-3">
              <div className="grid size-10 place-items-center rounded-xl bg-white text-green-600">
                <BookOpen className="size-5" />
              </div>

              <div>
                <p className="text-sm font-bold">
                  25 Sessions
                </p>
                <p className="text-xs text-slate-500">
                  Completed 25 study sessions
                </p>
              </div>
            </div>

          </div>

        </section>

      </section>

      {/* SUBJECT PERFORMANCE */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-extrabold">
              Subject Performance
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Compare your performance across different subjects.
            </p>
          </div>

          <button className="hidden items-center gap-1 text-sm font-bold text-[#3566ff] sm:flex">
            View details
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {subjects.map((item) => (

            <div
              key={item.subject}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    {item.subject}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.sessions} sessions
                  </p>
                </div>

                <div
                  className={`grid size-9 place-items-center rounded-xl ${
                    item.color === 'blue'
                      ? 'bg-blue-100 text-blue-600'
                      : item.color === 'purple'
                      ? 'bg-purple-100 text-purple-600'
                      : item.color === 'green'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  <BookOpen className="size-4" />
                </div>

              </div>

              <div className="mt-5 flex items-end justify-between">
                <p className="text-3xl font-extrabold">
                  {item.score}%
                </p>

                <span
                  className={`rounded-lg px-2 py-1 text-[10px] font-bold ${
                    item.score >= 85
                      ? 'bg-green-100 text-green-700'
                      : item.score >= 75
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                <div
                  className={`h-full rounded-full ${
                    item.color === 'blue'
                      ? 'bg-[#3566ff]'
                      : item.color === 'purple'
                      ? 'bg-[#7651df]'
                      : item.color === 'green'
                      ? 'bg-green-500'
                      : 'bg-orange-500'
                  }`}
                  style={{
                    width: `${item.score}%`,
                  }}
                />
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* AI RECOMMENDATIONS */}
      <section className="rounded-3xl bg-gradient-to-r from-[#315bf2] to-[#7651df] p-6 text-white sm:p-7">

        <div className="flex items-center gap-2">
          <BrainCircuit className="size-5" />

          <p className="text-xs font-bold tracking-wide text-blue-100">
            AURA AI RECOMMENDATIONS
          </p>
        </div>

        <h2 className="mt-2 text-xl font-extrabold">
          Your next best actions
        </h2>

        <div className="mt-5 grid gap-3 md:grid-cols-3">

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm font-bold">
              Focus on Physics
            </p>

            <p className="mt-1 text-xs leading-5 text-blue-100">
              Schedule two additional Physics sessions this week.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm font-bold">
              Maintain your streak
            </p>

            <p className="mt-1 text-xs leading-5 text-blue-100">
              You have studied for 7 consecutive days.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm font-bold">
              Keep your momentum
            </p>

            <p className="mt-1 text-xs leading-5 text-blue-100">
              Your average score improved by 29% recently.
            </p>
          </div>

        </div>

      </section>

      {/* RECENT PERFORMANCE */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold">
              Recent Performance
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your latest completed study sessions.
            </p>
          </div>

          <button className="flex items-center gap-1 text-sm font-bold text-[#3566ff] hover:underline">
            View all
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="mt-5 overflow-x-auto">

          <table className="w-full min-w-[700px] text-left">

            <thead>
              <tr className="border-b border-slate-100 text-xs font-bold uppercase tracking-wide text-slate-400">
                <th className="px-3 py-3">Subject</th>
                <th className="px-3 py-3">Topic</th>
                <th className="px-3 py-3">Date</th>
                <th className="px-3 py-3">Duration</th>
                <th className="px-3 py-3">Score</th>
                <th className="px-3 py-3">Status</th>
              </tr>
            </thead>

            <tbody>

              {recentSessions.map((session) => (

                <tr
                  key={`${session.subject}-${session.topic}`}
                  className="border-b border-slate-50 last:border-0"
                >

                  <td className="px-3 py-4">
                    <p className="text-sm font-bold text-slate-800">
                      {session.subject}
                    </p>
                  </td>

                  <td className="px-3 py-4 text-sm text-slate-500">
                    {session.topic}
                  </td>

                  <td className="px-3 py-4 text-sm text-slate-500">
                    {session.date}
                  </td>

                  <td className="px-3 py-4 text-sm text-slate-500">
                    {session.duration}
                  </td>

                  <td className="px-3 py-4">
                    <span className="font-bold text-[#3566ff]">
                      {session.score}
                    </span>
                  </td>

                  <td className="px-3 py-4">
                    <span className="rounded-lg bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
                      {session.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* FOOTER SUMMARY */}
      <section className="rounded-3xl border border-dashed border-[#b8cdfb] bg-[#f5f7ff] p-5 sm:p-6">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl bg-white text-[#3566ff] shadow-sm">
              <TrendingUp className="size-5" />
            </div>

            <div>
              <p className="text-sm font-extrabold text-slate-900">
                You're on the right track!
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Your performance has improved consistently over the last month.
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-2xl font-extrabold text-[#3566ff]">
              91%
            </p>

            <p className="text-xs font-semibold text-slate-500">
              Current performance
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}