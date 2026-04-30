import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/expo";
import { LinearGradient } from "expo-linear-gradient";

export default function Profile() {
  const { user } = useUser();

  return (
    <SafeAreaView className="flex-1 bg-[#0B0F2A] pt-20">
      <ScrollView className="px-5 pt-6">

        {/* HEADER */}
        <Text className="text-white text-3xl font-bold mb-1">
          Profile ✨
        </Text>
        <Text className="text-gray-400 mb-6">
          Manage your account
        </Text>

        {/* PROFILE CARD */}
        <View className="bg-[#141B3A] rounded-2xl p-5 items-center mb-6">
          <Image
            source={{ uri: user?.imageUrl }}
            className="w-20 h-20 rounded-full mb-3"
          />

          <Text className="text-white text-lg font-bold">
            {user?.fullName || "No Name"}
          </Text>

          <Text className="text-gray-400 text-sm">
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
        </View>

        {/* STATS */}
        <View className="flex-row justify-between mb-6">
          <View className="bg-[#141B3A] rounded-2xl p-4 flex-1 mr-2 items-center">
            <Text className="text-gray-400 text-sm">Referrals</Text>
            <Text className="text-white text-xl font-bold">12</Text>
          </View>

          <View className="bg-[#141B3A] rounded-2xl p-4 flex-1 ml-2 items-center">
            <Text className="text-gray-400 text-sm">Earnings</Text>
            <Text className="text-white text-xl font-bold">₹ 15K</Text>
          </View>
        </View>

        {/* ACTION ITEMS */}
        <View className="bg-[#141B3A] rounded-2xl mb-4">
          
          <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-700">
            <Ionicons name="person-outline" size={20} color="#fff" />
            <Text className="text-white ml-3 flex-1">
              Edit Profile
            </Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-700">
            <Ionicons name="wallet-outline" size={20} color="#fff" />
            <Text className="text-white ml-3 flex-1">
              Payment Details
            </Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-700">
            <Ionicons name="notifications-outline" size={20} color="#fff" />
            <Text className="text-white ml-3 flex-1">
              Notifications
            </Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-4">
            <Ionicons name="settings-outline" size={20} color="#fff" />
            <Text className="text-white ml-3 flex-1">
              Settings
            </Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
        </View>

        {/* LOGOUT BUTTON */}
        <TouchableOpacity activeOpacity={0.8}
            className="rounded-2xl py-4 items-center bg-amber-600">
            <Text className="text-white font-bold text-lg">
              Logout
            </Text>

        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}