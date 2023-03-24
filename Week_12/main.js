// Assignment => 01
document.body.firstElementChild;
document.body.children[0];
document.body.childNodes[1];
document.getElementById('elzero');
document.getElementsByName('js')[0];
document.getElementsByTagName('div')[0];
document.getElementsByClassName('element')[0];
document.querySelector('div');
document.querySelector('#elzero');
document.querySelector('.element');
document.querySelector('[name="js"]');
document.querySelectorAll('div')[0];
document.querySelectorAll('#elzero')[0];
document.querySelectorAll('.element')[0];
document.querySelectorAll('[name="js"]')[0];

// Assignment => 02
let imgs = document.querySelectorAll('div img');
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/408px-Google_2015_logo.svg.png';
  imgs[i].alt = 'Google Logo';
}

// Assignment => 03
let myInput = document.forms[0].dollar;
let myDiv = document.getElementsByClassName('result')[0];
myInput.oninput = function (e) {
  myDiv.textContent = `{${myInput.value || 0}} USD Dollar = {${(
    myInput.value * 23.8
  ).toFixed(2)}} Egyptian Pound`;
};

// Assignment => 04
let firstEl = document.querySelector('.one');
let lastEl = document.querySelector('.two');
let lastElTitle = firstEl.title;
let lastElTxt = `${firstEl.textContent} ${
  document.getElementsByClassName('assignment4').length
}`;
firstEl.title = lastEl.title;
lastEl.title = lastElTitle;
firstEl.textContent = lastEl.textContent;
lastEl.textContent = lastElTxt;

// Assignment => 05
imgs = document.querySelectorAll('body img');
for (let i = 0; i < imgs.length; i++) {
  imgs[i].hasAttribute('alt')
    ? (imgs[i].alt = 'Old')
    : (imgs[i].alt = 'Elzero New');
}

// Assignment => 06
var form = document.forms[1];
var numEl = document.querySelectorAll('input')[1];
var elTxet = document.querySelectorAll('input')[2];
var elType = document.querySelector('select');
var results = document.querySelector('.results');
numEl.setAttribute('min', '0');
form.onsubmit = function (ev) {
  ev.preventDefault();
  document.querySelectorAll('.box').forEach((el) => el.remove());
  for (var i = 1; i <= numEl.value; i++) {
    var newEl = document.createElement(elType.value);
    var newtxt = document.createTextNode(elTxet.value);
    newEl.className = 'box';
    newEl.title = 'Element';
    newEl.id = `id-${i}`;
    newEl.appendChild(newtxt);
    results.appendChild(newEl);
  }
};
