import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../component/TodoApp.jsx';

it('відображає заголовок TODO', () => {
    render(<TodoApp />);
    const heading = screen.getByText(/TODO/i);
    expect(heading).toBeTruthy();
});

it('можна ввести цифри і букви у поле для тексту', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('Введіть задачу');
    fireEvent.change(input, { target: { value: '123abc' } });
    expect(input.value).toBe('123abc');
});

it('відображає помилку, якщо не введено текст при натисканні на Додати', () => {
    render(<TodoApp />);
    const button = screen.getByText('Додати');
    fireEvent.click(button);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage.textContent).toBe('Введіть текст');
});

it('додає новий елемент у список після натискання на Додати', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('Введіть задачу');
    const button = screen.getByText('Додати');

    fireEvent.change(input, { target: { value: 'Нова задача' } });
    fireEvent.click(button);

    const todoItem = screen.getByText('Нова задача');
    expect(todoItem).toBeTruthy();
});
