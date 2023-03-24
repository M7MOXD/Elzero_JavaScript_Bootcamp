// Challenge => 01
let a = 10;
let b = '20';
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
// 11 + 20 + 80 - 11 = 100
console.log(++a + -b + +c++ - -a++ + +a);
// 13 + -21 + 81 - -13 + 14 = 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100

// Challenge => 02
let d = '-100';
let e = '20';
let f = 30;
let g = true;
console.log(+e * -d); // 2000
console.log(-d + ++e * ++g + ++f); // 173

// Assignment => 01
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

// Assignment => 02
let num = 3;
// Solution One
console.log(num + num); // 6
// Solution Two
console.log(num * num - num); // 6
// Soultion Three
console.log(num * (+true + +true)); // 6
// Soultion Four
console.log(num + +true + +true + +true); // 6
// Solution Five
console.log(num * (num - +true)); // 6
// Solution Six
console.log(num * --num); // 6

// Assignment => 03
num = '10';
// Solution One
console.log(+num + +num); // 20
// Solution Two
console.log(+num * (+true + +true)); // 20
// Solution Three
console.log(-num * (-true - +true)); // 20
// Solution Four
console.log(+num + --num + +true); // 20
// Solution Five
console.log(++num + ++num - +true); // 20

// Assignment => 04
let points = 10;
points += +true + +true + +true;
console.log(points); // 13
points -= +true + +true + +true + +true + +true;
console.log(points); // 8;
