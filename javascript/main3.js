// let country = "Argentina";
// let continent = "América";
// let population = "44 millones de personas";
// let capital = "Ciudad Autónoma de Buenos Aires";
// let dish1 = "Asado";
// let dish2 = "Empanada";
// let dish3 = "Locro";

// let info = "El país de la " + country + ", ubicada en " + continent + ", tiene un total de " + population + "." + " Su capital es la " + capital + " y cuentan con tres deliciosos platos típicos: el " + dish1 + ", " + dish2 + ", " + dish3;

// let nuevaInfo = `el país ${country} ubicado en el continente de ${continent} tiene un total de ${population}. Su capital es ${capital}. Tiene un total de tres deliciosos:
// ${dish1},
// ${dish2},
// ${dish3}`;

// alert(nuevaInfo);

// let trayecto = prompt("¿Cuántos kilómetros desea realizar?");

// let caminando = 10;
// let bici = 15;
// let moto = 20;
// let bus = 25;
// let car = 30;
// let train = 35;

// let timeCaminando = trayecto/caminando;
// let timeBici = trayecto/bici;
// let timeMoto = trayecto/moto;
// let timeBus = trayecto/bus;
// let timeCar = trayecto/car;
// let timeTrain = trayecto/train;

// let operation = `Usted desea recorrer ${trayecto} km, por lo que tardará en llegar:
// caminando: ${timeCaminando} horas
// en bici: ${timeBici} horas
// en moto: ${timeMoto} horas
// en colectivo: ${timeBus} horas
// en auto: ${timeCar} horas
// en tren: ${timeTrain} horas`;

// alert(operation);

let dinero  = prompt("Ingrese la cantidad de dinero disponible");

alert("Usted tiene " + dinero + " pesos");

let servicio = 3;

alert(`Quedan ${servicio} servicios por pagar`);

let serviceAgua = prompt("¿Qué servicio desea pagar?");
let service1 = prompt("¿Cuánto dinero debe abonar para pagar el servicio?");

dinero = dinero - service1;
servicio = servicio - 1;

alert("Quedan " + dinero + " pesos");

alert(`Quedan ${servicio} servicios por pagar`);

let serviceGas = prompt("¿Qué servicio desea pagar?");
let service2 = prompt("¿Cuánto dinero debe abonar para pagar el servicio?");

dinero = dinero - service2;
servicio = servicio - 1;

alert("Quedan " + dinero + " pesos");


alert(`Quedan ${servicio} servicios por pagar`);

let serviceLuz = prompt("¿Qué servicio desea pagar?");
let service3 = prompt("¿Cuánto dinero debe abonar para pagar el servicio?");

dinero = dinero - service3;
alert("Quedan " + dinero + " pesos");

let resumen = `El resumen mensual de su tarjeta es de
${serviceAgua} $${service1}
${serviceGas} $${service2}
${serviceLuz} $${service3}

Le quedan $${dinero} disponibles`;

alert(resumen);





