const Array = require("./map");

describe("map test", () => {
  test("map returns multiplied values", () => {
    let numbers = Array.from([1, 2, 3]);
    let test = numbers
      .myMap((cur) => {
        return cur * cur;
      })
      .toString();
    expect(test).toBe([1, 4, 9].toString());
  });

  test("map's callback include index and thisArray", () => {
    let foo = Array.from([
      { a: 1, b: 2 },
      { a: 1, b: 2 },
      { a: 1, b: 2 },
    ]);

    let bar = foo
      .myMap((cur, i, arr) => {
        return { a: cur.a * i * arr[0].a, b: cur.b * i * arr[0].b };
      })
      .toString();

    expect(bar).toBe(
      [
        { a: 0, b: 0 },
        { a: 1, b: 4 },
        { a: 2, b: 8 },
      ].toString()
    );
  });
});
