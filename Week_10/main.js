// Challenge => 01
let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z';
let solution = myString
  .split(',')
  .filter((e, i, arr) => isNaN(e))
  .map((e) => (e === '_' ? ' ' : e))
  .reduce((a, c) => a + c)
  .slice(+true, -true);
console.log(solution); // Elzero Web School

// Assignment => 01
let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];
let result = mix.map((e) => (isNaN(e) ? e : '')).reduce((a, c) => a + c);
console.log(result); // Elzero

// Assignment => 02
myString = 'EElllzzzzzzzeroo';
result = myString
  .split('')
  .filter((e, i, arr) => e !== arr[i + 1])
  .reduce((a, c) => a + c);
console.log(result); // Elzero

// Assignment => 03
let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];
result = myArray.reduce((a, c) => a.concat(c), []).reduce((a, c) => a + c);
console.log(result); // Elzero

// Assignment => 04
let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C'];
result = numsAndStrings.filter((e) => !isNaN(e)).map((e) => -e);
console.log(result); // [-1, -10, 10, 20, -5, -3]

// Assignment => 05
let nums = [2, 12, 11, 5, 10, 1, 99];
result = nums.reduce((a, c) => (c % 2 === 0 ? a * c : a + c), 1);
console.log(result); // 500
