// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let inputString = prompt("Введіть рядок");
let itemsToDelete = prompt("Введіть символи для видалення через пробіл");

function deleteItems(inputString, itemsToDelete) {
    itemsToDelete = itemsToDelete.split(' ');

    for (let i = 0; i < inputString.length; i++) {
        for (let x = 0; x < itemsToDelete.length; x++) {
            if (inputString[i] === itemsToDelete[x]) {
                inputString = inputString.substring(0, i) + inputString.substring(i + 1);
                i--;
                break;
            }
        }
    }
    return inputString;
}

outputString = deleteItems(inputString, itemsToDelete);

console.log(outputString);
