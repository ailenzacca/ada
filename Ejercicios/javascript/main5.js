// let usuario = "ailuzeta";
// let contraseña = "ada2019";


// let enter = prompt("Ingrese su nombre de usuario");

// if (enter === usuario) {
//     alert("Nombre de usuario correcto");
    
//     let enter2 = prompt("Ingrese su contrañesa");

//     if (enter2 === contraseña) {
//         alert("¡Bienvenide a Ada!");
//     } else {
//         alert("Su contraseña es incorrecta");
//     }
    

// } else {
//     alert("Su nombre de usuario es incorrecto");
// }

// let name = "ailen";
// let pet = "luna";
// let age = "22";


// let answer = prompt("¿Cuál es mi nombre?");

// if (answer.toLowerCase() === name) {
//     answer = prompt("¿Cómo se llama mi gata?");
//     if (answer.toLowerCase() === pet) {
//         answer = prompt("¿Cuántos años tengo?");
//         if (answer.toLowerCase() === age) {
//             alert("Has ganado el juego");
//         }else {
//             alert("respuesta incorrecta");
//         }     
//     }else {
//         alert("respuesta incorrecta");
//     }
// } else {
//     alert("respuesta incorrecta");
// }

//--------------------------------------

// let answer = prompt("¿Cuál es el país más grande del mundo?");

// if (answer.toLowerCase() === "rusia") {
//     answer = prompt("¿Cuál es el país más visitado del mundo?");
//     if ( answer.toLowerCase() === "francia") {
//         answer = prompt("¿En qué ciudad vivía el Mago de Oz?");
//         if ( answer.toLowerCase() === "ciudad esmeralda") {
//             alert("¡Ganaste el juego!");
//         }else {
//             alert("respuesta incorrecta")
//         }
//     }else {
//         alert("respuesta incorrecta")
//     }
// }else {
//     alert("respuesta incorrecta")
// }

//--------------------------------------

// let temperature = prompt("Ingrese la temperatura");

// if (temperature < 15) {
//     alert("Que frio!");

// } else if (temperature < 25) {
//     alert("Que lindo!");
// } else {
//     alert("Que calor!");
// }

//--------------------------------------

// let distance = prompt("¿Cuántos km desea recorrer?");

// if (distance < 5) {
//     alert("se recomienda que los km los haga caminando");
// } else if (distance < 10) {
//     alert("se recomienda que los km los haga en bici");
// } else if (distance < 20) {
//     alert("se recomienda que los km los haga en auto");
// } else if (distance < 50){
//     alert("se recomienda que los km los haga en tren");
// } else if (distance > 600) {
//     alert("se recomienda que los km los haga en avion");
// }
// alert("Gracias por utilizar nuestra app :)")


//--------------------------------------

let welcome = alert(`¡Hola! Bienvenidos a TurismoAda! Hoy tenemos tres opciones para usted, con los mejores descuentos:
- Roma 
- Paris
- Barcelona`);

let dias = 0;
let roma = 2000;
let paris = 3000;
let barcelona = 1500;
let precioDestino = 0;
let total = 0;
let persona = 0;


let destino = prompt(`Ingrese el destino al que desea ir`);

if (destino.toLowerCase() === "roma") {
    precioDestino = 2000;

} else if (destino.toLowerCase() === "paris") {
    precioDestino = 3000;


} else if (destino.toLowerCase() === "barcelona") {
    precioDestino = 1500;
    
}

let questionDias = prompt("¿Cuantos dias desea quedarse?");
total = questionDias*precioDestino;
let questionPersonas = prompt("¿Cuántas personas harán el viaje?");
total = total*questionPersonas;

alert(`Usted irá a ${destino} por ${questionDias} días con ${questionPersonas} personas, por un total de $${total}`);



let modification = prompt(`¿Desea modificar algún valor? (destino, días, personas)`)

if (modification.toLowerCase() === "destino"){
    let newModification = prompt(`¿A qúe otro destino desea ir?
    - Roma,
    - Barcelona,
    - París`)

    if (newModification.toLowerCase() === "roma") {
        precioDestino = 2000;
        
    } else if (newModification.toLowerCase() === "paris") {
        precioDestino = 3000;

    } else if (newModification.toLowerCase() === "barcelona") {
        precioDestino = 1500;
    }

    total = questionPersonas * questionDias * precioDestino;
    alert(`Usted irá a ${newModification} por ${questionDias} días con ${questionPersonas} personas, por un total de $${total}`);

}  else if (modification.toLowerCase() === "dias") {
    questionDias = prompt("Cuantos dias?");
    total = questionPersonas * questionDias * precioDestino;
    alert(`Usted irá a ${destino} por ${questionDias} días con ${questionPersonas} personas, por un total de $${total}`);

} else if (modification.toLowerCase() === "personas") {
    questionPersonas = prompt("¿Cuántas personas harán el viaje?");
    total = questionPersonas * questionDias * precioDestino;
    alert(`Usted irá a ${destino} por ${questionDias} días con ${questionPersonas} personas, por un total de $${total}`);

} else if (modification.toLowerCase() === "ninguno") {
    alert("¡Buen viaje! ¡Que lo disfrute!")

} else if (modification.toLowerCase() === "no") {
    alert("¡Buen viaje! ¡Que lo disfrute!")
}







//----------------------------------

// let welcome = prompt(`¡Bievenidxs! Elije a tu princesa favorita de Disney y te diré quién eres
// - Aurora
// - Merida
// - Mulan
// - Elsa
// - Ariel
// - Cenicienta`)

// if (welcome.toLowerCase() === "aurora") {
//     alert("¡Felicitaciones! Eres una persona que no toma ninguna decisión en su película y espera el beso del principe para que la salve. Bye")
// } else if (welcome.toLowerCase() === "merida") {
//     alert(`¡Felicitaciones! Eres una persona un poco terca pero que lo hará lo necesario para seguir con sus ideales. Siempre con tus rulos bien salvajes salvarás a los ignorantes machistas`)
// } else if (welcome.toLowerCase() === "mulan") {
//     alert(`¡Felicitaciones! Eres una persona con la valentía de luchar por sus seres queridos, aún si te dicen que no por ser mujer. ¡Maldito sistema patriarcal!`)
// } else if (welcome.toLowerCase() === "elsa") {
//     alert("¡Felicitaciones! Eres una persona que no se siente cómoda dejandose ser frente a otros, pero cuando lo hagan verán que eres la clase de persona que puede derretir un corazón helado")
// } else if (welcome.toLowerCase() === "ariel") {
//     alert(`¡Felicitaciones! Eres una persona que se cortaría las piernas y se quedaría sin voz con tal de estar con una cara bonita`)
// } else if (welcome.toLowerCase() === "cenicienta") {
//     alert(`¡Felicitaciones! Eres una persona que necesita de tacos y un lindo vestido para conquistar a un principe y dejar que él te salve!` )
// } else {
//     alert(`No tenemos info de esa princesa aún`)
// }

//----------------------------------

// let welcome = alert(`¡Bienvendxs! Nos encontramos ahora frente a la biografía de:
// Nombre: Ángelica
// Apellido: Pickles
// Edad: 3 años
// Muñeca Favorita: Cynthia
// Nacionalidad: Rugratlandia`);
// let modificacion = "";

// let question = prompt(`¿Desea cambiar algun dato de la biografía? (nombre, apellido, edad, muñeca, nacionalidad?)`)
// if (question.toLowerCase() === "nombre") {
//     modificacion = prompt(`¿Por qué nombre desea cambiarlo?`)
//     alert(`¡Genial! Has realizado una modificación. Actualización: 
//     Nombre: ${modificacion}
//     Apellido: Pickles
//     Edad: 3 años
//     Muñeca Favorita: Cynthia
//     Nacionalidad: Rugratlandia`)

// } else if (question.toLowerCase() === "no") {
//     alert(`¡Gracias por visitarnos!`)
// } else if (question.toLowerCase() === "apellido") {
//     modificacion = prompt(`¿Por qué apellido desea cambiarlo?`)
//     alert(`¡Genial! Has realizado una modificación. Actualización: 
//     Nombre: Angela
//     Apellido: ${modificacion}
//     Edad: 3 años
//     Muñeca Favorita: Cynthia
//     Nacionalidad: Rugratlandia`)

// } else if (question.toLowerCase() === "edad") {
//     modificacion = prompt(`¿Por qué edad desea cambiarlo?`)
//     alert(`¡Genial! Has realizado una modificación. Actualización: 
//     Nombre: Angela
//     Apellido: Pickles
//     Edad: ${modificacion} años
//     Muñeca Favorita: Cynthia
//     Nacionalidad: Rugratlandia`)
// } else if (question.toLowerCase() === "muñeca") {
//     modificacion = prompt(`¿Por qué muñeca desea cambiarla?`)
//     alert(`¡Genial! Has realizado una modificación. Actualización: 
//     Nombre: Angela
//     Apellido: Pickles
//     Edad: 3 años
//     Muñeca Favorita: ${modificacion}
//     Nacionalidad: Rugratlandia`)
// } else if (question.toLowerCase() === "nacionalidad") {
//     modificacion = prompt(`¿Por qué nacionalidad desea cambiarlo?`)
//     alert(`¡Genial! Has realizado una modificación. Actualización: 
//     Nombre: Angela
//     Apellido: Pickles
//     Edad: 3 años
//     Muñeca Favorita: Cynthia
//     Nacionalidad: ${modificacion}`)
// } else {
//     alert(`Disculpe, no se pudo realizar la actualización`)
// }


// OTRA FORMA DE HACERLO

// let name = "Angelica";
// let lastName = "Pickles";
// let age = "3";
// let doll = "Cynthia";
// let nacionality = "Rugratlandia";
// let modificacion = "";

// let welcome = alert(`¡Bienvendxs! Nos encontramos ahora frente a la biografía de:
// Nombre: ${name}
// Apellido: ${lastName}
// Edad: ${age} años
// Muñeca: ${doll}
// Nacionalidad: ${nacionality}`)

// let question = prompt(`¿Desea cambiar algun dato de la biografía? (nombre, apellido, edad, muñeca, nacionalidad?)`)
// if (question === "nombre") {
//     name = prompt(`¿Por cuál nombre desea cambiarlo?`)

// } else if (question === "apellido") {
//     lastName = prompt(`¿Por cuál apellido desea cambiarlo?`)

// } else if (question === "edad") {
//     age = prompt(`¿Qué edad desea agregarle?`)
// } else if (question === "muñeca") {
//     doll = prompt(`¿Que muñeca desea ponerle?`)
// } else if (question === "nacionalidad") {
//     nacionality = prompt(`¿Por qué nacionalidad desea actualizar?`)
// } else if (question === "no") {
//     alert(`¡Gracias por visitarnos!`)
// } else {
//     alert(`Disculpe, no se ha podido realizar la actualización`)
// }

// alert(`¡Genial! Has realizado una modificación. Actualización: 
// Nombre: ${name}
// Apellido: ${lastName}
// Edad: ${age} años
// Muñeca: ${doll}
// Nacionalidad: ${nacionality}`)


