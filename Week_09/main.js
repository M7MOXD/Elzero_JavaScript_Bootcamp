// Challenge => 01
// Convert to Arrow Function
let names = function (...names) {
  return `String [${names.join('], [')}] => Done !`;
};
console.log(names('Osama', 'Mohamed', 'Ali', 'Ibrahim')); // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
// Arrow Function
names = (...names) => `String [${names.join('], [')}] => Done !`;
console.log(names('Osama', 'Mohamed', 'Ali', 'Ibrahim')); // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// Challenge => 02
let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0];
console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

// Assignment => 01
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    zName = `${zName.split(' ')[0]} ${zName.split(' ')[1][0].toUpperCase()}.`;
    return zName;
  }
  function ageWithMessage(zAge) {
    zAge = `Your Age is ${parseInt(zAge)}`;
    return zAge;
  }
  function countryTwoLetters(zCountry) {
    zCountry = `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    return zCountry;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}
console.log(getDetails('Osama Mohamed', '38 Is My Age', 'Egypt')); // Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails('Ahmed ali', '32 Is The Age', 'Syria')); // Hello Ahmed A., Your Age Is 32, You Live In SY

// Assignment => 02
// Convert to Arrow Function
// Case One
function itsMe() {
  return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function
// Arrow Function
itsMe = () => `Iam A Arrow Function`;
console.log(itsMe()); // Iam A Arrow Function
// Case Two
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate('https', 'elzero', 'org')); // https://www.elzero.org
// Arrow Function
urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate('https', 'elzero', 'org')); // https://www.elzero.org

// Assignment => 03
// Convert to Arrow Function
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === 'Available'
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}
console.log(checker('Osama')('Available')(4000)); // Osama, My Salary Is 4000
console.log(checker('Ahmed')('Not Available')()); // Iam Not Avaialble
// Arrow Function
checker = (zName) => (status) => (salary) =>
  status === 'Available'
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;
console.log(checker('Osama')('Available')(4000)); // Osama, My Salary Is 4000
console.log(checker('Ahmed')('Not Available')()); // Iam Not Avaialble

// Assignment => 04
function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++)
    if (!isNaN(parseFloat(data[i]))) result += parseFloat(data[i]);
  return result ? result : 'All Is Strings';
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix('10Test', 'Testing', '20Cool')); // 30
console.log(specialMix('Testing', '10Testing', '40Cool')); // 50
console.log(specialMix('Test', 'Cool', 'Test')); // All Is Strings
