import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function RecipeListItem({ item, navigation }) {
  return (
    <Pressable
      onPress={() => navigation.navigate("Recipe Details", { item: item })}
    >
      <View style={styles.card}>
        <View style={styles.cardImage}>
          <Image source={{ uri: item.image }} style={styles.cardImageComp} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.detailsBtn}>See details</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
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
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});
