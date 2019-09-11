
//---- falta terminar ejercicio en main8.js

// let titleElem = document.getElementById('title');

// titleElem.innerHTML = "Holaaa";

// console.log(titleElem);

// ------------------------------------------------------------------

//  let name = prompt(`Ingrese su nombre`);

//  let saludo = document.getElementById('saludo');

//  saludo.innerHTML +=  " " + name;

// ------------------------------------------------------------------

// let persona = {
//     pelo: "naranja",
//     nombre: "mili",
//     edad: 20,
//     tieneLentes: true
// }

// let objeto = {
//     atributo: valor1,
//     atributo: valor2
// }

// let pregunta = {
//     question: "Cuál es la capital de Francia?",
//     answers: [
//         "Buenos Aires",
//         "Londres",
//         "París",
//         "Berlin"],
//     answer: "París",
//     category: "geografía",
//     likes: 4,
// }
// let container = document.getElementById(`container`);

// for (let i = 0; i < pregunta.answers.length; i++){
//     container.innerHTML += `<div class="">${pregunta.answers[i]} </div>`;
// }


// ------------------------------------------------------------------

// let rankings = [{
//     username: "ailen",
//     puntos: 44
// }, {
//     username: "pablo",
//     puntos: 33
// }, {
//     username: "sabri",
//     puntos: 22
// }
// ]

// for (let i = 0; i < rankings.length; i++){
//     console.log(`${i + 1}) ${rankings[i].username} ${rankings[i].puntos} puntos`);
// }


// ------------------------------------------------------------------

// setTimeout(function() {
//     console.log(`Hola`)
// }, 1000);

// setInterval(function() {
//     console.log(`Hola`);
    
// }, 500);

// let i = 0;

// const callback = function(){
//     console.log(i++);
    
// }

// setInterval(callback, 100)



// let i = 0;

// const imprimirNumero = function(){
//     console.log(i++);
// }

// Element.onclick = imprimirNumero;


// const imprimirMensaje = function(){
//     console.log(`Mnesaje 1`);
    
// }

// setTimeout(imprimirMensaje, 3000); 
// console.log(`Mensaje 2`);

// ------------------------------------------------------------------

//promesas

const obtenerMensaje = function(){
    return new Promise(
        function(cumplir, rechazar){
            let rankings = ["Ailu", "Pablo", "Sabri"];
            rechazar(rankings);
        }
    );
} 

obtenerMensaje()
.then(function(resultado){
    console.log(resultado);
    
})
.catch(function(error) {
    console.log(error);
    
})


const obtenerMensaje = function(){
    return new Promise(
        function(cumplir, rechazar){
            setTimeout(function() {
                cumplir("Terminó")
            }, 1000);
        }
    );
} 

obtenerMensaje()
.then(function(resultado){
    console.log(resultado);
    
})
.catch(function(error) {
    console.log(error);
    
})

fetch('https://preguntadas.herokuapp.com')
.then(function(resultado) {
    
})
.catch(function(error) {
    
})

//--------

const url = 'https://preguntadas.herokuapp.com';

const data = {
    username: 'pablo',
    promesas: 'pablo123'
}

const parametros = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    method: 'post'

}

fetch(`${url}/v1/users/signin`, parametros)
.then(function(resultado) {
    return resultado.json();
})
.then(function(resultado) {
    console.log(resultado);
    
})
.catch(function(error) {
    
})

//--------

fetch(
    `${url}/v1/users/signin`,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
).then(function(resultado) {
    console.log(resultado);
    
})

.catch(function(error) {
    
})


