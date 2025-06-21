'use strict';

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// for (let index = 0; index < styles.length; index++) {
//   if (styles[index] === 'blues') {
//     styles[index] = 'classic';
//   }
// }
// // console.log(styles);
// function logItem(array) {
//   for (let index = 0; index < array.length; index++) {
//     console.log(`${index + 1} - ${array[index]}`);
//   }
// }

// logItem(styles);
// console.log('______________________________________');

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const nameUser = prompt('Введи ім‘я');
//   if (array.indexOf(nameUser) >= 0) {
//     alert(`Welcome ${nameUser}`);
//   } else {
//     alert('User not found');
//   }
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...arg) {
//   let sum = 0;
//   let quantity = 0;
//   for (const element of arg) {
//     if (typeof element === 'number') {
//       sum += element;
//       quantity += 1;
//     }
//   }
//   return sum / quantity;
// }

// console.log(caclculateAverage(20, 13, 18));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumArr(arg) {
//   const sum = [];
//   for (let i = 0; i < arg.length - 1; i++) {
//     sum.push(arg[i] + arg[i + 1]);
//   }
//   return sum;
// }

// console.log(sumArr(someArr));

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    if (this.exist()) {
      return this.a + this.b;
    } else {
      return 'No such propeties';
    }
  },
  mult() {
    if (this.exist()) {
      return this.a * this.b;
    } else {
      return 'No such propeties';
    }
  },
  exist() {
    if (this.a && this.b) {
      return true;
    }
  },
};

calculator.read(10, 5);
console.log(calculator.sum());
