import { useState } from "react";
import { ScrollView } from "react-native";
import RecipeListItem from "./RecipeListItem";
import { recipes } from "../data/recipesData";

export default function Recipes({ navigation }) {
  const [recipesList, setRecipesList] = useState(recipes);
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 80,
        paddingHorizontal: "4%",
      }}
    >
      <ScrollView>
        {recipesList.map((recipe, index) => (
          <RecipeListItem
            key={recipe.id}
            item={recipe}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}
