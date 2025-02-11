const textElement = document.getElementById('text');
const button = document.getElementById('btn-1');
textElement.style.fontSize = '24px';
textElement.style.fontWeight = "bold";
button.style.width = '120px';
button.style.height = '30px';


let truFals = true;
button.addEventListener('click', () => {
    if (truFals) {
        textElement.style.color = 'black';  
    } else {
        textElement.style.color = 'red';  
    }

    
    truFals = !truFals;
});