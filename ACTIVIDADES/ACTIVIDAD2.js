/*operaciones para desarrollar con arreglos
{Si copia código de internet, NO use funciones automáticas de JS. Ejemplo función sort para ordenar.
O función map para otras operaciones}*/

//1- Sumar todos los elementos de un arreglo
let vector = [];
let contador = 0;

let tam = Math.round(Math.random() * 20 - 10 + 10);
console.log(`valor de variable tam ${tam}`);

for (let i = 0; i < tam; i++) {
    vector[i] = Math.round(Math.random() * 100);
    contador = contador + vector[i];
}
console.log(vector);
console.log(`La suma de todos los valores dentro del Arrays es: ${contador}`);
console.log(`Tamaño del vector ${vector.length}`);

//2- Promediar los elementos de un arreglo.
let prom = contador / vector.length;
console.log(`El promedio de división Es: ${prom}`);
//3- Obtener el numero mayor de los elementos de un arreglo.
mayor = vector[0];
for (let x = 0; x < vector.length; x++) {
    if (mayor < vector[x]) {
        mayor = vector[x];
    }
}
console.log(`El Número mayor entre los Arrays es: ${mayor}`);

//4- Obtener el numero  menor de los elementos de un arreglo.
menor = vector[0];
for (let x =
        0; x < vector.length; x++) {
    if (menor > vector[x]) {
        menor = vector[x];
    }
}
console.log(`El Número menor entre los Arrays es: ${menor}`);
//5. Buscar un elemento dentro de un arreglo.

let num = Math.round(Math.random() * 100)
for (m = 0; m < vector.length; m++)
console.log(vector);

//7. ordenar un arreglo de menor a mayor (algoritmo de la burbuja).
    var v = [],
        t = Math.round((Math.random() * 20 - 10) + 10),
        a;
    console.log(`Valor variable tam= ${t}`);

    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 100)
    };
    console.log(v)
    for (let i = 0; i < v.length; i++) {
        for (let j = i + 1; j < v.length; j++) {
            if (v[i] > v[j])(
                a = v[i],
                v[i] = v[j],
                v[j] = a
            )
        }

    }
    console.log(v)
    


//8. ordenar un arreglo de mayor a menor (algoritmo de la burbuja).

var v = [],
    t = Math.round((Math.random() * 20 - 10) + 10),
    a;
console.log(`Valor variable tam= ${t}`);

for (let i = 0; i < t; i++) {
    v[i] = Math.round(Math.random() * 100)
};
console.log(v)
for (let i = 0; i < v.length; i++) {
    for (let j = i + 1; j < v.length; j++) {
        if (v[i] < v[j])(
            a = v[i],
            v[i] = v[j],
            v[j] = a
        )
    }

}
console.log(v)
//DESVIACIÓN TIPICA

let v=[],
t=Math.round(Math.round(Math.random()*20-10)+10),
p=0
pf=0
d=0
sd=0
dt=0
console.log(`Valor variable tam= `+t);

for(let i=0; i<t; i++){
v[i]=Math.round(Math.random()*100)
p=p + v[i]
}

pf= Math.trunc(p / v.length)
console.log(v)
for(let i = 0; i<v.length; i++){
d=Math.pow((v[i]-pf), 2)
sd=sd + d
}
dt= sd / v.length
console.log(`Desviación tipica es: `+dt)

// La Moda
let v=[],
t=Math.round((Math.random()*20-10)+10),
a,
maxr = 0,
moda
console.log(`Valor Variable tam= ${t}`);

for(let i=0; i<t; i++){
    v[i]=Math.round(Math.random()*100)
}
console.log(v)
for (let l = 0; l < v.length; l++){
    var numr = 0
    for(let ñ = l; ñ < v.length; ñ++){
        if(v[l] == v[ñ]){
            numr = numr + 1
        };
        if (numr > maxr) {
            moda = v[l]
            maxr = numr
        }
    }
}
console.log(`La moda es: `+moda)

//La mediana

let v= [],
t=Math.round((Math.random()*20-10)+10),
a
console.log(`Valor variable tam= ${t}`);

for (let i=0; i<t; i++){
v[i]=Math.round(Math.random()*100)
}
console.log(v)
for (let i = 0; i < v.length; i++) {
    for (let j = i + 1; j < v.length; j++){
        if (v[i] > v[j])(
            a= v[i],
            v[i] = v[j],
            v[j] = a
        )
    }
}
console.log(v)

var mediana= Math.round((v.length+1)/2)
console.log(`La mediana es: `+v[mediana])