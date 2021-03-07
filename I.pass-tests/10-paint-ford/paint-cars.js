module.exports =  function paintShop(cars, paint) {
    const carToPaint = {}
    Object.assign(carToPaint, cars[0])
    carToPaint.colour = paint

    const paintedCars = cars.slice(1)
    return [carToPaint, ...paintedCars]
}