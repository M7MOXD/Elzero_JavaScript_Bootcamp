// Assignment => 01
// articles.json

// Assignment => 02
let req = new XMLHttpRequest();
req.open("GET", "./articles.json");
req.send();
req.onreadystatechange = function () {
  if (this.status === 200 && this.readyState == 4) {
    console.log(this.response);
    console.log("Data Loaded");
  }
};

// Assignment => 03
req = new XMLHttpRequest();
req.open("GET", "./articles.json");
req.send();
req.onreadystatechange = function () {
  if (this.status === 200 && this.readyState == 4) {
    let mainData = JSON.parse(this.response);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i]["category"] = "all";
    }
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};

// Assignment => 04
req = new XMLHttpRequest();
req.open("GET", "./articles.json");
req.send();
req.onreadystatechange = function () {
  if (this.status === 200 && this.readyState == 4) {
    let mainData = JSON.parse(this.response);
    let data = document.createElement("div");
    data.id = "data";
    for (let i = 0; i < mainData.length; i++) {
      let outer = document.createElement("div");
      for (let key in mainData[i]) {
        if (key === "id") {
          continue;
        }
        let el =
          key === "title"
            ? document.createElement("h2")
            : document.createElement("p");
        let elTxt = document.createTextNode(mainData[i][key]);
        el.append(elTxt);
        key === "title" ? outer.prepend(el) : outer.append(el);
      }
      data.append(outer);
    }
    document.body.append(data);
  }
};
