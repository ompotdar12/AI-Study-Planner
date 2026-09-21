import { useEffect, useState } from 'react'
import SplashScreen from '../features/splash/SplashScreen'
import OnboardingFlow from '../features/onboarding/OnboardingFlow'
import DashboardShell from '../features/dashboard/shared/DashboardShell'
import Signup from '../features/auth/Signup'

export default function App() {
  const [screen, setScreen] = useState('splash')

  useEffect(() => {
    const timer = window.setTimeout(() => setScreen('onboarding'), 1800)
    return () => window.clearTimeout(timer)
  }, [])

  if (screen === 'splash') {
    return <SplashScreen />
  }

  if (screen === 'signup') {
    return (
      <Signup
        onBack={() => setScreen('onboarding')}
        onComplete={() => setScreen('dashboard')}
      />
    )
  }

  if (screen === 'onboarding') {
    return (
      <OnboardingFlow
        onComplete={() => setScreen('dashboard')}
        onSignUp={() => setScreen('signup')}
      />
    )
  }

  return <DashboardShell />
}