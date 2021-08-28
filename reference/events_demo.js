const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired'))

// Init event. Every time this is run, the Event Fired-thing comes up
myEmitter.emit('event');