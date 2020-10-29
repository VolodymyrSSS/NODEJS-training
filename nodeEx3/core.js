// to use a builtin module 'path'
const path = require('path');
// to get a full path
// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
// console.log(dirUploads);


// to use a builtin module 'util'
const util = require('util');
// util.log(path.basename(__filename));
// util.log(' ^ The name of current file');

const v8 = require('v8');
util.log(v8.getHeapStatistics());
