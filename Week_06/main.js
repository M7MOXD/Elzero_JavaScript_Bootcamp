// Challenge => 01
let zero = 0;
let counter = 3;
let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];
my.reverse().splice(zero, --counter);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]
console.log(my[zero].slice(--zero, --counter) + my[counter].slice(counter)); // "Elzero"
console.log(
  my[counter][++counter + ++zero] +
    my[--counter][++counter + ++zero].toUpperCase()
); // "rO"

// Assignment => 01
let myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
let num = 3;
// Method 1
console.log(myFriends.slice(+false, num)); // ["Ahmed", "Elham", "Osama"];
// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Assignment => 02
let friends = ['Ahmed', 'Eman', 'Osama', 'Gamal'];
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

// Assignment => 03
let arrOne = ['C', 'D', 'X'];
let arrTwo = ['A', 'B', 'Z'];
let finalArr = [];
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assignment => 04
let website = 'Go';
let words = [`${website}ogle`, 'Facebook', ['Elzero', 'Web', 'School']];
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// Assignment => 05
let needle = 'JS';
let haystack = ['PHP', 'JS', 'Python'];
// Write 3 Solutions
// One
if (haystack.includes(needle)) {
  console.log('Found');
}
// Two
if (haystack.indexOf(needle) !== -1) {
  console.log('Found');
}
// Three
if (haystack.lastIndexOf(needle) !== -1) {
  console.log('Found');
}

// Assignment => 06
let arr1 = ['A', 'C', 'X'];
let arr2 = ['D', 'E', 'F', 'Y'];
let allArrs = [];
allArrs = allArrs
  .concat(arr1, arr2)
  .sort()
  .slice(arr2.length)
  .join('')
  .toLowerCase();
console.log(allArrs); // fxy
