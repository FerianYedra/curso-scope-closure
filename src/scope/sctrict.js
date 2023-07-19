'use strict';
pi = 3.14159265358979 // error, pi no esta declarada.
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());