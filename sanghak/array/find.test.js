import { find } from "./find";

test("객체의 프로퍼티 값을 이용해 객체를 찾을 수 있음", () => {
  const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  function isCherries(fruit) {
    return fruit.name === "cherries";
  }

  expect(find(inventory, isCherries)).toStrictEqual({
    name: "cherries",
    quantity: 5,
  });
});

test("어떠한 조건도 만족하지 않을 시, undefined를 되돌려줌", () => {
  const array = ["peach", "cherry", "banana"];
  const findApple = (element) => element === "apple";

  const numberArray = [4, 6, 8, 12];

  expect(find(array, findApple)).toBeUndefined();
  expect(find(numberArray, isPrime)).toBe(undefined);
  expect(find(numberArray, isPrime)).toEqual(undefined);
});

test("find를 이용해 소수를 찾을 수 있음", () => {
  const numberArray = [4, 5, 8, 12];
  expect(find(numberArray, isPrime)).toBe(5);
});

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
