const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const handlebarsRoutes = require('./handlebars-routs')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/handlebars', handlebarsRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
