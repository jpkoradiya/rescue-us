import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-paper";
import BlogScreen from "../screens/BlogScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import { LinearGradient } from "expo-linear-gradient";

const HomeStack = createNativeStackNavigator();

export default function BlogStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: "600",
          height: 100,
        },
      }}
    >
      <HomeStack.Screen name="Blog" component={BlogScreen} />
      <HomeStack.Screen
        name="Recipe Details"
        component={RecipeDetailsScreen}
        options={({ route }) => ({
          header: (props) => (
            <View style={{ height: 200 }}>
              <ImageBackground
                style={StyleSheet.absoluteFill}
                source={{ uri: route.params.item.image }}
              >
                <LinearGradient
                  colors={["rgba(0,0,0,0.8)", "transparent"]}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 200,
                  }}
                />
              </ImageBackground>
              <SafeAreaView>
                <Pressable
                  onPress={() => props.navigation.goBack()}
                  style={{
                    marginLeft: 10,
                    marginTop: 20,
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/RescueUs-icons/arrow-back.png")}
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{ color: "#F4F4F4", fontSize: 16 }}>
                    Go back
                  </Text>
                </Pressable>
              </SafeAreaView>
            </View>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}
