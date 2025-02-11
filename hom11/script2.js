const numberOfImages = 10;

const randomIndex = Math.floor(Math.random() * numberOfImages) + 1;

const imagePath = `images/${randomIndex}.jpg`;

const imageContainer = document.getElementById('image-container');
const imgElement = document.createElement('img');
imgElement.src = imagePath;
imgElement.alt = `Random image ${randomIndex}`;
imgElement.style.maxWidth = '100%'; 
imgElement.style.height = 'auto';

imageContainer.appendChild(imgElement);