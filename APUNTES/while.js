var num=1;
while (num!=1) {
    num=Math.round(Math.random()*(20-1)+1);
    console.log(num)
}

var num=1;
do {
    num=Math.round(Math.random()*(20-1)+1);
    console.log(num) 
} while (num!=1);

var num=Math.round(Math.random()*(20-1)+1);
var cont=0;
console.log(num)

while (num>0) {
    num=num/2;
    console.log(num)
    cont++;
}
console.log(`dividio ${cont} veces`)