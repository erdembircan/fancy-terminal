import fancyTerminal from '../../src/index';
import colors from '../../src/colors';

describe('fancy-terminal', () => {
  it('should create all color codes as functions', () => {
    /**
     * @function getObjectLength - get count of objects first parent keys
     *
     * @param {object} obj - object to be counted
     * @returns {number} - total count of parent keys
     */
    function getObjectLength(obj) {
      return Object.keys(obj).reduce((c, a) => ++c, 0);
    }

    const colorsLength = getObjectLength(colors.colors);
    const fancyLength = getObjectLength(fancyTerminal);
  });
  it('should return correct color coded message', () => {
    const colored = fancyTerminal.black();
    expect(colored.includes(colors.black)).to.be.true;
  });
});
