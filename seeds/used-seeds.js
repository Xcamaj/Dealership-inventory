const {UsedCars} = require('../models');

const usedCarData = [
    {
        make: "Toyota",
        model: "Corolla",
        price: 12000,
        type: "sedan"
    },
    {
        make: "bmw",
        model: "335i",
        price: 15000,
        type: "sedan"
    },
    {
        make: "bmw",
        model: "m3",
        price: 30000,
        type: "sedan"
    },
    {
        make: "Kia",
        model: "Sorento",
        price: 20000,
        type: "SUV"
    },
    {
        make: "BMW",
        model: "x3",
        price: 22000,
        type: "suv"
    },
    {
        make: "Honda",
        model: "CR-V",
        price: 16000,
        type: "suv"
    }
]

const seedUsedCars = () => UsedCars.bulkCreate(usedCarData);

module.exports = seedUsedCars
