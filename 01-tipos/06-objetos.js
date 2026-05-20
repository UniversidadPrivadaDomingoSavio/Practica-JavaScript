let persona = {

    nombre: "Alexander",
    edad: 25,
    animeFavorito: "Boku no hero academia"

}

//Obtener valores
//Primer metodo
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.animeFavorito);

//Segundo metodo
console.log(persona['nombre']);
console.log(persona['edad']);
console.log(persona['animeFavorito']);

//Asignar nuevo valores
persona.edad = 16;
console.log(persona.edad);
persona['edad'] = 25;
console.log(persona['edad']);

//para eliminar una propiedad

delete persona.animeFavorito;
console.log(persona);