const User = require('./User')
const NewCars = require('./New')
const UsedCars = require('./Used')


// associations

User.hasMany(UsedCars, {
    foreignKey: 'User_id'
});

User.hasMany(NewCars, {
    foreignKey: 'User_id'
});

UsedCars.belongsTo(User, {
    foreignKey: 'User_id',
    onDelete: 'SET NULL'
});

NewCars.belongsTo(User, {
    foreignKey: 'User_id',
    onDelete: 'SET NULL'
});


module.exports = { User, NewCars, UsedCars}