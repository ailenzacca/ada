/**
 * Hacer un programa que pida por un animal
 * y dependiendo del que se elija, cambiar
 * el atributo src del elemento con id "imagen-animal"
 * con el nombre del archivo correspondiente a ese animal 
 */

    let animal = prompt(`Elija un animal: gato, foca, erizo, panda, perro `);

 let animalImg = document.getElementById(`imagen-animal`);


 switch (animal) {
     case "gato":
        animalImg.src = "gato.jpg"
        break
    case "foca":
        animalImg.src = "foca.jpg"
        break
    case "erizo":
        animalImg.src = "erizo.jpg"
        break
    case "panda":
        animalImg.src = "panda.jpg"
        break
    case "perro":
        animalImg.src = "perro.jpg"
        break
    default:
        alert(`Ese animal no esta disponible`)
 }

