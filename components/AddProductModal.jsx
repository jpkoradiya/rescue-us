import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { useStore } from "../store";
import Modal from "react-native-modal";
import RNPickerSelect from "react-native-picker-select";

export default function AddProductModal({ modalVisible, setModalVisible }) {
  const { shoppingList, addToShoppingList, addToPantryList } = useStore();
  const [productName, setProductName] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productUnit, setProductUnit] = useState("");

  const handleAddProduct = (e) => {
    if (productName.length > 0 && productQty > 0) {
      let newProd = {
        id: shoppingList.length + 1,
        name: productName,
        quantity: productQty,
        unit: productUnit,
      };
      addToShoppingList(newProd);
      newProd.dateAdded = new Date();
      newProd.expiration = new Date();
      newProd.expiration = newProd.expiration.setDate(
        newProd.dateAdded.getDate() + 4
      );
      addToPantryList(newProd);
      setProductName("");
      setProductQty("");
      setProductUnit("");
      setModalVisible(false);
    }
  };

  const handleModalClose = (e) => {
    e.stopPropagation();
    setProductName("");
    setProductQty("");
    setProductUnit("");
    setModalVisible(false);
  };

  return (
    <View>
      <Modal
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        avoidKeyboard={true}
        isVisible={modalVisible}
        style={{ margin: 0 }}
      >
        <View style={styles.centeredView}>
          <ScrollView
            contentContainerStyle={styles.centeredView}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.modalView}>
              <Pressable
                style={[styles.buttonClose]}
                onPress={handleModalClose}
              >
                <Text style={styles.buttonText}>✖</Text>
              </Pressable>
              <Text>Product Name</Text>
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
                  width: "60%",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    marginRight: 5,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text>Amout</Text>
                  <TextInput
                    value={String(productQty)}
                    onChangeText={setProductQty}
                    placeholder="Amount"
                    placeholderTextColor="#C4C4C4"
                    keyboardType="numeric"
                    defaultValue=""
                    style={[styles.input]}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text>Units</Text>
                  <RNPickerSelect
                    onValueChange={(value) => setProductUnit(value)}
                    value={productUnit}
                    items={[
                      { label: "grams", value: "g", key: "g" },
                      { label: "kilograms", value: "kg", key: "kg" },
                      { label: "mililiters", value: "ml", key: "ml" },
                      { label: "liters", value: "l", key: "l" },
                      { label: "pc", value: "pc", key: "pc" },
                    ]}
                    style={styles.selectInput}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{
                      label: "Unit",
                      value: null,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Pressable onPress={handleAddProduct} style={[styles.button]}>
                  <Text style={styles.buttonText}>ADD PRODUCT</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    height: "50%",
    backgroundColor: "#AEB7B6",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 35,
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
    marginTop: 10,
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
  },

  selectInput: {
    inputIOS: {
      color: "#000",
      backgroundColor: "#FFF",
      height: 40,
      marginTop: 10,
      borderRadius: 20,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
    },
    inputAndroid: {
      color: "#000",
      backgroundColor: "#FFF",
      height: 40,
      marginTop: 10,
      borderRadius: 100,
      display: "flex",
      paddingHorizontal: 10,

      //   paddingTop: 13,
      //   paddingHorizontal: 10,
      //   paddingBottom: 12,
    },
  },

  button: {
    backgroundColor: "#14A94C",
    padding: 10,
    borderRadius: 8,
    marginTop: 30,
  },

  buttonClose: {
    position: "absolute",
    top: 20,
    right: 20,
  },

  buttonCloseText: {
    paddingHorizontal: 5,
    fontSize: 16,
    color: "#000",
  },
  buttonText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#FFF",
    fontSize: 16,
  },
});
