//No va evaluar la condición al principio sino al final del loop
//esto hara que el loop se repita una vez y alli recien evaluara la condición

let a = true;
let i = 0;
do{
    if(i>10){
        a = false
    }
    console.log(i);
    i++;
}while(a == true);