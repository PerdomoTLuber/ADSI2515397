/* Determinar los divisores de un número introducido por
teclado*/

num=Math.round(Math.random()*100);
console.log(num)
for(var i=1; i<=num; i++){
    if(num %i ==0){
        console.log(i)
    }
}
//2     
    var num =Math.round(Math.random()*100) 
        var cont=0;
        for (let i = 1; i <= num; i++) {
            var primo = num % i;
            if(primo == 0){
                cont = cont + 1
            }        
        }
        if (cont==2) {
            console.log(`${num} Es primo`) 
        } else {
            console.log(`${num} No es primo`)
        }
        
//3
/* Determinar si un número es o no es perfecto. Un numero es
perfecto si la suma de sus divisores sin incluir el propio
número es igual a este */

function perfect(num){
    let suma=0;
    for (let i = 1; i < num; i++ ){
        if (num%i==0){
            suma=suma+i;
        }
    }
if (suma==num) {
    return `${num} es perfecto`;
}
else{
    return `${num} No es perfecto`
}
}

console.log(perfect(85))





var num = Math.round(Math.random()*100)
var count = 0;
var p = 0;
for( var i = 1 ; i < num; i++){
    p = num % i
    if(p == 0){
        count = count + i
    }    
}  
  if(count = num){
    console.log ('ES UN NUMERO PERFECTO', num);
  
  }else{
        console.log ('NO ES UN NUMERO PERFECTO',num)
}

//4
var numero = 1000;
var sumadivisores = 0;
var cantidadperfectos = 0;

for(let i = 1; i <= numero; i+=1){
    for(let n = 1; n < i; n+=1){
        if(i % n === 0){
            sumadivisores += n;
        }
    }
    if(sumadivisores === i){
        console.log(i + 'es un numero perfecto')
        cantidadperfectos += 1;
    }
    sumadivisores = 0
}
console.log(' hay' + cantidadperfectos+ ' numeros perfectos')

//5
var c = 1000;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
//6
/*Calcular el máximo de números positivos introducidos por
teclado, sabiendo que metemos números hasta que
introduzcamos uno negativo. El negativo no cuenta.*/
x= Math.round(Math.random()*10);
console.log(x)
if (x>0){
    console.log('positivo')
}else if(x<0){
    console.log('negatiVO')
}else
console.log('cero')

var edad 
if (x>0){
    console.log('positivo')
}else if(x<0){
    console.log('negatiVO')
}else
console.log('cero')

//7

//8

//9

//10

//11
/*Solicitar 2 números al usuario e imprimir el cociente y el
residuo del mayor en el menor sin utilizar la división ni el mod.*/
var dividendo = Math.round(Math.random()*10);
var divisor= Math.round(Math.random()*10);
var cociente= 0;
console.log(dividendo )
console.log(divisor)

if( dividendo > 0){//las restas mediante un bucle, mientras el resultado sea mayor de 0.

   cociente++;
   dividendo = dividendo-divisor;								
 } 
 console.log ('cociente'+ cociente);
 console.log ('resto'+(-dividendo));

/*else{ 
   console.log(`División = ${x/y}`)//operadores aritmeticos 
   console.log(`Modulo= ${x%y}`)
}*/
//12


//13
/*Solicitar al usuario un número de hasta 9 dígitos e
imprimirlo en orden contrario. Ej. digito 6754 imprimo 4576 */
//153746 => 647351
 
let num=153746;
console.log(num)
function invertirnum(num){
    return Number(num.toString().split('').reverse().join(''))
}
let num=153746;
console.log(num)
console.log(invertirnum(153746))
//14

//15
/*Diseñar e implementar un programa que solicite a su
usuario un valor no negativo n y visualice la siguiente salida: */
let x;
let y;
let suma=0;
for (i = 1 ; i <= 10; i=i+1) {
    console.log(`Suma= ${x+y}`)
    suma=suma+i; }
    