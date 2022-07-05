import { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import { useStore } from "../store";

const SHELF_LIFE_API_URL = "https://shelf-life-api.herokuapp.com";

// get a number and return the ordinal suffix (st, nd, rd, th)
const getOrdinal = (number) => {
  const suffix = ["th", "st", "nd", "rd"];
  const lastDigit = number % 10;
  return suffix[lastDigit] || suffix[0];
};

export default function PantryScreen({ navigation }) {
  const { pantryList, addToPantryList } = useStore();
  const [pantryItems, setPantryItems] = useState([]);
  const [itemExpiry, setItemExpiry] = useState([]);

  const getFreshAndRawData = (item) => {
    return item.name.includes("Fresh, Raw");
  };

  const getItemFromApi = async (itemName = "") => {
    var data = [];

    if (itemName !== "") {
      var uri = SHELF_LIFE_API_URL + "/search?q=" + itemName;
    } else {
      var uri = SHELF_LIFE_API_URL + "/search";
    }
    const res = await fetch(uri);
    const data2 = await res.json();
    console.log("data2: ", data2);
    fetch(uri)
      .then((resp) => resp.json())
      .then((items) => {
        data = items.filter(getFreshAndRawData);
        //console.log(items.length)
        setPantryItems(
          data.map((item) => {
            //console.log(item)
            return {
              key: item.id,
              name: item.name,
              url: item.url,
            };
          })
        );
      });
  };

  const getItemExpiry = async (itemId = 0) => {
    var data = [];

    if (itemId !== 0) {
      var uri = SHELF_LIFE_API_URL + "/guides/" + itemId;
      console.log(uri);
      fetch(uri)
        .then((resp) => resp.json())
        .then((items) => {
          setItemExpiry({
            key: itemId,
            name: items.name,
            expiry: items.methods[0].expirationTime,
          });
          //);
        });
    }
  };

  const getData = async () => {
    await getItemFromApi("Coriander");
    console.log("pantry: ", pantryItems[0]);
    await getItemExpiry(pantryItems[0].key);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(pantryList);
  return (
    <View style={styles.container}>
      <Text>Open up Pantry.jsx </Text>
      <FlatList
        data={pantryList}
        keyExtractor={pantryList.id}
        renderItem={({ item }) => (
          <View>
            <Text>
              {"Added "}
              {item.dateAdded.getDate()}
              {getOrdinal(item.dateAdded.getDate())}{" "}
              {item.dateAdded.toLocaleString("default", { month: "long" })}
            </Text>
            {/* <Text>
              {"Use before "}
              {item.expiration.getDate()}
              {getOrdinal(item.dateAdded.getDate())}{" "}
              {item.expiration.toLocaleString("default", { month: "long" })}
            </Text> */}
          </View>
        )}
      />
      <View style={styles.container}>
        <Text>
          <FlatList
            data={pantryItems}
            renderItem={({ item }) => <Text>{item.name} </Text>}
          />
          <Text>
            {" "}
            ----&gt; {itemExpiry.expiry / 86400} -{" "}
            {itemExpiry.expiry / 86400 + 1} days{" "}
          </Text>
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
