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


// Задача:
// Создай функцию createTodoList(), которая возвращает объект с методами для управления списком задач (todo list). Этот объект должен поддерживать следующие методы:

// addTask(task): добавляет задачу в список.
// removeTask(index): удаляет задачу по её индексу.
// getTasks(): возвращает текущий список задач.
// clearTasks(): очищает список задач.


// function createTodoList() {
//     let todoList = []

//     function add(task) {
//         return todoList.push(task);
//     }

//     function remove(index) {
//         return todoList.splice(index, 1)
//     }

//     return {
//         addTask: function (task) {
//             return add(task)
//         },
//         removeTask: function (index) {
//             return remove(index)
//         },
//         getTasks: function () {
//             return todoList
//         },
//         clearTasks: function () {
//             return todoList.length = 0
//         }
//     }
// }


// const todoList = createTodoList();

// todoList.addTask("Learn JavaScript");
// todoList.addTask("Practice closures");

// console.log(todoList.getTasks()); // ["Learn JavaScript", "Practice closures"]

// todoList.removeTask(0);
// console.log(todoList.getTasks()); // ["Practice closures"]

// todoList.clearTasks();
// console.log(todoList.getTasks()); // [] 




// Задача: Счётчик с лимитом
// Создай функцию createLimitedCounter, которая принимает начальное значение счётчика и максимальный лимит. Возвращаемый объект должен иметь следующие методы:

// increment(): Увеличивает значение счётчика на 1, но если счётчик достигает максимального лимита, он больше не увеличивается.
// decrement(): Уменьшает значение счётчика на 1, но если счётчик равен 0, он не уменьшается.
// getValue(): Возвращает текущее значение счётчика.
// reset(): Сбрасывает значение счётчика до начального.


function createLimitedCounter(startValue, limit) {
    let currentValue = startValue;

    function increment() {
        if (currentValue < limit) {
            return currentValue += 1;
        }
    }

    function decrement() {
        if (currentValue > 0) {
            return currentValue -= 1;
        }
    }

    function reset() {
        currentValue = startValue;
    }

    return {
        increment,
        decrement,
        getValue: function() {
            return currentValue
        },
        reset
    }
}

const counter = createLimitedCounter(1, 3)

console.log(counter.getValue());

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());


console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());

console.log(counter.getValue());

counter.reset()

console.log(counter.getValue());
