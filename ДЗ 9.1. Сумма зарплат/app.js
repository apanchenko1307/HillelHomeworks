let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000},{name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries() {
    let sum = 0;
    for (let key in company) {
        if (typeof(key) === Object) {
            sumSalaries()
        } else {
            for (let i = 0; i < key.length; i++) {
                sum += key[i].salary;
            }
        }
    };
    return sum;
}