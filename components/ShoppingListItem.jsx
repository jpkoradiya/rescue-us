import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { useState } from "react";

export default function ShoppingListItem({ item }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View
      style={[styles.item]}
      onPress={() => setToggleCheckBox(!toggleCheckBox)}
    >
      <Checkbox
        style={styles.checkbox}
        status={toggleCheckBox ? "checked" : "unchecked"}
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
      />
      <Text
        style={[
          styles.itemName,
          {
            textDecorationLine: `${toggleCheckBox ? "line-through" : "none"}`,
          },
        ]}
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
      >
        {item.name}
      </Text>
      <Text
        style={[
          styles.itemQty,
          {
            textDecorationLine: `${toggleCheckBox ? "line-through" : "none"}`,
            marginRight: 10,
          },
        ]}
      >
        {item.quantity} {item.unit}
      </Text>
    </View>
  );
}

// { textDecorationLine: "line-through", textDecorationStyle: "solid" }

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  checkbox: {
    flex: 2,
  },
  itemName: {
    fontSize: 18,
    flex: 4,
    fontWeight: "600",
  },
  itemQty: {
    flex: 6,
    fontSize: 18,
    color: "#202020",
    opacity: 0.5,
    fontWeight: "normal",
    display: "flex",
    textAlign: "right",
  },
});
