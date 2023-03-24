// Challenge => 01
let theTitle = 'Elzero',
  theDescription = 'Elzero Web School',
  theDate = '25/10';
let card = `
  <div>
    <h3>Hello ${theTitle}</h3>
    <p>${theDescription}</p>
    <span>${theDate}</span>
  </div>
`;
document.write(card.repeat(4));

// Assignment => 01
let numOne = 10,
  numTwo = 20;
console.log(numOne + '' + numTwo);
console.log(typeof (numOne + '' + numTwo));
console.log(`${numOne}${numTwo}`);
console.log(typeof `${numOne}${numTwo}`);
console.log(numTwo + '\n' + numOne);
console.log(`${numTwo}
${numOne}`);

// Assignment => 02
console.log(elzero.innerHTML);
console.log(typeof elzero);

// Assignment => 03
console.log(
  '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""`'
);

// Assignment => 04
let a = 21,
  b = 20;
console.log('_' + (b + '_' + a).repeat(4) + '_');
console.log(`_${`${b}_${a}`.repeat(4)}_`);
