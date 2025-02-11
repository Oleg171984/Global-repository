function printChoise() {
    let iterations = 0; 

    while (iterations < 10) {
        let userInput = prompt("Введіть число більше 100:");

        if (userInput === null) {
            console.log("Цикл скасовано.");
            break;
        }

        let number = parseInt(userInput); 

        if (number > 100) {
            console.log("Ви ввели число: " + number);
            break; 
        } else {
            console.log("Число повинно бути більше 100, спробуйте ще раз.");
        }

        iterations++; 
    }
}
printChoise()