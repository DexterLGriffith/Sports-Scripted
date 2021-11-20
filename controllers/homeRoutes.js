const router = require('express').Router();
let withAuth = require('../utils/auth');
router.get('/', async (req, res) => {

    res.render('login');
});
router.get('/signup', async (req, res) => {

    res.render('signup');
});


router.get('/homepage', withAuth, async (req, res) => {

    res.render('homepage');
});

router.get('/profile', withAuth, async (req, res) => {

    res.render('profile');
});

router.get('/homepage/NFL', withAuth, async (req, res) => {

    res.render('NFL');
})

router.get('/homepage/NBA', withAuth, async (req, res) => {

    res.render('NBA');
})
module.exports = router; 