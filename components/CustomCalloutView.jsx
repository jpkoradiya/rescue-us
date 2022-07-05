import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  bubble: {
    flex: 1,
    backgroundColor: "ghostwhite",
    width: 200,
    height: "100%",
    padding: 10,
  },
  detailsButton: {
    display: "flex",
    width: "100%",
    alignItems: "flex-end",
    paddingTop: 3,
    zIndex: 30,
  },
});

function CustomCalloutView({ marker, navigation }) {
  const fullAddress =
    marker.properties.ADDRESS_FU +
    ", " +
    marker.properties.CITY +
    ". " +
    marker.properties.POSTAL_COD;
  return (
    <View style={styles.bubble}>
      <Text>{marker.properties.NAME}</Text>
      <Text>{fullAddress}</Text>
      <View style={styles.detailsButton}>
        <Text style={{ color: "#0000EE" }}>See details &gt;</Text>
      </View>
    </View>
  );
}

export default CustomCalloutView;
