/**
 Hacer que cuando se haga click en los puntos de control del slider,
 cambie a la imagen y al titulo correspondiente, y se ponga la clase
 "selected" en el punto de control clickeado y se elimine de los demás,
 usando para eso una funcion con nombre cambiarImagen, que tome por parámetro
 el número de la imagen a la que se desea cambiar
 */


 let numeroImagenAnterior = 1;

 let cambiarImagen = function (numeroImagen) {
    let imagen = document.getElementById(`imagen-animal`);
    imagen.src = `imagen_${numeroImagen}.jpg`;

    let punto = document.getElementById(`dot_${numeroImagen}`);
    punto.classList.add(`selected`);

   let puntoAnterior = document.getElementById(`dot_${numeroImagenAnterior}`);

    puntoAnterior.classList.remove(`selected`);

    // removeSelected();
    // ocultarTitulo();

    let titulo = document.getElementById(`title_${numeroImagen}`);
    titulo.classList.remove(`hidden`);
    
    let tituloAnterior = document.getElementById(`title_${numeroImagenAnterior}`);
    tituloAnterior.classList.add(`hidden`);

    

    numeroImagenAnterior = numeroImagen;

 

    // removeSelected();
    // ocultarTitulo();
 }


 let removeSelected = function(){
    for(let i = 1; i < 6; i++) {
        let punto = document.getElementById(`dot_${i}`);
        punto.classList.remove(`selected`);
    }
 }

 let ocultarTitulo = function(){
    for(let i = 1; i < 6; i++) {
        let titulo = document.getElementById(`title_${i}`);
        titulo.classList.add(`hidden`);
    }
 }


//  for (let i = 1; i < 6; i++){

//     let cambiarDot = function(i){
//         let click = document.getElementById(`dot_${i}`).classList.toggle(`selected`);
//     }
     
//      let cambiarTitulo = function(i){
//         let title = document.getElementById(`title_${i}`).classList.toggle(`hidden`);
//         title.onclick = function(){
//             cambiarImagen(`imagen_${i}.jpg`);
//         }
//      }
     
     
//     //  click.onclick = cambiarImagen;
//     let cambiarImagen = function(numeroImagen) {
//         document.getElementById(`imagen_animal`);
//         click.onclick = cambiarImagen;
//         cambiarImagen.src = `ìmagen_${i}.jpg`;

//      }

//     //  cambiarImagen();
//     //  cambiarTitulo();

//  }


