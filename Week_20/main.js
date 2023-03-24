// Assignment => 01
let myBD = new Date("1996/09/23");
let dateNow = new Date();
let delta = dateNow - myBD;
console.log(delta / 1000);
console.log(delta / 1000 / 60);
console.log(delta / 1000 / 60 / 60);
console.log(delta / 1000 / 60 / 60 / 24);
console.log(delta / 1000 / 60 / 60 / 24 / 30);
console.log(delta / 1000 / 60 / 60 / 24 / 365);

// Assignment => 02
let date = new Date(0);
date.setFullYear(date.getFullYear() + 10);
date.setHours(0, 0, 1);
console.log(date);

// Assignment => 03
date = new Date();
date.setDate(0);
console.log(date);

// Assignment => 04
myBD = new Date("1996 9 23");
console.log(myBD);
myBD = new Date("9 23 1996");
console.log(myBD);
myBD = new Date("sep 23 1996");
console.log(myBD);

// Assignment => 05
const t0 = performance.now();
for (let i = 0; i < 100000; i++) {
  console.log(i);
}
const t1 = performance.now();
console.log(`Loop Took ${t1 - t0} Milliseconds.`);

// Assignment => 06
function* gen() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
let generator = gen();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// Assignment => 07
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}
function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}
generator = genAll();
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

// Assignment => 08
import * as modOne from "./mod-one.js";
import calc from "./mod-two.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
