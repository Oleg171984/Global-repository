const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    while (todosWrapper.firstChild) {
        todosWrapper.removeChild(todosWrapper.firstChild);
    }
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        if (todo.completed) todoItem.classList.add('todo-item--checked');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onchange = () => {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        };

        const description = document.createElement('span');
        description.className = 'todo-item__description';
        description.textContent = todo.text;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'todo-item__delete';
        deleteButton.textContent = 'Видалити';
        deleteButton.onclick = () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        };

        todoItem.append(checkbox, description, deleteButton);
        todosWrapper.appendChild(todoItem);
    });
}


form.onsubmit = (e) => {
    e.preventDefault();
    todos.push({ text: input.value, completed: false });
    input.value = '';
    saveTodos();
    renderTodos();
};


function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}


window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        todos = JSON.parse(e.newValue) || [];
        renderTodos();
    }
});

renderTodos(); 