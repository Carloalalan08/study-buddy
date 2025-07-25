// todos.js
let tasks = [];

function renderTasks() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    list.appendChild(li);
  });
}

document.getElementById("add-todo").addEventListener("click", () => {
  const input = document.getElementById("todo-input");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    input.value = "";
    renderTasks();
  }
});
