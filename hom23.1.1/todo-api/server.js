const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./models/Todo');

const app = express();
const PORT = 5000;

// Налаштування CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Дозволити запити тільки з цього домену (фронтенд)
    methods: 'GET,POST,PUT,DELETE', // Дозволені методи
    allowedHeaders: 'Content-Type,Authorization' // Дозволені заголовки
};

app.use(cors(corsOptions));
app.use(express.json()); // Для парсингу JSON-тіла запитів

// Підключення до MongoDB
mongoose.connect('mongodb://localhost:27017/todo')
    .then(() => console.log('MongoDB підключено'))
    .catch(err => console.log(err));

// Маршрути
app.get('/', (req, res) => {
    res.send('TODO API');
});

// Створення TODO
app.post('/todos', async (req, res) => {
    const { title } = req.body;
    try {
        const newTodo = new Todo({ title });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({ message: 'Помилка при створенні TODO' });
    }
});

// Отримання всіх TODO
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Помилка при отриманні TODO' });
    }
});

// Оновлення TODO
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
        if (!todo) return res.status(404).json({ message: 'TODO не знайдено' });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Помилка при оновленні TODO' });
    }
});

// Видалення TODO
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) return res.status(404).json({ message: 'TODO не знайдено' });
        res.json({ message: 'TODO видалено' });
    } catch (err) {
        res.status(500).json({ message: 'Помилка при видаленні TODO' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
