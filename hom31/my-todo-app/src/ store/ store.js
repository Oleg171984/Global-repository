import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./todosSlice.js";
import todosSaga from "../sagas/todosSaga.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { todos: todosReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(todosSaga);

export default store;
