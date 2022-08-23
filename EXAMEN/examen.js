//llenar tres arreglos con numeros aleatorios el tamaño de los estara entre minimo 5, maximo 20 elementos.

//cual de los tres arreglos es el más grande
//de cada uno digame que cantidad de numeros pares y impares tiene 
//rellenar los arreglos más pequeño con los datos del arreglo grande

let v = [];
let p = [];
let s = [];

//1
let tam = Math.round((Math.random() * 20 - 5) + 5);
console.log(`Primer arreglo valores de variable tam ${tam}`)

for (let i = 0; i < tam; i++) {
    v[i] = Math.round(Math.random() * 100);
}
console.log(v)
console.log(`Tamaño del vector ${v.length}`);

//2
let tam1 = Math.round((Math.random() * 20 - 5) + 5);
console.log(`Segundo arreglo valores tam1 ${tam1}`)

for (let i = 0; i < tam1; i++) {
    p[i] = Math.round(Math.random() * 100);
}
console.log(p)
console.log(`Tamaño del vector ${p.length}`);

//3
let tam2 = Math.round((Math.random() * 20 - 5) + 5);
console.log(`Tercer arreglo valores  tam2 ${tam2}`)

for (let i = 0; i < tam2; i++) {
    s[i] = Math.round(Math.random() * 100);
}
console.log(s)
console.log(`Tamaño del vector ${s.length}`);

console.log(`El vector más grande es: \n${tam} \n${tam1} \n${tam2} `)