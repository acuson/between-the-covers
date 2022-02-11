const router = require('express').Router();
/* const{} = require('../models') //import models */

// GET login page
router.get('/', async(req, res) =>{
    res.render('index')
})
// GET dashboard
// for now you can copy this rout and replace dashboard with your page name to check if it renders
router.get('/dashboard', async(req, res) =>{
    res.render('dashboard')
})

// GET your book clubs page

// GET explore book clubs page

router.get('/explore', async(req, res) =>{
    res.render('explore-clubs')
})

// GET create book clubs page

module.exports = router;
