// Variables

var a; // declaración
var b = 'b'; // declaración y asignación 
b = 'bb'; // reasignación
var a = 'aa'; // redeclaración

// Global Scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // tabién es asignación global (porque falta var)
    console.log(country);
}

countries();
console.log(country);