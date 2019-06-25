//Acciones, funciones de la pagina HOME

const inciarJuego = function(){
    alert(`inciaste juego`);
}

const inciarDesafio = function(){
    alert(`inciaste desafío`);
}

const partidasPendientes = function(){
    let partidas = ["Esperando a que juegue Vicu", 
                    "Espernado a que juegue Mica", 
                    "Espernado a que juegue Ailu"];

    return partidas;
}

const nivelPendiente = function(){
    let nivelUsuario = ["Nivel 1",
                        "Nivel 5",
                        "Nivel 7"]

    return nivelUsuario;
}

const obtenerPartidas = function (){
    let partidas = partidasPendientes();
    let pendiente = document.getElementById(`pendiente`);

    let niveles = nivelPendiente();

    for(let i = 0; i < partidas.length; i++){
        // console.log(`${i + 1}. ${partidas[i]}`);

        pendiente.innerHTML += `<div class="pendientes nes-container is-rounded is-success">
                                    <img class="imagen-pendiente" src="../img/avatar.png">
                                    <p> ${partidas[i]} <br \></p>
                                    <p> ${niveles [i]}</p>
                                    </div> <br \>`;
        
        
        
    }
}

obtenerPartidas();


const subirNivel = function(){
    
    let nivel = document.getElementById(`nivel-container`);

    calculoNivel = Math.floor(obtenerPreguntasRespondidas()/20);
    nivel.innerHTML += `<p>Nivel ${calculoNivel}</p>`
    //que me digan cuantas preguntas me faltan

    let barrita = document.getElementById(`barrita`);

    let calculo = obtenerPreguntasRespondidas()*100/(20*(calculoNivel+1));
    // console.log(calculo);
    
    barrita.style.width = `${calculo}%`;
    
}




const obtenerPreguntasRespondidas = function(){
    let valor = 72;
    
    return valor;
}

const inciarCompetencia = function(){
    alert(`inciaste competencia`);
}


subirNivel();


fetch("https://preguntadas.herokuapp.com/v1/categories", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8",
         "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFpbHV6ZXRhIiwiaWF0IjoxNTU5ODMwMTAxfQ.gNyaypDcGgOTWq31G-jrYD2K0RITxsOBnJhHZ4NNmAs"
     },
     method: "post",
     body: JSON.stringify({
           name: "Entretenimiento",
           color: "violeta",	
       })
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
    
}).catch(function(error) {
console.log(error);

});




// fetch("https://preguntadas.herokuapp.com/v1/users/signin", {
//      headers: {
//          "Accept": "application/json",
//          "Content-Type": "application/json;  charset=UTF-8"
//      },
//      method: "post",
//      body: JSON.stringify({
//          username: "ailuzeta",
//          password: "1234"
//      })  
// }).then(function(result) {
//      return result.json();
// }).then(function(result) {
//     fetch("https://preguntadas.herokuapp.com/v1/users/login", {
//      headers: {
//          "Accept": "application/json",
//          "Content-Type": "application/json;  charset=UTF-8"
//      },
//      method: "post",
//      body: JSON.stringify({
//          username: "ailuzeta",
//          password: "1234"
//      })  
// }).then(function(result) {
//      return result.json();
// }).then(function(result) {
//     console.log(result);
    
// }).catch(function(error) {

// });

// }).catch(function(error) {

// });




// let username = document.getElementById(`input-username`);
// let password = document.getElementById(`input-password`);
// let mail = document.getElementById(`input-mail`);

// fetch("https://preguntadas.herokuapp.com/v1/users/signin", {
//      headers: {
//          "Accept": "application/json",
//          "Content-Type": "application/json;  charset=UTF-8"
//      },
//      method: "post",
//      body: JSON.stringify({
//          username: username,
//          password: password,
//          mail: mail
//      })  
// }).then(function(result) {
//      return result.json();
// }).then(function(result) {
//     if(result.success){
//         alert("Usuarix creado exitosamente")
//     } else {
//         alert("Hubo un error, intente  nuevamente")
//     }
// }).catch(function(error) {
//     alert("Hubo un error, intente  nuevamente");
// });














// const validarPassword = function(password){
//     if (password.length > 8) {
//         return true;
//     } else {
//         return false;
//     }
// }

// if (validarPassword("adait2019")){
//     console.log("contraseña correcta");
// } else {
//     console.log("contraseña incorrecta");
// }


// //o

// const validarPassword = function(password){
//     return password.length > 8;
// }

// if (validarPassword("adait2019")){
//     console.log("contraseña correcta");
// } else {
//     console.log("contraseña incorrecta");
// }

// const ingresarUsuario = function(){
//     let usuario = "";
//     let contraseña = "";

//     if (usuario === "adaitw" && contraseña === "2019") {
//         alert(`pudiste entrar`);
//     } else {
//         alert(`contraseña o usuario incorrecto`);
//     }
// }