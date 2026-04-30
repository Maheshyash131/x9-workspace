import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView as SafeSafeArea } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const data = [
  { id: "1", name: "Rahul", amount: 2500, status: "Completed" },
  { id: "2", name: "Priya", amount: 2500, status: "Completed" },
];

export default function Earnings() {
  return (
    <SafeSafeArea className="flex-1 bg-[#0B0F2A] px-5 pt-48">

        <View className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-white opacity-10 rounded-full" />
         <View className="absolute bottom-[-100px] left-[-60px] w-[260px] h-[260px] bg-amber-600 opacity-40 rounded-full" />

      {/* TITLE */}
      <Text className="text-white text-3xl font-bold mb-1">
        Earnings ✨
      </Text>
      <Text className="text-gray-400 mb-6">
        Completed referrals & payouts
      </Text>

      {/* TOTAL CARD */}
      <View className="bg-[#141B3A] rounded-2xl p-6 mb-6 items-center">
        <Text className="text-gray-400 mb-2">Total Earnings</Text>
        <Text className="text-white text-3xl font-bold">
          ₹ 5,000
        </Text>
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const isGold = index === 1; // second item highlighted

          return isGold ? (
            <LinearGradient
              colors={["#7A4E2D", "#141B3A"]}
              className="rounded-2xl p-5 mb-4 flex-row justify-between items-center"
            >
              <View>
                <Text className="text-white text-lg font-semibold">
                  {item.name}
                </Text>
                <Text className="text-green-400">
                  {item.status}
                </Text>
              </View>

              <Text className="text-[#F5A623] font-bold text-lg">
                ₹ {item.amount}
              </Text>
            </LinearGradient>
          ) : (
            <View className="bg-[#141B3A] rounded-2xl p-5 mb-4 flex-row justify-between items-center">
              <View>
                <Text className="text-white text-lg font-semibold">
                  {item.name}
                </Text>
                <Text className="text-green-400">
                  {item.status}
                </Text>
              </View>

              <Text className="text-[#F5A623] font-bold text-lg">
                ₹ {item.amount}
              </Text>
            </View>
          );
        }}
      />
    </SafeSafeArea>
  );
}