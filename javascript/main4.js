// let name = "Usted es Daenerys ";
// alert(name);

// let title1 = prompt("Ingrese el título que tiene");
// name += title1;

// alert(name);

// let title2 = prompt("Ingrese el título que tiene");
// name += `, ${title2}`;

// alert(name);

// let title3 = prompt("Ingrese el título que tiene");
// name += `, ${title3}`;

// alert(name)

// let houseName = prompt("¿Qué Casa es Usted?");
// houseName = houseName.toLowerCase()

// let house1 = "stark";
// let house2 = "lannister";
// let house3 = "targaryen";
// let house4 = "baratheon";

// if (houseName === house1) {
//     alert("Se acerca el Invierno")
// };

// if (houseName === house2) {
//     alert("Oye mi Rugido")
// };

// if (houseName === house3) {
//     alert("Fuego y Sangre")
// };

// if (houseName === house4) {
//     alert("Nuestra es la Furia")
// };

// Tambien se podria haber puesto houseName = "Stark", sin necesidad de dar variable con calor de stark y listo.

// -------------


alert("¡Bienvenido al CajeroCineOnline!");

let message = "";

let food1 = "pochoclos";
let food2 = "chocolates";
let food3 = "gaseosa";

let priceFood1 = 200;
let priceFood2 = 200;
let priceFood3 = 150;

let total = 0;

let question = prompt(`¿Desea agregar ${food1} a su carrito de compras por $${priceFood1}?`);

if (question.toLowerCase() === "si") {
    total += priceFood1;
    message += `Usted a comprado:
${food1} por $${priceFood1} \n`;
    alert(`Usted ha agregado a su carrito \n
    ${food1} $${total}`)
};

if (question.toLowerCase() !== "si") {
    alert(`Usted no ha añadido a su carrito \n
    ${food1}}`)
};


alert(`Su precio actual es de $${total}`);

let question2 = prompt(`¿Desea agregar ${food2} a su carrito de compras por $${priceFood2}?`)

if (question2.toLowerCase() !== "si") {
    alert(`Usted no ha añadido ${food2} a su carrito de compras`)

    
};


if (question2.toLowerCase() === "si") {
    total += priceFood2;
    message += `${food2} por $${priceFood2} \n`;
    alert(`Usted ha agregado a su carrito ${food2} por $${priceFood2}`);
};

let question3 = prompt(`¿Desea agregar ${food3} a su carrito de compras por $${priceFood3}?`);

if (question3.toLowerCase() === "si") {
    total += priceFood3;
    message += `${food3} por $${priceFood3} \n`;
    alert(`Usted ha agregado a su carrito \n
    ${food3} $${priceFood3}`)
};

if (question3.toLowerCase() !== "si") {
    alert(`Usted no ha agregado a su carrito \n
    ${food3}`)
}

alert(`${message}
por un total de $${total}`);
