/*
Crecimiento exponencial
Tamaño de población = N
tasa de crecimineto = R (nacimiento - muertos)

nacimientos - muertes/N = tasa de crecimento formula
dt/dn = N(1+r)^t
        2(1 + .3) ** 0
        3(1 + .3) ** 1
n(t) = N(1 + r) Expresión algebraica


Ejercicio: 
generar aletoriamente los datos de la población 
pueden tener entre mil entre y diez mil
calculo en 10 años
10% tasa de nacimientos
3% tasa de muertes
*/
/*
function indice() {
    count = 0;
    r = .3;
    for (let i = 1; i <= 10; i++) {
        let num = Math.round((Math.random() * 10000 - 1000) + 1000)
        let nacimiento = Math.round((Math.random() * (10 - 1) + 1))
        let muertes = Math.round((Math.random() * (3 - 1) + 1))
        na = num
        formula = (num(1 + r) ** i);
        console.log(nacimiento + num(1 + r) ** i);
        console.log(muertes + (num(1 + r ** i))
        //console.log(`el tiempo es ${i} y La Población es: ${num}`)
        //}
    //}
    /*indice();


    var n = Math.round(Math.random() * (10000 - 1000) + 1000)
    var x, z, y
    console.log(`Tamaño Población : ${n}`)

    function nacimiento() {
        a = (n / 100 * 10)
        console.log(Math.floor(a))
    }
    nacimiento();

    function mortalidad() {
        b = (n / 100 * 0.03)
        console.log(Math.floor(b))
    }
    mortalidad();

    function tasacrecimiento() {
        x = (a - b)
        z = x / n
        console.log(z)
    }
    tasacrecimiento();

    console.log('----------------------------------------------------------------------------')

    function salgebraica() {
        for (let t = 1; t < 10; t++) {
            setTimeout(() => {
                x = (1 * z);
                W = Math.pow(x, t);
                y = n * W
                console.log(Math.floor(y))
                console.log(t)
                console.log(`El tiempo es ${t} y el tamaño de la poblacion es ${y}`)
            }, 1000);

        }
    }
    salgebraica()

    function porcentajepob() {
        u = (n / 10)
    }
    console, log()
    const casa = new Promise((resolve, reject) => {
        if (t = 10) {
            resolve('Se ha ganado una casa')
        } else {
            reject('No tuvo exito')
        }
    });

    casa()
        .then(res => {
            console.log('sucess:' + res);
        })
        .catch(error => {
            console.log('error:' + error);
        })

    
    hacer una promesa de la del 10% población final LE VAN A ENTREGAR UNA CASA
    CALCULARLA CANTIDAD DE PERSONA QUE VAN A RECIBIRLAS 

    calcular el crecimiento neto por los periodos de 10 años
    eso a que porcetaje equivale timeoutde 5 seg
    */