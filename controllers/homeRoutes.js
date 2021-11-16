const router = require('express').Router();

router.get('/views/homepage.handlebars', async (req, res) => {

    res.render('homepage');
});

module.exports = router; 