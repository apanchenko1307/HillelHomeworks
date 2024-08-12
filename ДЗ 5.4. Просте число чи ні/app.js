// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let number = NaN;

do {
    number = parseInt(prompt('Введіть будь-яке число, більше за 1:'));
} while (isNaN(number) || number <= 1);

let isSimple = true;

for(let i = 2; i < number; i++){
    if (number % i === 0) {
        isSimple = false;
        alert(`Число ${number} не є простим`);
        break;
    }
}

if (isSimple) {
    alert(`Число ${number} є простим`);
}