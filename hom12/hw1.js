let savedLink = ''; 
function getLink() {
  savedLink = prompt('Будь ласка, введіть посилання:');
}

function goLink() {
  if (savedLink) {
    window.location.href = savedLink; 
  } else {
    alert('Будь ласка, введіть посилання перш ніж переходити.');
  }
}