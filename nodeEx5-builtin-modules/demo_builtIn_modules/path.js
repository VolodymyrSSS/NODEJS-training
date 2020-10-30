const path = require('path');

console.log('Назва файла: ', path.basename(__filename));

console.log('Назва директорії: ', path.dirname(__filename));

console.log('Розширення файл має ', path.extname(__filename));

console.log('Parse: ', path.parse(__filename));

console.log('Parse for name: ', path.parse(__filename).name);

console.log(path.join(__dirname, 'server', 'index.html'));