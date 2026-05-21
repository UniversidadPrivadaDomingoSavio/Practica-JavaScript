//imprimir numero impar

for(let i = 0;i<=9;i++){

    let resultado = i % 2;
    if(resultado === 0){
        continue;
    }else{
        console.log('Impar', i)
    }

}
