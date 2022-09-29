class Publicacion{
    constructor(Titulo,Precio){
    this._Titulo=Titulo;
    this._Precio=Precio;
    }
    get Titulo(){
        return this._Titulo;
    }
    get Precio(){
        return this._Precio;
    }
    imprimirtodo(){
        console.log(ob3._Titulo)
        console.log(ob3._Precio)
    }
    set Titulo(Titulo){
        this._Titulo=Titulo;
    } 
    set Precio(Precio){
        this._Precio=Precio;
    } 
    
    
    
}

class Libro extends Publicacion{
    constructor(Titulo,Precio,NumPaguinas){
        super(Titulo,Precio);
        this._NumPaguinas=NumPaguinas;
    }
    get Titulo(){
        return this._Titulo;
    }
    get Precio(){
        return this._Precio;
    }
    get NumPaguinas(){
        return this._NumPaguinas;
    }
    imprimirtodo(){
        console.log(ob4._Titulo)
        console.log(ob4._Precio)
        console.log(ob4._NumPaguinas)
    }
    set Titulo(Titulo){
        this._Titulo=Titulo;
    } 
    set Precio(Precio){
        this._Precio=Precio;
    } 
    set NumPaguinas(NumPaguinas){
        this._NumPaguinas=NumPaguinas;
    } 

}

class CD extends Publicacion{
    constructor(Titulo,Precio,NumPaguinas,TiempoRepro){
    super(Titulo,Precio,NumPaguinas);
    this._TiempoRepro=TiempoRepro;
    }
    get Titulo(){
        return this._Titulo;
    }
    get Precio(){
        return this._Precio;
    }
    get NumPaguinas(){
        return this._NumPaguinas;
    }
    get TiempoRepro(){
        return this._TiempoRepro;
    }
    imprimirtodo(){
        console.log(ob5._Titulo)
        console.log(ob5._Precio)
        console.log(ob5._NumPaguinas)
        console.log(ob5._TiempoRepro)
    }
    set Titulo(Titulo){
        this._Titulo=Titulo;
    } 
    set Precio(Precio){
        this._Precio=Precio;
    } 
    set NumPaguinas(NumPaguinas){
        this._NumPaguinas=NumPaguinas;
    } 
    set TiempoRepro(TiempoRepro){
        this.TiempoRepro=TiempoRepro;
    }
}

let ob3=new Publicacion('OMGGGGG',100000)
console.log(ob3)
ob3.imprimirtodo();
ob3._Titulo='Antes de ti';
console.log(ob3.Titulo);
ob3._Precio='100.000';
console.log(ob3.Precio);


let ob4=new Libro('OWN','2000000','120')
console.log(ob4)
ob4.imprimirtodo();
ob4._Titulo='wwwuji';
console.log(ob4.Titulo);
ob4._Precio='100.000';
console.log(ob4.Precio);
ob4._NumPaguinas='130';
console.log(ob4.NumPaguinas);



let ob5=new CD('GGGGG','600000','120',4)
console.log(ob5)
ob5.imprimirtodo();
ob5._Titulo='wwwuji';
console.log(ob5.Titulo);
ob5._Precio='100.000';
console.log(ob5.Precio);
ob5._NumPaguinas='130';
console.log(ob5.NumPaguinas);
ob5._TiempoRepro='5';
console.log(ob5.TiempoRepro);
