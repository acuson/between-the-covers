const router = require("express").Router();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { User, Club, Tag, User_Club } = require("../models");
const fetch = require("node-fetch");
/* const joinData = require('../public/js/explore-functions'); */

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

router.get("/your-clubs", async (req, res) => {
    res.render("your-clubs");
});

// GET your book clubs page
router.get("/dashboard", async (req, res) => {
    res.render("dashboard");
});
// GET explore book clubs page

router.get("/explore", async (req, res) => {
    /*  let clubs = [
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
    ] */
    try {
        const clubs = await Club.findAll(/* {
          include: [{ model: Book }, { model: User }],
        } */);
        res.render("explore-clubs", { clubs: clubs });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
    /* res.render('explore-clubs', {clubs: clubs}) */
});

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

module.exports = router;
