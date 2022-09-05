const usuario = require('')
class administrador {

    constructor(nombre, apellido, identificacion) {
        this._identificacion = identificacion;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    set identificacion(identificacion) {
        return this._identificacion = identificacion;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    set apellido(apellido) {
        return this._apellido = apellido;
    }

    get identificacion() {
        return this._identificacion;
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }

    imprimirtodo() {
        console.log(`El Nombre del administrador es:  ${this._nombre}`);
        console.log(`El Apellido del administrador es:  ${this._apellido}`);
        console.log(`El Número de identificación es:  ${this.#identificacion}`);

    }

}

let a1 = new administrador("Juan", "Perez", 12365497);
a1.imprimirtodo();