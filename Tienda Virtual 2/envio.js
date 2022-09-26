const factura = require("./factura")
class envio {
    constructor(codigoenvio,codigofactura,direccion,telefono,tipopago){
        this._codigoenvio = codigoenvio;
        this._codigofactura = codigofactura;
        this._direccion = direccion;
        this._telefono = telefono;
        this._tipopago= tipopago;
    }

    salidaproducto(){
        console.log(`La salida de su producto es con el ${this._codigofactura}`)
    }
    
}
let envio1 = new envio(123,789,'Calle 1 #23 -14', 3124567890,'PayPal')
console.log(envio1)
envio1.salidaproducto();
module.exports = envio;