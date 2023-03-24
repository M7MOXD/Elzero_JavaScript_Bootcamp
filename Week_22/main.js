// Assignment => 01
let myArticles = new Promise((res, rej) => {
  let data = new XMLHttpRequest();
  data.open("GET", "./articles.json");
  data.send();
  data.onload = () => {
    if (data.status === 200 && data.readyState === 4) {
      let articles = data.response;
      if (articles.length) {
        res(JSON.parse(articles));
      } else {
        rej("No Articles Found");
      }
    }
  };
});
myArticles
  .then((res) => {
    res.length = 5;
    for (let i = 0; i < res.length; i++) {
      let outer = document.createElement("div");
      for (let key in res[i]) {
        if (key === "userId") {
          continue;
        }
        let el =
          key === "title"
            ? document.createElement("h3")
            : document.createElement("p");
        let elTxt = document.createTextNode(res[i][key]);
        el.append(elTxt);
        key === "title" ? outer.prepend(el) : outer.append(el);
      }
      document.body.append(outer);
    }
  })
  .catch((e) => console.log(e));

// Assignment => 02
myArticles = async function () {
  try {
    let data = await fetch("./articles.json");
    let articles = await data.json();
    if (articles.length) {
      articles.length = 5;
      for (let i = 0; i < articles.length; i++) {
        let outer = document.createElement("div");
        for (let key in articles[i]) {
          if (key === "userId") {
            continue;
          }
          let el =
            key === "title"
              ? document.createElement("h3")
              : document.createElement("p");
          let elTxt = document.createTextNode(articles[i][key]);
          el.append(elTxt);
          key === "title" ? outer.prepend(el) : outer.append(el);
        }
        document.body.append(outer);
      }
    } else {
      console.log("No Articles Found");
    }
  } catch (e) {
    console.log(e);
  }
};
myArticles();
