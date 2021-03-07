// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = function getAverage(arr) {
    const numberArr = arr.filter(el => typeof el === 'number')

    const sum = numberArr.reduce((acc, val) => acc + val, 0)
    return sum / numberArr.length
}

