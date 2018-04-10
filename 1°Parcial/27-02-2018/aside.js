// pass by value
function change(a){
    a = 2;
}

var b = 1;
change(b);
console.log(b);

//pass by reference
function changeObj(c){
    c.prop1 = function() {};//funcion vacia
    c.prop2 = {};//objeto vacio
}

var d = {};
d.prop1 = {};
changeObj(d);
console.log(d);
