// Assignment => 01
let member = {
  name: 'Mahmoud',
  age: 27,
  country: 'Egypt',
  fullDetails: function () {
    return `My Name is ${this.name}, My Age is ${this.age}, I Live in ${this.country}`;
  },
};
console.log(member.name); // Mahmoud
console.log(member.age); // 27
console.log(member.country); // Egypt
console.log(member.fullDetails()); // My Name is Mahmoud, My Age is 27, I Live in Egypt

// Assignment => 02
// Method One
let objMethodOne = {
  name: 'Mahmoud',
  age: 27,
  country: 'Egypt',
  fullDetails: function () {
    return `My Name is ${this.name}, My Age is ${this.age}, I Live in ${this.country}`;
  },
};
console.log(objMethodOne); // "Method One"
// Method Two
let objMethodTwo = new Object({
  name: 'Mahmoud',
  age: 27,
  country: 'Egypt',
  fullDetails: function () {
    return `My Name is ${this.name}, My Age is ${this.age}, I Live in ${this.country}`;
  },
});
console.log(objMethodTwo); // "Method Two"
// Method Three
let objMethodThree = Object.create({
  name: 'Mahmoud',
  age: 27,
  country: 'Egypt',
  fullDetails: function () {
    return `My Name is ${this.name}, My Age is ${this.age}, I Live in ${this.country}`;
  },
});
objMethodThree.name = 'Mahmoud';
objMethodThree.age = 27;
objMethodThree.country = 'Egypt';
objMethodThree.fullDetails = function () {
  return `My Name is ${this.name}, My Age is ${this.age}, I Live in ${this.country}`;
};
console.log(objMethodThree); // "Method Three"
// Method Four
let objMethodFour = Object.assign(
  {},
  {
    name: 'Mahmoud',
    age: 27,
    country: 'Egypt',
    fullDetails: function () {
      return `My Name is ${this.name}, My Age is ${this.age}, I Live in ${this.country}`;
    },
  }
);
console.log(objMethodFour); // "Method Four"

// Assignment => 03
let a = 1;
let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};
let twoNums = {
  e: 5,
  f: 6,
};
let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

// Assignment => 04
let myFavGames = {
  'Trinity Universe': {
    publisher: 'NIS America',
    price: 40,
  },
  'Titan Quest': {
    publisher: 'THQ',
    bestThree: {
      one: 'Immortal Throne',
      two: 'Ragnarök',
      three: 'Atlantis',
    },
    price: 50,
  },
  YS: {
    publisher: 'Falcom',
    bestThree: {
      one: 'Oath in Felghana',
      two: 'Ark Of Napishtim',
      three: 'origin',
    },
    price: 40,
  },
};
let objectLength = Object.keys(myFavGames).length;
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
    console.log('- Game Has Releases');
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log('#'.repeat(20));
}
