const usuario = require('./usuario')
class cliente extends usuario {
    constructor(email, password, Nombre, Apellido, N_cuenta, Dirreción, Telefono) {
    super(email,password)    
        this._Nombre = Nombre;
        this._Apellido = Apellido;
        this._N_cuenta = N_cuenta;
        this._Dirreción = Dirreción;
        this._Telefono = Telefono;

    }
    get Nombre() {
        return this._Nombre;
    }
    get Apellido() {
        return this._Apellido;
    }
    get N_cuenta() {
        return this._N_cuenta;
    }
    get Dirreción() {
        return this._Dirreción;
    }
    get Telefono() {
        return this._Telefono;
    }    

    set Nombre(Nombre) {
        this._Nombre = Nombre;
    }
    set Apellido(Apellido) {
        this._Apellido = Apellido;
    }
    set N_cuenta(N_cuenta) {
        this._N_cuenta = N_cuenta;
    }
    set Dirreción(Dirreción) {
        this._Dirreción = Dirreción;
    }
    set Telefono(Telefono) {
        this._Telefono = Telefono;
    }
}

module.exports=cliente;
