import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
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
      <HomeStack.Screen name="Shelter Map" component={HomeScreen} />
      <HomeStack.Screen
        name="Shelter Details"
        component={DetailsScreen}
      />
    </HomeStack.Navigator>
  );
}
