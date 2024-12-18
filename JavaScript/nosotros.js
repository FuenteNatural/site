const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButto = document.querySelector('.carousel-control-prev');
const nextButto = document.querySelector('.carousel-control-next');

let cIndex = 0;

function updateCarousel(newIndex) {

    if (newIndex < 0) {
        newIndex = carouselItems.length - 1;
    } else if (newIndex >= carouselItems.length) {
        newIndex = 0;
    }
  
    carouselItems[cIndex].classList.remove('active');

    carouselItems[newIndex].classList.add('active');
    cIndex = newIndex;
}

prevButto.addEventListener('click', () => {
    updateCarousel(cIndex - 1);
});
nextButto.addEventListener('click', () => {
    updateCarousel(cIndex + 1);
});

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