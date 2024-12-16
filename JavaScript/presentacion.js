// Seleccionamos los elementos del DOM donde se mostrará la fecha y la hora
const $tiempo = document.querySelector('.tiempo');
const $fecha = document.querySelector('.fecha');

// Función para actualizar el reloj digital
function digitalClock() {
    let f = new Date(), // Obtenemos la fecha y hora actual
        dia = f.getDate(), // Día del mes
        mes = f.getMonth() + 1, // Mes (0-11, por eso sumamos 1)
        anio = f.getFullYear(), // Año
        diaSemana = f.getDay(); // Día de la semana (0-6)

    // Formateamos el día y el mes para que siempre tengan dos dígitos
    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    // Obtenemos la hora en formato de cadena
    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString; // Mostramos la hora en el DOM

    // Array con los nombres de los días de la semana
    let semana = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
    let showSemana = (semana[diaSemana]); // Obtenemos el nombre del día actual
    $fecha.innerHTML = `${dia}-${mes}-${anio} ${showSemana}`; // Mostramos la fecha y el día en el DOM
}

// Llamamos a la función digitalClock cada segundo para actualizar la hora
setInterval(() => {
    digitalClock();
}, 1000);