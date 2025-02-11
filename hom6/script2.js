const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function foo(array) {
    const numbers = array.filter(item => typeof item === 'number'); 
    const sum = numbers.reduce((acc, num) => acc + num, 0); 
    return numbers.length ? sum / numbers.length : 0; 
}

const result = foo(array);
console.log(result);
