import { updateScore } from './productivity.js';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.classList.add('todo-item');

  // Done/Undone toggle button
  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✓';
  doneBtn.classList.add('done-btn');

  let isDone = false;

  doneBtn.addEventListener('click', () => {
    isDone = !isDone;
    li.classList.toggle('done', isDone);
    updateScore(isDone ? 1 : -1); // +1 for done, -1 for undone
  });

  // Optional Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '🗑️';
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', () => {
    if (isDone) updateScore(-1); // If removing a completed task, subtract from score
    li.remove();
  });

  li.appendChild(doneBtn);
  li.appendChild(removeBtn);
  todoList.appendChild(li);
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (!task) return;

  addTodo(task);
  todoInput.value = '';
});
