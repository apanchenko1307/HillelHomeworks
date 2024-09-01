// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

let user = {
    name: '',
    age: 0,
    place: '',
    method() {
        this.name = prompt("Enter user's name:");
        this.age = parseInt(prompt("Enter user's age:"));
        this.place = prompt("Enter user's place of residence:");
        alert(`Name: ${this.name}, Age: ${this.age}, Place of residence: ${this.place}`);
    }
}

user.method();