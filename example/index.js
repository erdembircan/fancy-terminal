const ft = require('../dist/fancy-terminal-common');

console.log(Object.keys(ft).map(key => ft[key](` ${key} `)).join(' '));
