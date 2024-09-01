// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

let obj = {
    findContact(nameToFind) {
        this.contacts.forEach((contact) => {
            if(contact.name === nameToFind) {
                console.log(contact);
            }
    })},
    addContact(name, number, eMail) {
        this.contacts.push({
            name: name,
            number: number,
            eMail: eMail
        });
        console.log(this.contacts);
    },
    contacts: [{
        name: 'Person1',
        number: 380951111111,
        eMail: 'Person1@test.com'
    }, {
        name: 'Person2',
        number: 380952222222,
        eMail: 'Person2@test.com'
    }, {
        name: 'Person3',
        number: 380953333333,
        eMail: 'Person3@test.com'
    }]
};

obj.findContact('Person1');
obj.addContact('Person4', 380954444444, 'Person4@test.com');