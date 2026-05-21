/*

Crear un algoritmo que devuelva el numero
mayor y menor en un arreglo

*/

let array = [5, 7, 90, -87, 57, 72, -1500, 40000, -80000, 500000];

function devolverMayorMenor(array){
    let mayor = array[0];
    let menor = array[0];
    for(let i = 0; i < array.length; i++){
        if(mayor < array[i]){
            mayor = array[i]
        } 
        
        if(menor > array[i]){
            menor = array[i]
        }
    }

    return [mayor,menor];
}

console.log(devolverMayorMenor(array));