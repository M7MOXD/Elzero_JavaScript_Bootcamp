// Assignment => 01
// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }
// Convert Function into Class
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is Stopped";
  }
}
let carOne = new Car("MG", "2022", "420000");
console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price IS ${carOne.p}`
); // "Car One Name Is MG And Model Is 2022 And Price Is 420000"
console.log(carOne.run()); // "Car Is Running Now"

// Assignment => 02
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}
class Tablet extends Phone {
  constructor(name, serial, price, size = "Unknown") {
    super(name, serial, price);
    this.size = size;
  }
  fullDetails() {
    return `${this.name} Serial Is ${this.serial} And Size Is ${this.size}`;
  }
}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);
console.log(TabletOne.fullDetails()); // iPad Serial IS 100200300 And Size Is 12.9
console.log(TabletTwo.fullDetails()); // Nokia Serial IS 350450650 And Size Is 10.5
console.log(TabletThree.fullDetails()); // LG Serial IS 250450650 And Size Is Unknown

// Assignment => 03
class User {
  static c;
  constructor(username, card) {
    this.u = username;
    User.c = /(\d{4})-(\d{4})-(\d{4})-(\d{4})/.test(card)
      ? String(card)
      : String(card).replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${User.c}`;
  }
}
let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);
console.log(userOne.showData); // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
console.log(userTwo.showData); // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
console.log(userThree.showData); // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
console.log(userOne.c); // Undefined

// Assignment => 04
String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// Assignment => 05
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};
Object.defineProperty(myObj, "id", {
  enumerable: false,
});
Object.defineProperty(myObj, "score", {
  writable: false,
});
delete myObj.country;
myObj.score = 500;
for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}
console.log(myObj);
