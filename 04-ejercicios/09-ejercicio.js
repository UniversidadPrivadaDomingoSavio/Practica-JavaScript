let pares = [
    [1,{nombre: 'Alexander'}],
    [2,{nombre: 'Fernando'}],
    [3,{nombre: 'Nicolas'}],
]

function obtenerObjetos(pares){

    let arreglo = [];
    let id = 0;
    let i = 0;
    for(recorrer of pares){
        let objeto = {
            id: recorrer[0],
            nombre: recorrer[1].nombre,
        }
        arreglo[i] = objeto;
        i++;
    }

    console.log(arreglo);

}

obtenerObjetos(pares);