import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
//import * as React from 'react'
//import Svg, {  Use,  Image} from 'react-native-svg';
//import {SvgUri} from 'react-native-svg;'
//import map from '../assets/RescueUs-icons/map.svg'

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);

export default function DetailsScreen({ route, navigation }) {
  const { data } = route.params;
  console.log(data);
  return (
    <View style={styles.component}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>{data.NAME}</Text>
      {/* <Text>{data.ADDRESS_FU} Toronto, ON - {data.POSTAL_COD}</Text> */}
      <View style={styles.ImageAndTextContainer}>
        <Image
          style={styles.images}
          source={require("./../assets/RescueUs-icons/map-black.png")}
        />
        <Text style={styles.text}>
          {data.ADDRESS_FU}, Toronto ON - {data.POSTAL_COD}
        </Text>
      </View>
      <View style={styles.ImageAndTextContainer}>
        <Image
          style={styles.images}
          source={require("./../assets/RescueUs-icons/portions.png")}
        />
        <Text style={styles.text}>{data.CAPACITY}</Text>
      </View>
      <View style={styles.ImageAndTextContainer}>
        <Image
          style={styles.images}
          source={require("./../assets/RescueUs-icons/info.png")}
        />
        <Text style={styles.text}>
          {"("}416{")"} 395-0928
        </Text>
      </View>
      <View style={styles.ImageAndTextContainer}>
        <Image
          style={styles.images}
          source={require("./../assets/RescueUs-icons/clock.png")}
        />

        <Text style={styles.text}>Opening Hours - 9:00 AM to 5:00 PM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    width: 28,
    height: 28,
  },
  Section: {
    flex: 1,
  },
  component: {
    // alignContent: "center",
    // width: ITEM_WIDTH,
     padding: "5%",
    
  },
  ImageAndTextContainer: {
    //flex: 1,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: 'space-between'
  },
  text: {
    fontSize: 18,
    paddingLeft: 5
  },
});
