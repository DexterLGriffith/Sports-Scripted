const router = require('express').Router();
const { User } = require('../../models');
const { findOne } = require('../../models/users');

router.post('/', async (req, res) => {
    try {
        const createaUserData = await User.create(req.body);
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.email = createaUserData;
            res.status(200).json({ message: `Logged into Sports Scripted, whats on your mind??` });
        });
    }
    catch (err) {
        console.log(err)
        const unAuthorizedUser = 401;
        res.status(unAuthorizedUser).json(err);
    }
});
// signup routes
router.post('/signup', async (req, res) => {
    try {
        const userSignUpData = await User.create(req.body)
        req.session.save(() => {
            req.session.userid = userSignUpData.id
            req.session.loggedIn = true
            res.status(200).json(userSignUpData)
        })
    }
    catch(err) {
        res.status(400).json(err)
    }
});

// after login --- redirect to homepage
router.get('/login', async (req, res) => {
    try{
    const userSignUpData = await User.findOne({where:{ email: req.body.email }})
        if(!userSignUpData){ res.status(400).json({ message: "invalid user"})}
    const validPass = await userSignUpData.checkPassword(req.body.password)
        if(!validPass){ res.status(400).json({ message: "invalid user or password"})}    
        req.session.save(() => {
            req.session.userid = userSignUpData.id
            req.session.loggedIn = true
            res.status(200).json(userSignUpData)
        });
    }
    catch(err) {
        res.status(400).json(err)
    }
    res.redirect("/homepage")
    // res.redirect to homepage. 
    // res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.email = req.email;
            res.status(200).json({ message: `Welcome to Sports Scripted, whats on your mind?` });
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
router.get('/', async (req, res) => {
    try {
        const accData = await User.findAll()

        res.status(200).json({ accData });
    }
    catch (err) {
        console.log(err)
    }
});


module.exports = router;