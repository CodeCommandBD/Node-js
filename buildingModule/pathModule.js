const path = require('path');

const extensionName = path.extname('index.js')

console.log(extensionName);

const joinName = path.join(__dirname + '/../view')

console.log(joinName);
