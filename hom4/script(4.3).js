let birthYear = prompt("Введіть ваш рік народження:"); 
let age;




if (birthYear &&  !isNaN(birthYear)) { 
    age = new Date().getFullYear() - parseInt(birthYear);
} else {
    alert("Ви ввели некоректний рік народження.");
    birthYear = null;
}


let city = prompt("В якому місті ви живете?");


let sport = prompt("Який ваш улюблений вид спорту?");


let message = ""; 

if (birthYear) {
    message += `Ваш вік: ${age} років.\n`;
} else {
    message += "Шкода, що ви не захотіли ввести свій рік народження.\n";
}

if (city) {
    city = city.trim().toLowerCase(); 
    switch (city) {
        case "київ":
            message += "Ти живеш у столиці України.\n";
            break;
        case "вашингтон":
            message += "Ти живеш у столиці США.\n";
            break;
        case "лондон":
            message += "Ти живеш у столиці Великої Британії.\n";
            break;
        case "париж":
            message += "Ти живеш у столиці Франції.\n";
            break;
        default:
            message += `Ти живеш у місті ${city}.\n`;
    }
} else {
    message += "Шкода, що ви не захотіли ввести своє місто.\n";
}

if (sport) {
    switch (sport.trim().toLowerCase()) {
        case "футбол":
            message += "Круто! Хочеш стати як Ліонель Мессі?";
            break;
        case "баскетбол":
            message += "Круто! Хочеш стати як Майкл Джордан?";
            break;
        case "бокс":
            message += "Круто! Хочеш стати як Майк Тайсон?";
            break;
        default:
            message += `Ваш улюблений вид спорту: ${sport}.`;
    }
} else {
    message += "Шкода, що ви не захотіли ввести свій улюблений вид спорту.\n";
}


alert(message);
