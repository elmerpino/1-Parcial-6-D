function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hi '+ this.firstname + ' ' + this.lastname);
};

let jose = new Person('Jose' , 'Fajardo');
jose.greet();

let gali = new Person('Galilea', 'Lopez');
gali.greet();

console.log(jose._proto_===gali._proto_);
