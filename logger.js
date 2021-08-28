const EventEmitter = require('events');
// Creates a random id
const uuid = require('uuid');

console.log(uuid.v4()); // 30b1e623-dfa8-44b7-8fbf-9f818fc6a541. Varies every time!
console.log(uuid.v4()); // 37dd6b037-312d-4b25-a6e7-7a82c037317c Varies every time!

class Logger extends EventEmitter {
    log(msg) {
        // Call event. When this references to a class, by extending it references also in EventEmitter, which has myEmitter.emit. So emit is available here too.
        this.emit('message', { id: uuid.v4(), msg});
    }
}

module.exports = Logger;