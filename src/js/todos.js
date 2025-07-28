import { updateScore } from './productivity.js';
import checkIcon from '../assets/icons/check-square.svg';
import trashIcon from '../assets/icons/trash.svg';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.classList.add('todo-item');

  // Done/Undone toggle button
  const doneBtn = document.createElement('button');
  doneBtn.classList.add('done-btn');

  const checkImg = document.createElement('img');
  checkImg.src = checkIcon;
  checkImg.alt = 'Done';
  checkImg.classList.add('icon-small');
  doneBtn.appendChild(checkImg);

  let isDone = false;

  doneBtn.addEventListener('click', () => {
    isDone = !isDone;
    li.classList.toggle('done', isDone);
    updateScore(isDone ? 1 : -1); // +1 for done, -1 for undone
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');

  const trashImg = document.createElement('img');
  trashImg.src = trashIcon;
  trashImg.alt = 'Remove';
  trashImg.classList.add('icon-small');
  removeBtn.appendChild(trashImg);

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
