/*function receptora(callback, parametro) {
    //callback(parametro) //puede aquí
    setTimeout(() => {
        console.log("Dentro de la función receptora")
            //  callback()//se puede aqui
    }, 2000);
    callback(parametro) //Tambien se puede aqui
}

function argumentos(parametro) {
    console.log(`${parametro} de la función argumentada`)
}

receptora(argumentos, 100);


//Más de un callbacks (cb1,cb2)
//Función anónima
receptora(() => console.log("Función Anónima"), argumentos, 100);
*/

for (let i = 1; i < 20; i++) {
    let numero = setInterval(() => console.log(i), 1000)
    setTimeout(() => {
        clearInterval(numero)
        console.log("SE DETUVO LA FUNCIÓN")
    }, 20000);
}

/*=============================================================================================================*/

function llenararreglo(vec) {
    for (let i = 0; i < 10; i++) {
        vec[i] = Math.round(Math.random() * 100)
    }
    return vec;
}

let vector = [];
llenararreglo(vector);
console.log(vector);



function arreglos(cb1, cb2, vec) {
    let vec = []
    setTimeout(() => {
        console.log(vec)
    }, 1000);
    vec = cb1(vec);
    console.log(cb2(vec))
}
/*
function cualqueirfunction (vec){
    console.log(`El parametro es de tipo ${typeof(vec)}`)
    return [];
}
*/


function sumararreglo(vec) {
    let suma = 0;
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i];
    }
    return suma
}

function promedioarreglo() {
    suma = 0;
    for (let i = 0; i < vec.length; i++) {
        suma += [i]
    }
    return suma / vec.length;
}

arreglos(llenararreglo, sumararreglo, vector);