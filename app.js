const btn_1 = document.getElementById("btn-1");
const btn_2 = document.getElementById("btn-2");
const btn_3 = document.getElementById("btn-3");

const conditionText1 = document.querySelector(".condition-center-body-1");
const conditionText2 = document.querySelector(".condition-center-body-2");
const conditionText3 = document.querySelector(".condition-center-body-3");

btn_1.addEventListener("click", () => {
    conditionText1.classList.toggle("active");
});

btn_2.addEventListener("click", () => {
    conditionText2.classList.toggle("color");
});

btn_3.addEventListener("click", () => {
    conditionText3.classList.toggle("background");
});