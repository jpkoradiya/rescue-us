import { View, Text } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { data } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{data.NAME}</Text>
    </View>
  );
}
