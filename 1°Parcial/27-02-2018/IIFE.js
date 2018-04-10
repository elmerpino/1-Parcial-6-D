//IIFE = immediately invoked function expression 

let firstname = 'Elmer';

(function (lastname) {
    let firstname = 'Jesús';    
    console.log(lastname);
    console.log(firstname);
}('Pino Nevarez'));

console.log(firstname);
