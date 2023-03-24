// Assignment => 01
let myPrompt = prompt('Print Number From - To', 'Example: 5-20').split('-');
if (myPrompt[0] < myPrompt[1]) {
  for (let i = myPrompt[0]; i <= myPrompt[1]; i++) {
    console.log(+i);
  }
} else {
  for (let i = myPrompt[1]; i <= myPrompt[0]; i++) {
    console.log(+i);
  }
}

// Assignment => 02
let popup = document.createElement('div');
popup.style.cssText =
  'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; height: 200px; background: #9e9e9e; border-radius: 8px;';
let closePopup = document.createElement('div');
closePopup.style.cssText =
  'position: absolute; top: -10px; right: -10px; background: #607d8b; width: 40px; height: 40px; border-radius: 12px; text-align: center; line-height: 40px; cursor: pointer;';
closePopup.onclick = function () {
  this.parentElement.remove();
};
let closePopupText = document.createTextNode('X');
closePopup.append(closePopupText);
popup.append(closePopup);
setTimeout(() => {
  document.body.append(popup);
}, 5000);

// Assignment => 03
// Assignment => 04
// Assignment => 05
let myCounter = document.createElement('div');
myCounter.style.cssText = 'text-align: center; font-size: 24px;';
let myCounterText = document.createTextNode('5');
myCounter.append(myCounterText);
document.body.append(myCounter);
function countdown() {
  myCounter.innerText -= 1;
  if (myCounter.innerText === '0') {
    window.open('https://elzero.org', '_blank', 'width= 400, height= 400');
    clearInterval(counter);
  }
}
let counter = setInterval(countdown, 1000);
