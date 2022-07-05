import { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import CustomCalloutView from "../components/CustomCalloutView";
import { shelterData } from "../data/shelterData";
import * as Location from "expo-location";

export default function HomeScreen({ navigation }) {
  const data = shelterData;
  const [location, setLocation] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
  });

  useEffect(() => {
    let status;
    const askLocation = async () => {
      status = await Location.requestForegroundPermissionsAsync();
      console.log("Status: ", status);
      if (!status.granted) {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("location: ", location);
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };
    askLocation();
  }, []);

  console.log("location: ", location);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsUserLocation
        followUserLocation
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {data.map((marker) => (
          <Marker
            key={marker.properties.OBJECTID}
            coordinate={{
              latitude: marker.geometry.coordinates[1],
              longitude: marker.geometry.coordinates[0],
            }}
            title={marker.properties.Name}
            description={marker.properties.Address}
          >
            <Callout
              tooltip={true}
              onPress={() =>
                navigation.navigate("Shelter Details", {
                  data: marker.properties,
                })
              }
            >
              <CustomCalloutView marker={marker} navigation={navigation} />
            </Callout>
          </Marker>
        ))}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  mapView: {
    alignSelf: "stretch",
    height: "100%",
  },
});
