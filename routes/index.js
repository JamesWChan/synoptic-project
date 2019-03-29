const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/dashboard', (req, res) => {
    let name = req.isAuthenticated() ? req.user.name : 'guest';
    res.render('dashboard',{
        name: name
    });
});

module.exports = router;