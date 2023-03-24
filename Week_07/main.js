// Challenge => 01
let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myEmployees = [
  'Amgad',
  'Samah',
  'Ameer',
  'Omar',
  'Othman',
  'Amany',
  'Samia',
  'Anwar',
];
document.write(`<h1>We Have ${myAdmins.indexOf('Stop')} Admins</h1>`);
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === 'Stop') break;
  let counter = 1;
  document.write('<hr />');
  document.write('<div>');
  document.write(`<h2>The Admin for Team ${i + 1} is ${myAdmins[i]}</h2>`);
  document.write('<h3>Team Members:</h3>');
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] !== myAdmins[i][0]) continue;
    document.write(`<p>${counter} - ${myEmployees[j]}</p>`);
    counter++;
  }
  document.write('</div>');
}

// Assignment => 01
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}

// Assignment => 02
start = 10;
end = 0;
let stop = 3;
for (let i = start; i > end; i--) {
  if (i < start) console.log('0' + i);
  else console.log(i.toString());
  if (i === stop) break;
}

// Assignment => 03
start = 1;
end = 6;
let breaker = 2;
for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = breaker; j < end; j += breaker) console.log(`-- ${j}`);
}

// Assignment => 04
let index = 10;
let jump = 2;
end = 0;
for (;;) {
  if (index === jump) break;
  if (index > end) console.log(index);
  index -= jump;
}

// Assignment => 05
let friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';
let counter = +true;
for (let i = +false; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) continue;
  console.log(`${counter++} => ${friends[i]}`);
}

// Assignment => 06
start = 0;
let swappedName = 'elZerO';
let arr = [];
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase())
    arr.push(swappedName[i].toLowerCase());
  else arr.push(swappedName[i].toUpperCase());
}
console.log(arr.join(''));

// Assignment => 07
start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];
for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === 'number' && mix[i] !== +true) console.log(mix[i]);
}

// Assignment => 08
friends = ['Ahmed', 'Sayed', 'Ali', 1, 2, 'Mahmoud', 'Amany'];
index = 0;
counter = 0;
while (index < friends.length) {
  if (typeof friends[index] === 'string' && !friends[index].startsWith('A'))
    console.log(`${++counter} => ${friends[index]}`);
  index++;
}
