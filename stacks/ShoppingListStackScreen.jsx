import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingListScreen from "../screens/ShoppingListScreen";

const HomeStack = createNativeStackNavigator();

export default function ShoppingListStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: "600",
        },
      }}
    >
      <HomeStack.Screen name="Shopping List" component={ShoppingListScreen} />
    </HomeStack.Navigator>
  );
}
