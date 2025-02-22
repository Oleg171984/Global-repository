import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <div className="input-container">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Введіть завдання..."
                />
                <button type="submit">Добавить</button>
            </div>
        </form>
    );
};

export default AddTodo;