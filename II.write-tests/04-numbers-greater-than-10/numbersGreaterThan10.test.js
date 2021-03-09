var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function () {
    const input = [4, 10, 32, 9, 21];
    const expected = [32, 21];
    const output = largerThanTen(input)

    expect(output).toEqual(expected)
});

describe('arrayContaining', () => {
    const input = [4, 10, 32, 9, 21];
    const expected = [32, 21];
    const output = largerThanTen(input)
    it('Is a subset of the initial array', () => {
      expect(output).toEqual(expect.arrayContaining(expected));
    });
    it('Get numbers greater than 10', () => {
        expect(output).toEqual(expected)
    });
  });
  