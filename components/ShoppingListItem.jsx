import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { useState } from "react";

export default function ShoppingListItem({ item }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={[styles.item]}>
      <Checkbox
        status={toggleCheckBox ? "checked" : "unchecked"}
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
      />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQty}>{item.quantity}</Text>
    </View>
  );
}

// { textDecorationLine: "line-through", textDecorationStyle: "solid" }

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemQty: {
    fontSize: 20,
    fontWeight: "normal",
  },
});
