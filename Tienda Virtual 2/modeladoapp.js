
const usuario = require('./usuario');
const administrador = require("./administrador")
const cliente = require("./cliente")
const proveedor = require("./proveedores")
const producto = require("./producto");
const inventario = require('./inventario');
const carritoscompras = require('./carritocompras');
//const inventario = require("./inventario")
//const factura = require("./factura")
//const envio = require("./envio")

/*----------------------------------------------------------------------------------------------------------------*/

console.log('---------------ADMINISTRADOR------------------')
let admini1= new usuario ('munoznicol663@gmail.com', '123qwe')
console.log(admini1)
admini1.Datosingresar();//Metodo de usuario
let admini01=new administrador('munoznicol663@gmail.com', '123qwe', 'Nicol', 'Muñoz', 1023367869 )
console.log(admini01)


let admin2 = new usuario("daniel@loquesea.com","15256")
console.log(admin2)
admin2.Datosingresar();//Metodo de usuario
let admini02 = new administrador("daniel@loquesea.com",15256,"Daniel","Guzman",1578946)
console.log(admini02)

/*-------------------------------------------------------------------------------------------------------------------*/

console.log('---------------CLIENTES------------------')
let cliente1 = new cliente( 'fonseca12@gmail.com','fonse123', 'Daniel Fonseca','Sanchez Muñoz', 39725958,'Carrera 11 #5-80', 3124645879)
let cliente2 = new cliente('Jhon@gmail.com','Jhon123','Jhon Alexander', 'Florez Perdomo',39874512,'Calle 53 I #12-98',3256987481)   
console.log(cliente1,cliente2);

console.log('---------------PRODUCTOS------------------')
let celular1 = new producto(152523,'Samsung Galaxi A20s',750000,1,'Memoria de 32GB/RAM de 3GB','183 gr','8MP','13MP + 5MP + 8MP Rear camera','Octa Core'
,'Azul','Samsung','Celulares','Un celular de gran Calidad');
let celular2 = new producto(25158974,'Samsung Galaxy J6+',500000,1,'Memoria de 32GB/RAM de 3GB','178 gr','8MP','13MP + 5MP','Quad Core 1.4GHz'
,'Rojo','Samsung','Celulares','Un excelente telefono');
console.log(celular1,celular2);

console.log('---------------PROVEEDORES------------------')
let contrato1 = new proveedor('Xiaomi',1523657,7759965,'Calle 72 #15-23','Redmi',)
let contrato2 = new proveedor('Samsung',4569874,44569823,'Calle 103 #12-205','Samsung')
console.log(contrato1,contrato2)


inventario1 = new inventario(celular1,4)
inventario2 = new inventario(celular2,5)
console.log('---------------',inventario1,'--------------------')

let compra1 = new carritoscompras(cliente1)
compra1.agregarlistaproducto(celular1)
compra1.generarlistaproductos
/*----------------------------------------------------------------------------------------------------------------------*/
/*console.log('---------------ENVIO------------------')
let envio1 = new envio(123,789,'Calle 1 #23 -14', 3124567890,'PayPal')
console.log(envio1)
envio1.salidaproducto();*/
/*----------------------------------------------------------------------------------------------------------------------*/







