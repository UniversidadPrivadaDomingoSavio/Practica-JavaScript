let a = 10;
let b = 15;

console.log(a == '10');
console.log(a === '10');
console.log(a > 10);
console.log(a < 10);
console.log(a >= 10);
console.log(a <= 10);

//simbolos anteriores:
//Aveces causan errores porque 10 entero y de string saldra true ya que se fijan en el valor y no en el tipo de dato
console.log(a != 10);
console.log(a == 10);

//simbolos que se usan para evitar errores
console.log(a === 10);
console.log(a !== 10);