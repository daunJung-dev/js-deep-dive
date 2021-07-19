// 새로운 배열을 만듬
// 새로운 배열에는 콜백함수에 정의된 테스트를 통과한 원소들만 있다.

function filter(array, callbackFn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    // 콜백함수가 true인지 false인지 가르쳐줄 것이다.
    const isCurrentItemPassedTest = callbackFn(currentItem, i, array);
    if (isCurrentItemPassedTest) {
      result.push(currentItem);
    }
  }

  return result;
}

export { filter };
