function greetPeople(people) {
  var greeting = "Hello ";

  if (!Array.isArray(people)) {
    throw new Error('Invalid data type')
  }

  people.forEach(function(person) {
    greeting = greeting + person;
  });

  return greeting;
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
