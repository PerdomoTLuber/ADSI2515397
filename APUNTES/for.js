//primer elemento del for es una asignación
//segundo elemento del for es una condición
//tercer elemento del for es un contador
//un contador es una variable que es igual a la misma variable
// mas una constante
var contador=1;
contador=contador+1; //contador++ //contador+=1
//sumador=sumador+otra variable

let i;
let suma=0;
for (i = 1 ; i <= 10; i=i+1) {
    console.log(i)
    suma=suma+i;       
}
console.log(`la suma es ${suma}`)
var max=100;
var min=50;
for (let j = 0; j < 10; j++) {
    console.log(Math.random()*(max-min)+min)        
}

// Math.random()*20
// Math.random()*(20-5)+5)
// Math.random()*(50)+50)

for (let a = 1; a <= 10; a++) {
   //todo lo que en el bloque se repite
   //para cada valor de i
   
    for (let i = 1; i <= 5; i++) {
        //ámbito interno al for de i
        console.log(i);
        
    }
};