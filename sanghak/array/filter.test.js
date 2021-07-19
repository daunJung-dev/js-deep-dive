import { filter } from "./filter";

test("문자가 7개 이상인 단어를 잘 찾아냄", () => {
  const words = [
    "spray",
    "elite",
    "exuberant",
    "limit",
    "destruction",
    "present",
  ];

  const callbackFn = (word) => {
    return word.length > 6;
  };

  expect(filter(words, callbackFn)).toHaveLength(3);
  expect(filter(words, callbackFn)).toContain("exuberant");
  expect(filter(words, callbackFn)).toContain("destruction");
  expect(filter(words, callbackFn)).not.toContain("limit");
});

test("값이 10 이상인 원소를 찾아냄", () => {
  const array = [12, 5, 8, 130, 44];
  function isBigEnough(value) {
    return value >= 10;
  }

  expect(filter(array, isBigEnough)).toHaveLength(3);
  expect(filter(array, isBigEnough)).toEqual([12, 130, 44]);
});

test("값이 10 이상인 원소를 찾아냄", () => {
  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }

  expect(filter(array, isPrime)).toHaveLength(6);
  expect(filter(array, isPrime)).toEqual([2, 3, 5, 7, 11, 13]);
});
