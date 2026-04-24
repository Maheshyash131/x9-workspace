import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import "../global.css";

export default function RoleSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-[#050816] justify-center items-center px-6 relative overflow-hidden">

      {/* 🌕 Top Right Glow */}
      <View className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-white opacity-10 rounded-full" />

      {/* ✨ Tiny Dots */}
      <View className="absolute top-32 left-10 w-1 h-1 bg-white rounded-full opacity-60" />
      <View className="absolute top-52 right-16 w-1 h-1 bg-white rounded-full opacity-40" />
      <View className="absolute bottom-40 right-10 w-1 h-1 bg-white rounded-full opacity-60" />
      <View className="absolute bottom-30 left-20 w-1 h-1 bg-white rounded-full opacity-60" />
      <View className="absolute bottom-20 left-20 w-1 h-1 bg-white rounded-full opacity-60" />

      {/* 🔥 SINGLE CIRCULAR GLOW (NO SVG, NO BOX) */}
      <View className="absolute bottom-[-100px] left-[-60px] w-[260px] h-[260px] bg-orange-500 opacity-40 rounded-full" />

      {/* 📦 Content */}
      <View className="items-center w-full z-10">

        {/* Logo */}
        <Image
          source={require("../assets/icon-v1.png")}
          className="w-28 h-28 mb-6 rounded-2xl"
        />

        {/* Title */}
        <Text className="text-3xl font-bold text-white text-center">
          Login / Sign up
        </Text>

        <Text className="text-3xl font-bold text-orange-400 mt-1">
          with XNine ✨
        </Text>

        <Text className="text-gray-400 mt-3 mb-10 text-center">
          Choose your role to continue
        </Text>

        {/* Buttons */}
        <View className="w-full">

          {/* Agent */}
          <TouchableOpacity
  className="w-full bg-[#1a1f2e] border border-gray-700 rounded-2xl py-4 mb-4 flex-row items-center justify-center"
  onPress={() =>
    router.push({
      pathname: "/(auth)/role-login",
      params: { role: "agent" },
    })
  }
>
  {/* <Image
    source={require("../assets/agent.png")}
    className="w-14 h-14 mr-3 rounded-xl"
  /> */}
  <Text className="text-white text-lg font-semibold">
    Login as Agent
  </Text>
</TouchableOpacity>

         <TouchableOpacity
  className="w-full bg-[#1a1f2e] border border-gray-700 rounded-2xl py-4 flex-row items-center justify-center"
  onPress={() =>
    router.push({
      pathname: "/(auth)/role-login",
      params: { role: "architect" },
    })
  }
>
  {/* <Image
    source={require("../assets/role.png")}
    className="w-14 h-14 mr-3 rounded-xl "
  /> */}
  <Text className="text-white text-lg font-semibold">
    Login as Architect
  </Text>
</TouchableOpacity>

        </View>
      </View>
    </View>
  );
}