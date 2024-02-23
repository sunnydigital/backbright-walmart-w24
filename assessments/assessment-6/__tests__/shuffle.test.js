const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test('check that shuffle returns an array', () => {
    expect(typeof shuffle([1,2,3,4,5])).toBe('object')
  })
  test('check that shuffle returns an array of the same length as the argument sent in', () => {
    expect(shuffle[1,2,3,4,5].constructor.name).toBe('Array')
  })
});
