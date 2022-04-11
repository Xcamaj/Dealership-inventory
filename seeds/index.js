const seedUser = require('./user-seeds');
const seedNewCars = require('./new-seeds');
const seedUsedCars = require('./used-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUser();
    console.log('--------------');
    await seedNewCars();
    console.log('--------------');

    await seedUsedCars();

    console.log('--------------');

    process.exit(0);
};

seedAll();
