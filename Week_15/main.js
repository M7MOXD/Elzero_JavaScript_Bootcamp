// Challenge => 01
let add = document.querySelector('.add');
let input = document.querySelector('.input');
let containerTask = document.querySelector('.tasks');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
add.addEventListener('click', function () {
  if (input.value.trim()) {
    let id = Date.now();
    let task = {
      id,
      task: input.value.trim(),
    };
    if (tasks) {
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    displayTasks();
  }
  input.value = '';
});
function displayTasks() {
  containerTask.innerHTML = '';
  tasks.forEach((el) => {
    let taskEl = document.createElement('div');
    taskEl.dataset.id = el.id;
    taskEl.classList.add('task');
    let taskText = document.createTextNode(el.task);
    let taskDelButton = document.createElement('button');
    let taskDelText = document.createTextNode('Delete');
    taskDelButton.append(taskDelText);
    taskEl.append(taskText, taskDelButton);
    taskDelButton.addEventListener('click', function () {
      let id = el.id;
      tasks = tasks.filter((ex) => ex.id !== id);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    });
    containerTask.append(taskEl);
  });
}
if (tasks) {
  displayTasks();
}

// Assignment => 01
let fontFamily = document.querySelector('#font-family');
let color = document.querySelector('#color');
let fontSize = document.querySelector('#font-size');
let myP = document.querySelector('.paragraph');
fontFamily.addEventListener('change', function () {
  localStorage.setItem('font-family', this.value);
  myP.style.fontFamily = localStorage.getItem('font-family');
});
color.addEventListener('change', function () {
  localStorage.setItem('color', this.value);
  myP.style.color = localStorage.getItem('color');
});
fontSize.addEventListener('change', function () {
  localStorage.setItem('font-size', this.value);
  myP.style.fontSize = localStorage.getItem('font-size');
});
if (localStorage.getItem('font-family')) {
  myP.style.fontFamily = localStorage.getItem('font-family');
  for (let i = 0; i < fontFamily.options.length; i++) {
    fontFamily.options[i].value === localStorage.getItem('font-family')
      ? (fontFamily.options[i].selected = true)
      : (fontFamily.options[i].selected = false);
  }
}
if (localStorage.getItem('color')) {
  myP.style.color = localStorage.getItem('color');
  for (let i = 0; i < color.options.length; i++) {
    color.options[i].value === localStorage.getItem('color')
      ? (color.options[i].selected = true)
      : (color.options[i].selected = false);
  }
}
if (localStorage.getItem('font-size')) {
  myP.style.fontSize = localStorage.getItem('font-size');
  for (let i = 0; i < fontSize.options.length; i++) {
    fontSize.options[i].value === localStorage.getItem('font-size')
      ? (fontSize.options[i].selected = true)
      : (fontSize.options[i].selected = false);
  }
}

// Assignment => 02
function formEntry(e) {
  sessionStorage.setItem(e.currentTarget.name, e.currentTarget.value);
  e.currentTarget.value = sessionStorage.getItem(e.currentTarget.name);
}
document.getElementById('name').oninput = formEntry;
document.getElementById('mail').oninput = formEntry;
document.getElementById('pass').oninput = formEntry;
document.getElementById('skill').onchange = formEntry;
if (sessionStorage) {
  document.getElementById('name').value = window.sessionStorage.getItem(
    document.getElementById('name').name
  );
  document.getElementById('mail').value = window.sessionStorage.getItem(
    document.getElementById('mail').name
  );
  document.getElementById('pass').value = window.sessionStorage.getItem(
    document.getElementById('pass').name
  );
  document.getElementById('skill').value = window.sessionStorage.getItem(
    document.getElementById('skill').name
  );
}
