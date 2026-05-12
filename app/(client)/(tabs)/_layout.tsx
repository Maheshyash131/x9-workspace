import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ClientTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0B0F2A",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#f59e0b",
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
    </Tabs>
  );
}
