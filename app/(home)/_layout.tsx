import { useAuth } from '@clerk/expo'
import { Redirect, Stack, useGlobalSearchParams } from 'expo-router'

export default function Layout() {
  const { isSignedIn, isLoaded } = useAuth()
  const { loginSuccess } = useGlobalSearchParams<{ loginSuccess?: string }>()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn && loginSuccess !== '1') {
    return <Redirect href="/(auth)/sign-in" />
  }

  return <Stack />
}