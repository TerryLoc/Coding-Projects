const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert('You must enter someting To-Do!');
  } else {
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }

  inputBox.value = '';
}
