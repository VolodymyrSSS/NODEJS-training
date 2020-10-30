const EventEmitter = require('events');

const emitter = new EventEmitter();

// прослуховування подій
// emitter.on('anything', data => { // 
//   console.log('ON anything', data);
// });

// випромінювання подій
// emitter.emit('anything', {
//   a: 1
// });
// emitter.emit('anything', {
//   b: 2
// });

// setTimeout(() => {
//   emitter.emit('anything', {
//     c: 3
//   });
// }, 1500);


// Розробка власного метода
class Dispatcher extends EventEmitter() {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]');
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]');
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher();

dis.subscribe('aa', data => {
  console.log('ON: aa', data);
});

dis.dispatch('aa', {
  aa: 22
})