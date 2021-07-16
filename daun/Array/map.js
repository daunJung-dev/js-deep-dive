// @description arr.map(callback(currentValue[, index[, array]])[, thisArg])
Array.prototype.myMap = function (callback, thisArg) {
  let result = [];
  if (thisArg) {
    callback.prototype.bind(thisArg);
  }
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

module.exports = Array;
