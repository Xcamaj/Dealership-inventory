const router = require('express').Router();

const userRoutes = require('./user-routes');
const usedRoutes = require('./used-routes');
const newRoutes = require('./new-routes');


router.use('/users', userRoutes);
router.use('/used', usedRoutes);
router.use('/new', newRoutes);

module.exports = router;
