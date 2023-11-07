let userAge = prompt("Введіть ваш рік народження");
let userLive = prompt("Ваше місто проживання");
let userSport = prompt("Ваш улюблений вид спорту");
let age = 2023 - `${userAge}`;
let town, sport;

let football = "Ibrahim";
let voleyball = "Ars";
let basketball = "Hero";
switch (userLive) {
    case "Київ": 
    town = "Ви живете у столиці України";
    break;
    case "Лондон": 
    town = "Ви живете у столиці Великої Британії";
    break; 
    case "Вашингтон": 
    town = "Ви живете у столиці США";
    break; 
    default :
     town = "Ви живете в місті " + `${userLive}`;
}

switch (userSport) {
    case "Футбол": 
    sport = "Круто! Хочеш стати Кріштіану Роналду?";
    break;
    case "Волейбол": 
    sport = "Круто! Хочеш стати Максимом Дроздом";
    break; 
    case "Баскетбол": 
    sport = "Круто! Хочеш стати Святославом Михайлюком";
    break; 
    default :
     sport = "Ви ввели " + `${userSport}`;
}

if (userAge == null) {
    alert("Шкода, що Ви не захотіли ввести свою дату народження");
}
if (userLive == null) {
    alert("Шкода, що Ви не захотіли ввести своє місто");
}
if (userSport == null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
}
if (userAge!= null && userLive!= null && userSport!= null) {
    alert(`${age} ${town} ${sport}`);
}