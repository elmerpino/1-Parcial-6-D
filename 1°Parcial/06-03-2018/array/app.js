//object propetires and methods
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
let prop = 'greet';
console.log(obj[prop]);

//fucitons and arrays
var arr = [];

arr.push(function(){
console.log('Hello world!');
});

arr.push(function(){
console.log('Hello world!!');
});

arr.push(function(){
console.log('Hello world!!!');
});

arr.forEach(function(item){
    item();
});