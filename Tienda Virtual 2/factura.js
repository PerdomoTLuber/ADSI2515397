class factura {
    constructor(Nombre,Cantidad,CodigoVenta, Referencia_Producto, Precio, Iva){
        this._Nombre=Nombre;
        this._Cantidad=Cantidad;
        this._Precio=Precio;
        this._Iva=Iva;

      

    }
    get ivac() {
        return this.caliva();
      }
    // Método
    caliva () {
       return this._Precio * this._Iva;
     }
    
    get precioiva(){
        return this.sumip();

    }
    sumip (){
        return this.ivac + this._Precio;
    }
    Recibo_compra(){
        console.log (`el codigo de la venta es:${this._CodigoVenta}`)
        console.log (`La referencia de su producto es:${this._Referencia_Producto}`)
        console.log (`su total es: ${this.ivac}`)
    }

}
let factura1= new factura ('Motorola','4 unidades',456,'SKU', 40000, 0.19);
console.log(factura1)
console.log(factura1.ivac); 
console.log(factura1.Recibo_compra)
console.log(factura1.precioiva);
module.exports = factura;