const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
    const valid = isRealString(123);

    expect(valid).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const valid = isRealString('    ');

    expect(valid).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    const valid = isRealString('ass  sdfa');

    expect(valid).toBe(true);
  });
});
