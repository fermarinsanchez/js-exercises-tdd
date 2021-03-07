function findNeedle(words, match) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === match) {
            return  i
        }
    }
}

module.exports = findNeedle;
