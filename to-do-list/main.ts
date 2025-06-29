console.log('app start');

let todoList: HTMLElement | null = document.getElementById('todoList');


interface ITodoItem {
	id: number,
	text: string,
}

let todos: ITodoItem[] = [];
let idCounter: number = 1;

function renderTodos () {
	if (todoList) {
		todoList.innerHTML = '';
		todos.forEach((item: ITodoItem) => { 
      todoList?.insertAdjacentHTML('beforeend', `<li>${item.text}</li>`);
    });
	}
}

function newTodo(): void {
	let input: HTMLInputElement	 | null = document.querySelector('#todoInput')
	if (input) {
		let inputContent: string = input.value;
		if (inputContent.trim() !== '') {todos.push({id: Date.now(), text: inputContent});
		input.value = '';}
	}
}

const btn: HTMLElement | null = document.querySelector('#addTodoBtn');

btn?.addEventListener('click', (e: MouseEvent) => {
	newTodo();
	renderTodos();
})