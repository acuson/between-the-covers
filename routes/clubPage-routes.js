const router = require("express").Router();
const { User, Club, Tag, User_Club } = require("../models");
const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const API_KEY = process.env.GOOGLE_API_KEY;
const BASE_URL = process.env.BASE_URL;

// desc: render club profile page
// GET: /club-page/:id
router.get("/:id", async (req, res) => {
    try {
        // Query club by Id to render profile
        const club = await Club.findByPk(req.params.id);

        // If club does not exist, redirect to 404
        if (club == null) {
            res.render("404");
        } else {
            // Check if logged in user's id = club leader
            let test = false;
            if (test) {
                res.redirect(`/club-page/admin/${req.params.id}`);
            } else {
                // Fetch book by title string from Google API to get book data
                const url = `${BASE_URL}?q=${club.club_book}&key=${API_KEY}`;
                const response = await fetch(url);
                const { items } = await response.json();
                const book = items[0].volumeInfo;
                console.log(book)
                res.render("club-profile", {
                    club: club,
                    book: book,
                });
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: render admin dashboard for club leader
// GET /club-page/admin/:id
router.get("/admin/:id", async (req, res) => {
    // Query db for club by primary key
    const club = await Club.findByPk(req.params.id);
    // Fetch book by title string from Google API to get book data
    const url = `${BASE_URL}?q=${club.club_book}&key=${API_KEY}`;
    const response = await fetch(url);
    const { items } = await response.json();
    const book = items[0].volumeInfo;
    res.render("club-dash", {
        data: club,
        book: book,
    });
});

module.exports = router;
