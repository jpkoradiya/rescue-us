import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { Recipes } from "./Recipes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pantry } from "./Pantry";
import { ShoppingList } from "./ShoppingList";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Shopping List" component={ShoppingList} />
        <Tab.Screen name="Pantry" component={Pantry} />
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
