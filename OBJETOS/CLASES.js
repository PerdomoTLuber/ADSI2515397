//24/08/2022//
// UNA FUNCION DENTRO DE UNA CLASE SE LE LLAMA METODO
// new es un objeto nuevo de la clase 
// diagramas de clases
// +publico, -privado, #protegido y ()default
// THIS ---> esto en contexto que se llame

// GETTERS(OBTENER) Y SETTERS(MODIFICAR) ((Notacion camelcase)getNombre Y setNombre---> TRADICIONALES)   Y )



class Animal {
    constructor(nombre) {
            this._nombre = nombre;
            //console.log(`Se Activa el constructor`)

        }
        //Camel case
    getNombre() {
        return this.nombre;
    }
    get nombre() {
        return this._nombre;
    }
    setNombre() {
        return this.nombre = nombre;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    mensaje() {
        console.log(`Soy un Mensaje`);

    }

}

var objeto1 = new Animal('Conejo');
console.log(objeto1)
    //objetos1.setNombre('Liebre')
objeto1.nombre = 'Conejo Domestico'
    //console.log(obejto1.getNombre())
console.log(objeto1.nombre);
//console.log(typeof(objeto1))
objeto1.mensaje();

//
function sumar(num1, num2) {
    return num1 + num2

}
console.log(sumar(4, 5))


class Numeros {
    constructor(vector) {
        this._vector = vector;
    }
    llenarVector(tam) {
        for (let i = 0; i < tam; i++) {
            this._vector[i] = Math.round(Math.random() * 100)
        }
    }

    get vector() {
        return this._vector;
    }
}

let vec = []
let ob = new Numeros(vec)
ob.llenarVector(10);
console.log(ob.vector);