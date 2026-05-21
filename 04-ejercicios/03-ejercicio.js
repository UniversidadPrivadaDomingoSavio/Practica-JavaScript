/*

Vamos a crear una función que recibe como parametro el arreglo
y el indice para ver el elmento en ese arreglo, pero si el indice sobrepasa lo que hay
en el arreglo debe salir error es decir fuera de indice


*/

function obtenerElento(arreglo, index){

    if(index >= arreglo.length){
        console.log('Indice fuera de rango')
    }else{
        console.log(arreglo[index]);
    }

}



obtenerElento(['papas','arroz'],5);