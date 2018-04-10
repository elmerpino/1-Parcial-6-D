var Emitter = require('./Emitter');
var eventConfig = require('./config');

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function (){
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occurred!');
});

/*
console.log('Hello!');
emtr.emit(eventConfig.GREET);

emtr.on('greet', function (){
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');
*/