// Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)

let outputString = '';

for (let i = 20; i <= 30; i += 0.5) {
    outputString += i + ' ';
}

console.log(outputString.slice(0, -1));