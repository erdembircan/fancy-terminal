import { expect as chaiExpect } from 'chai';

describe('mocha setup', () => {
  it('should be using chai', () => {
    expect(global.expect).to.be.equal(chaiExpect);
  });
  it('should be using ES modules', () => {
    expect(chaiExpect).to.not.be.undefined;
  });
  it('should be in test env', () => {
    expect(process.env.NODE_ENV).to.be.equal('test');
  });
});
