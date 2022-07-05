import { useEffect, useState } from "react";
import { View, Text, StatusBar, StyleSheet, FlatList } from "react-native";

const SHELF_LIFE_API_URL = "https://shelf-life-api.herokuapp.com";

export default function PantryScreen({ navigation }) {
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
      fetch(uri)
        .then((resp) => resp.json())
        .then((items) => {
          setItemExpiry({
                key: itemId,
                name: items.name,
                expiry: items.methods[0].expirationTime,
        
            })
          //);
        });
    }
  };

  const getData = async () => {
    await getItemFromApi("Coriander");
    await getItemExpiry(pantryItems[0].key);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
      <FlatList
        data={pantryItems}
        renderItem={({ item }) => <Text>{item.name} </Text>}
      />
      <Text> ----&gt; {(itemExpiry.expiry/86400)} - {((itemExpiry.expiry/86400)+1)} days </Text>
      </Text>
      <StatusBar style="auto" />
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
