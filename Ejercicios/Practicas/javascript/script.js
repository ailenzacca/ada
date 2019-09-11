// let songQuantity = prompt(`¿Cuántas canciones va a escuchar?`);
// let mensaje = "";
// for(let i = 1; i <= songQuantity; i++){
//     let song = prompt(`¿Cómo se llama la canción?`);
//     let artist = prompt(`¿De qué artista?`);
//     mensaje += `Canción reproducida: ${song} de ${artist} \n`;
    
// }

// alert(mensaje);


// let animales = ["gato", "perro", "vaca", "lobo"];

// for(let i=0; i<animales.length;i++){
//     console.log(`${i + 1}) ${animales[i]}`);
// }


// animales[0] = "tortuga"

// console.log(animales[0]);

// let name = "Ailen";
// console.log(name[2])

const obtenerPreguntas = function(){
    let preguntas = [
        "Cuanto es 2+2?",
        "Cuantas horas tiene un dia?"
    ]

    return preguntas;
}

const mostrarPreguntas = function(){
    let llorar = obtenerPreguntas();

    for (let i = 0; i < llorar.length; i++) {
        console.log(llorar[i]);
    }
}

mostrarPreguntas();