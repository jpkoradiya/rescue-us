import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import PantryScreen from "./screens/PantryScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeStackScreen from "./stacks/HomeStackScreen";
import BlogStackScreen from "./stacks/BlogStackScreen";
// **** Tab Navigation *****

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
                <Icon
                  name="map-marker-alt"
                  size={size}
                  color={color}
                  solid={focused}
                />
              );
            } else if (route.name === "Blog") {
              return (
                <MaterialCommunityIcons
                  name="chef-hat"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Shopping List") {
              return (
                <Icon
                  name="shopping-cart"
                  size={size}
                  color={color}
                  solid={focused}
                />
              );
            } else if (route.name === "Pantry") {
              return (
                <MaterialIcons
                  name="kitchen"
                  size={size}
                  color={color}
                  solid={focused}
                />
              );
            }
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
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
          options={{
            title: "Shelter Map",
            headerShown: false,
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: "600",
            },
          }}
        />
        <Tab.Screen
          name="Blog"
          component={BlogStackScreen}
          options={{
            title: "Shelter Map",
            headerShown: false,
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: "600",
            },
          }}
        />
        <Tab.Screen name="Shopping List" component={ShoppingListScreen} />
        <Tab.Screen name="Pantry" component={PantryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
