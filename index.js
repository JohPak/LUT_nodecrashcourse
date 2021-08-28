// imports module to person variable from person.js file
// const Person = require('./person')

// const person1 = new Person('John Doe', 30);

// person1.greeting();

const Logger = require('./logger');

// logger is a class, so must be instantiated (=creating new instance)
const logger = new Logger
logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello there!');

// JÄI KOHTAAN 55:50 videossa