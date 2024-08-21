// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Найти сумму и количество положительных элементов.
// Найти минимальный элемент массива и его индекс.
// Найти максимальный элемент массива и его индекс.
// Определить количество отрицательных элементов.
// Найти количество нечетных положительных элементов.
// Найти количество четных положительных элементов.
// Найти сумму четных положительных элементов.
// Найти сумму нечетных положительных элементов.
// Найти произведение положительных элементов.
// Найти наибольший среди элементов массива, остальные обнулить.

const initialArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Найти сумму и количество положительных элементов.
let sumPositiveValues = 0;
let counterPositiveValues = 0;
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] > 0) {
        sumPositiveValues += initialArray[i];
        counterPositiveValues++;
    }
}
console.log(`Сума додатних елементів масиву дорівнює ${sumPositiveValues}. Їх кількість дорівнює ${counterPositiveValues}.`);

// Найти минимальный элемент массива и его индекс.
let indexMinValue = 0;
for (let i = 1; i < initialArray.length; i++) {
        if (initialArray[indexMinValue] > initialArray[i]) {
            indexMinValue = i;
        }
}
console.log(`Мінімальний елемент масиву ${initialArray[indexMinValue]} має індекс ${indexMinValue}`);

// Найти максимальный элемент массива и его индекс.
let indexMaxValue = 0;
for (let i = 1; i < initialArray.length; i++) {
        if (initialArray[indexMaxValue] < initialArray[i]) {
            indexMaxValue = i;
        }
}
console.log(`Максимальний елемент масиву ${initialArray[indexMaxValue]} має індекс ${indexMaxValue}`);

// Определить количество отрицательных элементов.
let counterNegativeValues = 0;
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] < 0) {
        counterNegativeValues++;
    }
}
console.log(`Кількість віднятних елементів масиву дорівнює ${counterNegativeValues}.`);

// Найти количество нечетных положительных элементов.
let counterPositiveOddValues = 0;
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] > 0 && initialArray[i] % 2 != 0) {
        counterPositiveOddValues++;
    }
}
console.log(`Кількість додатних непарних елементів масиву дорівнює ${counterPositiveOddValues}.`);

// Найти количество четных положительных элементов.
let counterPositiveEvenValues = 0;
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] > 0 && initialArray[i] % 2 === 0) {
        counterPositiveEvenValues++;
    }
}
console.log(`Кількість додатних парних елементів масиву дорівнює ${counterPositiveEvenValues}.`);

// Найти сумму четных положительных элементов.
let sumPositiveEvenValues = 0;
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] > 0 && initialArray[i] % 2 === 0) {
        sumPositiveEvenValues += initialArray[i];
    }
}
console.log(`Сумв додатних парних елементів масиву дорівнює ${sumPositiveEvenValues}.`);

// Найти сумму нечетных положительных элементов.
let sumPositiveOddValues = 0;
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] > 0 && initialArray[i] % 2 != 0) {
        sumPositiveOddValues += initialArray[i];
    }
}
console.log(`Сумв додатних непарних елементів масиву дорівнює ${sumPositiveOddValues}.`);

// Найти произведение положительных элементов.
let multPositiveValues = 1;
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] > 0) {
        multPositiveValues *= initialArray[i];
    }
}
console.log(`Добуток додатних елементів масиву дорівнює ${multPositiveValues}.`);

// Найти наибольший среди элементов массива, остальные обнулить.
let indexMaxValue1 = 0;
for (let i = 1; i < initialArray.length; i++) {
        if (initialArray[indexMaxValue1] < initialArray[i]) {
            indexMaxValue1 = i;
        }
}
for (let i = 0; i < initialArray.length; i++) {
    if (i === indexMaxValue1) {
        continue;
    }
    initialArray[i] = 0;
}

console.log(initialArray);