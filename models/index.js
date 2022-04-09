const NewCars = require('./New')
const UsedCars = require('./Used')
const User = require('./User')

// associations

User.hasMany(UsedCars, {
    foreignKey: 'user_id'
});

User.hasMany(NewCars, {
    foreignKey: 'user_id'
});

UsedCars.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

NewCars.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


module.exports = { User, NewCars, UsedCars}