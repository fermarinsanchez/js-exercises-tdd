const fn = require('./get-even-numbers')

test('gets even numbers', () => {
    const input = [22, 13, 73, 82, 4]
    const expected = [22, 82, 4]

    const result = fn(input)

    expect(result).toEqual(expected)
})

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
