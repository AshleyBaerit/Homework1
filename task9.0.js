var user = {
  name: "Angel",
  age: 23,
  isAdmin: true
};

user.cityOfResidence = "New York";
user.age = 30;
delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);