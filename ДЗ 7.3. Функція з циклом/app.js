function doCycle() {
    let value;
    for (let i = 0; i < 10; i++) {
        value = prompt('Введіть число більше за 100:');
        if (parseInt(value) > 100 || isNaN(parseInt(value))) {
            break;
        };
    };
    return value;
}

alert(doCycle());