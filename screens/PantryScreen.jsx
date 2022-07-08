import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import AddPantryItemModal from "../components/AddPantryItemModal";
import PantryListItem from "../components/PantryListItem";
import { useStore } from "../store";

const SHELF_LIFE_API_URL = "https://shelf-life-api.herokuapp.com";

// get a number and return the ordinal suffix (st, nd, rd, th)
const getOrdinal = (number) => {
  const suffix = ["th", "st", "nd", "rd"];
  const lastDigit = number % 10;
  return suffix[lastDigit] || suffix[0];
};

export default function PantryScreen({ navigation }) {
  const { pantryList, addToPantryList } = useStore();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.addTopButton}>+ ADD ITEMS</Text>
      </Pressable>
      <AddPantryItemModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      {pantryList.length > 0 ? (
        <FlatList
          data={pantryList}
          keyExtractor={pantryList.id}
          renderItem={({ item }) => <PantryListItem id={item.id} />}
        />
      ) : (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>No items in your pantry</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  addTopButton: {
    color: "#14A94C",
    margin: 10,
    fontWeight: "600",
    fontSize: 16,
  },
  noItemsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noItemsText: {
    fontSize: 20,
    fontWeight: "400",
    margin: 10,
    textAlign: "center",
    color: "rgba(0,0,0,0.3)",
  },
});
