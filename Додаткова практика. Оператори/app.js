// Task 1

let enteredValue = parseInt(prompt('Enter any one digit number:'));

switch (enteredValue) {
    case 1:
        console.log('a');
        break;
    case 2:
        console.log('b');
        break;
    case 3:
        console.log('c');
        break;
    default:
        console.log('UA');
        break;
}


// Task 2

let firstNumber = Number(prompt('Enter the first number:'));
let secondNumber = Number(prompt('Enter the second number'));

if (firstNumber > secondNumber) {
    alert(`${firstNumber} is bigger than ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    alert(`${firstNumber} is smaller than ${secondNumber}`);
} else {
    alert(`${firstNumber} is equal to ${secondNumber}`);
}