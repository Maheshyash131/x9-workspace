import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useUser } from "@clerk/expo";

export default function TabsLayout() {
  const { user } = useUser(); 

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0B0F2A",
          borderTopWidth: 0,
          height: 80,
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#6b7280",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="referrals"
        options={{
          title: "Referrals",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) =>
            user?.imageUrl ? (
              <Image
                source={{ uri: user.imageUrl }}
                style={{
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                }}
              />
            ) : (
              <Ionicons name="person" size={size} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}