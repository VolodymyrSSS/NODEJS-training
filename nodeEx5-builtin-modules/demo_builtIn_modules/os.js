const os = require('os');

console.log('Операційна система: ', os.platform()); // Darwin

console.log('Архітектура процесора: ', os.arch()); // x64

console.log('Детальніша iнфа по процесорам: ', os.cpus());

console.log('Кількість вільної памяті: ', os.freemem()); // 66019328

console.log('Кількість усієї памяті: ', os.totalmem()); // 8589934592

console.log('Домашня директорія: ', os.homedir()); // /Users/volodymyrsych

console.log('Включений: ', os.uptime()); // 642894