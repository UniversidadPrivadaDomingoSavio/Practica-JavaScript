/*

Crear un algoritmo que calcule los impuestos
de un producto y que devuelva el producto mas impuestos

 */

function devolverPrecio(producto,impuesto){

    let resultado= producto * impuesto
    console.log(producto, '+', resultado, '=', producto + producto * impuesto)

}

devolverPrecio(8,0.2);