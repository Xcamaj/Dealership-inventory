const router = require('express').Router();
const sequelize = require('../../config/connection');
const {NewCars, UsedCars} = require('../../models')

router.get('/', (req, res)=> {
    NewCars.findall({
        attributes: [
            'id',
            'make',
            'model',
            'price',
            'type'
        ],
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router