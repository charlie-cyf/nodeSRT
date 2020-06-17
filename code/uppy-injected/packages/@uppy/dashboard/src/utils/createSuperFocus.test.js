var SRTlib = require('SRT-util');
const createSuperFocus = require('./createSuperFocus');
describe('createSuperFocus', () => {
  it('should return a function that can be cancelled', () => {
    const superFocus = createSuperFocus();
    expect(typeof superFocus).toBe('function');
    expect(typeof superFocus.cancel).toBe('function');
  });
});
