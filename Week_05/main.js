// Challenge => 01
let a = 10;
// If - Else If - Else
if (a < 10) {
  console.log('< 10');
} else if (a >= 10 && a <= 40) {
  console.log('10 To 40');
} else if (a > 40) {
  console.log('> 40');
} else {
  console.log('Unknown');
}
// Ternary IF
a < 10
  ? console.log('< 10')
  : a >= 10 && a <= 40
  ? console.log('10 To 40')
  : a > 40
  ? console.log('> 40')
  : console.log('Unknown');

// Challenge => 02
let str = 'Elzero Web School';
// Condition One
if ((str.length + str.length).toString() === '34') {
  console.log('Good');
}
// Condition Two
if (str.charAt(str.toLowerCase().indexOf('w')).toLowerCase() === 'w') {
  console.log('Good');
}
// Condition Three
if (typeof str.length !== 'string') {
  console.log('Good');
}
// Condition Four
if (typeof str.length === 'number') {
  console.log('Good');
}
// Condition Five
if (str.slice(0, 6).repeat(2) === 'ElzeroElzero') {
  console.log('Good');
}

// Challenge => 03
// If => Switch
let job = 'Manager';
let salary = 0;
if (job === 'Manager') {
  salary = 8000;
} else if (job === 'IT' || job === 'Support') {
  salary = 6000;
} else if (job === 'Developer' || job === 'Designer') {
  salary = 7000;
} else {
  salary = 4000;
}
console.log(salary);
switch (job) {
  case 'Manager':
    salary = 8000;
    break;
  case 'IT':
  case 'Support':
    salary = 6000;
    break;
  case 'Developer':
  case 'Designer':
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}
console.log(salary);

// Challenge => 04
// Switch => If
let holidays = 0;
let money = 0;
switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 500;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 500;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

// Assignment => 01
console.log(100 == '100'); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == '-10'); // true
console.log(typeof -50 == typeof +'-40'); // true
console.log(typeof 10 == typeof -'-40'); // true
console.log(typeof '10' != typeof 10); // true
console.log(!20 == false); // true

// Assignment => 02
let num1 = 10;
let num2 = 20;
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(typeof num1 == typeof num2); // true
console.log(typeof num1 === typeof num2); // true

// Assignment => 03
a = 20;
let b = 30;
let c = 10;
console.log((a < b && a > c) || a != b); // true
console.log(a <= b && a >= c); // true
console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c)); // true

// Assignment => 04
let num = 9; // "009"
if (num < 10) {
  console.log('00' + num);
} else if (num >= 10 && num < 100) {
  console.log('0' + num);
} else {
  console.log(num.toString());
}

// Assignment => 05
num1 = 9;
str = '9';
let str2 = '20';
if (num1 == str) {
  console.log('{num1} Is The Same Value As {str}');
}
if (num1 == str && num1 !== str) {
  console.log('{num1} Is The Same Value As {str} But Not The Same Type');
}
if (num1 != str2 && typeof num1 !== typeof str2) {
  console.log('{num1} Is Not The Same Value Or The Same Type As {str2}');
}
if (str != str2 && typeof str === typeof str2) {
  console.log('{str} Is The Same Type As {str2} But Not The Same Value');
}

// Assignment => 06
num1 = 10;
num2 = 30;
let num3 = '30';
if (num3 > num1 && typeof num3 !== typeof num2) {
  console.log('{num3} Is Larger Than {num1} And Not The Same Type As {num2}');
} else if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
  console.log(
    '{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}'
  );
} else if (
  num3 != num1 &&
  typeof num3 !== typeof num1 &&
  typeof num3 !== typeof num2
) {
  console.log(
    '{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}'
  );
}

// Assignment => 07
num1 = 10; // 9
num2 = 10; // -10
num3 = '10'; // 9
let num4 = 20; // 49
// Condition 1
if (num1 > num2) {
  console.log('True');
} else {
  console.log('False');
}
// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log('True');
} else {
  console.log('False');
}
// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log('True');
} else {
  console.log('False');
}
// Condition 4
if (num1 + num2 < num4) {
  console.log('True');
} else {
  console.log('False');
}
// Condition 5
if (num1 + num3 < num4) {
  console.log('True');
} else {
  console.log('False');
}
// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log('True');
} else {
  console.log('False');
}
// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log('True');
} else {
  console.log('False');
}

// Assignment => 08
let day = '   friday  ';
switch (
  day.trim().charAt(0).toUpperCase() + day.trim().slice(1).toLowerCase()
) {
  case 'Friday':
  case 'Saturday':
  case 'Sunday':
    console.log('No Appointments Available');
    break;
  case 'Monday':
  case 'Thursday':
    console.log('From 10:00 AM To 5:00 PM');
    break;
  case 'Tuesday':
    console.log('From 10:00 AM To 6:00 PM');
    break;
  case 'Wednesday':
    console.log('From 10:00 AM To 7:00 PM');
    break;
  default:
    console.log('Its Not A Valid Day');
    break;
}
