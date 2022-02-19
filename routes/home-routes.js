const router = require("express").Router();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { User, Club, Tag, User_Club } = require("../models");
const fetch = require("node-fetch");
const API_KEY = process.env.GOOGLE_API_KEY;
const BASE_URL = process.env.BASE_URL;

// GET login page
router.get("/", async (req, res) => {
    res.render("index");
});

// GET create user page
router.get("/create-user", async (req, res) => {
    res.render("create-user");
});

// GET your book clubs page
router.get("/dashboard", async (req, res) => {
    let id = req.session.user_id;
    let data = await User.findByPk(1, {
        include: [{ model: Club }],
    })
    // username: req.body.user
    let user = data.get({plain: true})
    console.log(data)
    // console.log(data.clubs)
    res.render("dashboard", {data: user})
});

// GET explore book clubs page

router.get("/explore", async (req, res) => {
    try {
        // Query joinable clubs
        let clubs = await Club.findAll({
            where: {
                joinable: true,
            },
            raw: true,
        });
        // console.log(clubs);
        // // Fetch img URL by searching Google Books API with book name
        const getImgLink = clubs => {
            // Fetch each link and return into a new array
            let newClubs = clubs.map(async club => {
                const url = `${BASE_URL}?q=${club.club_book}&key=${API_KEY}`;
                const response = await fetch(url);
                const {items} = await response.json();
                const imgLink = items[0].volumeInfo.imageLinks.thumbnail;
                club.img = imgLink;
            });
            return Promise.all(newClubs);
        };
        const newClubs = await getImgLink(clubs);
        res.render("explore-clubs", {clubs: clubs });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


/* router.get("/dashboard", async (req, res) => {
    res.render("dashboard");
}); */

// GET your book clubs page
router.get("/your-clubs", async (req, res) => {
    let id = req.session.user_id;
    let data = await User.findByPk(1, {
        include: [{ model: Club }],
    })
    // username: req.body.user
    let user = data.get({plain: true})
    console.log(data)
    // console.log(data.clubs)
    res.render("your-clubs", {data: user});
});

// GET create book clubs page
router.get("/create-club", async (req, res) => {
    res.render("create-club");
});

// GET book suggestions page
router.get("/book-suggestions", async (req, res) => {
    res.render("book-suggestions");
});

module.exports = router;
