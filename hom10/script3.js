const user = {
    name: "Олександр",
    age: 25,
    location: "Київ, Україна",
    profession: "Програміст",

    getUserInfo() {
      return `Ім'я: ${this.name}, Вік: ${this.age}, Місце проживання: ${this.location}, Професія: ${this.profession}`;
    }
  };
  
  
  console.log(user.getUserInfo());
  