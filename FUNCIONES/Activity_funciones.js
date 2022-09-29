/*function positivo(num){
if (num>0){
    return('positivo')
}else if(num<0){
    return('negatiVO')
}else
    return('cero')
}
console.log(positivo(4))*/
/*const myfunction =(num)=>{
    if (num>0){
        return('positivo')
    }else if(num<0){
        return('negatiVO')
    }else
        return('cero')
    }
    console.log(myfunction(4))*/
    


/*function escala(nota){
if (nota > 0 && nota <= 4) {
    return`ES INSUFICIENTE ${nota}`;
  } else if (nota > 4 && nota <= 7) {
    return`ES SUFICIENTE ${nota}`;
  } else {
    return`ES BIEN ${nota}`;
  }
}
  console.log(escala(5))*/

  /*const mifunction =(nota)=>{
    if (nota > 0 && nota <= 4) {
        return`ES INSUFICIENTE ${nota}`;
      } else if (nota > 4 && nota <= 7) {
        return`ES SUFICIENTE ${nota}`;
      } else {
        return`ES BIEN ${nota}`;
      }
    }
      console.log(mifunction(5))*/


/*function Multiplicacion(a,b){
 var a = Math.round(Math.random()*10);
var b = Math.round(Math.random()*10);
console.log (a,b)

if(b == 0){//cuando ya este el residuo
  
} else{ 
    return(`Multiplicacion = ${a**b}`)//operadores aritmeticos 
}
}console.log(Multiplicacion())*/




/*const myfunction=(a,b)=>{
    var a = Math.round(Math.random()*10);
   var b = Math.round(Math.random()*10);
   console.log (a,b)
   
   if(b == 0){//cuando ya este el residuo
     
   } else{ 
       return(`Multiplicacion = ${a**b}`)//operadores aritmeticos 
   }
   }
   console.log(myfunction())*/


function pyramid(numPisos) {
    for (let i = 0; i < numPisos; i++) {
      let piso = '';
      for (let j = 1; j < numPisos - i; j++) {
        piso = piso + ' ';
      }
  
      for (let j = 0; j < i + 1; j++) {
        piso = piso + '*';
      }
      console.log(piso);
    }
  }
  
  pyramid(10);


  /*const myfunction=(numPisos)=> {
    for (let i = 0; i < numPisos; i++) {
      let piso = '';
      for (let j = 1; j < numPisos - i; j++) {
        piso = piso + ' ';
      }
  
      for (let j = 0; j < i + 1; j++) {
        piso = piso + '*';
      }
      console.log(piso);
    }
  }
  
console.log(myfunction(10));*/
function num(x,y,z){
var x = Math.round(Math.random() * 100);
var y = Math.round(Math.random() * 100);
var z = Math.round(Math.random() * 100);
if (x == y && x == z && y == z) {
  return(`Hay tres números que son iguales \n${x} \n${y} \n${z} `);
} else if (x == y && x != z && y != z) {
  return(`Hay dos números que son iguales \n${x} \n${y} \n${z} `);
} else {
  return(`Los tres números son diferentes \n${x} \n${y} \n${z} `);
}
}console.log(num())

const myfunction =(x,y,z)=>{
    var x = Math.round(Math.random() * 100);
    var y = Math.round(Math.random() * 100);
    var z = Math.round(Math.random() * 100);
    if (x == y && x == z && y == z) {
      return(`Hay tres números que son iguales \n${x} \n${y} \n${z} `);
    } else if (x == y && x != z && y != z) {
      return(`Hay dos números que son iguales \n${x} \n${y} \n${z} `);
    } else {
      return(`Los tres números son diferentes \n${x} \n${y} \n${z} `);
    }
    }
    console.log (myfunction())