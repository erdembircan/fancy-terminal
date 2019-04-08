/*!
  * fancy-terminal v1.0.1
  * Erdem Bircan - 2019
  * @license MIT
  */
'use strict';

/** @module colors */
var colors = {
  colors: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    blackBg: '\x1b[40m',
    redBg: '\x1b[41m',
    greenBg: '\x1b[42m',
    yellowBg: '\x1b[43m',
    blueBg: '\x1b[44m',
    magentaBg: '\x1b[45m',
    cyanBg: '\x1b[46m',
    whiteBg: '\x1b[47m',
  },
  util: {
    reset: '\x1b[0m',
  },
};

/** fancyObject - fancy-terminal main object */
var fancyObject = {};

var ref = colors.util;
var reset = ref.reset;

/**
 * @function assignColor - assign color key to main object as function
 *
 * @param {string} colorKey - color key
 */
function assignColor(colorKey, colorObj, mainObj) {
  mainObj[colorKey] = function assign(message) {
    return ("" + (colorObj[colorKey]) + message + reset);
  };
}

Object.keys(colors.colors).forEach(function (c) {
  assignColor(c, colors.colors, fancyObject);
});

module.exports = fancyObject;
