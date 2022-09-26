function general(cb1, cb2, cadena) {
    cb1(cadena);
    cb2(cadena);
    let mini = cadena.toLowerCase();
    let mayu = cadena.toUpperCase();
    console.log(`La cadena general es:  ${cadena} \nEn minúsculas es: ${mini} \nEn mayúsculas es: ${mayu}`)
    console.log('----------------------------------------------------\n')
}

function minusculas(cadena) {
    let contar = 0;
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < minusculas.length; i++) {
        for (let l = 0; l < cadena.length; l++) {
            if (cadena[l] == minusculas[i]) {

                contar = contar + 1
            }
        }
    }
    console.log('----------------------------------------------------\n')
    console.log(`Hay un total ${contar} Minúsculas`);
}

function mayusculas(cadena) {
    let contar = 0;
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < mayusculas.length; i++) {
        for (let l = 0; l < cadena.length; l++) {
            if (cadena[l] == mayusculas[i]) {

                contar = contar + 1
            }
        }
    }

    console.log(`Hay un total ${contar} Mayúsculas`);
}
general(minusculas, mayusculas, 'Me Gusta Programar')


// especiales = '!#$%&^~*_-',
// mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// minusculas = ' abcdefghijklmnopqrstuvwxyz',
// digitos = '0123456789';


let x = 11
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (x == 10) {
            resolve('La variable es igual a 10');
        }
    }, 2000);
});

p.then(x => {
    console.log(x)
}).catch(function() {
    console.log('error')
})





let mensaje = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Este es el mensaje');
    }, 2000);
})
mensaje.then(m => {
    console.log(m)
}).catch(function() {
    console.log('error');
})