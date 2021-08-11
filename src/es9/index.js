//operador de reposo , 
//saca propiedades de un objeto que aun no se a construido

const obj = {
    name: 'Natty',
    age: 32,
    country: 'MX',
};

let {name, ...all} = obj; // eso de ... all es todo lo demas 
console.log(name, all); //imprime Natty { age: 32, country: 'MX' }

//operador de propagacion, 
//unir uno o mas elementos de objetos a un nuevo objeto

const obj ={
    name: 'Natty',
    age:32,
}

const obj1 = {
    ...obj, //ioerador de propagacion
    country: 'MX',
}

console.log(obj1); //{ name: 'Natty', age: 32, country: 'MX' }

//
// Promise.finally
//
const helloWorld =()=>{
    return new Promise((resolve, reject)=> {
        (true) //operacion ternaria de un IF
        ? setTimeout (()=>resolve ('Hello World'), 3000)   
        : reject (new Error('Test Error'))
    })
}

helloWorld()  //llamar mi promesa
.then(response=> console.log (response))
.catch (error=> console.log(error))
.finally(() => console.log('Finalizo'));  

//Mejoras en REGEX
//agrupar bloques de regex y poder acceder a cada uno de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match [3]

console.log(year, month, day);

