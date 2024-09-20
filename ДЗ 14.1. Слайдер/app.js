const elements = document.querySelectorAll(".slide");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
const circlesParent = document.querySelector(".circles-wrapper");

let counter = 0;

addCircles(circlesParent, elements);

elements[counter].classList.remove("hidden");

function addCircles(parent, elements) {
    elements.forEach((_, index) => {
        const circle = document.createElement('div');
        circle.classList.add("circle");
        circle.dataset.index = index; // Добавляем индекс в качестве атрибута
        parent.appendChild(circle);
    });
}

// Обработка кликов на круги
circlesParent.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        const index = parseInt(event.target.dataset.index, 10);
        showSlide(index);
    }
});

// Обработка кликов на кнопку назад
back.addEventListener("click", () => {
    showSlide(counter - 1);
});

// Обработка кликов на кнопку вперед
forward.addEventListener("click", () => {
    showSlide(counter + 1);
});

// Функция для показа слайда
function showSlide(index) {
    if (index < 0 || index >= elements.length) return; // Проверка границ

    elements[counter].classList.add("hidden"); // Скрыть текущий слайд
    counter = index;
    elements[counter].classList.remove("hidden"); // Показать новый слайд

    updateButtons();
}

// Функция для обновления видимости кнопок
function updateButtons() {
    back.classList.toggle("hidden", counter === 0);
    forward.classList.toggle("hidden", counter === elements.length - 1);
}