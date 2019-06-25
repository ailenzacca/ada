// let user = prompt(`Ingrese su nombre de usuario`)
// let password = prompt(`Ingrese su contrañesa`)

// let userCorrecto = user === "adaitw";
// let passwordCorrecto = password === "2019";

// let resultado = userCorrecto && passwordCorrecto;

// if (resultado) {
//     alert(`Felicitaciones, se ha logueado correctamente`)
// } else {
//     alert(`Usuario o contrañesa incorrecta`)
// }

//-----------------------------------------------------------------------------

// let welcome = alert(`Para cambiar la contrañesa debe responder primero a estas tres preguntas de seguridad`)

// let question1 = prompt(`¿Cuál es su película de Disney favorita?`)
// let question2 = prompt(`¿Cuál es tu factura favorita?`)
// let question3 = prompt(`¿Cuál es el nombre de su primera mascota?`)

// let password = "";

// let question1Answer = question1 === "todas";
// let question2Answer = question2 === "tortita negra";
// let question3Answer = question3 === "lisa";

// let resultado = question1Answer && question2Answer && question3Answer;

// if (resultado) {
//    password = prompt(`Ingrese su nueva contraseña`);
//    alert(`Su contraseña ya ha sido actualizada`)
// } else {
//     alert(`Respuesta/s incorrecta/s`)
// }

//-----------------------------------------------------------------------------


// alert(`¿Eres un verdadero fan de Disney? Compruébalo`)
// let question1 = prompt(`¿De qué película provienve el reino de Arendelle?`)
// let question2 = prompt(`¿Cuál es el tercer deseo de Aladdin?`)
// let question3 = prompt(`¿En qué película, además del Rey León, aparece Scar?`)

// question1 = question1 === "frozen";
// question2 = question2 === "que el genio sea libre";
// question3 = question3 === "hercules";

// if (question1 && question2 && question3) {
//     alert(`¡Felicitacioneees! ¡Eres unx verdaderx fan de Disney!`)
// } else if (question1 && question2) {
//     alert(`Uuuuh tan cerca de ser una persona genial. Te has equivocado en la tercer pregunta. La respuesta correcta es "Hercules". En esa película el héroe utiliza el cuerpo de Scar como disfraz mientras posa para que lo pinten en una jarra`)
// } else if (question1 && question3) {
//     alert(`Uuuuh tan cerca de ser una persona genial. Te has equivocado en la segunda pregunta. La respuesta correcta es "Que el genio sea libre". Aladdin cumple su promesa, y frente a varios conflictos, mantiene su palabra y libera al genio.`)
// } else if (question2 && question3) {
//     alert(`Uuuuh tan cerca de ser una persona genial. Te has equivocado en la primer pregunta. La respuesta correcta es "Frozen". Hogar de Elsa, Anna, Olaf, Kristoff, etc`)
// } else if (question2) {
//     alert(`Con solo una respuesta correcta comprueba que debes ver mucho más Disney...`)
// } else if (question3) {
//     alert(`Con solo una respuesta correcta comprueba que debes ver mucho más Disney...`)
// } else if (question1) {
//     alert(`Con solo una respuesta correcta comprueba que debes ver mucho más Disney...`)
// } else {
//     alert(`No has respondido ninguna correctamente, por favor retírate de mi página`)
// }

//-----------------------------------------------------------------------------

// let comida = prompt(`Ingrese una comida`)

// let resultado = comida === "tallarines" ||
//                 comida === "pizza" ||
//                 comida === "canelones" ||
//                 comida === "papas fritas";

// if (resultado) {
//     alert(`Usted tiene buen gusto en la comida`)
// } else {
//     alert(`Usted tiene un gusto terrible`)
// }

//-----------------------------------------------------------------------------

// let question = prompt(`Ingrese un mes y le diré cuantos días tiene`)

// let month31 = question === "enero" ||
//             question === "marzo" ||
//             question === "mayo" ||
//             question === "julio" ||
//             question === "agosto" ||
//             question === "octubre" ||
//             question === "diciembre";

// let month30 = question === "abril" ||
//             question === "junio" ||
//             question === "septiembre" ||
//             question === "noviembre";




// if (month31) {
//     alert (`El mes ${question} tiene 31 días`)
// } else if (month30) {
//     alert(`Este mes tiene 30 días`)
// } else if (question === "febrero") {
//     alert(`Este mes tiene 28 días`)
// } else {
//     alert(`Este mes no existe`)
// }

//-----------------------------------------------------------------------------

// let question = prompt(`Elija una su serie
// · Game of Thrones
// · Breaking Bad
// · Pretty Little Liars
// · Friends
// · CSI
// · Glee
// · Elif
// · Swat
// · Casados con hijos
// · Cobra Kai
// · Edha
// · Safe
// · How I Met Your Mother
// · Big Little Lies
// · The Good Place
// · 13 reasons why
// · Seinfeld`)

// question = question.toLowerCase()

// let good = question === "game of thrones" ||
//             question === "breaking bad" ||
//             question ===  "friends" ||
//             question ===  "glee" ||
//             question ===  "cobra kai" ||
//             question === "how i met your mother" ||
//             question === "big little lies" ||
//             question === "seinfeld" ||
//             question === "the good place";

// let bad = question === "pretty little liars" ||
//         question ===  "csi" ||
//         question ===  "elif" ||
//         question ===  "swat" ||
//         question ===  "casados con hijos" ||
//         question ===  "edha" ||
//         question === "13 reasons why" ||
//         question ===  "safe";

// if (good) {
//     alert(`Usted es una persona con un buen gusto. Congrats`)
// } else if (bad) {
//     alert(`Usted es una persona con un terrible gusto. Bye`)
// } else {
//     alert(`Por el momento no se encuentra esa serie en el inventario`)
// }

//-----------------------------------------------------------------------------

// let paraguas = prompt(`Tienes paraguas?`);
// let dia = prompt(`Como esta el dia?`);

// let tieneParaguas = paraguas === "si";
// let diaFeo = dia === "nublado" || dia === "lluvioso";

// if (tieneParaguas && diaFeo){
//     alert(`Te conviene llevar paraguas`)
// }

//-----------------------------------------------------------------------------

// alert(`Ingrese los tres ingredientes para hacer un daikiri de frutilla`)


// let ingrediente1 = prompt(`Ingrese el primer ingrediente`);
// let ingrediente2 = prompt(`Ingrese el segundo ingrediente`);
// let ingrediente3 = prompt(`Ingrese el tercer ingrediente`);

// let respuesta1 = ingrediente1.toLowerCase() === "ron" ||
//                     ingrediente1.toLowerCase() === "frutilla" ||
//                     ingrediente1.toLowerCase() === "azucar";

// let respuesta2 = ingrediente2.toLowerCase() === "ron" ||
//                     ingrediente2.toLowerCase() === "frutilla" ||
//                     ingrediente2.toLowerCase() === "azucar";

// let respuesta3 = ingrediente3.toLowerCase() === "ron" ||
//                     ingrediente3.toLowerCase() === "frutilla" ||
//                     ingrediente3.toLowerCase() === "azucar";

// alert(`BATIENDO........... (aprete enter)`);

// if (respuesta1 && respuesta2 && respuesta3 && ingrediente1 !== ingrediente2 && ingrediente2 !== ingrediente3 && ingrediente1 !== ingrediente3){
//     alert (`¡Felicitaciones has hecho un daikiri de frutilla!`)
// } else {
//     alert(`Has puesto algun ingrediente incorrecto o has repetido alguno`)
// }
