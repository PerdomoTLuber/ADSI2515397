/*1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el 
valor del medio es 11. No use operadores lógicos*/
var x = Math.round(Math.random() * 100);
var y = Math.round(Math.random() * 100);
var z = Math.round(Math.random() * 100);
console.log(x)
console.log(y)
console.log(z)
if (x == y) {
  if (y != z) {
    console.log(`el número intermedio es: ${y}`)
  }
}else if(x == z){
  if(z != y ){
    console.log(`el número intermedio es: ${z}`)
  }
}else if(y == x){
  if (x != z) {
    console.log(`el número intermedio es: ${x}`)
  }
}else if(y == z){
  if (z != x) {
    console.log(`el número intermedio es: ${z}`)
  }
}else if (z == x){
  if (x != y) {
    console.log(`el número intermedio es: ${x}`)
  }
}else {
  console.log(`el número intermedio es: ${y}`)
}

/*2. Escribe un programa que pida tres números y que escriba si son los tres 
iguales, si hay dos iguales o si son los tres distintos*/

var x = Math.round(Math.random() * 100);
var y = Math.round(Math.random() * 100);
var z = Math.round(Math.random() * 100);
if (x == y && x == z && y == z) {
  console.log(`Hay tres números que son iguales \n${x} \n${y} \n${z} `);
} else if (x == y && x != z && y != z) {
  console.log(`Hay dos números que son iguales \n${x} \n${y} \n${z} `);
} else {
  console.log(`Los tres números son diferentes \n${x} \n${y} \n${z} `);
}

/*3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número 
exceda los límites emita un mensaje y finalice el programa*/

var x = Math.round(Math.random() * 10000);
console.log(x);

if (x <= 9) {
  console.log(`El número tiene una cifra ${x}`);
} else if (((x) => 10) && x <= 99) {
  console.log(`El número tiene dos cifra ${x}`);
} else if (((x) => 100) && x <= 999) {
  console.log(`El número tiene tres cifra ${x}`);
} else {
  console.log(`El número tiene cuatro cifra ${x}`);
}


/*4. Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, 
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores*/

var nota = Math.round(Math.random() * (10 - 1) + 1);

if (nota > 1 && nota <= 4) {
  console.log(`ES INSUFICIENTE ${nota}`);
} else if (nota > 4 && nota <= 7) {
  console.log(`ES SUFICIENTE ${nota}`);
} else {
  console.log(`ES BIEN ${nota}`);
}

/*5. En un juego de preguntas a las que se responde “Si” o “No” gana quien 
responda correctamente las tres preguntas. Si se responde mal a cualquiera de 
ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
1. Colon descubrió América?
2. La independencia de Colombia fue en el año 1810?
3. The Doors fue un grupo de rock Americano?*/

var x = Math.round(Math.random() * 1);
var y = Math.round(Math.random() * 1);
var z = Math.round(Math.random() * 1);
/*console.log(x)
console.log(y)
console.log(z)*/

console.log("responde las siguientes preguntas");

if (x == 0) {
  console.log("\n Colon descubrió América?");
  console.log("\n has respondido correctamente");
}
if (x == 0 && y == 0) {
  console.log("\n La independencia de Colombia fue en el año 1810?");
  console.log("\n has respondido correctamente");
}
if (x == 0 && y == 0 && z == 1) {
  console.log("\n The Doors fue un grupo de rock Americano?");
  console.log("\n has respondido correctamente");
}
if (x == 0 && y == 0 && z == 1) {
  console.log("\n has gando el juego");
} else {
  console.log("has perdido");
}

/*6. Pida un numero al usuario que representa días del año. Diga a que mes del año 
corresponde así. Si el número es menor o igual a 31 indica que esta en enero, 
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en 
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.*/
//90 marzo,120,Abirl,151,mayo,181,212,243,273,304,334,365 diciembre
var x = Math.round(Math.random()*365);
if (x<= 31){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE ENERO`)
}else if  ((x>=32)&&(x<=59)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE FEBRERO`)
  
}else if ((x>=59)&&(x<=90)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE MARZO`)
}else if  ((x>=91)&&(x<=120)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE ABRIL`)
}else if ((x>=121)&&(x<=151)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE MAYO`)
}else if  ((x>=152)&&(x<=181)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE JUNIO`)
}else if ((x>=182)&&(x<=212)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE JULIO`)
}else if  ((x>=213)&&(x<=243)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE AGOSTO`)
}else if ((x>=244)&&(x<=273)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE SEPTIEMBRE`)
}else if  ((x>=274)&&(x<=304)){
    console.log(` EL DIA ${x} SE ENCUENTRA EN EL MES DE OCTUBRE`)
}else if ((x>=305)&&(x<=334)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE NOVIEMBRE`)
}else{
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE DICIEMBRE`)
}   

/*7. Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig. 
manera:
Si trabaja 40 horas o menos se le paga $2600 por hora
Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40 
horas y $5000 por cada hora extra*/

var hora=Math.round(Math.random()*100);
total = 0,
extra = 0
console.log(hora);
if ( hora <= 40 ) {
    total = hora * 2600 
  console.log(`Las horas trabajas son: ${hora}\n El sueldo del trabajador es ${total}`)
  
}else{
  extra= hora * 5000;
  console.log(`Las horas trabajas son: ${hora}\n El sueldo del trabajador es ${extra}`)
}

/*8. Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo 
los cálculos así:
Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 
200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que 
permita calcular el costo de una llamada dados los minutos de duración.*/

minu = Math.round(Math.random()* 59)
t = 0,
a = 0
console.log(minu)
if (minu <= 3){
     t = minu * 200
    console.log(`Los Minutos fueron: ${minu} \n El total a pagar es ${t} `)
} else{
     a = (t + (minu + 50))  
    console.log(`Los Minutos fueron: ${minu} \n El total a pagar es ${a}`)
}

/*9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo 
ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es 
posterior*/

var dia = 24
var mes= 9
var año = 2022
console.log(`Dia, Mes y Año actual: = Dia ${dia}: Mes ${mes}:Año ${año}`)


function faltantes_Dia_Mes_Año(a, b, c) {

    console.log(`Dia:${a}, Mes:${b}, Año=${c}`)//La fecha que se va consultar 
    if (c < año) {
        y = año - c
    } else if (c > año) {
        y = c - año
    }
    if (b < mes) {
        m = mes- b
    } else if (b > mes) {
        m = b - mes
    }
    if (a < dia) {
        d = dia- a
    } else if (a > dia) {
        d = a - dia
    }



    if (d,m,y) {
       //Lo faltante 
        console.log(`Los dias  desde la fecha actual hasta la consultada son ${d}, los meses ${m} y los años  ${y}`)
    }
    
                


}
faltantes_Dia_Mes_Año(Math.round(Math.random() * 31), Math.round(Math.random() * 12), Math.round(Math.random() * 10000))   



faltantes_Dia_Mes_Año(Math.round(Math.random() * 31), Math.round(Math.random() * 12), Math.round(Math.random() * 10000))

/*10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El 
programa debe responder que hora será un segundo después. Ej: ingreso 
11:59:59, el programa responde 12:00:00.*/

hora= Math.round(Math.random()*23);
minutos = Math.round(Math.random()*59);
segundos=Math.round(Math.random()*59);

while (hora<=24) {
  while (minutos<=59) {
    while(segundos <=59){
    console.log(`${hora} + : + ${minutos} + : + ${segundos}`)
    segundos= segundos + 1;
    }
    minutos= minutos + 1;
    segundos = 0;
  }
    hora= hora + 1;
    minutos= 0;
}

/*11. Escribir un algoritmo que pida un valor entero que equivale a una cantidad de 
DINERO y calcule a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y 
1.000 equivalen. Si el usuario digita 282000 el programa debe responder cinco 
billetes de 50.000, un billete de veinte mil, un billete de diez mil, un billete de 
dos mil.*/


/*12. Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la 
hora que será dentro de 1 segundo*/

var hora = Math.round(Math.random() * 24)
var minutos = Math.round(Math.random() * 60)
var segundos = Math.round(Math.random() * 60)
console.log(`Horas: ${hora}`)
console.log(`Minutos: ${minutos}`)
console.log(`Segundos: ${segundos}`)

var h,m,s
if ((h < 24) && (m < 59) && (s < 59)) {
    console.log(`hh:${h} mm: ${m} ss: ${s+1}`)
} else if ((h < 24) && (s > 59)) {
    console.log(`hh:${h} mm: ${m+1} ss: ${s=00}`)

} else if ((h < 24) && (m > 59)) {
    console.log(`hh:${h+1} mm: ${m=00} ss: ${s=00}`)

} else { console.log('La hora no coincide') }

console.log(`El tiempo es ${hora}:${minutos}:${segundos}`)




/*13. Solicite al usuario una cantidad numérica que expresa segundos (medida de 
tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso*/

var segundos_usuario = Math.round(Math.random() * (1 - 100000) + 100000),
    s, m, h
console.log(`Los segundos  por el usuario son: ${segundos_usuario}`)
console.log('_____________________________________________')

if (segundos_usuario > 3600) {
    h = segundos_usuario / 3600
    s= segundos_usuario % 3600
}


if (s > 60) {
    
    m = s/ 60
    s= segundos_usuario % 60
}


console.log('Las horas equivalen a:', Math.round(s))
console.log('_____________________________________________')
console.log('Los minutos equivalen a:', Math.round(m))
console.log('_____________________________________________')
console.log('Los segundos equivalen a:', s)




/*14. Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga 
además en que vuelta está sabiendo que cada 360 grados se completa una 
vuelta a la circunferencia. Además diga el resultado en radianes.*/


/*15. La fecha de Pascua corresponde al primer domingo después de la primera luna 
llena que sigue al equinoccio de primavera, y se calcula con las siguientes 
expresiones:
A= año MOD 19
B= año MOD 4
C= año MOD 7
D= (19*A+24) MOD 30
E= (2*B+4*C+6*D+5) MOD 7
N= (22+D+E)
En el que N indica el número de día del mes de marzo (o abril si N es superior a 
31) correspondiente al domingo de Pascua. Realizar un programa que 
determine esta fecha para un año ingresado por teclado.*/
