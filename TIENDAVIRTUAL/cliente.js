const usuario = require('./usuario')

class cliente extends usuario {

    constructor(nameuser, email, password, Nombre, Apellido, N_cuenta, Dirreción, Telefono) {
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
    Datos() {
        console.log(`El Nombre del cliente : ${this._Nombre}`);
        console.log(`El apellido del cliente : ${this._Apellido}`);
        console.log(`N°cuenta: ${this._N_cuenta} `);
        console.log(`Dirreción : ${this._Dirreción}`);
        console.log(`Número Telefonico : ${this._Telefono}`);

    }
    set Titulo(Titulo) {
        this._Titulo = Titulo;
    }
    set Precio(Precio) {
        this._Precio = Precio;
    }
    set NumPaguinas(NumPaguinas) {
        this._NumPaguinas = NumPaguinas;
    }
    set TiempoRepro(TiempoRepro) {
        this.TiempoRepro = TiempoRepro;
    }
    realizarcompras() {
        console.log(`Por medio el ${this._N_cuenta} realiza compras en la pagina`)
    }

}

let cliente1 = new Cliente('fonse123', 'fonseca12@gmail.com', 'fon124', 'Daniel Fonseca', 'Samchez Muñoz', '39725958',
    'Carrera 11 #5-80', '3124645879')
console.log(cliente1);
cliente1.realizarcompras();
cliente1.Datos();
cliente1._Nombre = 'Leidy Daniela';
console.log(cliente1.Nombre);
cliente1._Apellido = 'Guzman Duarte';
console.log(cliente1.Apellido);