import {
  Award,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flame,
  Target,
  TrendingUp,
  Trophy,
} from 'lucide-react'

const subjects = [
  {
    name: 'Physics',
    score: 78,
    color: 'blue',
    description: 'Good progress. Keep practicing numerical problems.',
  },
  {
    name: 'Chemistry',
    score: 84,
    color: 'purple',
    description: 'Strong performance across recent sessions.',
  },
  {
    name: 'Mathematics',
    score: 91,
    color: 'cyan',
    description: 'Excellent consistency and problem solving.',
  },
]

const recentPerformance = [
  {
    subject: 'Mathematics',
    topic: 'Calculus',
    date: '18 Aug 2026',
    score: '91%',
    status: 'Excellent',
  },
  {
    subject: 'Chemistry',
    topic: 'Organic Chemistry',
    date: '17 Aug 2026',
    score: '84%',
    status: 'Good',
  },
  {
    subject: 'Physics',
    topic: 'Electromagnetism',
    date: '16 Aug 2026',
    score: '78%',
    status: 'Good',
  },
]

const achievements = [
  {
    title: '7 Day Streak',
    description: 'Studied every day',
    icon: Flame,
    bg: 'bg-blue-50',
    iconBg: 'bg-white',
    text: 'text-blue-600',
  },
  {
    title: 'Score Master',
    description: 'Achieved 90%+ score',
    icon: Target,
    bg: 'bg-purple-50',
    iconBg: 'bg-white',
    text: 'text-purple-600',
  },
  {
    title: '25 Sessions',
    description: 'Completed 25 study sessions',
    icon: Award,
    bg: 'bg-green-50',
    iconBg: 'bg-white',
    text: 'text-green-600',
  },
]

export default function ProgressReport() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <section>
        <p className="text-sm font-bold text-[#3566ff]">
          PROGRESS REPORT
        </p>

        <h1 className="mt-1 text-3xl font-extrabold">
          Your Academic Progress
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Track your progress, consistency and academic achievements.
        </p>
      </section>

      {/* Top Summary */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Overall Score */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Overall Score
              </p>

              <p className="mt-2 text-4xl font-extrabold text-[#3566ff]">
                91
              </p>
            </div>

            <div className="grid size-14 place-items-center rounded-full bg-[#eef3ff]">
              <Trophy className="size-7 text-[#3566ff]" />
            </div>

          </div>

          <p className="mt-3 text-xs font-semibold text-green-600">
            +12% improvement
          </p>
        </div>

        {/* Study Time */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Study Time
              </p>

              <p className="mt-2 text-3xl font-extrabold">
                38.5h
              </p>
            </div>

            <div className="grid size-14 place-items-center rounded-full bg-purple-50">
              <Clock3 className="size-7 text-purple-600" />
            </div>

          </div>

          <p className="mt-3 text-xs text-slate-500">
            This month
          </p>
        </div>

        {/* Sessions */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Sessions
              </p>

              <p className="mt-2 text-3xl font-extrabold">
                24
              </p>
            </div>

            <div className="grid size-14 place-items-center rounded-full bg-green-50">
              <CheckCircle2 className="size-7 text-green-600" />
            </div>

          </div>

          <p className="mt-3 text-xs text-green-600">
            94% completion
          </p>
        </div>

        {/* Current Streak */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Current Streak
              </p>

              <p className="mt-2 text-3xl font-extrabold">
                7 days
              </p>
            </div>

            <div className="grid size-14 place-items-center rounded-full bg-orange-50">
              <Flame className="size-7 text-orange-500" />
            </div>

          </div>

          <p className="mt-3 text-xs text-slate-500">
            Keep the momentum going
          </p>
        </div>

      </section>

      {/* Monthly Progress Timeline */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-xl font-extrabold">
              Monthly Progress Timeline
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your academic improvement over the month.
            </p>
          </div>

          <TrendingUp className="size-5 text-[#3566ff]" />

        </div>

        <div className="mt-8 flex items-center justify-between">

          {[
            ['Week 1', '62%'],
            ['Week 2', '68%'],
            ['Week 3', '76%'],
            ['Week 4', '91%'],
          ].map(([week, score], index) => (

            <div
              key={week}
              className="flex flex-1 flex-col items-center"
            >

              <div className="grid size-10 place-items-center rounded-full bg-[#3566ff] text-sm font-bold text-white">
                {index + 1}
              </div>

              <p className="mt-3 text-sm font-bold">
                {week}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {score}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Performance Comparison + Consistency */}
      <section className="grid gap-6 lg:grid-cols-2">

        {/* Performance Comparison */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6">

          <h2 className="text-xl font-extrabold">
            Performance Comparison
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Compare your subject performance.
          </p>

          <div className="mt-7 space-y-5">

            {subjects.map((subject) => (

              <div key={subject.name}>

                <div className="mb-2 flex justify-between">

                  <span className="text-sm font-bold">
                    {subject.name}
                  </span>

                  <span className="text-sm font-bold text-[#3566ff]">
                    {subject.score}%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-100">

                  <div
                    className="h-full rounded-full bg-[#3566ff]"
                    style={{
                      width: `${subject.score}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Study Consistency */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-extrabold">
                Study Consistency
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your study activity over the last 28 days.
              </p>
            </div>

            <span className="text-xs font-semibold text-slate-400">
              Less → More
            </span>

          </div>

          <div className="mt-6 grid grid-cols-7 gap-2">

            {Array.from({ length: 28 }).map((_, index) => {

              const intensity = [1, 2, 3, 4, 2, 3, 1][index % 7]

              return (
                <div
                  key={index}
                  className={`aspect-square rounded-lg ${
                    intensity === 1
                      ? 'bg-blue-100'
                      : intensity === 2
                        ? 'bg-blue-200'
                        : intensity === 3
                          ? 'bg-blue-400'
                          : 'bg-[#3566ff]'
                  }`}
                />
              )
            })}

          </div>

        </div>

      </section>

      {/* Subjects */}
      <section className="grid gap-5 md:grid-cols-3">

        {subjects.map((subject) => (

          <div
            key={subject.name}
            className="rounded-3xl border border-slate-200 bg-white p-5"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-extrabold">
                {subject.name}
              </h3>

              <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-bold text-[#3566ff]">
                {subject.score}%
              </span>

            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              {subject.description}
            </p>

            <div className="mt-5 h-2 rounded-full bg-slate-100">

              <div
                className="h-full rounded-full bg-[#3566ff]"
                style={{
                  width: `${subject.score}%`,
                }}
              />

            </div>

          </div>

        ))}

      </section>

      {/* AI Recommendations */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6">

        <div className="flex items-center gap-3">

          <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
            <BrainCircuit className="size-5" />
          </div>

          <div>
            <h2 className="text-xl font-extrabold">
              AI Focus Recommendations
            </h2>

            <p className="text-sm text-slate-500">
              Personalised recommendations based on your progress.
            </p>
          </div>

        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl bg-[#f1f5ff] p-5">

            <p className="text-sm font-bold text-[#3566ff]">
              Focus Area
            </p>

            <h3 className="mt-2 font-extrabold">
              Physics
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Spend more time on Electromagnetism and numerical
              problem solving.
            </p>

          </div>

          <div className="rounded-2xl bg-blue-50 p-5">

            <p className="text-sm font-bold text-[#3566ff]">
              Recommended
            </p>

            <h3 className="mt-2 font-extrabold">
              Maintain Mathematics
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your Mathematics performance is excellent. Continue
              your current study routine.
            </p>

          </div>

        </div>

      </section>

      {/* Recent Achievements + Recent Performance */}
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.6fr]">

        {/* Achievements */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-extrabold">
                Recent Achievements
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Keep building your momentum.
              </p>
            </div>

            <Award className="size-5 text-[#3566ff]" />

          </div>

          <div className="mt-6 space-y-3">

            {achievements.map((achievement) => {

              const Icon = achievement.icon

              return (
                <div
                  key={achievement.title}
                  className={`flex items-center gap-3 rounded-2xl p-4 ${achievement.bg}`}
                >

                  <div
                    className={`grid size-10 place-items-center rounded-xl ${achievement.iconBg} ${achievement.text}`}
                  >
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {achievement.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {achievement.description}
                    </p>
                  </div>

                </div>
              )
            })}

          </div>

        </div>

        {/* Recent Performance */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-extrabold">
                Recent Performance
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest completed study sessions.
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-bold text-[#3566ff]">
              View all
              <ChevronRight className="size-4" />
            </button>

          </div>

          <div className="mt-5 overflow-x-auto">

            <table className="w-full min-w-[650px] text-left">

              <thead>

                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">

                  <th className="px-3 py-3">
                    Subject
                  </th>

                  <th className="px-3 py-3">
                    Topic
                  </th>

                  <th className="px-3 py-3">
                    Date
                  </th>

                  <th className="px-3 py-3">
                    Score
                  </th>

                  <th className="px-3 py-3">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {recentPerformance.map((item) => (

                  <tr
                    key={`${item.subject}-${item.topic}`}
                    className="border-b border-slate-50 last:border-0"
                  >

                    <td className="px-3 py-4 text-sm font-bold">
                      {item.subject}
                    </td>

                    <td className="px-3 py-4 text-sm text-slate-500">
                      {item.topic}
                    </td>

                    <td className="px-3 py-4 text-sm text-slate-500">
                      {item.date}
                    </td>

                    <td className="px-3 py-4 text-sm font-bold text-[#3566ff]">
                      {item.score}
                    </td>

                    <td className="px-3 py-4">

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                        {item.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </div>
  )
}