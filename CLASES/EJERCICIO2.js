class vehiculos {
    constructor(NserieMotor, Marca, Año, Precio, Cilindros, Neumaticos, Cajacambios) {

        this._NserieMotor = NserieMotor;
        this._Marca = Marca;
        this._Año = Año;
        this._Precio = Precio;
        this._Cilindros =Cilindros;//acelerar 
        this._Neumaticos=Neumaticos;
        this._Cajacambios=Cajacambios;//la balata freno 
    }

    set NserieMotor(NserieMotor) {
        this._NserieMotor = NserieMotor;
    }
    set Marca(Marca) {
        this._Marca = Marca;
    }
    /*console.log(`Hola me llamo ${this.nombre}`)
     */
    Datos() {
        console.log(`El número de serie : ${this._NserieMotor}`);
        console.log(`La Marca del automovil : ${this._Marca}`);
        console.log(`El Año: ${this._Año} `);
        console.log(`El Precio : ${this._Precio}`);
        console.log(`Cilindraje : ${this._Cilindros}`);
        console.log(`Neumaticos : ${this._Neumaticos}`);
        console.log(`La Caja de cambios : ${ this._Cajacambios}`);


    }
    Encender(){
        console.log(`Tiene que estar en NEUTRO en la ${this._Cajacambios}`)
    }
    
    Acelerar(){
        console.log(``)
    }

}



let vehiculo1=new vehiculos('12678HHSJHYH89', 'Chevrolet Onix', 2014,'60 Millones','1.4 L',4,'6 Cambios');
console.log(vehiculo1);
vehiculo1.Datos();
let vehiculo2=new vehiculos('1562HCDJFJHUFH', 'Suzuki Swift', 2016,'34 Millones','1.2 L',4,'5 Marchas');
console.log(vehiculo2);
vehiculo2.Datos();
let vehiculo3=new vehiculos('1562HCDJFJHUFH','Kia Picanto',2022,'85 Millones','1.25 L',4,'5 Cambios');
console.log(vehiculo3);
vehiculo3.Datos();
let vehiculo4=new vehiculos('1562HCDJFJHUFH','Renault Duster',2020,'50 Millones','1.3 L',4,'6 Marchas');
console.log(vehiculo4);
vehiculo4.Datos();
let vehiculo5=new vehiculos('1562HCDJFJHUFH','Renault Logan',2022, '60 Millones','1.6 L',4,'6 Marchas');
console.log(vehiculo5);
vehiculo6.Datos();
let vehiculo6=new vehiculos('1562HCDJFJHUFH','Mazda 2',2003,'45 Millones','1.2 L',4,'');
console.log(vehiculo6);
vehiculo6.Datos();
let vehiculo7=new vehiculos('1562HCDJFJHUFH','Renault Stepway',2008,'30 Millones','1.6 L',4,'');
console.log(vehiculo7);
vehiculo7.Datos();
let vehiculo8=new vehiculos('1562HCDJFJHUFH','Renault Sandero',1999,'24 Millones', '1.6 L',4,'');
console.log(vehiculo8);
vehiculo8.Datos();
let vehiculo9=new vehiculos('1562HCDJFJHUFH','Suzuki Vitara',2019,'60 Millones', '1.6 L',4,'');
console.log(vehiculo9);
vehiculo9.Datos();
let vehiculo10=new vehiculos('1562HCDJFJHUFH','Renault Wind',2003,'20 Millones','1.0 L',4,'');
console.log(vehiculo10);
vehiculo10.Datos();
let vehiculo11=new vehiculos('1562HCDJFJHUFH','Nissan',2021,'75 Millones', '2.5L',4,'');
console.log(vehiculo11);
vehiculo11.Datos();


class autoscompactos extends vehiculos {
    constructor(NserieMotor, Marca, Año, Precio, CantidadPasajeros) {
        super(NserieMotor, Marca, Año, Precio)
        this._CantidadPasajeros = CantidadPasajeros;
    }

    set CantidadPasajeros(CantidadPasajeros) {
        this._CantidadPasajeros = CantidadPasajeros;
    }

    get CantidadPasajeros() {
        return this._CantidadPasajeros;
    }
}


class autoslujos extends vehiculos {
    constructor(NserieMotor, Marca, Año, Precio, CantidadPasajeros) {
        super(NserieMotor, Marca, Año, Precio)
        this._CantidadPasajeros = CantidadPasajeros;
    }

    set CantidadPasajeros(CantidadPasajeros) {
        this._CantidadPasajeros = CantidadPasajeros;
    }

    get CantidadPasajeros() {
        return this._CantidadPasajeros;
    }
}


class vagonetas extends vehiculos {
    constructor(NserieMotor, Marca, Año, Precio, CantidadPasajeros) {
        super(NserieMotor, Marca, Año, Precio)
        this._CantidadPasajeros = CantidadPasajeros;
    }

    set CantidadPasajeros(CantidadPasajeros) {
        this._CantidadPasajeros = CantidadPasajeros;
    }

    get CantidadPasajeros() {
        return this._CantidadPasajeros;
    }
}


class camionetas extends vehiculos {
    constructor(NserieMotor, Marca, Año, Precio, CantidadPeso, CantidadEjes, Rodadas) {
        super(NserieMotor, Marca, Año, Precio);
        this._CantidadPeso = CantidadPeso;
        this._CantidadEjes = CantidadEjes;
        this._Rodadas = Rodadas;
    }

    set CantidadPeso(CantidadPeso) {
        this._CantidadPeso = CantidadPeso;
    }

    set CantidadEjes(CantidadEjes) {
        this._CantidadEjes = CantidadEjes;
    }

    set Rodadas(Rodadas) {
        this._Rodadas = Rodadas;
    }

    get CantidadPeso() {
        return this._CantidadPeso;
    }

    get CantidadEjes() {
        return this._CantidadEjes;
    }

    get Rodadas() {
        return this._Rodadas;
    }

    imprimirtodo() {
        console.log('El nombre de la Persona es:', ob1._nombre);
        console.log('El documento de la Persona es', ob1._documento);
        console.log('El nombre del Aprendiz es:', ob2._nombre);
        console.log('El documento del Aprendiz es:', ob2._documento);
        console.log('La ficha del Aprendiz es:', ob2._ficha);

    }

}