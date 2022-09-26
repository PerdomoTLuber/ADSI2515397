const usuario = require("./usuario");
class administrador extends usuario{
    constructor(email,password,nombre, apellido, identificacion) {
        super(email,password);
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
}
module.exports = administrador;
