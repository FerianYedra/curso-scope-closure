// Var
var firstName; // undefined
firstName = 'Oscar'; 
console.log(firstName);

var lastName = 'David'; //declarar / asignar
lastName = 'Ana';
console.log(lastName);

var secondName = 'David'; // declarar / asignar
var secondName = 'Ana'; // reasignar
console.log(secondName);

// Let
let fruit = 'apple'; // declarar / asignar
fruit = 'kiwi'; //reasignar
console.log(fruit);
// let fruit = 'banana' No se puede redeclarar una variable let.

// Const
const animal = 'dog'; // declarar / asingar
// animal = 'cat'; No se puede reasignar una variable const
// const animal = 'snake'; No se puede redeclarar una variable const
console.log(animal);

const vehicles = [];
vehicles.push('car'); // El contenido de const puede cambiar si se cambia el contenido de su referencia.
console.log(vehicles);