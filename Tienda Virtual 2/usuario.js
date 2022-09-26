class usuario {
    constructor( email, password) {
        this._email = email;
        this._password = password;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    
    set email(email) {
    this._email = email;
    }
    set password(password) {
    this._password = password;
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
}

module.exports = usuario