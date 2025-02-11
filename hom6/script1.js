const message = prompt('Enter your string');
const chars = prompt('Enter some chars for removing').split('');

function foo(string, arr) {
    return string
        .split('') 
        .filter(char => !arr.includes(char)) 
        .join(''); 
}

const result = foo(message, chars);
alert(result);
