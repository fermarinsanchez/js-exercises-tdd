module.exports = function removeMiddle(arr) {
    if (!arr.length % 2 === 0) {
        let middleWord = Math.floor((arr.length / 2))
        return arr.splice(middleWord, 1)
    }
}
