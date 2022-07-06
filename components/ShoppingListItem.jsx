import { View, Text, StyleSheet, Alert } from "react-native";
import { Checkbox } from "react-native-paper";
import { useState } from "react";
import { getItemDataAndExpiry } from "../data/getItemDataAndExpiry";
import { useStore } from "../store";

export default function ShoppingListItem({ item }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const addToPantryList = useStore((state) => state.addToPantryList);
  const removeFromPantryList = useStore((state) => state.removeFromPantryList);
  const [loading, setLoading] = useState(false);
  const handleToggleCheckBox = async () => {
    try {
      setLoading(true);
      if (!toggleCheckBox) {
        item.dateAdded = new Date();
        const data = await getItemDataAndExpiry(item.name);
        if (data.key === 0 && data.msg) {
          Alert.alert(
            data.msg,
            "We couldn't find that item in our database, but we'll add it to your pantry list anyway with a default expiration date."
          );
          // set the expiration date to 60 days from now
          item.expiration = new Date(
            new Date().getTime() + 60 * 24 * 60 * 60 * 1000
          );
          setLoading(false);
        } else
          item.expiration = new Date(
            item.dateAdded.getTime() + data.expiryInMs
          );
        addToPantryList(item);
        setToggleCheckBox(!toggleCheckBox);
      } else {
        setToggleCheckBox(!toggleCheckBox);
        removeFromPantryList(item);
      }
      setLoading(false);
    } catch (err) {
      console.warn(err);
      Alert.alert("Something went wrong 😟");
      setLoading(false);
    }
  };
  return (
    <View style={[styles.item]} onPress={handleToggleCheckBox}>
      <Checkbox
        style={styles.checkbox}
        status={toggleCheckBox ? "checked" : "unchecked"}
        onPress={handleToggleCheckBox}
      />
      <Text
        style={[
          styles.itemName,
          {
            textDecorationLine: `${toggleCheckBox ? "line-through" : "none"}`,
          },
        ]}
        onPress={handleToggleCheckBox}
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
