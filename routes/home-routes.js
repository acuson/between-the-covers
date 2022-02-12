const router = require('express').Router();
/* const{} = require('../models') //import models */

// GET login page

// GET dashboard
// for now you can copy this rout and replace dashboard with your page name to check if it renders
router.get('/create-club', async(req, res) =>{
    res.render('index')
})

// GET your book clubs page

// GET explore book clubs page

router.get('/explore', async(req, res) =>{
    res.render('index')
})

// GET create book clubs page

module.exports = router;
