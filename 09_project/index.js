const events = require('events');

const eventEmitter = new events.EventEmitter();

const eventHandler = () => {
    console.log('Event handler is triggered!');
};

eventEmitter.on('customEvent', eventHandler);

console.log('Calling the event handler for the first time:');
eventEmitter.emit('customEvent');

console.log('\nRemoving the event handler:');
eventEmitter.removeListener('customEvent', eventHandler);

console.log('\nCalling the event handler after removal:');
eventEmitter.emit('customEvent');
