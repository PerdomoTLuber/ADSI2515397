class Persona {
    constructor(nombre, documento) {
      this._nombre = nombre;
      this._documento = documento;
    }
    set nombre(nombre) {
      this._nombre = nombre;
    }
    set documento(documento) {
      this._documento = documento;
    }
    get nombre() {
      return this._nombre;
    }
    get nombre() {
      return this._nombre;
    }
  }
  
  class Aprendiz extends Persona {
    constructor(nombre, documento, ficha) {
      super(nombre, documento);
      this._ficha = ficha;
    }
  
    set ficha(ficha) {
      this._ficha = ficha;
    }
  
    get ficha() {
      return this._ficha;
    }
    imprimirTodo(){
      console.log(this._nombre)
      console.log(this._documento)
      console.log(this._ficha)
  
    }
  
  }
  
  let ob1 = new Persona("Maria Gomez", 12345);
  let ob2 = new Aprendiz("Juan valdez", 54321, "ADSI");
  ob2.imprimirTodo();
  ob2.nombre="Pedro Diaz";
  ob2.imprimirTodo();
  console.log(`El nombre de objeto 2 es ${ob2.nombre} `)