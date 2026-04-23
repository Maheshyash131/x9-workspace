import { AuthView } from '@clerk/expo/native'
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function SignInScreen() {
  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false })
  const router = useRouter()

  useEffect(() => {
    if (!isLoaded) {
      return
    }

    if (isSignedIn) {
      router.replace('/(home)')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) {
    return null
  }

  return (
    <AuthView
      mode="signInOrUp"
    />
  )
}