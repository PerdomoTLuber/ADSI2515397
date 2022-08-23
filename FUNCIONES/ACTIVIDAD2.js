//Escriba una función que llene un array con n numeros(n debe ser mínimo 5 y máximo 25).

function llenararreglo(arreglo){
    let arreglo=[]
        for (let i = 0; i <arreglo ; i++) {
            arreglo[i]= Math.round(Math.random ()*20+5)
            
    }
}console.log(llenararreglo(arreglo))

/*Escriba Una función que reciba el array lleno lleno y retorne otro arreglo con la diferencia
que hay entre el valor de cada elemento y la media del arreglo.*/
var arreglo_1=[]

for (let i = 0; i < 10 ;i++) {
    arreglo_1[i]= Math.round(Math.random ()*100)
    

}
console.log( arreglo_1)

let suma=0
function media_arreglo1(arreglo_1){
    for (let i = 0; i < arreglo_1.length; i++){
    suma = suma + arreglo_1[i]
    
}
return media_arreglo1=suma/arreglo_1.length
}
var resultado_media1=media_arreglo1(arreglo_1);
console.log('media_arreglo1='+resultado_media1)

/*------------------------------------------------------------------------------------------ */
var arreglo_2=[];
for (let i = 0; i < 10; i++) {
  arreglo_2[i]=Math.round(Math.random()*30)
    
}console.log(arreglo_2)

let suma2=0
function media_arreglo2(arreglo_2){
    for (let i = 0; i < arreglo_2.length; i++){
    suma2 = suma2 + arreglo_2[i]
}
return media_arreglo2=suma2/arreglo_2.length
}
var resultado_media2=media_arreglo2(arreglo_2);
console.log('media_arreglo2='+resultado_media2)

/*Escriba una función que reciba el arreglo con las diferencias del punto anterior 
y diga de cada uno cuanto le falta o cuanto le sobra segun el caso con referencia a la media*/