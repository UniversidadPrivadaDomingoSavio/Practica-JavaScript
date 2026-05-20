function sumar (a){
    console.log(arguments)
    let resultado = a;
    return resultado + 2;
}

let resultado = sumar(5, 6, 7, 8., 9, 10);
console.log(resultado)