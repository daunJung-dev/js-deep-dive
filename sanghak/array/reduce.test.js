import { Array } from "./reduce";

test("callback이 함수가 아닐 시 에러 발생시키기", () => {
  // Jest에서... TypeError 인지 어떻게 체크하지?
  expect(() => {
    [].myReduce(1);
  }).toThrow();

  expect(() => {
    [].myReduce();
  }).toThrowError("함수가 아닙니다");

  expect(() => {
    [].myReduce(1);
  }).toThrowError(new TypeError("1은 함수가 아닙니다"));

  expect(() => {
    [].myReduce();
  }).toThrowError(TypeError);
});

test("Reduce를 이용한 간단한 더하기", () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const array1 = [1, 2, 3, 4];
  const array2 = [100, 10, 1];
  const array3 = [5, 15, -5, 5];

  expect(array1.myReduce(reducer)).toBe(10);
  expect(array2.myReduce(reducer)).toBe(111);
  expect(array3.myReduce(reducer)).toBe(20);
});
