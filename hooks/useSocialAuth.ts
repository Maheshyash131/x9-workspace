import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useSocialAuth = () => {
  const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleSocialAuth = async (
    strategy: "oauth_google",
    role: "agent" | "architect"
  ) => {
    if (loadingStrategy) return;
    setLoadingStrategy(strategy);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
      });

      if (createdSessionId && setActive) {
        // ✅ Activate session
        await setActive({ session: createdSessionId });

        // ✅ Save role (important)
        await AsyncStorage.setItem("userRole", role);

        // ✅ Role-based navigation
        if (role === "agent") {
          router.replace("/(agent)/home");
        } else {
          router.replace("/(architect)/home");
        }
      } else {
        Alert.alert("Authentication failed", "Try again later.");
      }
    } catch (error) {
      console.log("Error during social authentication:", error);
      Alert.alert("Authentication failed", "Try again later.");
    } finally {
      setLoadingStrategy(null);
    }
  };

  return { handleSocialAuth, loadingStrategy };
};

export default useSocialAuth;