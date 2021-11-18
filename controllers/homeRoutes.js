const router = require('express').Router();
let withAuth = require('../utils/auth');
router.get('/', async (req, res) => {

    res.render('login');
});
router.get('/signup', async (req, res) => {

    res.render('signup');
});


router.get('/homepage', async (req, res) => {

    res.render('homepage');
});

router.get('/profile', withAuth, async (req, res) => {

    res.render('profile');
});

module.exports = router; 