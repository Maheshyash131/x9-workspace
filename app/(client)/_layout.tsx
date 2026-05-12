import { Stack, Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";
import { ActivityIndicator, View } from "react-native";

export default function ClientLayout() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <View className="flex-1 bg-[#F9F5EE] items-center justify-center">
        <ActivityIndicator size="small" color="#D8A64C" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/client-login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
