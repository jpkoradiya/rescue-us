import {
  Alert,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import { useStore } from "../store";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ShoppingListScreen({ navigation }) {
  const { shoppingList, addToShoppingList, removeFromShoppingList } =
    useStore();

  const [modalVisible, setModalVisible] = useState(false);
  const [productName, setProductName] = useState("");
  const [productQty, setProductQty] = useState(0);

  const handleAddProduct = (e) => {
    if (productName.length > 0 && productQty > 0) {
      const newProd = {
        name: productName,
        quantity: productQty,
      };
      addToShoppingList(newProd);
      setProductName("");
      setProductQty(0);
      setModalVisible(false);
    }
  };

  const decrementProductQty = () => {
    if (productQty > 0) {
      setProductQty(productQty - 1);
    }
  };

  const incrementProductQty = () => {
    setProductQty(productQty + 1);
  };

  const handleQtyChange = (e) => {
    setProductQty(parseInt(e));
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setProductName("");
          setProductQty(0);
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ScrollView
            contentContainerStyle={styles.centeredView}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.modalView}>
              <Text>Add a new product</Text>
              <TextInput
                value={productName}
                onChangeText={setProductName}
                placeholder="Product Name"
                placeholderTextColor="#C4C4C4"
                style={styles.input}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: "0.3px",
                  borderRadius: 50,
                }}
              >
                <Pressable
                  style={styles.editQtyButton}
                  onPress={decrementProductQty}
                  disabled={productQty < 1}
                >
                  <Text style={{ fontSize: 15 }}>-</Text>
                </Pressable>
                {/* <TextInput
                  value={productQty}
                  onChangeText={(e) => handleQtyChange(e)}
                  keyboardType="numeric"
                  placeholder="Quantity"
                  placeholderTextColor="#C4C4C4"
                  style={[{ width: 100 }]}
                /> */}
                <Text style={{ marginHorizontal: 10 }}>{productQty}</Text>

                <Pressable
                  style={styles.editQtyButton}
                  onPress={incrementProductQty}
                >
                  <Text style={{ fontSize: 15 }}>+</Text>
                </Pressable>
              </View>
              <View
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Pressable
                  style={[
                    { marginRight: 20 },
                    styles.button,
                    styles.buttonClose,
                  ]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </Pressable>
                <Pressable onPress={handleAddProduct} style={[styles.button]}>
                  <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      {shoppingList.length > 0 &&
        shoppingList.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.quantity}</Text>
          </View>
        ))}
      <Pressable
        style={styles.addButtonView}
        onPress={() => setModalVisible(true)}
      >
        {/* <Text style={{ fontSize: 24, color: "#FFFFFF" }}>+</Text> */}
        <Icon name="plus" size={24} color={"#FFFFFF"} light />
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  addButtonView: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "green",
    borderRadius: "50%",
    marginRight: 10,
    marginBottom: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    marginTop: 20,
    width: 200,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },

  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
  },

  buttonClose: {
    backgroundColor: "#C4C4C4",
  },

  buttonText: {
    paddingHorizontal: 5,
    color: "#FFFFFF",
  },

  editQtyButton: {
    marginHorizontal: 0,
    borderWidth: "0.3px",
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
