const expect = require('expect');

const {generateMessage} = require('./message');
const {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Jack';
    const text = 'Hello';
    const message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'User';
    const latitude = 1;
    const longitude = 1;
    const url = `https://www.google.pl/maps?q=${latitude},${longitude}`;
    const location = generateLocationMessage(from, latitude, longitude);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from, url});
  });
});
