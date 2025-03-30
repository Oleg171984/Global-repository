const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Завантаження змінних середовища
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Підключення до MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/todo-app')
  .then(() => console.log('MongoDB підключено'))
  .catch(err => console.error('Помилка підключення до MongoDB:', err));

// Маршрути
app.use('/api/todos', require('./routes/todos'));

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});