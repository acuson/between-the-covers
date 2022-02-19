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
    const data = await Club.findAll();
    const clubs = data.map(club => club.get({ plain: true }));
    res.render("dashboard", { clubs });
});

// GET explore book clubs page

/* router.get('/explore', async(req, res) =>{
    try {
        let clubs = await Club.findAll(
            {
                where:{
                    joinable:true
                },
                raw:true,
            });

        const getImgLink = (clubs) => {
            let newClubs =  clubs.map(async club => {
                const url = `${BASE_URL}?q=${club.club_book}&key=${API_KEY}`;
                const response = await fetch(url);
                const {items} = await response.json();
                const imgLink = items[0].volumeInfo.imageLinks.thumbnail
                club.img = await imgLink;
                return await (club)
            })
            return Promise.all(newClubs)
        }
        const newClubs = await getImgLink(clubs) 
        res.render("explore-clubs", {clubs:newClubs});

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
}); */
router.get('/explore', async(req, res) =>{
    try {
        let clubs = await Club.findAll(
            {
                where:{
                    joinable:true
                },
                raw:true,
            });

        const getImgLink = (clubs) => {
            let newClubs =  clubs.map(async club => {
                const url = `${BASE_URL}?q=${club.club_book}&key=${API_KEY}`;
                const response = await fetch(url);
                const {items} = await response.json();
                const imgLink = items[0].volumeInfo.imageLinks.thumbnail
                club.img = imgLink;
                return club
                console.log(club)
            })
            return Promise.all(newClubs)
        }
        const newClubs = await getImgLink(clubs) 
       console.log(newClubs)
        res.render("explore-clubs", {clubs:newClubs});

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
    let data = await User.findByPk(id, {
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
