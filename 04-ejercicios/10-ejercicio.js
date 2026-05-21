/*

Crear una función que al pasarle un numero cree un arreglo
con esa longitud del parametro

*/


function crearArreglo(longitud){

    let arreglo = []
    for(let i = 1;i<longitud +1;i++){
        arreglo[i-1] = i;
    }
    console.log(arreglo)
}

crearArreglo(20);