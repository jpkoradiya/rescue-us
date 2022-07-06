const SHELF_LIFE_API_URL = "https://shelf-life-api.herokuapp.com";

const getFreshAndRawData = (item) => {
  return item.name.includes("Fresh, Raw");
};

const getItemFromApi = async (itemName = "") => {
  if (itemName !== "") {
    var uri = SHELF_LIFE_API_URL + "/search?q=" + itemName;
  } else {
    return {
      key: 0,
      name: "Invalid name",
    };
  }
  const res = await fetch(uri);
  var data = await res.json();
  data = data.filter(getFreshAndRawData);
  if (data.length > 0) {
    return {
      key: data[0].id,
      name: itemName,
    };
  } else {
    return {
      key: 0,
      name: itemName,
      msg: "Item not found",
    };
  }
};

const getItemExpiry = async (item = { key: 0, name: "Invalid Name" }) => {
  const itemId = item.key;
  if (itemId !== 0) {
    var uri = SHELF_LIFE_API_URL + "/guides/" + itemId;
    const res = await fetch(uri);
    const data = await res.json();
    return {
      id: itemId,
      name: item.name,
      expire: `${(data.methods[0].expirationTime) / 86400} days`,
      expiryInMs: (data.methods[0].expirationTime) * 1000,
    };
  } else {
    return {
      id: itemId,
      name: item.name,
      expiry: item.methods[0].expirationTime,
    };
  }
};

export const getItemDataAndExpiry = async (itemName = "") => {
  if (itemName) {
    const foodItem = await getItemFromApi(itemName);
    if (foodItem.key !== 0) {
      const expiry = await getItemExpiry(foodItem);
      return expiry
    } else {
      return foodItem
    }
  } else {
    console.log("empty item name, returned empty object");
    return {
      key: 0,
      name: itemName,
      expiry: 0,
    };
  }
};
