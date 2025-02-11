function User(name, surname) {
    this.name = name;
    this.surname = surname;
}


User.prototype.getInfo = function () {
    return {
        name: this.name,
        surname: this.surname,
    };
};


const user1 = new User("Олександр", "Коваленко");
const user2 = new User("Марія", "Іванова");

// Використання методу getInfo
console.log(user1.getInfo()); // { name: 'Олександр', surname: 'Коваленко' }
console.log(user2.getInfo()); // { name: 'Марія', surname: 'Іванова' }
