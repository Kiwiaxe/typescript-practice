"use strict";
console.log('app start');
let todoList = document.getElementById('todoList');
let todos = [];
let idCounter = 1;
function renderTodos() {
    if (todoList) {
        todoList.innerHTML = '';
        todos.forEach((item) => {
            todoList?.insertAdjacentHTML('beforeend', `<li>${item.text}</li>`);
        });
    }
}
function newTodo() {
    let input = document.querySelector('#todoInput');
    if (input) {
        let inputContent = input.value;
        if (inputContent.trim() !== '') {
            todos.push({ id: Date.now(), text: inputContent });
            input.value = '';
        }
    }
}
const btn = document.querySelector('#addTodoBtn');
btn?.addEventListener('click', (e) => {
    newTodo();
    renderTodos();
});
