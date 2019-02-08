class Byte {
  constructor(value) {
    this.__value__ = new Uint8Array(value);
  }
  get value() {
    return this.__value__;
  }
  set value(value) {
    this.__value__ = value;
  }
  static minValue() {
    return new Int8Array(0);
  }
  static maxValue() {
    return new Int8Array(255);
  }
}

module.exports = {
  default: Byte,
};
