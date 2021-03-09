const removeVowels = require('./remove-vowels')

test("remove vowels from word", function() {
  // Arrange
  const word = 'word'
  const result = '_o__'
  const output = removeVowels(word)
  expect(output).toEqual(result)
  //
  // Act
  // Assert
});

test('returns string of the same length', () => {
  const word = 'hey'
  const wordLength = word.length
  const output = removeVowels(word)

  expect(output).toHaveLength(wordLength)
})
