import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: { items: [], loading: false },
    reducers: {
        fetchTodosRequest: (state) => { state.loading = true; },
        fetchTodosSuccess: (state, action) => { state.loading = false; state.items = action.payload; },
        addTodoRequest: (state, action) => { state.items.push(action.payload); },
        deleteTodoRequest: (state, action) => { state.items = state.items.filter(todo => todo.id !== action.payload); },
        toggleTodoRequest: (state, action) => {
            state.items = state.items.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
        },
    },
});

export const { fetchTodosRequest, fetchTodosSuccess, addTodoRequest, deleteTodoRequest, toggleTodoRequest } = todosSlice.actions;
export default todosSlice.reducer;
