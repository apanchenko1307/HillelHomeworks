// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const exchangeRate = 26;

for (let i = 10; i <= 100; i+=10) {
    let result = i * exchangeRate;
    console.log(`${i}$ cost ${result} UAH`);

}