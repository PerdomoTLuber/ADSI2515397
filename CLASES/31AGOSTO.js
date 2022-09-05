class usuario{
    constructor(nombre,email,password){
        this._nombre = nombre;
        this._email = email;
        this._password = password;
    }

    login(email,password) {
        return this._email===email && this._password===password;
    }

    registro(nombre ,email ,password){ 
        return this._nombre===nombre && this._email===email && this._password===password;
    }
}


let ingresar = new usuario("Juanmartinez@gmail.com",22654);
console.log(ingresar.login());
let registro = new usuario ("Juan Martinez", "Juanmartinez@gmail.com", 254698)