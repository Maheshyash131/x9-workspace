import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import "../../../global.css";

const dummyCustomers = [
  {
    id: "1",
    name: "Rahul Sharma",
    amount: 5000,
    status: "Completed",
  },
  {
    id: "2",
    name: "Anjali Verma",
    amount: 7500,
    status: "Pending",
  },
];

export default function Home() {
  const { user } = useUser();
  const [selected, setSelected] = useState<any>(null);

  return (
    <SafeAreaView className="flex-1 bg-[#0B0F2A] px-5 pt-6">

        <View className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-white opacity-10 rounded-full" />

        <View className="absolute bottom-[-100px] left-[-60px] w-[260px] h-[260px] bg-amber-600 opacity-40 rounded-full" />
      
      {/* HEADER */}
      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-gray-400 text-sm">
            Welcome back,
          </Text>
          <Text className="text-white text-xl font-bold">
            {user?.firstName || "User"}
          </Text>
        </View>

        {/* ADD BUTTON */}
        <TouchableOpacity className="bg-[#141B3A] p-3 rounded-full">
          <Ionicons name="add" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* GOOGLE USER DATA */}
      <View className="bg-[#141B3A] rounded-2xl p-4 mb-5 flex-row items-center">
        {user?.imageUrl ? (
          <Image
            source={{ uri: user.imageUrl }}
            className="w-14 h-14 rounded-full mr-4"
          />
        ) : (
          <View className="w-14 h-14 rounded-full mr-4 bg-[#1f294f] items-center justify-center">
            <Ionicons name="person" size={24} color="white" />
          </View>
        )}

        <View className="flex-1">
          <Text className="text-white font-semibold text-base">
            {user?.fullName || user?.firstName || "Agent User"}
          </Text>
          <Text className="text-gray-400 mt-1">
            {user?.primaryEmailAddress?.emailAddress || "No email found"}
          </Text>
        </View>
      </View>

      {/* DASHBOARD TITLE */}
      <Text className="text-white text-3xl font-bold mb-1 mt-4">
        Dashboard ✨
      </Text>
      <Text className="text-gray-400 mb-6">
        Overview of your activity
      </Text>


      <View className="bg-[#141B3A] rounded-2xl p-5 mb-4">
        <Text className="text-gray-400">Total Earnings</Text>
        <Text className="text-white text-2xl font-bold mt-2">
          ₹ 12500
        </Text>
      </View>

      <View className="bg-[#2A1F1A] rounded-2xl p-5 mb-6">
        <Text className="text-gray-300">Pending Payouts</Text>
        <Text className="text-white text-2xl font-bold mt-2">
          ₹ 5000
        </Text>
      </View>

      {/* RECENT CUSTOMERS */}
      <Text className="text-white text-lg font-semibold mb-3">
        Recent Customers
      </Text>

      <FlatList
        data={dummyCustomers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className="bg-[#141B3A] p-4 rounded-xl mb-3"
          >
            <Text className="text-white font-semibold">
              {item.name}
            </Text>
            <Text className="text-gray-400">
              ₹ {item.amount}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* MODAL FOR DETAILS */}
      <Modal visible={!!selected} transparent animationType="slide">
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-[#141B3A] p-6 rounded-t-2xl">
            <Text className="text-white text-xl font-bold mb-2">
              {selected?.name}
            </Text>

            <Text className="text-gray-400 mb-2">
              Amount: ₹ {selected?.amount}
            </Text>

            <Text className="text-gray-400 mb-4">
              Status: {selected?.status}
            </Text>

            {/* WITHDRAW BUTTON */}
            {selected?.status === "Completed" && (
              <TouchableOpacity className="bg-green-500 p-3 rounded-xl mb-3">
                <Text className="text-white text-center font-bold">
                  Withdraw Amount
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => setSelected(null)}
              className="bg-gray-700 p-3 rounded-xl"
            >
              <Text className="text-white text-center">
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}