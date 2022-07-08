import {
  Alert,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import { useStore } from "../store";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import ShoppingListItem from "../components/ShoppingListItem";
import AddProductModal from "../components/AddProductModal";

export default function ShoppingListScreen({ navigation }) {
  const { shoppingList } = useStore();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.addTopButton}>+ ADD PRODUCTS</Text>
      </Pressable>
      <AddProductModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      {shoppingList.length > 0 ? (
        shoppingList.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            style={{ width: "100%" }}
          />
        ))
      ) : (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>No items in your pantry</Text>
        </View>
      )}
      <StatusBar style="auto" />
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
