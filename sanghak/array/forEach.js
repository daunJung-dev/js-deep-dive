Array.prototype.myForEach = function (callbackFn, thisArg) {
  const array = this;

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      const currentElem = array[i];
      callbackFn(currentElem, i, array);
    }
  }
};

const items = ["item1", "item2", , "item3"];
const copyItems = [];
items.myForEach(function (item) {
  copyItems.push(item);
  console.log("copyItems: ", copyItems);
});

console.log("------------------------");
console.log(copyItems);

// ------------------------------------------------
console.log("------------------------");
console.log("2nd example");
console.log("------------------------");

let words = ["one", "two", "three", "four"];
words.myForEach(function (word) {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});

console.log(words);
