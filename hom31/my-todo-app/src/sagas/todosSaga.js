import { call, put, takeLatest } from "redux-saga/effects";
import { fetchTodosRequest, fetchTodosSuccess, addTodoRequest, deleteTodoRequest, toggleTodoRequest } from "../ store/todosSlice.js";

const API_URL = "http://localhost:5000/todos";

const fetchTodosApi = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Не вдалося завантажити TODO");
    }
    return await response.json();
};

const addTodoApi = async (todo) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
        throw new Error("Не вдалося додати TODO");
    }
    return await response.json();
};

const deleteTodoApi = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) {
        throw new Error("Не вдалося видалити TODO");
    }
};

const toggleTodoApi = async (todo) => {
    const response = await fetch(`${API_URL}/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
        throw new Error("Не вдалося змінити статус TODO");
    }
    return await response.json();
};

// Сага для завантаження TODO
function* fetchTodosSaga() {
    try {
        const todos = yield call(fetchTodosApi);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        console.error("Помилка завантаження TODO:", error.message);
        // Тут можна додати дію для помилки, якщо хочете відображати повідомлення про помилку в UI
    }
}

// Сага для додавання TODO
function* addTodoSaga(action) {
    try {
        yield call(addTodoApi, action.payload);
    } catch (error) {
        console.error("Помилка додавання TODO:", error.message);
    }
}

// Сага для видалення TODO
function* deleteTodoSaga(action) {
    try {
        yield call(deleteTodoApi, action.payload);
    } catch (error) {
        console.error("Помилка видалення TODO:", error.message);
    }
}

// Сага для зміни статусу TODO
function* toggleTodoSaga(action) {
    try {
        const todo = yield call(toggleTodoApi, action.payload);
        yield put(toggleTodoRequest(todo.id));
    } catch (error) {
        console.error("Помилка зміни статусу TODO:", error.message);
    }
}

export default function* todosSaga() {
    yield takeLatest(fetchTodosRequest.type, fetchTodosSaga);
    yield takeLatest(addTodoRequest.type, addTodoSaga);
    yield takeLatest(deleteTodoRequest.type, deleteTodoSaga);
    yield takeLatest(toggleTodoRequest.type, toggleTodoSaga);
}
