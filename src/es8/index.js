//object.entries 
//devuelve valores de una matriz

const data = {
    frontend: 'Natty',
    backend: 'Camilla',
    design: 'Alice',
}

//tranformar este objeto a una matriz
const entries = Object.entries(data);
console.log(entries);

//cuantos elementos tiene un objeto, disponemos de legth
console.log(entries.length); //nos da el valor de 3 , porque hay 3 elementos

//valores de un objeto a un string  con value
const data = {
    frontend: 'Natty',
    backend: 'Camilla',
    design: 'Alice',
}

const values = Object.values(data);
console.log(values);  // [ 'Natty', 'Camilla', 'Alice' ]
console.log(values.length); // 3


//Padding
//añadir elementos
const string = 'hello';
console.log(string.padStart(7,'hi')); //hihello se añadio al inicio
console.log(string.padEnd(12, '------')); //hello------- se añadio al final
console.log('food'.padEnd(12, ' --------')); //food -------

//llamado trading comas aqui no pasa nada si dejo la comidita
const obj = {
   name:'oscar', 
}

//Async Await
//Asincronimos
//haremos una funciona, luego promesa y luego invocarla

const helloWorld =()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>resolve('Hello world'), 3000)
        : reject(new Error('test Error'))
    })
};
//esta es una funciion con async y con await
const helloAsync = async()=>{
    const hello = await helloWorld();
    // puedo tener mas constantes que esperem const hello2 = await otrafuncion(); 
    console.log(hello);
};

helloAsync();
 
//otra propuesta de async 
const anotherFunction = async()=>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherFunction();