'sue strict';


// Задача: Создай функцию makePasswordChecker(password), которая принимает строку с паролем. Эта функция должна возвращать другую функцию, которая проверяет переданную строку: если она совпадает с паролем, то возвращает true, иначе — false.

// Требования:
// Функция должна сохранять переданный пароль в замыкании.
// Внутренняя функция должна принимать аргумент и сравнивать его с паролем.



// function makePasswordChecker(password) {

//     return function (value) {
//         if(password === value) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// const checkPass = makePasswordChecker('myPass');

// console.log(checkPass('myPass'));
// console.log(checkPass('myPassвапвапв'));



// Задача:
// Создай функцию createMultiplier(factor), которая принимает число factor и возвращает другую функцию, которая будет умножать своё аргумент на factor.



// function createMultiplier(factor) {

//     return function (arg) {
//         return arg * factor
//     }
// }

// const result = createMultiplier(5);

// console.log(result(5));

// const createMultiplier = factor => arg => arg * factor

// const result = createMultiplier(5);

// console.log(result(5));




// Задача:
// Создай функцию createCounter(start), которая принимает начальное значение start. Эта функция должна возвращать объект с двумя методами:

// increment: увеличивает текущее значение счётчика на 1.
// decrement: уменьшает текущее значение счётчика на 1.


// function createCounter(start) {

//     function changeBy(value) {
//         return start += value;
//     }

//     return {
//         increment: function() {
//             return changeBy(1)
//         },
//         decrement: function() {
//             return changeBy(-1)
//         }
//     }
// }

// const counter = createCounter(0);

// console.log(counter.increment());
// console.log(counter.decrement());




// Задача:
// Создай функцию createBankAccount(initialBalance), которая принимает начальный баланс и возвращает объект с тремя методами:

// deposit(amount): добавляет указанную сумму к балансу.
// withdraw(amount): снимает указанную сумму, если она не превышает текущий баланс, иначе выводит сообщение об ошибке.
// checkBalance(): возвращает текущий баланс.



// function createBankAccount(initialBalance) {

//     function bankOperations(amount) {
//         return initialBalance += amount
//     }

//     return {
//         deposit: function (amount) {
//             return bankOperations(amount)
//         },
//         withdraw: function (amount) {
//             if(amount > initialBalance) {
//                 return 'false';
//             } else {
//                 return bankOperations(-amount)
//             }
//         },
//         checkBalance: function (amount) {
//             return initialBalance
//         }
//     }
// }

// const myAccount = createBankAccount(100);

// myAccount.deposit(50);
// console.log(myAccount.checkBalance());

// myAccount.withdraw(100);
// console.log(myAccount.checkBalance());

// console.log(myAccount.withdraw(500));










