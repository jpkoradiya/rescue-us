import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import ShoppingListScreen from './screens/ShoppingListScreen';
import PantryScreen from "./screens/PantryScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStackScreen from "./stacks/HomeStackScreen";
import BlogStackScreen from "./stacks/BlogStackScreen";

// **** Native Stack Navigation *****

// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Blog" component={BlogScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// **** Tab Navigation *****

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Icon name="map-marker-alt" size={size} color={color} solid={focused} />
          } else if (route.name === 'Blog') {
            return <MaterialCommunityIcons name="chef-hat" size={size} color={color} />
          } else if (route.name === 'Shopping List') {
            return <Icon name="shopping-cart" size={size} color={color} solid={focused} />
          } else if (route.name === 'Pantry') {
            return <MaterialIcons name="kitchen" size={size} color={color} solid={focused} />
          }
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Blog" component={BlogStackScreen} />
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
