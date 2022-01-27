const router = require('express').Router();

const nbaTeamRoutes = require('./nbaTeamRoutes');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/api/nba', nbaTeamRoutes);

module.exports = router;

