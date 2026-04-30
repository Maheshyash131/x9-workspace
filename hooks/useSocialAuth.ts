import { useSSO } from "@clerk/expo";
import { useAuth, useClerk } from "@clerk/expo";
import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useSocialAuth = () => {
  const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSocialAuth = async (
    strategy: "oauth_google",
    role: "agent" | "architect"
  ) => {
    if (loadingStrategy) return;

    // If session exists, sign out first so Google account chooser opens again.
    if (isSignedIn) {
      await signOut();
    }

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
          router.replace("/(agent)/(tabs)/home");
        } else {
          router.replace("/(architect)/home");
        }
      }
    } catch (error) {
      console.log("Error during social authentication:", error);
    } finally {
      setLoadingStrategy(null);
    }
  };

  return { handleSocialAuth, loadingStrategy };
};

export default useSocialAuth;