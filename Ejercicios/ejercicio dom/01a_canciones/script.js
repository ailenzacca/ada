/**
 * Hacer un programa que pida por el nombre de la playlista, y luego actualice
 * el elemento con id "playlist" con dicho valor.
 * Luego, debe preguntar cuantas canciones se desee agregar
 * y que vaya pidiendo una por una, preguntando por el nombre de la banda y la cancion. 
 * A medida que se ingresa cada cancion, debe ir agregando al elemento html con id 
 * "songs-container" el siguiente html:
 * 
 * `<div class="card mb-3">
 *     <div class="card-header">
 *         Nombre Banda
 *     </div>
 *     <div class="card-body">
 *         <p class="card-text">Nombre cancion</p>
 *     </div>
 * </div>`
 * 
 *  Donde "Nombre banda" y "Nombre cancion" se reemplaza por el numero
 *  por los valores ingresados, correspondientemente
 */



 let playlistName = prompt(`Ingrese el nombre de la playlist`);

 let playlist = document.getElementById(`playlist`);
 let songsContainer = document.getElementById(`songs-container`);

 playlist.innerHTML = playlistName;

 let banda = "";
 let song = "";


let songsQ = parseInt(prompt(`¿Cuántas canciones desea agregar?`));

if (songsQ === 0) {
    alert(`Ha agregado cero canciones`)
} else {
    for (i=1; i <= songsQ; i++){
        banda = prompt(`Ingrese la banda o artista`);
        song = prompt(`Ingrese el nombre de la cancion`);
        // mensaje += `${banda}: ${song} \n` ;
    
        songsContainer.innerHTML +=  `<div class="card mb-3">
                                    <div class="card-header">
                                        ${banda}
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">${song}</p>
                                    </div>
                                    </div>`
    }
}








