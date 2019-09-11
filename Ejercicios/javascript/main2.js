// let firstName = prompt("Ingrese su nombre");
// let lastName = prompt("Ingrese su apellido");
// let message = "Hola "+ firstName + " " + lastName;

// alert(message);

// --------------------------


// let name = prompt ("Ingrese su nombre");

// alert ("Hola " + name);



let name = "VerduCompras"
alert ("Bienvenidxs a " + name);


let appleQuantity = prompt ("¿Cuántas manzanas desea?");
let appleResult = 10 * appleQuantity;

let orangeQuantity = prompt ("¿Cuántas naranjas desea?");
let orangeResult = 15 * orangeQuantity;

let bananaQuantity = prompt("¿Cuántas bananas desea?");
let bananaResult = 10 * bananaQuantity;

alert ("Usted a comprado: " + "\n" +
appleQuantity + " manzanas por $" + appleResult + "\n" +
orangeQuantity + " naranjas por $" + orangeResult + "\n" +
bananaQuantity + " bananas por $" + bananaResult);


let result = appleResult + orangeResult + bananaResult;
alert("El precio total a pagar es de $" + result);

let installments = prompt ("¿Con cuántas cuotas desea abonar?");
let resultInstallments = result / installments;

alert ("¡Gracias por su compra! Usted ha comprado:" + "\n" +
appleQuantity + " manzanas" + "\n"+
orangeQuantity + " naranjas" + "\n" +
bananaQuantity + " bananas" + "\n" + 
"Con un monton total de $" + result + "\n" +
"Abonando en " + installments + " cuotas de $" + resultInstallments);
