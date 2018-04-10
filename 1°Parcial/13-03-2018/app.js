var person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var fajis = Object.create(person);
fajis.firstname = ('José Luis');
fajis.lastname = ('Fajardo Borjas');

var gali = Object.create(person);
gali.firstname = ('Galilea');
gali.lastname = ('Lopez Maldonado');

console.log(fajis.greet());
console.log(gali.greet());