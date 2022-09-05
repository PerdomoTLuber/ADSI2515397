class usuario {
    constructor(nameuser, email, password) {
        this._nameuser = nameuser;
        this._email = email;
        this._password = password;
    }
    get nameuser() {
        return this._nameuser;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }

    registro() {
        console.log(`Ingresa sobreapodo :${this._nameuser}`);
        console.log(`Ingresa un correo electronico :${this._email}`);
        console.log(`Ingresa una constraseña :${this._password}`);

    }
    Mensaje() {
        console.log('HA SIDO UN EXITO SU REGISTRO')
    }


    ingresar(email = true, password = true) {
        if (this._email == email && this._password == password) {
            return 'Su email no coincide con la contraseña, intetalo de nuevo'
        } else {

            return 'Sus datos han sido correctos'
        }
    }
    Datosingresar() {
        console.log(`Correo electronico: ${this._email}`);
        console.log(`Contraseña :${this._password}`);


    }
    set nameuser(nameuser) {
        this._nameuser = nameuser;
    }
    set email(email) {
        this._email = email;
    }
    set password(password) {
        this._password = password;
    }


}

let pablo = new usuario('pablo', 'pablo@email.com', 'pablo123');
let jose = new usuario('jose12', 'jose@email.com', 'jose123');
pablo.registro();
pablo.Mensaje();
console.log(jose.ingresar())
pablo.Datosingresar();
jose.Datosingresar();
pablo._Nombre = 'Gustavo';
console.log(pablo.nameuser);
jose._email = 'gustavo12@gmail.com';
console.log(jose.email);
jose.password = '1245';
console.log(jose.password);

module.exports = usuario;