//Numero Perfecto
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

console.log(perfect(28))

//Verificar si es Escaleno, Isoceles, Escaleno
function triangulo(a,b,c){
    if(a!=b && b!=c){
        console.log('Escaleno');
    }else{if (a==b && b==c){
        console.log('Equilatero');
    } else console.log('Isoceles');
}
}
(triangulo(5,7,7));

function pitagoras (c1,c2){
    return Math.sqrt(Math.Pow(c1,2)+Math.pow(c2,2));
}
 console.log(pitagoras(6,10));

//DIVISIORES

function divisores(introduce){
    let instroduce= 0
 for (i=1;i<=introduce; i++) {
    if (introduce % i == 0) {
        console.log(i);
    }
}
}

divisores(5);

//



function Primo(num1){
    let divisores= []
    for (var i = 0; i<=num1; i++){
    if ( num1%i == 0){
        divisores.push(i);
    }
}
if (divisores.length<3){
    console.log('es primo')
}else{
    console.log('no es primo');
}
}

Primo(5)