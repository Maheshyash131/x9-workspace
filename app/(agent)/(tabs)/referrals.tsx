import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView as SafeSafeArea } from "react-native-safe-area-context";

export default function Referrals() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [property, setProperty] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <SafeSafeArea className="flex-1 bg-[#0B0F2A] px-5 pt-44 ">

        <View className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-white opacity-10 rounded-full" />

        {/* <View className="absolute bottom-14 left-60 w-2 h-2 bg-white rounded-full opacity-60" /> */}
        {/* <View className="absolute bottom-40 right-10 w-2 h-2 bg-white rounded-full opacity-60" /> */}
        {/* <View className="absolute top-32 left-10 w-2 h-2 bg-white rounded-full opacity-60" /> */}

         <View className="absolute bottom-[-100px] left-[-60px] w-[260px] h-[260px] bg-amber-600 opacity-40 rounded-full" />
      
      {/* TITLE */}
      <Text className="text-white text-3xl font-bold mb-1">
        Refer a Client ✨
      </Text>
      <Text className="text-gray-400 mb-6">
        Submit client details for referral
      </Text>

      {/* INPUT: NAME */}
      <View className="bg-[#141B3A] rounded-2xl px-4 py-3 mb-4 flex-row items-center">
        <Ionicons name="person" size={20} color="#a855f7" />
        <TextInput
          placeholder="Client Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
          className="ml-3 text-white flex-1"
        />
      </View>

      {/* INPUT: PHONE */}
      <View className="bg-[#141B3A] rounded-2xl px-4 py-3 mb-4 flex-row items-center">
        <Ionicons name="call" size={20} color="#ec4899" />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          className="ml-3 text-white flex-1"
        />
      </View>

      {/* INPUT: PROPERTY */}
      <View className="bg-[#141B3A] rounded-2xl px-4 py-3 mb-4 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Ionicons name="home" size={20} color="#f59e0b" />
          <TextInput
            placeholder="Property Type (Optional)"
            placeholderTextColor="#888"
            value={property}
            onChangeText={setProperty}
            className="ml-3 text-white"
          />
        </View>
        <Ionicons name="chevron-down" size={18} color="#888" />
      </View>

      {/* INPUT: NOTES */}
      <View className="bg-[#141B3A] rounded-2xl px-4 py-3 mb-6">
        <TextInput
          placeholder="Notes (Optional)"
          placeholderTextColor="#888"
          value={notes}
          onChangeText={setNotes}
          multiline
          className="text-white"
        />
      </View>

      {/* BUTTON */}
      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={["#E6A15A", "#C47A2C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-2xl py-4 items-center"
        >
          <Text className="text-white font-bold text-lg">
            🚀 Submit Referral
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeSafeArea>
  );
}