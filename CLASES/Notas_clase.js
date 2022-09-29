//

//objectos estado y vcomportamiento
/*class Animal{

}
var objecto1=new Animal();
console.log(typeof(objecto1))*///un constructor por defecto 


class Animal{
    //_especie 
    constructor(nombre){
        this._nombre=nombre;
       // console.log('se activo el constructor')
    }
    //camell case
    //getNombre(){}
    // return this.nombre;
    //}
     get nombre(){
        return this._nombre;
     }
     //setNombre(){
     //this.nombre=nombre;
     //}
    set nombre(nombre){
        this._nombre=nombre;

     }
mensaje(){
    console.log('Soy un mensaje')
}
}
var objecto1=new Animal('conejo');
console.log(objecto1)
//objeto1:setNombre('Liebre');
objecto1.nombre='conejo domestico'
//console.log(objeto1.getNombre());
console.log(objecto1.nombre);
//console.log(typeof(objeto1));

objecto1.mensaje();

function sumar(num1,num2){
    return num1+num2;
}
console.log(sumar(200,300))
/*---------------------------------------------------------------------------------------------------------- */
