// imports module to person variable from person.js file
// const Person = require('./person')

// const person1 = new Person('John Doe', 30);

// person1.greeting();

const Logger = require('./logger');

// logger is a class, so must be instantiated (=creating new instance)
const logger = new Logger
logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello there!'); //Called Listener:  { id: 'b0d5d91d-9221-4e7f-8add-09e11272e499', msg: 'Hello there!' }
logger.log('Howdy!'); //Called Listener:  { id: '46adeac6-7d39-49ea-8dd0-649268d2905e', msg: 'Howdy!' }
logger.log('Tralala!'); //Called Listener:  { id: 'acc6584f-c420-4de4-bf73-0498eed88d0b', msg: 'Tralala!' }

testi