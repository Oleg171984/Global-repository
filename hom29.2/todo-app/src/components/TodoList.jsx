import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    return (
        <div className="todo-list">
            <h2>TODOS</h2>
            {todos.map((todo) => (
                <div key={todo.id} className="todo-item">{todo.text}</div>
            ))}
        </div>
    );
};

export default TodoList;