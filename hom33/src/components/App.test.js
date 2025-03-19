import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('текст заголовка "TODO" є на сторінці', () => {
  render(<App />);
  const headerElement = screen.getByText(/TODO/i);
  expect(headerElement).toBeInTheDocument();
});

test('можна додати завдання до списку', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Введіть завдання/i);
  const button = screen.getByText(/Додати/i);

  fireEvent.change(input, { target: { value: 'Нове завдання' } });
  fireEvent.click(button);

  const todoItem = screen.getByText(/Нове завдання/i);
  expect(todoItem).toBeInTheDocument();
});

test('не можна додавати порожні завдання', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Введіть завдання/i);
  const button = screen.getByText(/Додати/i);

  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(button);

  const errorMessage = screen.getByText(/Завдання не може бути порожнім/i);
  expect(errorMessage).toBeInTheDocument();
});

test('можна видаляти завдання зі списку', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Введіть завдання/i);
  const button = screen.getByText(/Додати/i);

  fireEvent.change(input, { target: { value: 'Завдання для видалення' } });
  fireEvent.click(button);

  const deleteButton = screen.getByText(/Видалити/i);
  fireEvent.click(deleteButton);

  const todoItem = screen.queryByText(/Завдання для видалення/i);
  expect(todoItem).toBeNull();
});
