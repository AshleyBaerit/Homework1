let number = prompt('Пожалуйста, введите любое число');

if (!isNaN(number)) {
  if (number % 2 === 0) {
    alert('Число четное');
  } else {
    alert('Число нечетное');
  }
} else {
  alert('Вы ввели некорректное значение');
}