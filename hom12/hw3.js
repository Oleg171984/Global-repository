const todoList = document.getElementById('todoList'); 
const todoInput = document.getElementById('todoInput'); 
const addTodoBtn = document.getElementById('addTodoBtn'); 

addTodoBtn.addEventListener('click', () => {
const taskText = todoInput.value.trim(); 
if (taskText === '') {
    alert('Будь ласка, введіть текст завдання.');
    return;
}

const li = document.createElement('li'); 
li.innerHTML = `${taskText} <button>Видалити</button>`;
todoList.appendChild(li); 
todoInput.value = ''; 
});

  
todoList.addEventListener('click', (event) => {
if (event.target.tagName === 'BUTTON') { 
    const li = event.target.parentElement; 
    todoList.removeChild(li); 
    }
});