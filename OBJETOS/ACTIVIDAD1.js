//23/08/2022
//PROGRAMACIÓN ORINETADOS A OBJETOS

//1.Objetos Literales
//2.Diseñar una Clase ----> Atributos y Funcionalidad....TAMBIEN TIENE UN AMBITO....
//PARA CREAR UN TIPO DE DATO PERSONALIZADO
//3.FUNCION ES UN AMBITO: ESTA DETERMIANDO POR EL BLOQUE DE LA FUNCION POR LOS CORCHETES
//4.this ----> 
//5.

/*PALBRAS
 VOID---VACÍO
 */

//Objetos Literales --->var,let,const
const x = []; //se declara un arreglo
var persona = {} //Se declara un objeto
console.log(typeof(a));

//ejemplo1

var persona = {
    nombre: "Pedro Perez",
    identificacion: 1234,
    datoscompletos: () => console.log(`${persona.nombre} ${persona.identificacion}`),
}
console.log(persona);
console.log(persona.nombre);
console.log(persona["identificacion"]);
persona.direccion = "calle 43 "
console.log(persona)
persona.datoscompletos();
delete persona.id
console.log(persona)


//ACTIVIDAD
//1.
function contar_vocales(vocales) {
    let vocal = "aeiouAEIOU";
    let contador = 0;

    for (let letra of vocales) {
        if (vocal.includes(letra.toLowerCase())) {
            contador++;
        }
    }
    return contador
}

const cadena1 = ("ME GUSTA PROGRAMAR  aeiouAEIOU")
const resultado1 = contar_vocales(cadena1);
console.log(resultado1);

//2.

function consonantes(consonantes) {
    let conso = "bcdfghjklmnñpqrstvwxyz";
    let contador = 0;

    for (let letra of consonantes) {
        if (conso.includes(letra.toLowerCase())) {
            contador++;
        }
    }
    return contador
}

const cadena = ("Me gusta programar bcdfghjklmnñpqrstvwxyz")
const resultado = consonantes(cadena);
console.log(resultado);




//1. EJERCICIOS
var figurasgeo = {
    nombre: "triangulo",
    lado1: 5,
    lado2: 5,
    base: 5,
    altura: 6,
    perimetro: () => console.log(`EL perimetro del triangulo es: ` + ((figurasgeo.lado1 + figurasgeo.lado2) + figurasgeo.base)),
    area: () => console.log(`El area del triangulo es: ` + ((figurasgeo.base * figurasgeo.altura) / 2))
}
console.log(figurasgeo)
figurasgeo.perimetro();
figurasgeo.area();

//2. EJERCICIOS
var figurasgeo2 = {
    nombre: "circulo",
    p: 3.14,
    radio: 7,
    diametro: 14,
    area: () => console.log(`El area del circulo es: ` + (figurasgeo2.p * (Math.pow(figurasgeo2.radio, 2)) + ` Cm`)),
    perimetro: () => console.log(`El perimetro del circulo es: ` + (figurasgeo2.p * figurasgeo2.diametro) + ` Cm`)

}
console.log(figurasgeo2)
figurasgeo2.area()
figurasgeo2.perimetro()

//3. EJERCICIOS
var geo3 = {
    nombre: "Rectangulo",
    lado1: 5,
    lado2: 20,
    lado3: 5,
    lado4: 20,
    perimetro: () => console.log(`El Perimetro del Rectangulo es: ` + (geo3.lado1 + geo3.lado2 + geo3.lado3 + geo3.lado4) + ` Cm`),
    area: () => console.log(`El area del rectangulo es: ` + (geo3.lado1 * geo3.lado2) + ` Cm`)
}
console.log(geo3)
geo3.perimetro()
geo3.area()

//4. EJERCICIOS
var geo4 = {
    nombre: "Pentagono",
    lado: 7.2,
    nrolados: 5,
    apotema: 5,
    perimetro: () => console.log(`El Perimetro del Pentagono es: ` + (geo4.lado * geo4.nrolados) + ` Cm`),
    area: () => console.log(`El area del pentagono es: ` + (((geo4.lado * geo4.nrolados) * geo4.apotema) / 2) + ` Cm`)
}
console.log(geo4)
geo4.perimetro()
geo4.area()