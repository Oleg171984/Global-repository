const container = document.getElementById('buttonContainer');
container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      alert(`Ви натиснули: ${event.target.textContent}`);
    }
});


//тільки не розумію чому через класове ім'я не працює
// const container = document.getElementByClassName('container');