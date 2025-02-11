let number = prompt("Введіть тризначне число");

if (number.length === 3 && !isNaN(number)) {

    if (number[0] === number[1] && number[1] === number[2]) {
        console.log("Усі цифри однакові");
    } else {
        console.log("Не всі числа однакові");
    }

    if (number[0] === number[1] || number[1] === number[2] || number[0] === number[2]) {
        console.log("Є однакові цифри");
    } else {
        console.log("Усі цифри різні");
    }
} else {
    console.log("Введіть число знову");
}
