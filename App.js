import "./ignoreWarnings";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./stacks/HomeStackScreen";
import BlogStackScreen from "./stacks/BlogStackScreen";
import ShoppingListStackScreen from "./stacks/ShoppingListStackScreen"
import PantryStackScreen from "./stacks/PantryStackScreen"

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Image
                  source={require("./assets/RescueUs-icons/map.png")}
                  style={{ width: size, height: size, opacity: !focused ? 0.5 : 1 }}
                />
              );
            } else if (route.name === "Blog Tab") {
              return (
                <Image
                  source={require("./assets/RescueUs-icons/blog.png")}
                  style={{ width: size, height: size, opacity: !focused ? 0.5 : 1 }}
                />
              );
            } else if (route.name === "Shopping List Tab") {
              return (
                <Image
                  source={require("./assets/RescueUs-icons/shopping-list.png")}
                  style={{ width: size, height: size, opacity: !focused ? 0.5 : 1 }}
                />
              );
            } else if (route.name === "Pantry") {
              return (
                <Image
                  source={require("./assets/RescueUs-icons/pantry.png")}
                  style={{ width: size, height: size, opacity: !focused ? 0.5 : 1 }}
                />
              );
            }
          },
          tabBarShowLabel: false,
          safeAreaInset: { bottom: "never", top: "never" },
          tabBarStyle: {
            backgroundColor: "#14A94C",
            borderRadius: 40,
            marginBottom: 10,
            marginHorizontal: 5,
            position: "absolute",
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={options}
        />
        <Tab.Screen
          name="Blog Tab"
          component={BlogStackScreen}
          options={options}
        />
        <Tab.Screen name="Shopping List Tab" component={ShoppingListStackScreen} options={options} />
        <Tab.Screen name="Pantry" component={PantryStackScreen} options={options} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const options = {
  headerShown: false,
}

