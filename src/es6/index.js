//parametros por defecto, establecer cieros valores de una funcion de forma directa


//Asi era antes de EcmaScript6
function newFunction (name,age,country){
    var name =name || 'Naty';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
};

//es6
//ya se esta dando una asignacion
function newFunction2(name='Alice', age=32, country='MX'){
    console.log(name, age, country);
};
//se manda llamar de estas dos formas:
newFunction2();
newFunction2('Amanda','23','CO');

//concatenacion antes de es6
let hello = "Hello";
let world = "World";
let epicPhrase = hello+' ' +world;
console.log(epicPhrase);

//concatencaion con es6
//templates de forma mas amigable, se hacen con la comilla francesa ``:
let epicPhrase2 = `${hello} ${world}`; 
console.log(epicPhrase2);

// cuando escribes ${} estoy trayendo el valor de dicha variable
// pero esto solo funciona con las comillas invertidas


//multilinea en js
let lorem="Loremp impsun simn si,nd sdkjkd \n"
+ "otra frase epica que necesitamos.";

//multilinea con es6
let lorem2= `otra frase epica que necesitams 
fdsfdsfsdfsdfsd sdfdsfsdfdsfdsfdf otra `;

console.log(lorem);
console.log(lorem2);


//objetos
let person ={
    'name': 'Natty',
    'age':32,
    'country': 'MX'
};

console.log (person.name, person.age); //imprime Natty 32

//es6
let {name, age, country}=person;
console.log(name, age, country); //imprime Natty 32 MX

//operador de propagacion: SpreadOUT

let team1=['Natty', 'Carmilla', 'Alice'];
let team2 = ['Pablo', 'Dorian', 'Eloy'];

let education = ['David', ...team1, ...team2];
console.log (education);

//resultado seria:
// 'David',    'Natty',
// 'Carmilla', 'Alice',
// 'Pablo',    'Dorian',
// 'Eloy'


//sccope
var hola= 'hola';

//BLOQUES
{
    var globalVar = "Global Var"; //esta si es accesible
}

{
    let globalLet= 'Global let';
    console.log(globalLet); // aqui si se imprime
}

console.log(globalVar); //esta si imprime
console.log(globalLet); //esta no tenia acceso al menos de ponerlo en el bloque que es definido

//esta parte no es posible hacer 
const a = 'b';
a= 'a'; //esto no lo permite 
console.log(a);


//Arrow Functions, Promesas y Parámetros en objetos

let name= 'Natty';
let age= 32;

//anteriormente se  llamaba asi al objeto
obj ={name:name, age: age};

//es6

obj2 ={name, age};

console.log(obj2); //resultado seria { name: 'Natty', age: 32 }


//ARROW FUNCTION (son funciones anonimas)

const names = [
    {name:' Natty', age:32},
    {name:'Alicia', age:22}
]

//anteriormente usaria un map para interactuar con esos elementos
let listOfNames =name.map(function(item){
    console.log(item.name);
})

//ahora con es6
let listOfNames2 = names.map(item=>console.log(item.name));

//functions arrows con constantes
const listOfNames3 =(name, age, country)=>{
    //aqui iria el codigo
}
 
//cauando paso solo un elemento
const listOfNames4 =name =>{
    //bloques de codigo
}

//nueva funcion,
//la cual recibe un valor donde se multiplica por si mismo 
//y ya no se genera un return
const square =num => num * num;

//PROMESAS: algo va a pasar
//dos eventos no funcionan al mismo tiempo, por ejemplo un api

const helloPromise =()=>{
    return new Promise((resolve, reject)=>{ //algo va  a pasar
        if(true){
            resolve('Hey!'); //promesa verdadera
        }else{
            reject ('Oops!!');
        }
    });
}

helloPromise()
.then(Response=>console.log(Response))
.then(()=>console.log('Hola'))
.catch(error =>console.log(error));

//Clases, Módulos y Generadores

//en este ejemplo se manejo PO , herencias

//esta clase tiene un constructor
class calculator{
    constructor (){
        //scope global
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA, valueB){ //tengo este metodo
        this.valueA=valueA; 
        this.valueB=valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//Modulos: import y export
//tengo el archivo module.js y lo mando llamar con import
import { hello } from './module';
hello();


//generadores: generator, se le coloca un *
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
};

//se ejecuta
const generatorHello = helloWorld();
console.log(generatorHello.next().value); //aqui ocupo el valor por eso uso value
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); //aqui ya no hay valor que regrese por eso regresera undefined.
//un generador muy popular es el fibonacci
