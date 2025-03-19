import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      setError('Завдання не може бути порожнім');
      return;
    }

    const newTodo = { id: Date.now(), text: inputValue.trim() };
    setTodos([...todos, newTodo]);
    setInputValue('');
    setError('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>TODO</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Введіть завдання"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Додати</button>
      </div>

      {error && <p className="error">{error}</p>}

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
