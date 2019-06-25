


const agregarPregunta = function(){

}


const agregarImagen = function(){

}

let pregunta = document.getElementById(`texto-num`);
let respuestaCorrecta = document.getElementById(`respuesta-correcta`);
let respuestas = document.getElementsByClassName(`respuestas`);
let categoria = document.getElementById(`categoria`);




const enviarPregunta = function(){
    fetch("https://preguntadas.herokuapp.com/v1/questions", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8",
         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpY2t5IiwiaWF0IjoxNTU5ODMxODQzfQ.nb94RmZfAtlg1P5h2kz6EJoPytFEg7biua17Uq4z6cI",
     },
     method: "post",
     body: JSON.stringify({
           title: pregunta.value,
           answer: respuestaCorrecta.value,
           answers: obtenerRespuestas(), 
           category: categoria.value
       })
}).then(function(result) {
     return result.json();
}).then(function(result) {
    
    console.log(result.question_id);
    if(result.success){
        alert("Pregunta creada exitosamente");
    } else {
        alert("¡Hubo un error! Intente nuevamente")
    }

}).catch(function(error) {
    alert("¡Hubo un error! Intente nuevamente")
});
    
}

const restarCaracteres = function(){
    let numero = document.getElementById(`texto-num`);
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






const obtenerRespuestas = function () {
    let crearRespuestas = [];
    for (let i = 0; i < respuestas.length; i++) {
      
      crearRespuestas[i] = respuestas[i].value;
        
    }
    return crearRespuestas;
}


fetch("https://preguntadas.herokuapp.com/v1/questions/all", {
     headers: {
         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpY2t5IiwiaWF0IjoxNTU5ODMxODQzfQ.nb94RmZfAtlg1P5h2kz6EJoPytFEg7biua17Uq4z6cI"
     },
     method: "get",
}).then(function(result) {
     return result.json();
}).then(function(result) {
console.log(result);

}).catch(function(error) {

});