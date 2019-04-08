## 🌈 fancy-terminal [![Build Status](https://travis-ci.com/erdembircan/fancy-terminal.svg?token=uZBBgzqyPXwqVmSropq2&branch=master)](https://travis-ci.com/erdembircan/fancy-terminal) [![Coverage Status](https://coveralls.io/repos/github/erdembircan/fancy-terminal/badge.svg?branch=master)](https://coveralls.io/github/erdembircan/fancy-terminal?branch=master)

> zero dependency Node.js terminal output colorizer.

### installation

`npm i fancy-terminal`
or
`yarn add fancy-terminal`

### usage

```javascript
const ft = require('fancy-terminal');

// color name for font colors
console.log('An error occured: ' + ft.red('an unfortunate error'));

// color name with Bg suffix for background colors
console.log(ft.greenBg('operation successfull');

```

check `yarn example` for full color displays.

### api

- **font color list**: [black, red, green, yellow, blue, magenta, cyan, white]
- **background color list**: all of the font colors suffixed with `Bg`

### license

[MIT](https://opensource.org/licenses/MIT)

Erdem Bircan (c) 2019-present
