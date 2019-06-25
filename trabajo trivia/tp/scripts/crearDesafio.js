
const mostrarBoton = function(boton){
    let crearPreguntas = document.getElementById(`crearPreguntas`);
    let adjuntarPreguntas = document.getElementById(`adjuntarPreguntas`);
    let imagenCrear = document.getElementById(`img-crear`);


    if (boton === "crear") {
        crearPreguntas.classList.remove(`ocultar`);
        adjuntarPreguntas.classList.add(`ocultar`);
        imagenCrear.classList.add(`ocultar`);
    } else if (boton === "adjuntar") {
        adjuntarPreguntas.classList.remove(`ocultar`);
        crearPreguntas.classList.add(`ocultar`);
        imagenCrear.classList.add(`ocultar`);
    }

}

const restarCaracteres = function(){
    let numero = document.getElementById(`crear-pregunta-desafio`);
    let numeroDiv = document.getElementById(`num`);

    console.log(numero.value.length);

    numeroDiv.innerHTML = `${numero.value.length}/120`;

    if(numero.value.length > 120){
        numero.classList.remove(`is-warning`);
        numero.classList.add(`is-error`)
    } else {
        numero.classList.add(`is-warning`);
        numero.classList.remove(`is-error`);
    }
    
}



let nombreDesafío = document.getElementById(`nombre-desafio`);
let descripcionDesafio = document.getElementById(`descripcion-desafio`);
let preguntaCrearDesafio = document.getElementById(`crear-pregunta-desafio`);
let respuestasCrearDesafio = document.getElementsByClassName(`respuesta-crear-desafio`);
let categoriaDesafio = document.getElementById(`categoria-desafio`);

let crearPreguntaRespuestaDesafio = {
    pregunta: preguntaCrearDesafio.value,
    respuestas: [respuestasCrearDesafio]
}


const obtenerRespuestasDesafio = function () {
    let crearRespuestasDesafio = [];
    for (let i = 0; i < respuestasCrearDesafio.length; i++) {
      
      crearRespuestasDesafio[i] = respuestasCrearDesafio[i].value;
        
    }
    return crearRespuestasDesafio;
}
let preguntasDesafio = [];


const enviarDesafio = function(){
    if(preguntasDesafio.length === 10){
        fetch("https://preguntadas.herokuapp.com/v1/challenges", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json; charset=UTF-8",
         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFpbHV6ZXRhIiwiaWF0IjoxNTU5ODMwMTAxfQ.gNyaypDcGgOTWq31G-jrYD2K0RITxsOBnJhHZ4NNmAs",
     },
     method: "post",
     body: JSON.stringify({
           title: nombreDesafío.value,
           description: descripcionDesafio.value,
           questions: preguntasDesafio
       })
}).then(function(result) {
     return result.json();
}).then(function(result) {
   console.log(result.success);
   
}).catch(function(error) {
    console.log(error);
    
});

    }
}

const enviarPregunta = function(){

    //me llega ID y lo agrego al array de IDs preguntas. Y vuando ya tenes las 10, 
    //lo mandas en el fetch de crear desafio.


    fetch("https://preguntadas.herokuapp.com/v1/questions", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8",
         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFpbHV6ZXRhIiwiaWF0IjoxNTU5ODMwMTAxfQ.gNyaypDcGgOTWq31G-jrYD2K0RITxsOBnJhHZ4NNmAs"
     },
     method: "post",
     body: JSON.stringify({
           title: nombreDesafío.value,
           description: descripcionDesafio.value,
           answer: "4",
           answers: obtenerRespuestasDesafio(),
           category: categoriaDesafio.value	
       })
}).then(function(result) {
     return result.json();
}).then(function(result) {
    preguntasDesafio.push(result.question_id);
    enviarDesafio();

    
}).catch(function(error) {
    console.log(error);
    
});

   
}










