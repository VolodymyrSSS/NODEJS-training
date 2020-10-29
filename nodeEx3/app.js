// export custom modules

// to export module as string
// const name = require('./myModule');
// console.log(name);

// to export module as function
// const counter = require('./myModule');
// counter.inc();
// counter.inc();
// counter.inc();
// console.log(counter.getCount()); // 3

// to export module with destructuring
const { inc, dec, getCount } = require('./myModule');
inc();
inc();
inc();
dec();
console.log(getCount()); // 2
