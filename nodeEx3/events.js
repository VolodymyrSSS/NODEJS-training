// using custom events with 'EventEmitter' and handle it with .on()

const events = require('events');

const emitter = new events.EventEmitter();

// handle the custom events
emitter.on('customEvent', (message, user) => {
  console.log(`${user}: ${message}`);
});

// raise the custom events
// emitter.emit('customEvent', 'Good luck in learning NodeJS', 'Computer'); // Computer: Good luck in learning NodeJS
// emitter.emit('customEvent', 'That\'s pretty cool, huh?', 'Volodymyr'); // Volodymyr: That's pretty cool, huh?

// sample of async feature
process.stdin.on('data', data => {
  const input = data.toString().trim();
  if(input === 'exit') {
    emitter.emit('customEvent', 'Goodbye!', 'process');
    process.exit();
  }
  emitter.emit('customEvent', input, 'terminal');
});