let step = 0;
let ladder = {
    up: function () { // підніматиме вас на одну сходинку
    step++;
    return this;
    },
    down: function () { // опускатиме вас на одну сходинку
    step--;
    return this;
    },
    showStep: function () { // показує поточну сходинку
    console.log(step);
    return this;
    }
};

ladder.up().up().down().showStep(); 