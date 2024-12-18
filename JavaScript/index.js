const sliderContainer = document.querySelector('.contenedorslider');
const imgElement = document.querySelector('.imgslider');

const images = [
    './img/index/Slider.jpg',
    './img/index/Slider2.jpg',
    './img/index/Slider3.jpg',
];
let currentIndex = 0;
let autoSlideInterval;

//Creacion de los botones y su contenedor
const buttonContainer = document.createElement('div');
buttonContainer.style.cssText = `
    display: flex;
    position: absolute;    
    width: 850px; 
`;
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');
prevButton.innerHTML = '&#10094;';
nextButton.innerHTML = '&#10095;';
prevButton.style.cssText = `
    padding: 10px;
    opacity: 40%;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
nextButton.style.cssText = `
    padding: 10px;
    opacity: 40%;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 775px;   
`;
nextButton.addEventListener('click', () => {
    changeImage(true);
    resetAutoSlide();
});
prevButton.addEventListener('click', () => {
    changeImage(false);
    resetAutoSlide();
});

//Creacion de puntos y su contenedor
const dotsContainer = document.createElement('div');
dotsContainer.style.cssText = `
    display: flex;
    margin-top: 400px;
    margin-left: 400px;
    position: absolute;
    
`;
function updateDots() {
    dotsContainer.innerHTML = '';
    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.style.cssText = `
    width: 12px;
    height: 12px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${index === currentIndex ? 'green' : 'gray'};
    display: inline-block;
    cursor: pointer;
    
    `;
        dot.addEventListener('click', () => {
            currentIndex = index;
            imgElement.src = images[currentIndex];
            resetAutoSlide();
            updateDots();
        });
        dotsContainer.appendChild(dot);
    });
}

//Cambio de Imagen
const changeImage = (next = true) => {
    currentIndex = (currentIndex + (next ? 1 : -1) + images.length) % images.length;
    imgElement.src = images[currentIndex];
    updateDots();
};
const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeImage(true), 2000);
}
buttonContainer.appendChild(prevButton);
buttonContainer.appendChild(nextButton);
sliderContainer.appendChild(buttonContainer);
sliderContainer.appendChild(dotsContainer);
updateDots();
resetAutoSlide();


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

const generateButton = document.getElementById('generate-reservation');
const confirmButton = document.getElementById('confirm-reservation');
const dateTimeContainer = document.getElementById('date-time-container');
const timeSelect = document.getElementById('time');
const dateInput = document.getElementById('date');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');





// Evento para el botón de generar reserva
generateButton.addEventListener('click', () => {
   
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    if (!emailPattern.test(emailValue)) {
        alert('Correo no válido. Por favor, ingresa un correo electrónico válido.');
        return; 
    }

    dateTimeContainer.style.display = 'block';
    
    dateInput.addEventListener('change', () => {
        timeSelect.style.display = 'block';
    });
});


timeSelect.addEventListener('change', () => {
    confirmButton.style.display = dateInput.value && timeSelect.value ? 'block' : 'none'; 
});

confirmButton.addEventListener('click', () => {
    const selectedDate = dateInput.value;
    const selectedTime = timeSelect.value;
    const userName = nameInput.value;
 
    alert(`Hola ${userName}, tienes tu reserva a las ${selectedTime} del ${selectedDate}.`);
});


const colors = ['gold', 'red', 'green']; 
    
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄'; 
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
    snowflake.style.fontSize = Math.random() * 1.5 + 1.5 + 'em'; 
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snowflake);

    // Eliminar el copo de nieve después de que haya caído
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
};

setInterval(createSnowflake, 300);