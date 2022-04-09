const {UsedCars} = require('../models');

const usedCarData = [
    {
        make: "Toyota",
        model: "Corolla",
        price: 12000,
        type: "sedan",
        user_id: 10
    },
    {
        make: "bmw",
        model: "335i",
        price: 15000,
        type: "sedan",
        user_id: 1
    },
    {
        make: "bmw",
        model: "m3",
        price: 30000,
        type: "sedan",
        user_id: 3
    },
    {
        make: "Kia",
        model: "Sorento",
        price: 20000,
        type: "SUV",
        user_id: 2
    },
    {
        make: "BMW",
        model: "x3",
        price: 22000,
        type: "suv",
        user_id: 4
    },
    {
        make: "Honda",
        model: "CR-V",
        price: 16000,
        type: "suv",
        user_id: 5
    }
]

const seedUsedCars = () => UsedCars.bulkCreate(usedCarData);

module.exports = seedUsedCars
