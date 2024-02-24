const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test('check that shuffle returns an array', () => {
    expect(shuffle([1,2,3,4,5]).constructor.name).toBe('Array')
  })
  test('check that shuffle returns an array of the same length as the argument sent in', () => {
    expect(shuffle([1,2,3,4,5]).length).toBe(5)
  })
});
