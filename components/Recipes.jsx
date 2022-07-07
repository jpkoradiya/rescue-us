import { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import RecipeListItem from "./RecipeListItem";
import { recipes } from "../data/recipesData";
const SPOON_TOKEN = "f62849c4362f4c61bb30ec9f346820ed";
// const SPOON_TOKEN = "c4fff71aedcb4ac2b6fa78881198d0aa";
const NUMBER_OF_RECIPES = 100;
const RECIPES_BY_PAGE = 10;
const SPOON_API = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOON_TOKEN}&number=${NUMBER_OF_RECIPES}&offset=`;

export default function Recipes({ navigation }) {
  const [allRecipesList, setAllRecipesList] = useState(recipes);
  const [recipesList, setRecipesList] = useState(recipes);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const getRecipes = async () => {
      const uri = SPOON_API + offset;
      const res = await fetch(uri);
      if (res.ok) {
        const data = await res.json();
        setAllRecipesList(data.results);
        const slicedRecipesList = data.results.slice(
          offset,
          offset + RECIPES_BY_PAGE
        );
        setRecipesList(slicedRecipesList);
        setOffset(offset + RECIPES_BY_PAGE);
      }
    };

    // getRecipes();
  }, []);

  const fetchRecipes = async () => {
    setOffset(offset + NUMBER_OF_RECIPES);
    const uri = SPOON_API + offset;
    const res = await fetch(uri);
    if (res.ok) {
      const data = await res.json();
      setRecipesList([...recipesList, data]);
    }
  };
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 525,
      }}
    >
      <FlatList
        data={recipesList}
        key={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeListItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
