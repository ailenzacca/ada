//la url local nuestra es esta y luego de los : se pone el numero de puerto.
fetch(`http://localhost:3000/series`)
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data);
    
})

fetch(`http://localhost:3000/peliculas`, {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Toy Story 4'
    })
})
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data);
    
})