import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import { useState } from "react";

export default function RecipeListItem({ item }) {
  const [loading, setLoading] = useState(false);
  console.log(item);

  return (
    <View style={styles.card}>
      <View style={styles.cardImage}>
        <Image
          // source={{ uri: item.image }}
          source={{ uri: item.image }}
          style={styles.cardImageComp}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.detailsBtn}>See details</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    // height: 200,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
  },
  cardImageComp: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardInfo: {
    display: "flex",
    // paddingTop: 10,
    // paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  detailsBtn: {
    color: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
});
