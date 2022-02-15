const router = require("express").Router();
const { User, Club, Tag, User_Club } = require("../models");
const joinData = require('../public/js/explore-functions');

// GET login page
router.get("/", async (req, res) => {
    res.render("index");
});

// GET create user page
router.get("/create-user", async (req, res) => {
    res.render("_create-user");
});
// GET dashboard
// for now you can copy this rout and replace dashboard with your page name to check if it renders
router.get("/dashboard", async (req, res) => {
    res.render("dashboard");
});

// GET your book clubs page
router.get("/your-clubs", async (req, res) => {
    res.render("_your-clubs");
});
// GET explore book clubs page

router.get("/explore", async (req, res) => {
    res.render("explore-clubs");
});

// GET create book clubs page
router.get("/create-club", async (req, res) => {
    res.render("_create-club");
});


//POST ROUTES//

router.post('/', async (req,res) =>{
        try{
            const userData = await User.create(joinData.joinClub);
            res.status(200).json(joinData.joinClub);
        } catch(err){
            res.status(400).json(err)
        }
    })

module.exports = router;
