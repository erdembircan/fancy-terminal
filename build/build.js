const path = require('path');
const rollup = require('rollup');
const buble = require('rollup-plugin-buble');
const cjs = require('rollup-plugin-commonjs');
const node = require('rollup-plugin-node-resolve');
const packageDetails = require('../package.json');

/**
 * @function resolve - resolve path relative to current file
 *
 * @param {string} p - path
 * @return {string} -resolved path
 */
const resolve = p => path.resolve(__dirname, '../', p);

/* eslint-disable operator-linebreak */
const banner =
`/*!
  * ${packageDetails.name} v${packageDetails.version}
  * Erdem Bircan - ${new Date().getFullYear()}
  * @license ${packageDetails.license}
  */`;
/* eslint-enable */

/**
 * @function generateConfigs - generate rollup configs
 *
 * @param {array} configArray - config array
 * @return {array} - an array containing generated configs
 */
function generateConfigs(configArray) {
  return configArray.map(({ input: inputOptions, output: outputOptions }) => ({
    input: {
      input: resolve(inputOptions),
      plugins: [
        node(),
        cjs(),
        buble(),
      ],
    },
    output: { ...outputOptions, banner },
  }));
}

/** @module build */
module.exports = { generateConfigs };
