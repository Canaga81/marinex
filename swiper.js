var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
      },
     loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});