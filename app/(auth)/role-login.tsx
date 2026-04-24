import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import useSocialAuth from "../../hooks/useSocialAuth";
import "../../global.css";

export default function RoleLogin() {
  const router = useRouter();
  const { role } = useLocalSearchParams();

  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  const [identifier, setIdentifier] = useState(""); // email or businessId
  const [password, setPassword] = useState("");

  const isArchitect = role === "architect";

  return (
    <View className="flex-1 bg-[#050816] px-6 justify-center items-center relative overflow-hidden">

      {/* 🔙 Back */}
      <TouchableOpacity
        className="absolute top-14 left-6 z-20"
        onPress={() => router.back()}
      >
        <Text className="text-white text-lg">← Back</Text>
      </TouchableOpacity>

      {/* 🌕 Top Glow */}
      <View className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-white opacity-10 rounded-full" />

      {/* 🔥 Bottom Glow */}
     <View className="absolute bottom-[-100px] left-[-60px] w-[260px] h-[260px] bg-orange-500 opacity-40 rounded-full" />

      {/* ✨ Dots */}
      <View className="absolute top-32 left-10 w-1 h-1 bg-white rounded-full opacity-60" />
      <View className="absolute top-52 right-16 w-1 h-1 bg-white rounded-full opacity-40" />

      {/* 📦 Content */}
      <View className="items-center w-full z-10">

        {/* Logo */}
        <Image
          source={require("../../assets/icon-v1.png")}
          className="w-24 h-24 mb-6 rounded-2xl"
        />

        {/* Title */}
        <Text className="text-3xl font-bold text-white text-center">
          Login / Sign up
        </Text>

        <Text className="text-3xl font-bold text-orange-400 mt-1">
          with XNine ✨
        </Text>

        <Text className="text-gray-400 mt-3 mb-6 text-center">
          Continue as {role}
        </Text>

        {/* ================= IDENTIFIER ================= */}
        <View className="w-full bg-[#1a1f2e] border border-gray-700 rounded-2xl px-4 py-3 mb-4">
          <TextInput
            placeholder={isArchitect ? "Business ID" : "Email"}
            placeholderTextColor="#888"
            value={identifier}
            onChangeText={setIdentifier}
            className="text-white"
          />
        </View>

        {/* ================= PASSWORD ================= */}
        <View className="w-full bg-[#1a1f2e] border border-gray-700 rounded-2xl px-4 py-3 mb-6">
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="text-white"
          />
        </View>

        {/* LOGIN BUTTON */}
        <TouchableOpacity className="w-full bg-orange-500 py-4 rounded-2xl mb-6">
          <Text className="text-white text-center font-semibold">
            Login →
          </Text>
        </TouchableOpacity>

        {/* ================= DIVIDER ================= */}
        <View className="flex-row items-center w-full mb-6">
          <View className="flex-1 h-[1px] bg-gray-700" />
          <Text className="text-gray-400 mx-3">or sign through</Text>
          <View className="flex-1 h-[1px] bg-gray-700" />
        </View>

        {/* ================= GOOGLE ================= */}
        <TouchableOpacity
          className="w-full bg-[#1a1f2e] border border-gray-700 rounded-2xl py-4 flex-row items-center justify-center mb-4"
          onPress={() => handleSocialAuth("oauth_google")}
        >
          <Image
            source={require("../../assets/google.png")}
            className="w-5 h-5 mr-3"
          />
          <Text className="text-white text-lg font-semibold">
            {loadingStrategy === "oauth_google"
              ? "Signing in..."
              : "Sign in with Google"}
          </Text>
        </TouchableOpacity>

        {/* ================= PHONE ================= */}
        <TouchableOpacity
          className="w-full bg-[#1a1f2e] border border-gray-700 rounded-2xl py-4 flex-row items-center justify-center"
          onPress={() =>
            router.push({
              pathname: "/(auth)/phone-login",
              params: { role },
            })
          }
        >
         <Image
            source={require("../../assets/phone.png")}
            className="w-5 h-5 mr-3"
          />
          <Text className="text-white text-lg font-semibold">
            Sign in with Phone
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}