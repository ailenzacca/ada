/**
 * - Crear una variable biblioteca, que sea un array que contenga
 * tres arrays
 * - Hacer que cuando se haga click en uno de los elementos "librosSeleccionable"
 * a ese elemento se le agregue la clase "seleccionado", y a los otros
 * elementos que tengan esa clase que se la saque
 * - Crear una variable libroSeleccionado, y hacer que cuando se haga
 * click en uno de los libros seleccionables, se guarde en dicha variable el
 * libro que contiene
 * - Hacer que cuando se haga click en uno de los elementos con clase "estante", se agregue
 * al array correspondiente el libro guardado en la variable libroSeleccionado,
 * hasta un maximo de 5 libros por estante
 * - Hacer una funcion actualizarBiblioteca, que recorra el array biblioteca
 * y vaya agregando a los nodos de clase "estante" un elemento div de clase "libro"
 * con los items del array
 */

 let biblioteca = [[], [], []];
 let libroSeleccionables = document.getElementsByClassName(`libro-seleccionable`);
 let estante = document.getElementsByClassName(`estante`);
 let libroSeleccionado;
 let cualquiera;


const seleccionLibro = function(){
    for(let libro of libroSeleccionables){
        libro.onclick = function(){
            for(let libro2 of libroSeleccionables){
                libro2.classList.remove(`seleccionado`);
            }
            
            libro.classList.add(`seleccionado`);
            libroSeleccionado = libro.innerHTML;
            
        } 
    }
}

seleccionLibro();






for(let i = 0; i < estante.length; i++){
    estante[i].onclick = function(){

        // for(let m = 0; m < estante[i].length; m++){
            
        // }
        if(biblioteca[i].length < 5){

            biblioteca[i].push(libroSeleccionado);
        
            actualizarBiblioteca();
        }

       

        

        
        
    }
}

let libro;

const actualizarBiblioteca = function(){
    for(let i =0; i < biblioteca.length; i++){    
           
        estante[i].innerHTML = "";

        for(let j = 0; j < biblioteca[i].length; j++){

            libro = document.createElement(`div`);
            libro.classList.add(`libro`);
            libro.innerHTML = biblioteca[i][j];
            estante[i].appendChild(libro);

            
            
        }

        
        

    }
}







// libroSeleccionado = document.createElement()

// for(let libro3 of libroSeleccionado){
//     biblioteca[i].push(libro);
// }