class Calculator {
    add(a, b) {  // Метод додавання
      return a + b;
    }
  
    subtract(a, b) { // Метод віднімання
      return a - b;
    }
  
    multiply(a, b) { // Метод множення
      return a * b;
    }
  
    divide(a, b) { // Метод ділення
      if (b === 0) {
        throw new Error("На ноль не можна ділити");
      }
      return a / b;
    }
  }
  
  const calc = new Calculator();
  
  console.log(calc.add(5, 3)); // 8
  console.log(calc.subtract(10, 4)); // 6
  console.log(calc.multiply(3, 6)); // 18
  console.log(calc.divide(8, 2)); // 4
  