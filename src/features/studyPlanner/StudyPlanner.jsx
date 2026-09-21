import { useState } from 'react'
import {
  CalendarDays,
  Clock3,
  Plus,
  CheckCircle2,
  Circle,
} from 'lucide-react'

const initialTasks = [
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
  {
    id: 4,
    subject: 'English',
    topic: 'Reading Practice',
    time: '05:00 PM',
    duration: '45 min',
    completed: false,
  },
]

export default function StudyPlanner() {
  const [tasks, setTasks] = useState(initialTasks)

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-bold text-[#3566ff]">
            STUDY PLANNER
          </p>

          <h1 className="mt-1 text-3xl font-extrabold">
            Plan your study day
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Organise your subjects, topics and study sessions.
          </p>
        </div>

        <button className="primary-button flex items-center gap-2">
          <Plus className="size-5" />
          Add Study Session
        </button>
      </div>

      {/* Date selector */}
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
        <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
          <CalendarDays />
        </div>

        <div>
          <p className="text-sm font-bold">Today</p>
          <p className="text-xs text-slate-500">
            Your personalised study schedule
          </p>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="rounded-3xl bg-gradient-to-r from-[#315bf2] to-[#7651df] p-6 text-white">
        <p className="text-xs font-bold tracking-wide text-blue-100">
          AURA AI RECOMMENDATION
        </p>

        <h2 className="mt-2 text-xl font-extrabold">
          Focus on Physics today
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
          Based on your recent study activity, Physics needs more attention.
          We recommend completing your Electromagnetism session before
          starting a new topic.
        </p>
      </div>

      {/* Sessions */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold">
              Today's Schedule
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {tasks.filter((task) => task.completed).length} of{' '}
              {tasks.length} sessions completed
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center gap-4 rounded-2xl border p-4 transition ${
                task.completed
                  ? 'border-green-100 bg-green-50/40'
                  : 'border-slate-200 bg-white'
              }`}
            >

              <button
                onClick={() => toggleTask(task.id)}
                className="shrink-0"
                aria-label="Toggle task"
              >
                {task.completed ? (
                  <CheckCircle2 className="size-6 text-green-500" />
                ) : (
                  <Circle className="size-6 text-slate-300" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <p
                  className={`font-bold ${
                    task.completed
                      ? 'text-slate-400 line-through'
                      : 'text-slate-900'
                  }`}
                >
                  {task.subject}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {task.topic}
                </p>
              </div>

              <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
                <Clock3 className="size-4" />
                {task.time}
              </div>

              <span className="rounded-lg bg-[#eef3ff] px-3 py-1.5 text-xs font-bold text-[#3566ff]">
                {task.duration}
              </span>

            </div>
          ))}
        </div>
      </section>

    </div>
  )
}