//CAMBIO #1:
//disponibilidad dentro de un arreglo o funcion
//anteriormente se usaba indexOF
//arreglo de numeros

let numbers = [1,2,3,7,8];

if (numbers.includes(7)){
    console.log('Si se encuentra el valor 7');
}else {
    console.log('no se encuentra')

}


//CAMBIO #2
//exponentes colocando con **

let base =4;
let exponent=3;
let result = base** exponent;  //elevar exponente

console.log(result); //nos dara 64