import { View, Text, StatusBar, StyleSheet, Button } from "react-native";
import Recipes from "../components/Recipes";
import { TipsCarousel } from "./TipsComponent";

export default function BlogScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TipsCarousel />
      <Recipes />
      {/* <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate("Recipe Details", {
            name: "Easy, Adaptable, Sweet & Sour Apple-Cranberry Chutney",
            ingredients: [
              "¾ cup brown sugar, lightly packed",
              "1 cup apple cider vinegar",
            ],
            instructions: [
              "Combine the brown sugar and apple cider vinegar in a medium pot. Bring to a boil.",
              "Add the remaining ingredients: apples, shallots, ginger, garlic, cranberries, cayenne pepper, cinnamon, cloves, mustard seed and salt.",
              "Bring to a boil. Reduce heat and simmer for 45 minutes to an hour or until thick and greatly reduced. Stir occasionally, breaking up the apples with the back of a wooden spoon.",
              "Refrigerate leftovers in a jar in the refrigerator for up to two months.",
            ],
          })
        }
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
});
