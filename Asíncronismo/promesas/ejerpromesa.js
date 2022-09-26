let vec = []

function llenarArreglo() {
    return new Promise((resolve, reject) => {
        resolve();
        reject(new Error(`No sirve`));
        let aleatorio = Math.round(Math.random() * 100);
        for (let i = 0; i < aleatorio; i++) {
            vec[i] = Math.round(Math.random() * 100)
        }
        console.log(vec)
    })
}
llenarArreglo()
    .then(sumarArreglo)
    .then(promedioArreglo)

let suma = 0

function sumarArreglo() {
    for (let j = 0; j < vec.length; j++) {
        suma += vec[j];
    }
    console.log(`La suma de los números del arrays: ${suma}`)
}

function promedioArreglo() {
    for (let x = 0; x < vec.length; x++) {
        suma += vec[x];
    }
    let promedio = suma / vec.length;
    console.log(`El promedio del arrays es: ${promedio}`)
}