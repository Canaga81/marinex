const headerNavbar = document.querySelector(".header-navbar");
const pricePagesButton = document.querySelector(".price-pages-text");  

console.log(pricePagesButton);

pricePagesButton.addEventListener("click", () => {
    console.log("ok");
    headerNavbar.classList.toggle("active");
});