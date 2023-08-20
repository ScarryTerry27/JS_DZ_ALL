// Переменные
// 1 задание
let EARTH;

// 2 задание
let userName;

// 3 задание
let userPassword;

// 4 задание
let name = "Andrey";
// alert(`hello ${1}`); // hello 1
// alert(`hello ${"name"}`); // ? hello name
// alert(`hello ${name}`); // ? hello Andrey

// Математика
// 1 задание
let a = 2;
let x = 1 + (a *= 2); // a = 4, x = 5

//2 задание

let a1 = "" + 1 + 0; // 10
let a2 = "" - 1 + 0; // -1
// во втором выражении, как я понимаю, проводится мат.вычетание,
// т.к. строки не поддержитвают операцию вычетания, то пустая строка приводится к false => логическому нулю
let a3 = true + false; // 1
// логический ноль с лог. единицей
let a4 = 6 / "3"; // 2
let a5 = "2" * "3"; // 6
// здесь как во втором примере, деление и умножение строк не поддерживается
let a6 = 4 + 5 + "px"; // '9px'
// слева направо обычное сложение, затем приводится к строке
let a7 = "$" + 4 + 5; // '$45'
// здесь изначально приводится к строке(приоритет слева направо)
let a8 = "4" - 2; // 2
// как во втором примере
let a9 = "4px" - 2; // NaN
// строки не поддерживают деление, производится попытка строку привести к числовому - отсюда NaN(недопустимое число)
// либо значение, которое получено, невозможно привести к числовому
let a10 = "  -9  " + 5; // '  -9  5'
// конкатенация
let a11 = "  -9  " - 5; // -14
// здесь, как я понимаю, при приведении -9 с пробелами к числу,
//все пробельные символы отбрасываются и учитывается лишь числовое выражение
let a12 = null + 1; // 1
// null приводится к логическому нулю
let a13 = undefined + 1; // NaN
// здесь undefined не является логическим нулем, но и не является логической единицей,
// поэтому его привести к числовому значению не удается, отсюда Nan
let a14 = " \t \n" - 2; // -2
//как и в одном из примеров, пробельные символы отбросились

//3 задание

// let b = Number(prompt("Первое число?", 1));
// let c = Number(prompt("Второе число?", 2));
// alert(c + b); // 12

//Сравнения
//1 задание

5 > 4; // true
"ананас" > "яблоко"; // false
"2" > "12"; //true
undefined == null; // true
// undefined почти небытие, но еще не совсем
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false
//null => ничего, небытие

//Циклы
//1 задание

// let i = 0;
// while (++i < 5) {
//   console.log(i);
// }
// // 1, 2, 3, 4
// i = 0;
// while (i++ < 5) {
//   console.log(i);
// }
//1, 2, 3, 4, 5
//здесь, в моем понимании, сначала идет операция сравнения, а потом уже увеличивается на единицу

//2 задание

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 5; ++i) {
//   console.log(i);
// }

// я проверил, да!!!..опять же, в моем понимании тут сначала операция сравнения.
// в случае с первым циклом while еще до сравнения переменная инкремировалась

//3 задание

// for (let i = 2; i < 11; i += 2) {
//   console.log(i);
// }

//4 задание
// let i = -1;
// while (++i < 3) {
//   alert(`number ${i}!`);
// }

//5 задание

// let number = prompt("Введите число от 100 и больше");

// while (number !== null && Number(number) < 100) {
//   number = prompt("Введите число от 100 и больше");
// }

// Ветвления
//1 задание

// const number = Number(prompt("Введите число между 0 и 3", ""));

// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   default:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

//2 задание

// let browser = "Opera";

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (browser == "Chrome") {
//   alert("You've got the Chrome!");
// } else if (browser == "Firefox") {
//   alert("You've got the Firefox!");
// } else if (browser == "Safari") {
//   alert("You've got the Safari!");
// } else if (browser == "Opera") {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// Функции
let users = ["dima", 1234];

function login() {
  let log = prompt("Введите логин");
  while (true) {
    if (log === null) {
      break;
    } else if (log != users[0]) {
      log = prompt("Введите логин еще раз");
    } else {
      alert("Верный логин");
      return log;
    }
  }
  return null;
}
function password() {
  let psw = prompt("Введите пароль");
  while (true) {
    if (psw === null) {
      break;
    } else if (psw != users[1]) {
      psw = prompt("Введите пароль еще раз");
    } else {
      alert("Верный пароль");
      return psw;
    }
  }
  return null;
}

let user_login = login();
let user_password;

if (user_login) {
  user_password = password();
}

if (user_login && user_password) {
  alert("Вы успешно авторизовались");
} else {
  alert("Что-то пошло не так");
}
