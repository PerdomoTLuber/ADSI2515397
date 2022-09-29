//OBJETOS=UNA INSTANCIA DE UNA CLASE
//CLASES=DEFINE LAS CARACTERÍSTICAS DE UN OBJETO
//PROPIEDAD=UNA CARACTERÍSTICA DEL OBJETO, COMO EL COLOR
//MÉTODO=UNA CAPACIDAD DEL OBJETO,COMO CAMINAR 
//CONSTRUCTOR=ES UN MÉTODO LLAMADO EN EL MOMENTO DE LA CREACION DE INSTANCIAS 
class persona{
    constructor (nombre, edad){
    this.nombre=nombre;//variable publica
    this.edad=edad;
    let dni='1234567';/*declarando com una variable no se puede acceder desde afuera, Es como si no existiera para los questan afuera, al no ser publica no pueden acceder a ellos, eso se utiliza muchopor cuestiones de seguridad, solo una variable la pueda utilizar*/
    
   
    this.getdni= function(){//Metodo 
   return dni;//Como esto esta dentro de la funcion si puede acceder al dni
    }
    this.saludar=function(){ 
       console.log("Hola soy " + nombre + "tengo" + edad + "años de mi dni es: " + dni );
    }
   }
}
   let objetopersona=new persona('Nicol Sanchez', 20);//Una instancia de la clase y un objeto
   let objectopersona2=new persona ('Valentina Amaya', 23)
   
   objetopersona.saludar();
   objectopersona2.saludar();
   console.log(objetopersona.nombre);
   console.log(objetopersona.getdni());
   
   /*----------------------------------------------------------------------------------------------------------------------------------------------------*/
   

   /*HERENCIA PROTOTIPICA*/
   
   function Animal(nombre,genero){
       //Atributos
       this.nombre=nombre;
       this.genero=genero;
   }
   
   //MÉTODOS AGREGADOS AL PROTOTIPO DE LA FUNCIÓN CONSTRUCTORA
   
   Animal.prototype.sonar=function(){
   console.log("Hago sonidos porque estoy vivo")
   }
   
   Animal.prototype.saludar=function(){
       console.log(`Hola me llamo ${this.nombre}`)
   }
   //Herencia Prototípica
   const snoopy=new Animal ("snoopy", "Macho");
   lolabunny=new Animal ("Lolabunny", "Hembra");
   
   console.log(snoopy);
   console.log(lolabunny);
   snoopy.saludar();
   snoopy.sonar();
   lolabunny.saludar();
   lolabunny.sonar();
   
   
   class producto{
       constructor(nombre, precio,iva) {
           this.nombre=nombre;
           this.precio=precio;
           this.iva=iva;
   
           this.nombre=function(){
               return nombre;
           }
   
           this.precio=function(){
               return this.precio*this.iva;
           }
   
           
       }
   
   }
   let producto1=new producto("Champú", 20000,0.19);
   console.log(producto1.precio)

   /*------------------------------------------------------------------------------------------------- */
   
   function anime(nombre,genero){
    this.nombre=nombre;
    this.genero=genero;
   }

   anime.prototype.pelicula=function(){
    console.log('La pelicula se llama:' , this.nombre)
   }
   anime.prototype.generop=function(){
    console.log('El genero de la pelicula es:' , this.genero)


   }

   let objecto11=new anime('Demon Slayer', 'acción');
   objecto11.pelicula();
   objecto11.generop();
   

   //Ejemplo 2
   function personaje_ani(nombre_ani,genero,nombre){
    this.nombre_ani=nombre_ani;
    this.genero=genero;
    this.nombre=nombre;
   }

   personaje_ani.prototype.anime=function(){
    console.log('El anime se llama:' , this.nombre_ani)
   }
   personaje_ani.prototype.generop=function(){
    console.log('El genero de la pelicula es:' , this.genero)
   }
   personaje_ani.prototype.personaje=function(){
    console.log('El personaje del anime es;' ,this.nombre )
   }

   let objecto17=new personaje_ani('Demon Slayer', 'acción', 'tomioka');
   objecto17.anime();
   objecto17.nombre_ani();
   objecto17.generop();

   //Ejemplo con class 
   class usuario{
    constructor(nombre, email,password){
        this.nombre=nombre;
        this.email=email;
        this.password=password;
    }
    saludo(){
        console.log(`hola , soy ${this.nombre}`)
    }
    login(email,password){
        return this.email===email && this.password===password;

      
    }
   }
   class alumno extends usuario{}
   const pablo= new usuario('pablo','pablo@email.com','pablo123');
   const jose= new alumno ('jose','jose@email.com','jose123');

   console.log(pablo);
   console.log(jose);
 
/*------------------------*/
class persona{
    constructor(nombre, documento){
        this.nombre=nombre;
        this.documento=documento;

    }
    get nombre(){
        return this.nombre;
    }63333333333333333333333333333
}

class aprendiz{
    constructor(nombre,documento,ficha){
        super(nombre,documento);
        this.ficha=ficha;
    }
}
