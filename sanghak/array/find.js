function find(array, callbackFn, thisArg) {
  // this binding을 위해서 bind(), call()중 뭘 써야하나?

  for (let i = 0; i < array.length; i++) {
    const currentElem = array[i];
    if (callbackFn(currentElem, i, array)) {
      return currentElem;
    }
  }

  return undefined;
}

export { find };
