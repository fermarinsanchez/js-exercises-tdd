module.exports = function secondLargest(arr) {
    const number = arr.sort((a,b) => b - a)
    return number[1]
}
