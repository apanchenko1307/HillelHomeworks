function product(a) {
    return function(b) {
        return a * b;
    };
};

console.log(product(2)(5));