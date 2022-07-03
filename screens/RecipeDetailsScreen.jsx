import { View, Text } from "react-native";

export default function RecipeDetailsScreen({ route, navigation }) {
  const { name, ingredients, instructions } = route.params;
  return (
    <View>
      <Text>{name}</Text>
      {ingredients.map((ing) => (
        <Text key={ing}>{ing}</Text>
      ))}
      {instructions.map((ins) => (
        <Text key={ins}>{ins}</Text>
      ))}
    </View>
  );
}
