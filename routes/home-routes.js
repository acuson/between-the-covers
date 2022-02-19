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

// DESC: render dashboard with club information
// GET /dashboard
router.get("/dashboard", async (req, res) => {
    // Sequelize query to get all clubs
    const data = await Club.findAll();
    // Seriallize data to pass to ejs file
    const clubs = data.map(club => club.get({ plain: true }));
    res.render("dashboard", { clubs });
});

<<<<<<< HEAD
// GET explore book clubs page

router.get('/explore', async(req, res) =>{
=======
// DESC: getting data from clubs to populate into the your-clubs page
// GET /your-clubs
router.get("/your-clubs", async (req, res) => {
    const data = await Club.findAll();
    const clubs = data.map(club => club.get({ plain: true }));
    res.render("your-clubs");
});

// DESC: Render the explore page with joinable clubs
// GET explore
router.get("/explore", async (req, res) => {
>>>>>>> kevin-branch
    try {
        // Query joinable clubs
        let clubs = await Club.findAll({
            where: {
                joinable: true,
            },
            raw: true,
        });

        // Fetch img URL by searching Google Books API with book name
        const getImgLink = clubs => {
            // Fetch each link and return into a new array
            let newClubs = clubs.map(async club => {
                const url = `${BASE_URL}?q=${club.club_book}&key=${API_KEY}`;
                const response = await fetch(url);
                const { items } = await response.json();
                const imgLink = items[0].volumeInfo.imageLinks.thumbnail;
                club.img = await imgLink;
<<<<<<< HEAD
                return await (club)
            })
            return Promise.all(newClubs)
        }
        const newClubs = await getImgLink(clubs) 
        res.render("explore-clubs", {clubs:newClubs});

=======
                return await club;
            });
            return Promise.all(newClubs);
        };
        const newClubs = await getImgLink(clubs);
        res.render("explore-clubs", { clubs: clubs });
>>>>>>> kevin-branch
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DESC: render your clubs page
// GET /your-clubs
router.get("/your-clubs", async (req, res) => {
<<<<<<< HEAD
    // let id = req.session.userData.id;
    let data = await User.findByPk(1, {
        include: [{ model: Club}],
    })
    // username: req.body.user
    let user = data.get({plain: true})
    console.log(user)
    console.log(data.clubs)
    res.render("your-clubs", {data: user});
=======
    res.render("your-clubs");
});

// DESC: render explo
// GET explore book clubs page
router.get("/explore", async (req, res) => {
    res.render("explore-clubs");
>>>>>>> kevin-branch
});

// DESC: render create club form
// GET //create-club
router.get("/create-club", async (req, res) => {
    res.render("create-club");
});

// GET book suggestions page
router.get("/book-suggestions", async (req, res) => {
    res.render("book-suggestions");
});

module.exports = router;
