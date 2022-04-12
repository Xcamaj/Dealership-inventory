const User = require('./User')
const NewCars = require('./New')
const UsedCars = require('./Used')


// associations

User.hasMany(UsedCars, {
    foreignKey: 'user_id'
});

User.hasMany(NewCars, {
    foreignKey: 'user_id'
});

UsedCars.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

NewCars.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


module.exports = { User, NewCars, UsedCars}