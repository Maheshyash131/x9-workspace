import { Show, useUser } from '@clerk/expo'
import { useClerk } from '@clerk/expo'
import { Link, useLocalSearchParams } from 'expo-router'
import { AuthView, UserButton, UserProfileView } from '@clerk/expo/native'
import { Text, View, Pressable, StyleSheet } from 'react-native'

export default function Page() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const { loginSuccess } = useLocalSearchParams<{ loginSuccess?: string }>()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Show when="signed-in">
        {loginSuccess === '1' && <Text style={styles.success}>Login successful.</Text>}
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
           <Show when="signed-in">
        <View style={{ width: 36, height: 36, borderRadius: 18, overflow: 'hidden' }}>
          <UserButton />
            return <UserProfileView style={{ flex: 1 }} />
        </View>
      </Show>
      </Show>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  success: {
    color: '#2e7d32',
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})