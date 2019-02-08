import chai, { expect } from 'chai';

const SByte = require('./SByte').default;

describe('SByte', () => {
  context('value', () => {
    it('constructor for a single value', () => {
      const actual = new SByte(0x00);
      const expected = new Int8Array(1);
      expected[0] = 0x00;
      expect(actual.value.length).to.be.equal(expected.length);
      [...Array(actual.value.length).keys()].forEach(index => {
        expect(actual.value[index]).to.be.equal(expected[index]);
      });
    });

    it('constructor for an array of values', () => {
      const data = [
        0x00,
        0x01,
        0x02,
        0x03,
        0x04,
        0x05,
        0x06,
        0x07,
        0x08,
        0x09,
        0x0a,
        0x0b,
        0x0c,
      ];
      const actual = new SByte(data);
      expect(actual.value.length).to.be.equal(data.length);
      [...Array(actual.value.length).keys()].forEach(index => {
        expect(actual.value[index]).to.be.equal(data[index]);
      });
    });
  });
});
