/*//SETTIMEOUT
function externa() {
    console.log("Función externa al setTimeOut")
}

const funcionExt = () => {
    console.log("Función Externa Flecha")
}

setTimeout(() => {
    console.log("Yo amo a Soacha")
}, 2000);

setTimeout(function() {
    console.log("Función Clásica")
}, 3000);

setTimeout(externa, 5000)
setTimeout(funcionExt, 7000)

//SETINTERVAL
setInterval(() => {
    console.log("Se repite")
}, 3000);

let timerId = setInterval(() => console.log("Tick"), 2000);
//Después de 5 segundos
setTimeout(() => {
    clearInterval(timerId)
    console.log("STOP")
}, 7000);

*/
//escriba un programa que muestre un contador de 1 hasta 20 y que cada salga 2 segundos
/*
let numeros = setInterval(() => console.log("1"), 2000)
setTimeout(() => {
    clearInterval(numeros)
    console.log("STOP")
}, 7000);
*/



for (let i = 1; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, (i * 1000));
}

for (var i = 1; i < 10; i++) {

    setTimeout(() => {
        console.log(i * 1000)
    }, (i * 1000));
}


//CALLBACKS