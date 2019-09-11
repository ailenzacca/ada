/**
 - Crear una función llamada mostrarDesplegable, que tome por parámetro un id,
 y que cuando se invoque obtenga el elemento con el id que se le pasó por parámetro
 y a dicho elemento le haga un toggle de la clase "mostrar"
 - Agregar el onclick con la llamada a dicha función y el parámetro correspondiente
 en los elementos h2 del html
 */

 let mostrarDesplegable = function(id) {
    document.getElementById(id).classList.toggle(`mostrar`);
 }


 let mostrarMensaje = function(){
     console.log("Holaa");
     titulo1.onclick = mostrarOtroMensaje;
 }

 let mostrarOtroMensaje = function(){
     console.log("Chau");
     titulo1.onclick = null;
 }

 let titulo1 = document.getElementById(`titulo-1`);
 titulo1.onclick = mostrarMensaje;


 for (let i = 1; i < 4; i++){
     let titulo = document.getElementById(`titulo-${i}`);
     titulo.onclick = function(){
         mostrarDesplegable(`texto-${i}`);
     }
 }