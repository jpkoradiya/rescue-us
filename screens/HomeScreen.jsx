import { View, StatusBar, StyleSheet } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import CustomCalloutView from "../components/CustomCalloutView";
import { shelterData } from "../data/shelterData";

export default function HomeScreen({ navigation }) {
  const data = shelterData;
  console.log(data[0].geometry.coordinates[0]);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsUserLocation
        followUserLocation
        showsPointsOfInterest={false}
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
            <Callout tooltip={true}>
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
