const form = document.getElementById('contactForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми

    // Отримуємо значення полів
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    // Очищаємо попередні помилки
    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';

    let isValid = true;

    // Валідація Name
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name є обов\'язковим полем.';
      isValid = false;
    }

    // Валідація Message
    if (message.length < 5) {
      document.getElementById('messageError').textContent = 'Повідомлення має бути не менше 5 символів.';
      isValid = false;
    }

    // Валідація Phone
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').textContent = 'Невірний формат номера. Номер повинен починатися з +380 і містити 12 цифр.';
      isValid = false;
    }

    // Валідація Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Введіть коректну email адресу.';
      isValid = false;
    }

    // Якщо всі поля валідні, виводимо дані у консоль
    if (isValid) {
      console.log({
        Name: name,
        Message: message,
        Phone: phone,
        Email: email
      });
      alert('Повідомлення надіслано успішно!');
      form.reset(); // Очищаємо форму
    }
  });