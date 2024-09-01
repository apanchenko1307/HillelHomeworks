// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let array = [5, 'd', 9, 8, 12, 'f'];

function countArithmeticMean (value) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === 'number') {
            count++;
            sum += value[i];
        }
        
    }
    return sum / count;
}

let mean = countArithmeticMean(array);

console.log(mean);