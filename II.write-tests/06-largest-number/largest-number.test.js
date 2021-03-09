const getLargestNumber = require('./largest-number')

test('get the largest number in array',() => {
    const input = [3, 21, 88, 4, 36]
    const expected = 88
    const output = getLargestNumber(input)
    

    expect(output).toEqual(expected)
})

// example

// also test that the original array hasn't changed
