let monthNumber = 12;
let season = "";

if (monthNumber >= 1 && monthNumber <= 3) {
  season = "Зима";
} else if (monthNumber >= 4 && monthNumber <= 6) {
  season = "Весна";
} else if (monthNumber >= 7 && monthNumber <= 9) {
  season = "Лето";
} else if (monthNumber >= 10 && monthNumber <= 12) {
  season = "Осень";
} else {
  season = "Некорректный номер месяца";
}

console.log(season);