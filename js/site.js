let count = 0;

function addTask() {
  count++;
  let taskTemplate = `<li class="item list-group">Task ${count}</li>`;
  let element = document.getElementById("list");
  element.innerHTML += taskTemplate;
}
