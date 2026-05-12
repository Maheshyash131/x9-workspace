import { View, Text } from "react-native";

export default function ClientHome() {
  return (
    <View className="flex-1 bg-[#F9F5EE] items-center justify-center px-6">
      <Text className="text-2xl font-semibold text-[#111] mb-2">
        Client Home
      </Text>
      <Text className="text-[#6E6256] text-center">
        Welcome! You have successfully logged in as a client.
      </Text>
    </View>
  );
}
