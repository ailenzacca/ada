
const express = require(`express`); //libreria
const cors = require(`cors`); //libreria
const app = express();
const bodyParser = require(`body-parser`);
//este express es la constante express, que es una función. Cuando la ejecutamos nos devuelve/nos crea la aplicación de express, y ahora en app, tenemos acceso a todos los metodos que hay dentro de express. 

const peliculas = []
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.listen(3000, () => {
    console.log(`Server escuchando al puerto 3000`);

});
//el listen evite que la aplicación termine. Node no va a temrinar, va  a seguir corriendo hasta que decidamos pararlo. El lsiten toma dos paramentros. El primero es el puerto es un numero cualquiera, es costumbre 3000 a veces. Y el segundo paramentro es un callback que arranca cuando se ejecuta el listen. Es opcional el callback.

app.post('/peliculas', (request, response) => {
    console.log(`Pedido escuchado`);
    peliculas.push(request.body);
    return response.status(200).json(peliculas);
});

app.get('/peliculas', (request, response) => {
    console.log(`Pedido escuchado`);

    return response.status(200).json(`Lista peliculas`);
})


app.get('/series', (request, response) => {
    console.log(`Pedido escuchado`);

    return response.status(200).json(`Lista series`);
})
//el metodo get se utiliza para: enviar información
//las estiquetas mas comunes son: GET POST PUT DELETE. Con get estamos diciednod que queres OBTENER informarcion, con POST es ENVIAR información.
//el metodo get toma dos parametros. Uno es la ruta y el otro es un callback. La ruta siempre empieza con la barra '/'. Si la pones sola siginifica que la ruta es la ruta donde esat alojado el servidor. LE podemos poner otras cosas como por ejemplo '/movies' es que estamos pidiendo la informacion de la ruta movies. 
//El callback tambien tiene dos paarametros. El primero es request (pedido), y el segundo response (respuesta). Request va a tener toda la informacion del pedido (la ip de donde la hago, etc. Objeto grande).Response tiene diferetnes metodos que arma la respuesa vamos a enviar al que pidió la información. 