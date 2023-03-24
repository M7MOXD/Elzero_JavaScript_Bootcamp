// Challenge => 01
function showDetails(a, b, c) {
  let name =
    typeof a === 'string'
      ? a
      : typeof b === 'string'
      ? b
      : typeof c === 'string'
      ? c
      : 'Unknown';
  let age =
    typeof a === 'number'
      ? a
      : typeof b === 'number'
      ? b
      : typeof c === 'number'
      ? c
      : 'Unknown';
  let status =
    typeof a === 'boolean'
      ? a
      : typeof b === 'boolean'
      ? b
      : typeof c === 'boolean'
      ? c
      : 'Unknown';
  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      status ? 'Available' : 'Not Available'
    } For Hire`
  );
}
showDetails('Osama', 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, 'Osama', true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, 'Osama'); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, 'Osama', 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Assignment => 01
function sayHello(theName, theGender) {
  console.log(
    `Hello ${
      theGender === 'Male' ? 'Mr ' : theGender === 'Female' ? 'Miss ' : ''
    }${theName}`
  );
}
sayHello('Osama', 'Male'); // "Hello Mr Osama"
sayHello('Eman', 'Female'); // "Hello Miss Eman"
sayHello('Sameh'); // "Hello Sameh"

// Assignment => 02
function calculate(firstNum, secondNum, operation) {
  if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
    console.log('Missing Argument or Invalid Number');
  } else {
    operation === 'add'
      ? console.log(firstNum + secondNum)
      : operation === 'subtract'
      ? console.log(firstNum - secondNum)
      : operation === 'multiply'
      ? console.log(firstNum * secondNum)
      : operation === 'divide'
      ? console.log(firstNum / secondNum)
      : console.log(firstNum + secondNum);
  }
}
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// Assignment => 03
function ageInTime(theAge) {
  if (theAge <= 10 || theAge > 100) {
    console.log('Age Out Of Range');
  } else {
    console.log(`Months: ${theAge * 12}`); // Months
    console.log(`Weeks: ${theAge * 12 * 4.5}`); // Weeks
    console.log(`Days: ${theAge * 365}`); // Days
    console.log(`Hours: ${theAge * 365 * 24}`); // Hours
    console.log(`Minutes: ${theAge * 365 * 24 * 60}`); // Minutes
    console.log(`Seconds: ${theAge * 365 * 24 * 60 * 60}`); // Seconds
  }
}
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Assignment => 04
function showDetails(a, b, c) {
  let name =
    typeof a === 'string'
      ? a
      : typeof b === 'string'
      ? b
      : typeof c === 'string'
      ? c
      : 'Unknown';
  let age =
    typeof a === 'number'
      ? a
      : typeof b === 'number'
      ? b
      : typeof c === 'number'
      ? c
      : 'Unknown';
  let status =
    typeof a === 'boolean'
      ? a
      : typeof b === 'boolean'
      ? b
      : typeof c === 'boolean'
      ? c
      : 'Unknown';
  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      status ? 'Available' : 'Not Available'
    } For Hire`
  );
}
showDetails('Osama', 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, 'Osama', true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, 'Osama'); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, 'Osama', 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Assignment => 05
function createSelectBox(startYear, endYear) {
  document.write('<select>');
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write('</select>');
}
createSelectBox(2000, 2021);

// Assignment => 06
function multiply(...num) {
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] !== 'number') continue;
    result *= parseInt(num[i]);
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply('A', 10, 30); // 300
multiply(100.5, 10, 'B'); // 1000
