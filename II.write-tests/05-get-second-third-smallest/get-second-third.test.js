// example
const getSecondThird = require('./get-second-third') 

describe('returns', () => {
    const input = [90, 5, 11, 8, 6]
    const expected = [6, 8]
    const output = getSecondThird(input)

    it('only two numbers', () => {
        expect(output).toHaveLength(2)
    })
    it('the highest numbers', () => {
        expect(output).toEqual(expected)
    })
})

// also test that the original array has not changed
