import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { useState } from "react";
import { useStore } from "../store";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

// get a number and return the ordinal suffix (st, nd, rd, th)
const getOrdinal = (number) => {
  const suffix = ["th", "st", "nd", "rd"];
  const lastDigit = number % 10;
  return suffix[lastDigit] || suffix[0];
};

export default function PantryListItem({ id }) {
  const { getItemById } = useStore();
  //   const [item, setItem] = useState(getItemById(id));
  const item = useStore((state) =>
    state.pantryList.find((item) => item.id === id)
  );
  console.log(item);
  return (
    <View style={[styles.item]}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text>
          {"Added "}
          {item.dateAdded.getDate()}
          {getOrdinal(item.dateAdded.getDate())}{" "}
          {item.expiration.toLocaleString("en-us", { month: "long" })}
        </Text>
      </View>
      <View style={styles.itemRight}>
        <View style={styles.itemQtyRow}>
          <Pressable style={[styles.editQtyBtn, { backgroundColor: "green" }]}>
            <Text>+</Text>
          </Pressable>
          <Text style={styles.itemQty}>{item.quantity}</Text>
          <Pressable>
            <Text>-</Text>
          </Pressable>
        </View>
        <Text>
          {"Use before "}
          {item.expiration.getDate()}
          {getOrdinal(item.dateAdded.getDate())}{" "}
          {item.expiration.toLocaleString("default", { month: "long" })}
        </Text>
      </View>
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
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  itemLeft: {
    display: "flex",
    flex: 1,
  },
  itemRight: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  checkbox: {
    flex: 2,
  },
  itemName: {
    fontSize: 18,
    flex: 4,
    fontWeight: "600",
  },
  itemQtyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
  editQtyBtn: {
    width: 15,
    height: 15,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
