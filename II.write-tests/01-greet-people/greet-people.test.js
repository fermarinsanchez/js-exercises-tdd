var greetPeople = require('./greet-people')

test("print list of names prefixed with Hello", function() {
  const names= ['Peter', 'Pedro']
  const expected = 'Hello PeterPedro'

  
  // Act
  const output = greetPeople(names)
  // Assert
  expect(output).toEqual(expected)
}); 


test("do not recive another data type", () => {
  const fn = () => greetPeople('hello')

  expect(fn).toThrow(new Error('Invalid data type'))
})
