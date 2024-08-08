// Task 1

let enteredValue = parseInt(prompt('Task1 / Enter any one digit number:'));

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

let firstNumber = Number(prompt('Task2 / Enter the first number:'));
let secondNumber = Number(prompt('Task2 / Enter the second number'));

if (firstNumber > secondNumber) {
    alert(`${firstNumber} is bigger than ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    alert(`${firstNumber} is smaller than ${secondNumber}`);
} else {
    alert(`${firstNumber} is equal to ${secondNumber}`);
}


// Task 3

let enteredNumber = Number(prompt('Task3 / Enter a two digit number:'));

let secondDigit = enteredNumber % 10;
let firstDigit = (enteredNumber - secondDigit) / 10;

if (firstDigit > secondDigit) {
    alert(`${firstDigit} is bigger than ${secondDigit}`);
} else if (firstDigit < secondDigit) {
    alert(`${firstDigit} is smaller than ${secondDigit}`);
} else {
    alert(`${firstDigit} is equal to ${secondDigit}`);
}


// Task 4

let task4Number = Number(prompt('Task4 / Enter any number:'));

if (task4Number % 2) {
    alert(`${task4Number} is odd`);
} else {
    alert(`${task4Number} is even`);
}


// Task 5

let task5Number = Number(prompt('Task5 / Enter any number:'));

let lastDigit = task5Number % 10;

if (lastDigit % 2) {
    alert(`The last digit ${lastDigit} of the entered number ${task5Number} is odd`);
} else {
    alert(`The last digit ${lastDigit} of the entered number ${task5Number} is even`);
}


// Task 6

let checkedNumber = Number(prompt('Task6 / Enter any number to check:'));

if (checkedNumber >= 0 && checkedNumber <= 500) {
    alert('Входить');
} else {
    alert('Не входить');
}