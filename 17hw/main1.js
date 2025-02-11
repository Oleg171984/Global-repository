class BankAccount {
    constructor(initialBalance) {

      if (initialBalance < 0) {
        console.error("Початковий баланс не може бути від'ємним. Встановлено 0 за замовчуванням.");
        this.balance = 0;
      } else {
        this.balance = initialBalance;
      }
    }
  
    getBalance() {
      console.log(`Поточний баланс: ${this.balance} грн`);
      return this.balance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.error("Сума для внесення повинна бути більшою за 0.");
        return;
      }
      this.balance += amount;
      console.log(`Внесено ${amount} грн. Новий баланс: ${this.balance} грн`);
    }
 
    withdraw(amount) {
      if (amount <= 0) {
        console.error("Сума для зняття повинна бути більшою за 0.");
        return;
      }
      if (amount > this.balance) {
        console.error("Недостатньо коштів для зняття.");
        return;
      }
      this.balance -= amount;
      console.log(`Знято ${amount} грн. Новий баланс: ${this.balance} грн`);
    }
  }
  
  const account1 = new BankAccount(1000);
  
  account1.getBalance();
  account1.deposit(500); 
  account1.withdraw(200); 
  account1.getBalance(); 