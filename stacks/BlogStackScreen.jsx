import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogScreen from "../screens/BlogScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

const HomeStack = createNativeStackNavigator();

export default function BlogStackScreen() {
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
      <HomeStack.Screen name="Blog" component={BlogScreen} />
      <HomeStack.Screen name="Recipe Details" component={RecipeDetailsScreen} />
    </HomeStack.Navigator>
  );
}
