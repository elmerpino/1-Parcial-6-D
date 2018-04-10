// function statement
function greet(){
    console.log('hi');
}
greet();


// functions are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);

// function expression
let greetMe = function(){
    console.log('Hi Fajis');
}
greetMe();

// it´s first-class
logGreeting(greetMe);

/* Operador arrow
enves de 'fuction' uso '()=>' que funciona igual :v*/
let greetMes = ()=>{
    console.log('Hi Santi bebe');
}
greetMes();

// use a function expression on the fly
logGreeting(function(){
  console.log('Hello Gali');  
});
