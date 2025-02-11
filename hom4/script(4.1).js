let nameUser
while (true) {
    nameUser = prompt('I am waiting your name')
    if (nameUser) {
        alert(`Hello ,${nameUser}! How are you?`)
        break;
    } else {
        
        alert('Pliase enter name again')
    }
}

