// var arreglo = ['html', 15, true ];

// console.log(arreglo);


// var objeto = {
//     nombre: 'HTML',
//     duracion: 15,
//     estado: true,
//     capitulo: {
//         nombre: "introduccion",
//         videos: 20
//     }
// }

// console.log(objeto.capitulo.nombre);


var arrayObjetos = [
    {
        nombre:'HTML',
        estado: true
    },
    {
        nombre: 'JS',
        estado: true
    },
    {
        nombre: 'CSS',
        estado: false
    }

]

// console.log(arrayObjetos[0].nombre)
// console.log(arrayObjetos[1].nombre)
// console.log(arrayObjetos[2].nombre)

for( let indice of arrayObjetos){
    console.log(indice)
}
