const priceNavbar = document.querySelector(".price-navbar");
const pricePagesTextButton = document.querySelector(".price-pages-text")

pricePagesTextButton.addEventListener("click", () => {
    priceNavbar.classList.toggle("active");
});