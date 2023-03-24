// Challenge => 01
let docFrag = document.createDocumentFragment();
let header = document.createElement('header');
header.classList.add('header');
header.style.cssText = 'display:';
header.style.cssText =
  'display: flex; padding: 15px; background-color: white; justify-content: space-between; align-items: center;';
let logo = document.createElement('div');
let logoText = document.createTextNode('Elzero');
logo.classList.add('logo');
logo.append(logoText);
logo.style.cssText =
  'font-weight: bold; font-size: 24px; color: rgb(35, 165, 110);';
let menu = document.createElement('ul');
let menuArr = ['Home', 'About', 'Service', 'Contact'];
menu.classList.add('menu');
menu.style.cssText =
  'list-style: none; padding: 0px; margin: 0px; display: flex; justify-content: space-around;';
for (let i = 0; i < menuArr.length; i++) {
  let menuItem = document.createElement('li');
  let menuItemText = document.createTextNode(menuArr[i]);
  menuItem.append(menuItemText);
  menuItem.style.cssText = 'color: #aaa; margin-left: 15px;';
  menu.append(menuItem);
}
header.append(logo, menu);
docFrag.append(header);
let content = document.createElement('div');
content.classList.add('content');
content.style.cssText =
  'display: flex; flex-flow: row wrap; gap: 15px; padding: 15px; justify-content: center;';
for (let i = 1; i <= 15; i++) {
  let prodCard = document.createElement('div');
  prodCard.classList.add('product');
  prodCard.style.cssText =
    'padding: 15px; background-color: white; border: 1px solid #aaa; color: #aaa; box-sizing: border-box; text-align: center; width: calc((100% - 30px) / 3);';
  let prodTitle = document.createElement('span');
  let prodTitleText = document.createTextNode(i);
  prodTitle.append(prodTitleText);
  prodTitle.style.cssText =
    'font-size: 28px; color: black; font-weight: normal; display: block; margin: 15px auto;';
  let prodDesc = document.createTextNode(`Product N.${i}`);
  prodCard.append(prodTitle, prodDesc);
  content.append(prodCard);
}
docFrag.append(content);
let footer = document.createElement('footer');
footer.classList.add('footer');
footer.style.cssText =
  'background-color: rgb(35, 165, 110); color: #aaa; text-align: center; padding: 15px; font-size: 24px;';
let footerText = document.createTextNode('Copyright 2022');
footer.append(footerText);
docFrag.append(footer);
document.body.style.cssText = 'margin: 0; background: #ddd;';
document.body.prepend(docFrag);

// Assignment => 02
let inputAddClass = document.querySelector('.classes-to-add');
let inputRemoveClass = document.querySelector('.classes-to-remove');
let current = document.querySelector('[title="Current"]');
let classes = document.querySelector('.classes-list div');
classes.textContent = [...current.classList].sort().join(' ');
inputAddClass.addEventListener('blur', function () {
  this.value.trim()
    ? current.classList.add(...this.value.trim().toLowerCase().split(' '))
    : false;
  classes.textContent = [...current.classList].sort().join(' ');
  this.value = '';
});
inputRemoveClass.addEventListener('blur', function () {
  this.value.trim()
    ? current.classList.remove(...this.value.trim().toLowerCase().split(' '))
    : false;
  current.classList.length
    ? (classes.textContent = [...current.classList].sort().join(' '))
    : (classes.textContent = 'No Classes To Show');
  this.value = '';
});

// Assignment => 03
let ourElement = document.querySelector('.our-element');
ourElement.nextElementSibling.remove();
let startElement = document.createElement('div');
let startElementText = document.createTextNode('Start');
startElement.append(startElementText);
startElement.classList.add('start');
startElement.dataset.value = 'Start';
startElement.title = 'Start Element';
let endElement = document.createElement('div');
let endElementText = document.createTextNode('End');
endElement.append(endElementText);
endElement.classList.add('end');
endElement.dataset.value = 'End';
endElement.title = 'End Element';
ourElement.before(startElement);
ourElement.after(endElement);

// Assignment => 04
let myElement = document.querySelector('body > div > span');
console.log(myElement.parentElement.lastChild.textContent.trim());

// Assignment => 05
document.addEventListener('click', function (e) {
  console.log(`This is ${e.target.localName}`);
  console.log(`This is ${e.target.nodeName}`);
});
