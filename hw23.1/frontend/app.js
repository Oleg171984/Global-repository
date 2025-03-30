const API_URL = 'http://localhost:5000/api/todos';
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
let todos = [];

async function fetchTodos() {
  try {
    const response = await fetch(API_URL);
    todos = await response.json();
    renderTodos();
  } catch (error) {
    console.error('Помилка при завантаженні задач:', error);
  }
}

function renderTodos() {
  todoList.innerHTML = '';
  
  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    if (todo.completed) {
      todoItem.classList.add('completed');
    }
    
    todoItem.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo._id}">
      <div class="todo-content">
        <div class="todo-title">${todo.title}</div>
        <div class="todo-description">${todo.description || ''}</div>
      </div>
      <div class="todo-actions">
        <button class="edit-btn" data-id="${todo._id}">Редагувати</button>
        <button class="delete-btn" data-id="${todo._id}">Видалити</button>
      </div>
    `;
    
    todoList.appendChild(todoItem);
  });
  

  document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', handleStatusChange);
  });
  
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', handleDelete);
  });
  
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', handleEdit);
  });
}


async function addTodo(event) {
  event.preventDefault();
  
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  
  const newTodo = {
    title: titleInput.value,
    description: descriptionInput.value,
    completed: false
  };
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    });
    
    const savedTodo = await response.json();
    todos.unshift(savedTodo);
    renderTodos();
    
    // Очищаємо форму
    titleInput.value = '';
    descriptionInput.value = '';
  } catch (error) {
    console.error('Помилка при додаванні задачі:', error);
  }
}

async function handleStatusChange(event) {
  const todoId = event.target.dataset.id;
  const completed = event.target.checked;
  
  try {
    const response = await fetch(`${API_URL}/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed })
    });
    
    const updatedTodo = await response.json();
    todos = todos.map(todo => 
      todo._id === todoId ? updatedTodo : todo
    );
    
    renderTodos();
  } catch (error) {
    console.error('Помилка при оновленні статусу задачі:', error);
  }
}


async function handleDelete(event) {
  const todoId = event.target.dataset.id;
  
  if (confirm('Ви впевнені, що хочете видалити цю задачу?')) {
    try {
      await fetch(`${API_URL}/${todoId}`, {
        method: 'DELETE'
      });
      
      todos = todos.filter(todo => todo._id !== todoId);
      renderTodos();
    } catch (error) {
      console.error('Помилка при видаленні задачі:', error);
    }
  }
}

function handleEdit(event) {
  const todoId = event.target.dataset.id;
  const todo = todos.find(t => t._id === todoId);
  
  if (todo) {
    const newTitle = prompt('Введіть нову назву задачі:', todo.title);
    if (newTitle === null) return;
    
    const newDescription = prompt('Введіть новий опис задачі:', todo.description);
    if (newDescription === null) return;
    
    updateTodo(todoId, {
      title: newTitle,
      description: newDescription
    });
  }
}


async function updateTodo(todoId, updates) {
  try {
    const response = await fetch(`${API_URL}/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updates)
    });
    
    const updatedTodo = await response.json();
    todos = todos.map(todo => 
      todo._id === todoId ? updatedTodo : todo
    );
    
    renderTodos();
  } catch (error) {
    console.error('Помилка при оновленні задачі:', error);
  }
}

function init() {
  todoForm.addEventListener('submit', addTodo);
  fetchTodos();
}


document.addEventListener('DOMContentLoaded', init);