// export const TipsCarousel = () => {
//     return(
//         <Carousel layout={'default'} />
//     );
// }

import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { useStore } from "../store";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "../utils/animation";
import { getTips } from "../data/getTipsAndTricks";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export const TipsCarousel = () => {
  const pantryList = useStore((state) => state.pantryList);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getTips(pantryList);
      setTips(data);
    };
    getData();
    console.log(tips);
  }, []);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>
          <MaterialCommunityIcons name="lightbulb-outline" />
          {`${item}`}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={tips}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
      <Text style={styles.counter}>here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  itemLabel: {
    color: "white",
    fontSize: 16,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
