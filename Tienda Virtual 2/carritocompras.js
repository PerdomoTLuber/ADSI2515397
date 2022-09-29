class carritoscompras {
    constructor(Codigopedido,CodigoSerie,Fecha){      
        this._Codigopedido=Codigopedido;
        this._CodigoSerie=CodigoSerie;
        this._Fecha=Fecha;
        this._listaProductos=[]
    }

    set Codigopedido(Codigopedido) {
        this._Codigopedido = Codigopedido;
    }

    set CodigoSerie(CodigoSerie) {
        this._CodigoSerie = CodigoSerie;
    }

    set Fecha(Fecha) {
        this._Fecha= Fecha;
    }
     
    get Codigopedido() {
        return this._Codigopedido;
    }

    get CodigoSerie() {
        return this._CodigoSerie;
    }

    get Fecha() {
    return this._Fecha;
    }

    agregarlistaproducto(producto){
            this._listaproductos.push(producto)
    }      
    get generarlistaproductos(){
            console.log(this._listaproductos)
    }
    confirmar(){
        return this._listaproductos
    }
    
    }

    module.exports = carritoscompras;
