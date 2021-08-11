//
let array= [1,2,3, [1,2,3, [1,2,3]]];

//devolver una matriz con su profundidad
console.log(array.flat());   //nivel uno
console.log(array.flat(2)); 

//FLATmap
let array = [1,2,3,4,5];
console.log(array.flatMap(value=>[value, value *2]));

// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
//   ]
  
//
//print trim STart
let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart()); //remueve espacios

//print trim Endd
let hello='hello world              ';
console.log(hello);
console.log(hello.trimEnd());

//


//try catch
//ahora puedes utilizarlo 
//sin necesidad de especificaro como catch(error)
// sino directamente usarlo en el scope del catch.
try{
    
}catch{
    error
}

//fromEntries

let entries = [["name", "Natty"], ["age", 32]];
console.log(Object.fromEntries(entries));


//symbol
//objeto tipo simbolo, permite ver una descripcion
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description); //