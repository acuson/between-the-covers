const fetch = require("node-fetch");
require("dotenv").config();
const router = require("express").Router();

const API_KEY = process.env.GOOGLE_API_KEY;
const BASE_URL = process.env.BASE_URL;

// desc: Custom google book search
// POST: /api/google/
router.post("/", async (req, res) => {
    try {
        // Format request body into query string
        const searchTerm = req.body.search.replaceAll(" ", "+");
        let queryString = "";
        for (keyword in req.body.query) {
            let value = req.body.query[keyword].replaceAll(" ", "+");
            queryString += `+${keyword}:${value}`;
        }

        // Build url and fetch
        const url = `${BASE_URL}?q=${searchTerm}${queryString}&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// desc: fetch by google book id
// GET /api/google/:id
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await fetch(`${BASE_URL}/${id}?key=${API_KEY}`);
        const { volumeInfo } = await response.json();
        console.log(volumeInfo);
        res.status(200).json(volumeInfo);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// desc: fetch by subject keyword
// GET /api/google/subject/:keyword
router.get("/subject/:keyword", async (req, res) => {
    try {
        const keyword = req.params.keyword;
        const url = `${BASE_URL}?q=subject:${keyword}&key=${API_KEY}`;
        const response = await fetch(url);
        const { items } = await response.json();
        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: fetch by author keyword
// GET /api/google/author/:keyword
router.get("/author/:keyword", async (req, res) => {
    try {
        const keyword = req.params.keyword;
        const url = `${BASE_URL}?q=inauthor:${keyword}&key=${API_KEY}`;
        const response = await fetch(url);
        const { items } = await response.json();
        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
