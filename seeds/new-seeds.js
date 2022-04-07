const { NewCars } = require('../models');

const newCarData = [
    {
        make: "honda",
        model: "accord",
        price: 20000,
        type: "sedan"
    },
    {
        make: "nissan",
        model: "altima",
        price: 25000,
        type: "sedan"
    },
    {
        make: "bmw",
        model: "m5",
        price: 70000,
        type: "sedan"
    },
    {
        make: "Ford",
        model: "Explorer",
        price: 30000,
        type: "SUV"
    },
    {
        make: "BMW",
        model: "x5",
        price: 50000,
        type: "suv"
    },
    {
        make: "toyota",
        model: "Rav4",
        price: 25000,
        type: "suv"
    }
]

const seedNewCars = () => NewCars.bulkCreate(newCarData);

module.exports = seedNewCars
