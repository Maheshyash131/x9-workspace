import { View } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SSOCallback() {
  const router = useRouter()

  useEffect(() => {
    const go = async () => {
      const role = await AsyncStorage.getItem('userRole')

      if (role === 'agent') {
        router.replace('/(agent)/(tabs)/home')
      } else if (role === 'architect') {
        router.replace('/(architect)/home')
      } else {
        router.replace('/')
      }
    }

    go()
  }, [router])

  return <View />
}