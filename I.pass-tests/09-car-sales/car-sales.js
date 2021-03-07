module.exports = function sales(arr) {
    let totals = {}
    for (car of arr) {
        if (totals[car.make]) {
            totals[car.make] += car.price
        } else {
            totals[car.make] = car.price
        }
    }
    return totals
}