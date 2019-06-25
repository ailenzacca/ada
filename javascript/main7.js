// let estacion = prompt(`Ingrese una estacion`);

// switch (estacion) {
//     case "verano":
//         alert(`21 de diciembre al 21 de marzo`);
//         break
//     case "otoño":
//         alert(`21 de marzo al 21 de junio`);
//         break
//     case "invierno":
//         alert(`21 de junio al 21 de septiemnbre`);
//         break
//     case "primavera":
//         alert(`21 de septiemnbre al 21 de diciembre`);
//         break
//     default:
//         alert(`Eso no es una estacion`);
// }


//-----------------------------------------------------------------------------

// let text = prompt(`Ingrese un texto`);

// let opcion = prompt(`¿Qué desea hacer con el texto? Elija una opción
// - Duplicar
// - Agregar
// - Mayúscula
// - Minúscula
// - Contar caracteres`);

// let add = "";

// switch(opcion) {
//     case "duplicar":
//         alert(`${text} ${text}`);
//         break
//     case "agregar":
//         add = prompt(`Ingrese el texto que desea agregar`);
//         alert (`${text} ${add}`);
//         break
//     case "mayuscula":
//         text = text.toLocaleUpperCase();
//         alert(`${text}`);
//         break
//     case "minuscula":
//         text = text.toLocaleLowerCase();
//         alert(`${text}`);
//         break
//     case "contar":
//     case "contar caracteres":
//     case "caracteres":
//         alert(`El texto "${text}" tiene ${text.length} caracteres`)
//         break
//     default:
//         alert(`Esa no es una opción`)
// }

//-----------------------------------------------------------------------------

// let mensaje = "Los colores que ha agregado a la lista son:"

// for(i=0;i<6;i++) {
//     let color= prompt(`Ingrese un color:`);
//     mensaje += `\n ${color}`;
//     alert(mensaje);
// }
// alert(`Ya ha ingresado el máximo de colores, ¡gracias!`)

//-----------------------------------------------------------------------------

// let mensaje = prompt(`Bienvenidos a la heladeria Ada. Ingrese la cantidad que desea llevar:
// 1/4 kg (2 sabores)
// 1/2 kg (3 sabores)
// 3/4 kg (4 sabores)
// 1 kg (5 sabores)`)

// let total = "¡Gracias por su compra! Usted ha comprado " + mensaje + " de helado. Los sabores que ha elegido son:";
// let cantidadSabor = 0;
// let sabor = "";

// switch(mensaje) {
//     case "1/4":
//     case "1/4 kg":
       
//         cantidadSabor = 2;
//         break
//     case "1/2":
//     case "1/2 kg":
       
//         cantidadSabor = 3;
//         break
//     case "3/4":
//     case "3/4 kg":
       
//         cantidadSabor = 4;
//         break
//     case "1":
//     case "1 kg":
       
//         cantidadSabor = 5;
//         break
//     default: 
//         alert(`Ese no es una cantidad correcta de helado`);    
            
// }



// if (cantidadSabor !== 0) {
//     alert(`Usted tiene ${cantidadSabor} sabores para elegir`);

//     for (i=cantidadSabor; i > 0; i--) {
//         alert(`le quedan ${i} sabores por elegir`)
//         sabor = prompt(`Ingrese los sabores que desea elegir`);
//         // let mensaje = alert(`Usted ha elegido: \n ${sabor}`)
//         total += `\n ${sabor}`;
//     }
    
//     alert(total);
// }

//-----------------------------------------------------------------------------

// let quantity = parseInt(prompt(`¡Bienvenidx! Ingrese la cantidad de canciones que desea agregar a su playlist:`));

// let playlist = "";
// let actualizacion = `Ha agregado a su playlist:`;

// for (i = quantity; i > 0; i --) {
//     alert(`Tiene ${i} canciones para agregar`);
//     let song = prompt(`Ingrese una canción`);
//     playlist += `\n ${song}`;
//     alert(actualizacion + playlist);
// }

// alert(`¡Gracias por utilizarnos! Usted tiene en su playlist personal las siguientes canciones:
// ${playlist}`);

//-----------------------------------------------------------------------------

// let vueltas = parseInt(prompt(`¿Cuántas vueltas vas a dar?`)); 
// let time = "";
// let totalTime = 0;
// let total = 0;
// let example = "";

// for (i =1 ; i < vueltas + 1; i++ ){ //i=vueltas; i>0; i--  ò    i = 1; 1 <= vueltas; i++
//     time = parseInt(prompt(`Ingrese el tiempo que tardó en realizar la ${i} vuelta:`));
//     example += `vuelta ${i}: ${time} seg  \n`;
//     alert(example); 
//     totalTime += time;
//     total = totalTime/vueltas;
// }

// alert(`Cantidad de vueltas: ${vueltas}
// ${example}
// Su promedio es de ${total} segundos`);

//-----------------------------------------------------------------------------

// let password;
// let tacos = 0;

// while (password !== "adaitw" &&
//         tacos < 3) {
//     password = prompt (`Ingrese su contraseña`);
//     tacos++;
// }

// if (password === "adaitw"){
//     alert(`Login correcto`);
// } else {
//     alert(`Login incorrecto`);
// }

//-----------------------------------------------------------------------------

// let magicNumber;

// while (magicNumber !== 7) {
//     magicNumber = parseInt(prompt(`Ingrese un número`));
//     if (magicNumber === 7) {
//         alert(`¡Felicidades, has acertado!`);
//     } else if (magicNumber < 7) {
//         alert(`El número mágico es más grande que ${magicNumber}`);
//     } else if (magicNumber > 7) {
//         alert(`El número mágico es más chico que ${magicNumber}`);
//     }
// }

//-----------------------------------------------------------------------------

let valija = parseInt(prompt(`¿Cuántas valijas desea preparar?`));
let itemList;
let itemQ;
let mensaje = `Cantidad de valijas que agregó: ${valija} \n`;

for(let i = 1; i<=valija; i++) {
    itemList = parseInt(prompt(`¿Cuántos items desea agregar a la valija ${i}?`));
    mensaje += `\nValija ${i}: \n`;

    for (let j=1; j<=itemList; j++) {
        itemQ = prompt(`Ingrese los items que quieren dentro de su valija ${i}`);
        mensaje += `${itemQ} \n`;
    }
}

alert(mensaje);

//-----------------------------------------------------------------------------