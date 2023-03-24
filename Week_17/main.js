// Challenge => 01
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log([...n1, ...n2].length * Math.max(...n2)); // 210

// Assignment => 01
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
let iterator = setOfNumbers.keys();
iterator.next();
iterator.next();
console.log(iterator.next().value);

// Assignment => 02
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort())); // [("Ahmed", "Mahmoud", "Osama", "Sayed")]

// Assignment => 03
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let myMap = new Map(Object.entries(myInfo));
console.log(myMap); // {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
console.log(myMap.size); // 3
console.log(myMap.has("role")); // true

// Assignment => 04
let theNumber = 100020003000;
console.log(+[...new Set([...String(theNumber)].sort())].join("")); // 123

// Assignment => 05
let theName = "Elzero";
console.log([...theName]); // ['E', 'l', 'z', 'e', 'r', 'o']
console.log(theName.split("")); // ['E', 'l', 'z', 'e', 'r', 'o']
console.log(Array.from(theName)); // ['E', 'l', 'z', 'e', 'r', 'o']
console.log([...new Set(theName)]); // ['E', 'l', 'z', 'e', 'r', 'o']
console.log(Object.values(theName)); // ['E', 'l', 'z', 'e', 'r', 'o']

// Assignment => 06
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars.copyWithin(3)); // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log([...chars].sort().copyWithin(0, 4, 8)); // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
chars = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(chars.copyWithin(2, 0, 5)); // ["Z", "Y", "Z", "Y", "A", "D", "E"]
chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars.sort()); // [10, 15, 6, "A", "B", "C", "D", "E"]
console.log(chars.copyWithin(0, 3, 6)); // ["A", "B", "C", "A", "B", "C", "D", "E"]

// Assignment => 07
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let x = [];
x.push(...numsOne, ...numsTwo);
console.log(x); // [1, 2, 3, 4, 5, 6]
console.log(numsOne.concat(numsTwo)); // [1, 2, 3, 4, 5, 6]
console.log([...numsOne, ...numsTwo]); // [1, 2, 3, 4, 5, 6]
console.log(Array.of(...numsOne, ...numsTwo)); // [1, 2, 3, 4, 5, 6]
console.log(Array.from([...numsOne, ...numsTwo])); // [1, 2, 3, 4, 5, 6]
