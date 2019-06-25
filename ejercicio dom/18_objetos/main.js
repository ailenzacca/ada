// console.log(`${estudiantes[0].nombreCompleto.nombre} ${estudiantes[0].nombreCompleto.apellido}`);

// const imprimirNombreEstudiantes = () => {
//     for(const estudiante of estudiantes){
//         console.log(`${estudiante.nombreCompleto.nombre} ${estudiante.nombreCompleto.apellido}`);
//     }
// }

// imprimirNombreEstudiantes();

// let estudiantesGryffindor = [];

// for(const estudiante of estudiantes){
//     if(estudiantes.casa === `Gryffindor`){
//         estudiantesGryffindor.push(estudiante);
//     }
// }



// const obtenerEstudiantesGryffindor = () => {

//     const esDeGryffindor = estudiante => estudiante.casa === 'Gryffindor';
//     const estudiantesGryffindor = estudiantes.filter(esDeGryffindor);

//     return estudiantesGryffindor;
// }


// console.log(obtenerEstudiantesGryffindor());



// const obtenerEdad = () => {

//     const tienenDiecinueve = estudiante => estudiante.edad >= 19;
//     const estudiantesDiecinueve = estudiantes.filter(tienenDiecinueve);

//     return estudiantesDiecinueve;

// }

// console.log(obtenerEdad());


// const obtenerCasas = (parametroCasa) => {

//     const casasH = estudiante => estudiante.casa === parametroCasa;
//     const estudiantesCasas = estudiantes.filter(casasH);

//     return estudiantesCasas;
// }


// const obtenerEdad = (parametroEdad) => {

//     const edadH = estudiante => estudiante.edad === parametroEdad;
//     const estudianteEdad = estudiantes.filter(edadH);

//     return estudianteEdad;
// }

// console.log(obtenerCasas("Slytherin"));
// console.log(obtenerEdad(18));


//3. estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]), y devuelva un array con lxs estudiantes cuyo familiar sea alguno de los incluidos en el parámetro

// let familiares = ["Sapo", "Lechuza", "Salamandra", "Gato"];

// const estudiantesConFamiliares = (...familiares) => {
//     const tieneFamilia = estudiante => familiares.includes(estudiante.familiar);

//   // ["sapo", "Lechuza"].include("LEchuza");

//     const estudianteConFamiliar = estudiantes.filter(tieneFamilia);

//     return estudianteConFamiliar;
// }

// console.log(estudiantesConFamiliares("Sapo", "Lechuza", "Rata"));


//1. estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y devuelva un array con todxs lxs estudiantes que tengan ese hechizo como hechizoPreferido

// const estudiantesPorHechizo = hechizoP => {
//     const estudiantesHechizosP = estudiante => estudiante.hechizoPreferido === hechizoP;
//     const estudianteHechizo = estudiantes.filter(estudiantesHechizosP);

//     return estudianteHechizo;
// }

// console.log(estudiantesPorHechizo("Expelliarmus"));

//2. estudiantesConMasAmigxsQue, que tome por parametro un numero y devuelva un array con todos lxs estudiantes que tengan un número de amigxs mayor o igual a el número pasado por parámetro

// const estudiantesConMasAmigxsQue = numero => {

//     const estudiantesConAmigxs = estudiante => estudiante.amigxs.length >= numero;
//     const estudiantesAmigx = estudiantes.filter(estudiantesConAmigxs);

//     return estudiantesAmigx;
// }

// console.log(estudiantesConMasAmigxsQue(7));

//4. obtenerPromedioDeEstudiante, que tome por parámetro unx estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias

const obtenerPromedioDeEstudiante = (...estudianteX) => {
    let promedio = null;
  const estudiantePromedio = estudiante =>{

    //   for(estudiante of estudiantes){
    //    estudiante.materias.promedio*

    //   }

    promedio += estudiante.materias.promedio;
    estudianteX === promedio/estudiante.materias.length;

    return estudiantePromedio;

  }


    const estudianteXPromedio = estudiantes.filter(estudiantePromedio);

    return estudianteXPromedio;

}

console.log(obtenerPromedioDeEstudiante("Simon", "Chan"));
