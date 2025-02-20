import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function App() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (values, { resetForm }) => {
        setTodos([...todos, { id: Date.now(), text: values.todo }]);
        resetForm();
    };

    return (
        <div className="App">
            <h1>TODO List</h1>

            <Formik
                initialValues={{ todo: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.todo) {
                        errors.todo = 'Required';
                    } else if (values.todo.length < 5) {
                        errors.todo = 'Todo must be at least 5 characters';
                    }
                    return errors;
                }}
                onSubmit={handleAddTodo}
            >
                <Form>
                    <div>
                        <Field type="text" name="todo" placeholder="Add a new todo" />
                        <ErrorMessage name="todo" component="div" />
                    </div>
                    <button type="submit">Add Todo</button>
                </Form>
            </Formik>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
