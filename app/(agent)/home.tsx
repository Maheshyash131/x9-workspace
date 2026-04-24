import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter, } from "expo-router";

export default function AgentHome() {
  const router = useRouter();

  useEffect(() => {
    const checkRole = async () => {
      const role = await AsyncStorage.getItem("userRole");

      if (role !== "agent") {
        router.replace("/");
      }
    };

    checkRole();
  }, []);

  return (
    <View>
      <Text>Agent Home</Text>
    </View>
  );
}