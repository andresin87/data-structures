class SByte {
  constructor() {
    this.__value__ = new Int8Array(arguments[0].length);
    this.__value__.forEach((value, index) => {
      this.__value__[index] = arguments[0][index];
    });
  }
  get value() {
    return this.__value__;
  }
  set value(value) {
    this.__value__ = value;
  }
  static minValue = new Int8Array(0);
  static maxValue = new Int8Array(255);
}

module.exports = {
  default: SByte,
};
