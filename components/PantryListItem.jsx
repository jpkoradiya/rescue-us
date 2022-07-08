import { View, Text, StyleSheet, Pressable } from "react-native";
import { useStore } from "../store";
import dayjs from "dayjs";
import Entypo from "react-native-vector-icons/Entypo";

// get a number and return the ordinal suffix (st, nd, rd, th)
const getOrdinal = (number) => {
  const suffix = ["th", "st", "nd", "rd"];
  const lastDigit = number % 10;
  return suffix[lastDigit] || suffix[0];
};

const getFormatedDate = (date) => {
  const ord = getOrdinal(date.getDate());
  const formattedDate = dayjs(date).format("MMM DD");
  return formattedDate + ord;
};

export default function PantryListItem({ id }) {
  const item = useStore((state) =>
    state.pantryList.find((item) => item.id === id)
  );

  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  if (item.quantity === 0) {
    return null;
  }

  return (
    <View style={[styles.item]}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text>
          {"Added "}
          {getFormatedDate(item.dateAdded)}
        </Text>
      </View>
      <View style={styles.itemRight}>
        <View style={styles.itemQtyRow}>
          <Pressable
            style={[styles.editQtyBtn]}
            onPress={() => decreaseQuantity(item)}
            disabled={item.quantity === 0}
            onLongPress={() => decreaseQuantity(item)}
          >
            <Entypo name="circle-with-minus" size={20} color={"#E11E1E"} />
          </Pressable>
          <Text style={styles.itemQty}>{item.quantity}</Text>
          <Pressable
            style={[styles.editQtyBtn]}
            onPress={() => increaseQuantity(item)}
          >
            <Entypo name="circle-with-plus" size={20} color={"#14A94C"} />
          </Pressable>
        </View>
        <Text>
          {"Use before "}
          {getFormatedDate(item.expiration)}
        </Text>
      </View>
    </View>
  );
}

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
  itemName: {
    fontSize: 18,
    fontWeight: "600",
  },
  itemRight: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  itemQtyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  itemQty: {
    fontSize: 18,
    color: "#202020",
    opacity: 0.5,
    fontWeight: "normal",
  },
  editQtyBtn: {
    marginHorizontal: 10,
  },
});
