


function cualEsMayor(a, b){
    
    if(a > b){
        console.log(a,'es mayor que',b)
    }else if(a < b){
        console.log(a,'es menor que',b)
    }else{
        console.log(a,'es igual que',b)
    }
}

cualEsMayor(500,100);

function cualEsMayorTernario(a, b){
    return a > b ? a: b;
}

console.log(cualEsMayorTernario(100,500));