import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import Recipes from "../components/Recipes";
import { TipsCarousel } from "./TipsComponent";

export default function BlogScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TipsCarousel style={{ flex: 4 }} />
      <Recipes style={{ flex: 8 }} navigation={navigation} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
});
