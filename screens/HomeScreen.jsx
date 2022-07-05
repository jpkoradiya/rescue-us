import { useEffect } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import CustomCalloutView from "../components/CustomCalloutView";
import { shelterData } from "../data/shelterData";
import { askAsync } from "expo-permissions";
import * as Permissions from "expo-permissions";

export default function HomeScreen({ navigation }) {
  const data = shelterData;

  useEffect(() => {
    const askUserLocation = async () =>
      await askAsync(Permissions.LOCATION_BACKGROUND);
    askUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsUserLocation
        followUserLocation
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 43.6532,
          longitude: -79.3832,
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
