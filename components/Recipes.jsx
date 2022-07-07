import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import RecipeListItem from "./RecipeListItem";
// const SPOON_TOKEN = "f62849c4362f4c61bb30ec9f346820ed";
const SPOON_TOKEN = "c4fff71aedcb4ac2b6fa78881198d0aa";
const NUMBER_OF_RECIPES = 100;
const RECIPES_BY_PAGE = 10;
const SPOON_API = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOON_TOKEN}&number=${NUMBER_OF_RECIPES}&offset=`;

export default function Recipes() {
  const [allRecipesList, setAllRecipesList] = useState([]);
  const [recipesList, setRecipesList] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const getRecipes = async () => {
      const uri = SPOON_API + offset;
      console.log(uri);
      const res = await fetch(uri);
      if (res.ok) {
        const data = await res.json();
        setAllRecipesList(data.results);
        const slicedRecipesList = data.results.slice(
          offset,
          offset + RECIPES_BY_PAGE
        );
        console.log("sliced: ", slicedRecipesList);
        setRecipesList(slicedRecipesList);
        console.log(recipesList.length);
        setOffset(offset + RECIPES_BY_PAGE);
      }
    };

    getRecipes();
  }, []);

  const fetchRecipes = async () => {
    setOffset(offset + NUMBER_OF_RECIPES);
    const uri = SPOON_API + offset;
    console.log("uri: ", uri);
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
      }}
    >
      <FlatList
        data={recipesList}
        key={(item) => item.id}
        renderItem={({ item }) => <RecipeListItem item={item} />}
        // onEndReached={fetchRecipes}
        // onEndReachedThreshold={0.7}
      />
    </View>
  );
}
