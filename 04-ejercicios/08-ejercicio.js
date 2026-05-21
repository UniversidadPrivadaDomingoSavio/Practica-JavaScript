/*


crear una funcion de tome un arreglo de objetos y devuelva
un array de pares



*/

let array = [
    {
        id: 1,
        nombre: 'Alexander'

    },
    {
        id: 2,
        nombre: 'Fernando'

    },
    {
        id: 3,
        nombre: 'Nicolas'

    },
]

//Los pares es un Array de Arrays y en cada elemento
//el primer lemento del arreglo es el identificador y el segundo el objeto

function devolverPares(array){

    let paresArreglo = [];
    let i = 0;
    for(objeto of array){
        paresArreglo[i] = [objeto.id, objeto];
        i++
    }

    console.log(paresArreglo);

}

devolverPares(array);