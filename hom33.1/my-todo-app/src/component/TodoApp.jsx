import React, { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const addTodo = () => {
        if (!input.trim()) {
            setError('Введіть текст');
            return;
        }
        setTodos([...todos, input]);
        setInput('');
        setError('');
    };

    return (
        <div>
            <h1>TODO</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введіть задачу"
            />
            <button onClick={addTodo}>Додати</button>
            {error && <div role="alert" style={{ color: 'red' }}>{error}</div>}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
