const elements = document.querySelectorAll(".slide");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");

let counter = 0;

back.addEventListener("click", () => {
        elements[counter].classList.add("hidden");
        counter --;
        elements[counter].classList.remove("hidden");
    doIfBack(back, forward, elements, counter);
    
});
forward.addEventListener("click", () => {
        elements[counter].classList.add("hidden");
        counter ++;
        elements[counter].classList.remove("hidden");
    doIfForward(back, forward, elements, counter);
});

function doIfBack (back, forward, elements, counter) {
    if (counter === 0) {
        back.classList.add("hidden");
    };
    if (counter != elements.length - 1) {
        forward.classList.remove("hidden");
    };
} 
function doIfForward (back, forward, elements, counter) {
    if (counter != 0) {
        back.classList.remove("hidden");
    };
    if (counter === elements.length - 1) {
        forward.classList.add("hidden");
    };
} 
