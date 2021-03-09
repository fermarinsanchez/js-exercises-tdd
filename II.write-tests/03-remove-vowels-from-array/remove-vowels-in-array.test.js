const removeVowelsForWords = require('./remove-vowels-in-array')
const input = ["Irina", "Etza", "Daniel"] 

test("remove vowels from all words in array", function() {
  // Arrange
  const expected = ["rn", "tz", "Dnl"]
  // Act
  const output = removeVowelsForWords(input)
  // Assert
  expect(output).toEqual(expected)
});

test('removes vowels', () => {
  const regex = /[^aeiou]/gi

  const output = removeVowelsForWords(input)

  output.forEach(word => {
    expect(word).toMatch(regex)
  })
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
