// src/pages/Home.jsx
import { useState } from "react";
import './Home.scss'; // Імпортуємо SCSS для сторінки Home

function Home() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    return (
        <div>
            <h1>Головна</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Додати нову задачу"
                />
                <button type="submit">Додати</button>
            </form>
            <ul>
                {todos.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
