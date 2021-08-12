Array.prototype.myReduce = function (callback, initialValue) {
  const array = this;

  // 가장 첫번째로... callback이 함수가 아니라면 error 던지기
  // 함수인지 어떻게 체크하지?
  if (typeof callback !== "function") {
    throw new TypeError(`${callback}은 함수가 아닙니다`);
  }
  // 에러는 어떻게 던지지?

  // Uncaught TypeError: 5 is not a function

  let accumulator;
  let currentValue;
  let currentIndex;
  let sourceArray;

  for (let i = 0; i < array.length; i++) {
    callback();
  }
};

module.exports = { Array };
