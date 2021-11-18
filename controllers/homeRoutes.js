const router = require('express').Router();

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

module.exports = router; 