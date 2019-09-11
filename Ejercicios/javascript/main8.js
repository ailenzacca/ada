// let mensaje= "";
// let edad = prompt(`Ingrese su edad`);

// mensaje = edad > 18 ? `Puede ingresar al sitio` : `No puede ingresar al sitio`;

// alert(mensaje);

//----------------------------------------------------------------------------

let name1 = prompt(`Ingrese nombre de la jugadora número 1`);
let name2 = prompt(`Ingrese nombre de la jugadora número 2`);

let setWinner = prompt(`¿Quién ganó el set?`)
let setPoint1;
let setPoint2;
let mensaje = "";

while (setWinner === name1 && setWinner === name2) {
    setPoint1 = prompt(`Ingrese el putnaje de la jugadora ${name1}`);
    setPoint2 = prompt(`Ingrese el putnaje de la jugadora ${name2}`);
    setPoint1 ++;
    setPoint2 ++;

    if (setPoint1 >= 3 || setPoint2 >= 3) {
        alert(`El juego ha finalizado.
        Ha ganado
        ${name1} ${setPoint1}
        ${name2} ${setPoint2}`)
    } else {
        alert(`dads`)
    }
}

//----------------------------------------------------------------------------