// Challenge => 01
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d))); // 2
// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.floor(d))); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(parseInt(d)); // 2
// Use Variables b + d To Get This Valus
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(b / Math.ceil(d))); // 67 => Number

// Challenge => 02
a = 'Elzero Web School';
// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero
// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(a.split(' ', 1)); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School
// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.substr(-1).toLowerCase()
); // eLZERO WEB SCHOOl

// Assignment => 01
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
// Your Solutions
console.log(2 * 5e4); // 100000
console.log(4 * 2.5e4); // 100000
console.log(10 * 10000); // 100000
console.log(100 * 1000); // 100000
console.log(1e2 * 1e3); // 100000
console.log(5e3 * 20); // 100000
console.log(10 ** 5); // 100000
console.log(100 ** 3 / 10); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.pow(100, 3) / 10); // 100000

// Assignment => 02
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Assignment => 03
console.log(
  (Number.MAX_SAFE_INTEGER / -Number.MIN_SAFE_INTEGER) *
    Math.pow(+true + +true, +true + +true + +true + +true)
); // 16

// Assignment => 04
let myVar = '100.56789 Views';
console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// Assignment => 05
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// Assignment => 06
let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10

// Assignment => 07
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// Assignment => 08
let userName = 'Elzero';
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.substr(0, 1).toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(
  userName
    .slice(-userName.length, -userName.length + 1)
    .toLowerCase()
    .repeat(3)
); // eee

// Assignment => 09
let word = 'Elzero';
let letterZ = 'z';
let letterE = 'e';
let letterO = 'O';
console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
