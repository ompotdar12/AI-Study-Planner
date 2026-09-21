import { useState } from 'react'
import {
  UserRound,
  Bell,
  BookOpen,
  Palette,
  Shield,
  Save,
  Moon,
  Sun,
  Monitor,
  Check,
} from 'lucide-react'

export default function Settings() {
  const [profile, setProfile] = useState({
    name: 'Aura Student',
    email: 'student@example.com',
  })

  const [studyPreferences, setStudyPreferences] = useState({
    dailyGoal: '3',
    preferredTime: 'Evening',
    sessionDuration: '60',
  })

  const [notifications, setNotifications] = useState({
    studyReminder: true,
    aiRecommendations: true,
    progressUpdates: true,
  })

  const [theme, setTheme] = useState('light')
  const [saved, setSaved] = useState(false)

  const handleProfileChange = (e) => {
    const { name, value } = e.target

    setProfile((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handlePreferenceChange = (e) => {
    const { name, value } = e.target

    setStudyPreferences((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const toggleNotification = (name) => {
    setNotifications((current) => ({
      ...current,
      [name]: !current[name],
    }))
  }

  const handleSave = () => {
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 2500)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">

      {/* Page Header */}
      <div>
        <p className="text-sm font-bold text-[#3566ff]">
          SETTINGS
        </p>

        <h1 className="mt-1 text-3xl font-extrabold">
          Manage your preferences
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Personalise your Aura AI study experience.
        </p>
      </div>

      {/* Profile */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
            <UserRound className="size-5" />
          </div>

          <div>
            <h2 className="text-lg font-extrabold">
              Profile
            </h2>

            <p className="text-sm text-slate-500">
              Manage your personal information.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Full Name
            </label>

            <input
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
              placeholder="Enter your email"
            />
          </div>

        </div>
      </section>

      {/* Study Preferences */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
            <BookOpen className="size-5" />
          </div>

          <div>
            <h2 className="text-lg font-extrabold">
              Study Preferences
            </h2>

            <p className="text-sm text-slate-500">
              Configure your daily study routine.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Daily Study Goal
            </label>

            <select
              name="dailyGoal"
              value={studyPreferences.dailyGoal}
              onChange={handlePreferenceChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
            >
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5 hours</option>
              <option value="6">6 hours</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Preferred Study Time
            </label>

            <select
              name="preferredTime"
              value={studyPreferences.preferredTime}
              onChange={handlePreferenceChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Session Duration
            </label>

            <select
              name="sessionDuration"
              value={studyPreferences.sessionDuration}
              onChange={handlePreferenceChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#3566ff] focus:ring-4 focus:ring-[#3566ff]/10"
            >
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
              <option value="120">2 hours</option>
            </select>
          </div>

        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
            <Bell className="size-5" />
          </div>

          <div>
            <h2 className="text-lg font-extrabold">
              Notifications
            </h2>

            <p className="text-sm text-slate-500">
              Choose which notifications you want to receive.
            </p>
          </div>
        </div>

        <div className="space-y-4">

          <NotificationRow
            title="Study Reminders"
            description="Get reminded when it is time to study."
            enabled={notifications.studyReminder}
            onClick={() => toggleNotification('studyReminder')}
          />

          <NotificationRow
            title="AI Recommendations"
            description="Receive personalised recommendations from Aura AI."
            enabled={notifications.aiRecommendations}
            onClick={() => toggleNotification('aiRecommendations')}
          />

          <NotificationRow
            title="Progress Updates"
            description="Get updates about your study progress and goals."
            enabled={notifications.progressUpdates}
            onClick={() => toggleNotification('progressUpdates')}
          />

        </div>
      </section>

      {/* Appearance */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
            <Palette className="size-5" />
          </div>

          <div>
            <h2 className="text-lg font-extrabold">
              Appearance
            </h2>

            <p className="text-sm text-slate-500">
              Choose how Aura AI looks for you.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">

          <ThemeButton
            icon={Sun}
            label="Light"
            active={theme === 'light'}
            onClick={() => setTheme('light')}
          />

          <ThemeButton
            icon={Moon}
            label="Dark"
            active={theme === 'dark'}
            onClick={() => setTheme('dark')}
          />

          <ThemeButton
            icon={Monitor}
            label="System"
            active={theme === 'system'}
            onClick={() => setTheme('system')}
          />

        </div>
      </section>

      {/* Account & Security */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">

        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl bg-[#eef3ff] text-[#3566ff]">
            <Shield className="size-5" />
          </div>

          <div>
            <h2 className="text-lg font-extrabold">
              Account & Security
            </h2>

            <p className="text-sm text-slate-500">
              Manage your account security.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          onClick={() => alert('Password change functionality will be connected later.')}
        >
          Change Password
        </button>

      </section>

      {/* Save */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">

        {saved && (
          <div className="flex items-center gap-2 text-sm font-bold text-green-600">
            <Check className="size-4" />
            Changes saved successfully
          </div>
        )}

        <button
          type="button"
          onClick={handleSave}
          className="primary-button flex items-center justify-center gap-2"
        >
          <Save className="size-4" />
          Save Changes
        </button>

      </div>

    </div>
  )
}

function NotificationRow({
  title,
  description,
  enabled,
  onClick,
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">

      <div>
        <p className="text-sm font-bold text-slate-900">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onClick}
        aria-label={`Toggle ${title}`}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled
            ? 'bg-[#3566ff]'
            : 'bg-slate-300'
        }`}
      >
        <span
          className={`absolute top-1 size-4 rounded-full bg-white shadow-sm transition ${
            enabled
              ? 'left-6'
              : 'left-1'
          }`}
        />
      </button>

    </div>
  )
}

function ThemeButton({
  icon: Icon,
  label,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-3 rounded-2xl border p-4 text-sm font-bold transition ${
        active
          ? 'border-[#3566ff] bg-[#eef3ff] text-[#3566ff]'
          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
      }`}
    >
      <Icon className="size-5" />
      {label}

      {active && (
        <Check className="size-4" />
      )}
    </button>
  )
}