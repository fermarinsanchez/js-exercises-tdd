var greetPeople = require('./greet-people')

test("print list of names prefixed with Hello", function() {
  const names= ['Peter', 'Pedro']
  const expected = 'Hello PeterPedro'

  
  // Act
  const output = greetPeople(names)
  // Assert
  expect(output).toEqual(expected)
});
