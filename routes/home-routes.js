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
    let clubs = [
        {
            name: "Club 1",
            description: 'This is a really fun club!!',
        },
        {
            name: "Club 2",
            description: 'This is a really fun club!!',
        },
        {
            name: "Club 3",
            description: 'This is a really fun club!!',
        },
        {
            name: "Club 4",
            description: 'This is a really fun club!!',
        },
        {
            name: "Club 5",
            description: 'This is a really fun club!!',
        },
        {
            name: "Club 6",
            description: 'This is a really fun club!!',
        }
    ]
    res.render('explore-clubs', {clubs: clubs})
})

// GET create book clubs page

module.exports = router;
