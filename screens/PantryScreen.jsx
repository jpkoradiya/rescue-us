import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import { useStore } from "../store";

// get a number and return the ordinal suffix (st, nd, rd, th)
const getOrdinal = (number) => {
  const suffix = ["th", "st", "nd", "rd"];
  const lastDigit = number % 10;
  return suffix[lastDigit] || suffix[0];
};

export default function PantryScreen({ navigation }) {
  const { pantryList, addToPantryList } = useStore();
  console.log(pantryList);
  return (
    <View style={styles.container}>
      <Text>Open up Pantry.jsx </Text>
      <FlatList
        data={pantryList}
        keyExtractor={pantryList.id}
        renderItem={({ item }) => (
          <View>
            <Text>
              {"Added "}
              {item.dateAdded.getDate()}
              {getOrdinal(item.dateAdded.getDate())}{" "}
              {item.dateAdded.toLocaleString("default", { month: "long" })}
            </Text>
            {/* <Text>
              {"Use before "}
              {item.expiration.getDate()}
              {getOrdinal(item.dateAdded.getDate())}{" "}
              {item.expiration.toLocaleString("default", { month: "long" })}
            </Text> */}
          </View>
        )}
      />
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
