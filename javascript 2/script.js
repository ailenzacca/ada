// const contenedorEjemplo = document.getElementById(`contenedor-ejemplo`);


// let box = document.createElement(`div`);
// box.classList.add(`box`);

// contenedorEjemplo.appendChild(box);

// for (let i=0; i < 5; i++){

//     let caja = document.createElement(`div`);
//     caja.classList.add(`box`)
    
//     caja.onclick = function(){
//         alert("Hola")
//     }

//     contenedorEjemplo.appendChild(box);
// }
// let otroBox = box.cloneNode()


// let otroBox = document.createElement(`div`);
// otroBox.classList.add(`box`);

// contenedorEjemplo.appendChild(otroBox);

let estante = [];

estante.push("libro", "revista", "comic", "disco");

console.log(estante.splice(2,2));



// for(let i = 0; i < estante.length; i++){
//     console.log(`${i}: ${estante[i]}`);
// }


// for(let item of estante){
//     console.log(item);
    
// }

// for(let i in estante){
//     console.log(`${i}: ${estante[i]}`);
    
// }

let biblioteca = [[],[],[]];

biblioteca[0][2] = "a";

biblioteca[0].push("a", "b", "c");
biblioteca[1].push("d", "e", "f");
biblioteca[2].push("g", "h", "i");

console.log(biblioteca);


// const titulo = document.createElement('h1');
// titulo.innerHTML = "Hola";
// const elementos = document.getElementsByTagName('ul');
// const ul = elementos[0];

// ul.children[0].insertAdjacentElement('afterend', titulo);   

const frutas = ['manzana', 'manzana', 'pera', 'banana', 'manzana', 'pera'];
const bolsa = ['banana', 'manzana', 'pera', 'banana', 'pera', 'pera'];
const caja = ['manzana', 'pera', 'pera', 'banana', 'banana', 'pera'];
    
const obtenerCantidadDeFrutas = function(frutaAContar, recipiente) {
    let cantidadFruta = 0;
    for(let fruta of recipiente) {
        if (fruta === frutaAContar) {
            cantidadFruta++;
        }
    }
    return cantidadFruta;
}

console.log(`Hay ${obtenerCantidadDeFrutas('manzana', caja)} manzanas`);
console.log(`Hay ${obtenerCantidadDeFrutas('banana', bolsa)} banana`);




