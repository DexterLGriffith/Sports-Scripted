const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const createaUserData = await User.create(req.body);
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.email = createaUserData;
            res.status(200).json({ message: `Logged into Sports Scripted, whats on your mind??` });
        });
    }
    catch(err) {
        console.log(err) 
        const unAuthorizedUser = 401; 
        res.status(unAuthorizedUser).json(err);
    }
});
// after login --- redirect to homepage
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return    
    }
    // res.redirect to homepage. 
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.email = req.email;
            res.status(200).json({ message: `Welcome to Sports Scripted, whats on your mind?`});
        });
    } 
    catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
});
// destroy session after log out 

router.post('/logout', (req, res) => {
    if (req.session.loggedIn === true) {
        req.session.destroy();
    }
    else {
        res.status(404).end();
    }
    res.status(200).render('/');
    });
router.get ('/', async (req, res) => {
    try {
        const accData = await User.findAll()

        res.status(200).json({accData});
    }
    catch (err) {
        console.log(err)
    }
});


module.exports = router;