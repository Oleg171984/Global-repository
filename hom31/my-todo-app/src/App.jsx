import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosRequest, addTodoRequest, deleteTodoRequest, toggleTodoRequest } from "./ store/todosSlice.js";

const App = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => { dispatch(fetchTodosRequest()); }, [dispatch]);

    const addTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodoRequest({ title: newTodo, completed: false }));
            setNewTodo("");
        }
    };

    return (
        <div>
            <h2>TODO з redux-saga.</h2>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Додати</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.title}
                        <button onClick={() => dispatch(toggleTodoRequest(todo.id))}>✔</button>
                        <button onClick={() => dispatch(deleteTodoRequest(todo.id))}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
