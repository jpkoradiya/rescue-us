const SHELF_LIFE_API_URL = "https://shelf-life-api.herokuapp.com";

export const getTips = async (pantryList = []) => {
  var tips = [];
  if (pantryList.length > 3) {
    while (tips.length < 5) {
      for (item of pantryList) {
        console.log(item);
        if (item.key !== 0) {
          const uri = SHELF_LIFE_API_URL + "/guides/" + item.key;
          const res = await fetch(uri);
          const data = await res.json();

          tips.push(data.tips[0]);
        }
      }
    }
    return tips;
  } else {
    //random tips
    var tips = [];
    const max = 19138;
    const min = 16334;
    while (tips.length < 5) {
      const id = Math.floor(Math.random() * (max - min)) + min;
      const uri = SHELF_LIFE_API_URL + "/guides/" + id;
      const res = await fetch(uri);

      if (res.ok) {
        const data = await res.json();
        const index = data.tips.length - 1;
        if (data.tips[index].length > 30) {
          tips.push(data.tips[index]);
        }
      }
    }

    return tips;
  }
};
