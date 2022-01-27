const router = require('express').Router();

const nbaTeamRoutes = require('./nbaTeamRoutes');

const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('api/nba', nbaTeamRoutes);

module.exports = router;
