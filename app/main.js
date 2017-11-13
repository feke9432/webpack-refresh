const greeter = require('./Greeter.js');
const hello = require('./Hello');
document.querySelector('#root').appendChild(greeter());
document.querySelector('#root').appendChild(hello());