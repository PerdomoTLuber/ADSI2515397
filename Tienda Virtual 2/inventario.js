class inventario{
    constructor (producto,cantidad){
        this._Id=producto._Id;
        this._producto=producto._Nombre
        this._cantidad=cantidad;
    }
   agregarproducto(cantidad){
    this._cantidad+=cantidad
   }
   perdidas(cantidad){
    this._cantidad+=-cantidad
   }
}
module.exports=inventario;