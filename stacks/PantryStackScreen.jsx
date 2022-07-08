import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantryScreen from "../screens/PantryScreen";

const HomeStack = createNativeStackNavigator();

export default function PantryStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: "Pantry",
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: "600",
        },
      }}
    >
      <HomeStack.Screen name="PantryScreen" component={PantryScreen} />
    </HomeStack.Navigator>
  );
}
