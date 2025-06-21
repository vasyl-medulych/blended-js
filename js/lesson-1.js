// Задача 1. Замовлення дроїдів

'use strict';
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// while (1 == 1) {
//   let number = prompt();
//   if (+number === 10) {
//     alert('Вірно');
//     break;
//   } else {
//     alert('Невірно');
//   }
// }

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 14) {
//   alert('Перша чверть');
// } else if (min <= 29) {
//   alert('Друга чверть');
// } else if (min <= 44) {
//   alert('Третя чверть');
// } else {
//   alert('Четверта чверть');
// }
// console.log(min);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const number = prompt();
// let hour = Math.floor(number / 60);
// let minute = number - hour * 60;
// if (number > 60) {
//   hour = String(hour).padStart(2, '0');
//   alert(`${hour}:${minute}`);
// } else {
//   minute = String(number).padStart(2, '0');
//   alert(`00:${minute}`);
// }

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('Введіть логін');
// console.log(login);
// if (login === 'Адмін') {
//   const password = prompt('Введіть пароль');
//   if (!login) {
//     alert('Скасовано');
//   } else if (password === 'Я головний') {
//     alert('Добрий день');
//   } else {
//     alert('Невірний пароль');
//   }
// } else {
//   alert('Я вас не знаю');
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// alert(getNumbers(10, 20));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     if (a > b) {
//       return b;
//     } else {
//       return a;
//     }
//   }
//   return 'Not a number';
// }

// console.log(min(20, 20));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   const result = [];
//   for (const product of products) {
//     console.log(product);
//     if (products.product === propName) {
//       result.push(products.product);
//     }
//   }
//   return result;
// }
// getAllPropValues('Radar');
