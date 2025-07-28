import { updateScore } from './productivity.js';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = '✓';
  btn.addEventListener('click', () => {
    li.remove();
    updateScore(1);
  });

  li.appendChild(btn);
  todoList.appendChild(li);
}

todoForm.addEventListener('submit', e => {
  e.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = '';
});
