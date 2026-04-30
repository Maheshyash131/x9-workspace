import { Stack } from "expo-router";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";

export default function AgentLayout() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Redirect href="/(auth)/agent-login?role=agent" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}