import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
// import PropTypes from 'prop-types'
const SPOON_TOKEN = "f62849c4362f4c61bb30ec9f346820ed";
// const SPOON_TOKEN = "c4fff71aedcb4ac2b6fa78881198d0aa";
const SPOON_URL = `https://api.spoonacular.com/recipes/`;
import { recipes } from "../data/recipesData";

export default function RecipeDetailsScreen({ route, navigation }) {
  const { item } = route.params;
  const {
    cookingTime,
    name,
    image,
    serving,
    ingredients,
    instructions,
    difficulty,
    id,
  } = item;
  const [recipeData, setRecipeData] = useState(recipes);

  return (
    <View styles={styles.container}>
      <Text style={styles.recipeTitle}>{name}</Text>
      <View style={styles.recipeDataRow}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 30,
          }}
        >
          <Image
            source={require("../assets/RescueUs-icons/clock.png")}
            style={{ width: 15, height: 15, marginRight: 7 }}
          />
          <Text>{cookingTime}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 30,
          }}
        >
          <Image
            source={require("../assets/RescueUs-icons/difficulty.png")}
            style={{ width: 15, height: 15, marginRight: 7 }}
          />
          <Text>{difficulty}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/RescueUs-icons/portions.png")}
            style={{ width: 15, height: 15, marginRight: 7 }}
          />
          <Text>
            {serving} {serving > 1 ? " servings" : "serving"}
          </Text>
        </View>
      </View>
      <View style={styles.recipeIngredients}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Ingredients</Text>
        <FlatList
          data={ingredients}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 18, paddingLeft: "5%" }}>
              {"• "}
              {item}
            </Text>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.recipeDirections}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Directions</Text>
        <FlatList
          data={instructions}
          renderItem={({ item, index }) => (
            <Text style={{ fontSize: 18, paddingLeft: "5%" }}>
              {index + 1}
              {". "}
              {item}
            </Text>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",

    backgroundColor: "black",
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: "5%",
    paddingTop: "5%",
  },
  recipeDataRow: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: "5%",
    paddingTop: "1%",
  },
  recipeIngredients: {
    paddingHorizontal: "5%",
    paddingTop: "5%",
  },
  recipeDirections: {
    paddingHorizontal: "5%",
    paddingTop: "5%",
    marginBottom: 500,
  },
});
