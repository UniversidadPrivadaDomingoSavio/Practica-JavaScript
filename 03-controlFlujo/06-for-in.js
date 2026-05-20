let user = {

    nombre : 'Alexander',
    correo : 'alexander@gmail.com',
    edad : 25,
    sexo : 'Masculino',

}


//aqui obtenemos el nombre de la propiedad pero no su valor
for(let propiedad in user){
    console.log(propiedad);
}

console.log("====================================================")

//aqui como obtenemos el nombre de la propiedad no su valor lo que haremos es obtener ese nombre
//luego colocar ese nombre en el objeto user
for(let propiedad in user){
    console.log(propiedad, ':', user[propiedad]);
}