const user = {
    jearOfBirth: prompt('What is jour year of birth?'),
    homeCity: prompt('What city do you currently live in?'),
    favouriteSport: prompt('What is your favourite sport?')
};

if (user.jearOfBirth == null) {
    alert("It's a pity that you didn't want to enter your date of birth");
} else {
    alert('Your age is ' + (2024 - user.jearOfBirth));
}

if (user.homeCity == null) {
    alert("It's a pity that you didn't want to enter the city you live in");
} else {
    switch (user.homeCity) {
        case 'Kyiv':
            alert('You live in the capital of Ukraine');
            break;
        case 'Washington':
            alert('You live in the capital of the USA');
            break;
        case 'London':
            alert('You live in the capital of the UK');
            break;
        default:
            alert(`You live in ${user.homeCity}`);
            break;
                    }
                }
                
                
if (user.favouriteSport == null) {
    alert("It's a pity that you didn't want to enter your favourite sport");
} else {
    switch (user.favouriteSport) {
        case 'Football':
            alert('Cool, do you want to become Lionel Messi?');
            break;
        case 'Basketball':
            alert('Cool, do you want to become Michael Jordan?');
            break;
        case 'Boxing':
            alert('Cool, do you want to become Oleksandr Ussyk?');
            break;
    }
}
