let userNumber = prompt('Enter a three digit number');

if (userNumber[0] === userNumber[1] && userNumber[1] === userNumber[2] && userNumber[0] === userNumber[2]) {
    alert('All the digits are same');
} else if (userNumber[0] === userNumber[1] || userNumber[1] === userNumber[2] || userNumber[0] === userNumber[2]) {
    alert('Some digits are same');
} else {
    alert('No digits are same');
}