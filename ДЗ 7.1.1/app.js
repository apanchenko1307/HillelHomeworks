// Создать массив, длину и элементы которого задаёт пользователь. Затем отсортировать массив по возрастанию.
// Затем, удалить элементы из массива с 2 по 4 (включительно!). По мере изменений, выводить содержимое массива на страницу.

let arrayLength = NaN;
let array = [];

do {
    arrayLength = parseInt(prompt("Введіть кількість елементів масиву більше 4:"));
} while (isNaN(arrayLength) || arrayLength <= 4);

console.log(arrayLength);

for (let i = 0; i < arrayLength; i++) {
    let character;
    do {
        character = parseInt(prompt("Введіть числа:"));
    } while (isNaN(character));

    array.push(character);
    console.log(array);
}

function  compare(a, b) {
    return a - b;
}

array.sort(compare);
console.log(array);

array.splice(1,3);
console.log(array);
