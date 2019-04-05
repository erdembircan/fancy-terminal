import colors from './colors';

/** fancyObject - fancy-terminal main object */
const fancyObject = {};

const { reset } = colors.util;

/**
 * @function assignColor - assign color key to main object as function
 *
 * @param {string} colorKey - color key
 */
function assignColor(colorKey, colorObj, mainObj) {
  mainObj[colorKey] = function assign(message) {
    return `${colorObj[colorKey]}${message}${reset}`;
  };
}

Object.keys(colors.colors).forEach((c) => {
  assignColor(c, colors.colors, fancyObject);
});

/** @module fancy-terminal */
export default fancyObject;
