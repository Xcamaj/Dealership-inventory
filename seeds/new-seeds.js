const { NewCars } = require('../models');

const newCarData = [
    {
        make: "honda",
        model: "accord",
        price: 20000,
        type: "sedan",
        user_id: 6
    },
    {
        make: "nissan",
        model: "altima",
        price: 25000,
        type: "sedan",
        user_id: 6
    },
    {
        make: "bmw",
        model: "m5",
        price: 70000,
        type: "sedan",
        user_id: 7
    },
    {
        make: "Ford",
        model: "Explorer",
        price: 30000,
        type: "SUV",
        user_id: 7
    },
    {
        make: "BMW",
        model: "x5",
        price: 50000,
        type: "suv",
        user_id: 7
    },
    {
        make: "toyota",
        model: "Rav4",
        price: 25000,
        type: "suv",
        user_id: 8
    }
]

const seedNewCars = () => NewCars.bulkCreate(newCarData);

module.exports = seedNewCars
