var removeVowels = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  var result = words.map(function (word) {
      const regex = /[aeiou]/gi
      return word.replace(regex, '')
    });

    return result;
  }


module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
