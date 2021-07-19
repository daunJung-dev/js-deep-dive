function map(array, callbackFn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    const returned = callbackFn(currentItem, i, array);
    result.push(returned);
  }

  return result;
}

const newArray = map([4, 1, 5], (x, index, array) => {
  return x * 2;
});

acc, cur, index, array;
const arr = [1, 2, 3, 4];
const reducer = (acc, cur) => acc + cur;
function reduce(arr, callbackFn, initialValue) {
  let result;

  for (let i = 0; i < arr.length; i++) {
    let acc;
    let currentElement;

    if (initialValue && i === 0) {
      acc = initialValue;
      currentElement = arr[i];

      result = callbackFn(acc, currentElement);
    } else {
      acc = result;
      currentElement = acc[i];

      result += callbackFn(acc, currentElement);
    }
  }

  return result;
}

reduce(arr, reducer, 10); // 10

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const arr1 = [1, 2, 3];
const cbFn1 = (x) => x * 2;
console.log(map(arr1, cbFn1));

const arr2 = [2, 4, 8];
const cbFn2 = (x) => x ** 2;
console.log(map(arr2, cbFn2));

const arr3 = [4, 5, 9];
const cbFn3 = (x) => x - 1;
console.log(map(arr3, cbFn3));

const arr4 = [10, 1, "3"];
const cbFn4 = (x) => x + 2;
console.log(map(arr4, cbFn4));
