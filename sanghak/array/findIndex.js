Array.prototype.myFindIndex = function (callbackFn, thisArg) {
  // if (thisArg) {
  //   // 왜 bind가 안돼지?
  //   callbackFn = callbackFn.bind(thisArg);
  //   callbackFn();
  // }

  const array = this;
  for (let i = 0; i < array.length; i++) {
    const currentElem = array[i];
    if (callbackFn(currentElem, i, array)) {
      return i;
    }
  }

  return -1;
};

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime));
console.log([4, 6, 7, 9, 12].findIndex(isPrime));
