// Assignment => 02
document.write('<h1>Elzero</h1>');
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontFamily = 'arial';

// Assignment => 03
console.log(
  '%cElzero %cWeb %cSchool',
  'color: red; font-size: 40px;',
  'color: green; font-size: 40px; font-weight: bold;',
  'color: white; font-size: 40px; background: blue;'
);

// Assignment => 04
console.group('Group 1');
console.log('Message One');
console.log('Message Two');
console.group('Child Group');
console.log('Message One');
console.log('Message Two');
console.group('Grand Child Group');
console.log('Message One');
console.log('Message Two');
console.groupEnd();
console.warn('Back to Child Group');
console.groupEnd();
console.warn('Back to Group 1');
console.groupEnd();
console.warn('Back to the outer Group 1');
console.group('Group 2');
console.log('Message One');
console.log('Message Two');

// Assignment => 05
console.table(['Elzero', 'Ahmed', 'Sameh', 'Gamal', 'Aya']);

// Assignment => 06
// console.log('Iam In Console');
/* document.write('Iam In Page'); */
