/*

Decolver la cantidad de numeros positivos

*/


let arreglo = [10, 50, 28, -35, 87, 42, -500, -24, -32, -55, 23, 42, 64, -40, -28]

function cantidadPositivos(arreglo){

    let i = 0;
    for(let numero of arreglo){
        if(numero >= 0){
            i++
        }
    }

    return i;

}

console.log('cantidad de numeros positivos: ', cantidadPositivos(arreglo));