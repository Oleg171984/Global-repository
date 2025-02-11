const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    return array.filter(el => el !== item); 
}

const updatedArray = removeElement(array, 4);
console.log(updatedArray); 
