let time = 0;

setInterval(function(){
    time += 0.1;
    document.getElementById("counter").innerHTML = time.toFixed(1);
}, 100);

let vueltas = 0;
let tiempoTotal = 0;


let cronometrarVuelta = function() {
    vueltas++;
    let laps = document.getElementById(`laps`);
    laps.innerHTML += `<p>Vuelta ${vueltas}: ${time.toFixed(1)}s</p>`;
    tiempoTotal = tiempoTotal + time;
    time = 0;
    calcularPromedio();
}

let calcularPromedio = function(){
    let average = document.getElementById(`average`);
    let calculo = tiempoTotal/vueltas;
    average.innerHTML = `Promedio: ${calculo.toFixed(1)}s`;
}

let reiniciar = function(){
    time = 0;
    vueltas = 0;
    tiempoTotal = 0;
    laps.innerHTML = `<h2 id="average">Promedio</h2>`;
}






/**
 * - Crear una variable vueltas, e inicializarla en 0
 * - Crear una variable tiempoTotal, e inicializarla en 0
 * - Crear una función llamada cronometrarVuelta, que debe 
 *      - sumar uno a vueltas
 *      - agregar al elemento con id "laps" el siguiente html
 *          <p>Vuelta 1: 33.2s</p>
 *        reemplazando el número de la vuelta por el de la variable vueltas, 
 *        y los segundos por el valor de la variable time, usando time.toFixed(1),
 *      - sumar el valor de la variable time a tiempoTotal
 *      - poner la variable time en 0
 *      - invocar a calcularPromedio
 * - Crear una función llamada calcularPromedio, que debe actualizar el elemento
 * con id "average" con el string "Promedio: 33.3s", por ejemplo, donde el tiempo
 * es la tiempoTotal / vueltas
 * - Crear una función reiniciar, que debe 
 *      - poner la variable time en 0
 *      - poner la variable vueltas en 0
 *      - poner la variable tiempoTotal en 0
 *      - reemplazar el html del elemento con id "laps" con:
 *          <h2 id="average">Promedio</h2>
 */