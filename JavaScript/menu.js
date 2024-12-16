function addTextToImage(box, text) {
    let textOverlay = box.querySelector('.text-overlay');
    if (!textOverlay) {
    // Crear el div
        textOverlay = document.createElement('div');
        textOverlay.classList.add('text-overlay');
        textOverlay.innerText = text;

    // Agrego el div al contenedor de la caja
        box.appendChild(textOverlay);
    }
}

function showOverlay(button, type) {
    const overlay = button.nextElementSibling;
    overlay.style.display = 'flex';
}
function hideOverlay(button) {
    const overlay = button.parentElement;
    overlay.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    addTextToImage(boxes[0], 'Platos Especiales');
    addTextToImage(boxes[1], 'Bebidas Saludables');
    addTextToImage(boxes[2], 'Postres Deliciosos');
});