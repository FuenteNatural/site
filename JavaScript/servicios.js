const swiperConfig = {
    loop: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
};

// Inicializar el slider
new Swiper('.card-wrapper', swiperConfig);


document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (evento) {
        evento.preventDefault(); 
        const destino = document.querySelector(this.getAttribute('href'));

        const posicion = destino.offsetTop - 130;
        window.scrollTo({
            top: posicion,
            behavior: 'smooth'
        });
    });
});

setInterval(() => {
    document.querySelector('.swiper-button-next').click();
}, 3000);
