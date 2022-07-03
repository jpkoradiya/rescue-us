import { View, Text, StatusBar, StyleSheet, Button } from "react-native";

export default function PantryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up Pantry.jsx </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <StatusBar style="auto" />
    </View>
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
