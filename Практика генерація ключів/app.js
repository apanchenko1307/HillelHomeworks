function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        key += characters[Math.floor(Math.random() * characters.length)];
    }
    return key;
}

const characters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
const key = generateKey(16, characters);
console.log(key);