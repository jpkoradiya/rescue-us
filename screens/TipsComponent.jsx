import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { useStore } from "../store";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Carousel, { Pagination } from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "../utils/animation";
import { getTips } from "../data/getTipsAndTricks";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 1.6) / 4);



export const TipsCarousel = () => {
  const pantryList = useStore((state) => state.pantryList);
  const [tips, setTips] = useState(["Loading..."]);
  
    const [activeSlide,setActiveSlide] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getTips(pantryList);
      setTips(data);
    };
    getData();
  }, [pantryList]);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.ImageContainer}>
          <MaterialCommunityIcons
            name="lightbulb-outline"
            size={50}
            color="white"
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.itemLabel}>{item}</Text>
        </View>
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
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination style={styles.pagination}
        dotsLength={tips.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "white" }}
        dotStyle={{
          width: 10,
          height: 100,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "black",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 25,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14A94C",
    borderRadius: 20,
    flexDirection: "row",
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
  ImageContainer: {
    width: "auto",
    flex: 1,
    paddingLeft: 10,
    marginRight: 0,
  },
  TextContainer: {
    width: "auto",
    flex: 2,
    marginLeft: 0,
    paddingRight: 10,
  },
  pagination: {
    marginTop: 0,
  }
});
