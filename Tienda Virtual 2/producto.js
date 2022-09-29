const inventario = require("./inventario")
class producto{
    constructor(Id,Nombre,Precio,Cantidad,Capacidad,Peso,CámaraFrontal,TripleCámara,
        Procesador,Color,Marca,Categoria,DescripciónProducto) {
        this._Id=Id;
        this._Nombre=Nombre;
        this._Precio=Precio;
        this._Cantidad=Cantidad;
        this._Capacidad = Capacidad;
        this._Peso = Peso;
        this._CámaraFrontal = CámaraFrontal;
        this._TripleCámara = TripleCámara;
        this._Procesador = Procesador;
        this._Color = Color;
        this._Marca = Marca;
        this._Categoria=Categoria;
        this._DescripciónProducto=DescripciónProducto;

    }
}


module.exports=producto;