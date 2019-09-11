/**
 - Crear una función agregarTodo que appendee(agregue) al elemento con id todos-container
 el siguiente html:

    `<div class="card mb-3 bounceIn faster">
        <div class="card-header">
            Titulo Tarea
        </div>
        <div class="card-body">
            <p class="card-text">Descripcion tarea</p>
        </div>
    </div>`
 
    Donde "Titulo tarea" y "Descripcion tarea" son reemplazados por los valores
de los inputs correspondientes. Si alguno de los campos está vacío, no debe 
agregar el todo.
  
- Crear una función eliminarTodos que borre todos los todos del elemento todos-container
- Bindear las funciones con los botones correspondientes
 */

 
 let todosContainer = document.getElementById(`todos-container`);

 let agregarTodo = function(){
    let titulo = document.getElementById(`todo-title`).value;
    let mensaje = document.getElementById(`todo-description`).value;

    if(titulo.length!== 0 && mensaje.length!== 0) {
        todosContainer.innerHTML += `<div class="card mb-3 bounceIn faster">
        <div class="card-header">
            ${titulo}
        </div>
        <div class="card-body">
            <p class="card-text">${mensaje}</p>
        </div>
    </div>`;
     } else {
         alert(`Error. Uno de los campos no tiene texto.`)
     }
 }

 let eliminarTodos = function () {
    todosContainer.innerHTML = "";
 }

 // ó....:

//  let agregarTodo = function () {
//     let toDoTitle = document.getElementById("todo-title");
//     let toDoTitleName= toDoTitle.value; 

   
//     let description = document.getElementById ("todo-description");
//     let toDoDescription = description.value;

//     if (toDoTitleName.length>0 && toDoDescription.length>0){
    

//     let contenedor= document.getElementById("todos-container");
//     contenedor.innerHTML += `
//         <div class="card mb-3 bounceIn faster">
//             <div class="card-header">
//                 ${toDoTitleName}
//             </div>
//             <div class="card-body">
//                 <p class="card-text">${toDoDescription}</p>
//             </div>
//         </div>`;
// }
// }
// let borrarTodo = function (){
//     let contenedor= document.getElementById("todos-container");
//     contenedor.innerHTML = "";
// }