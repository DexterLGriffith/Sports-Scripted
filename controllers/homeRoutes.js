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

router.get('/profile', async (req, res) => {

    res.render('profile');
});

router.get('/homepage/NFL', async (req, res) => {

    res.render('NFL');
})

router.get('/homepage/NBA', async (req, res) => {

    res.render('NBA');
})
module.exports = router; 