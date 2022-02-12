const fetch = require("node-fetch");
require("dotenv").config();
const url = require("url");
const router = require("express").Router();

const API_KEY = process.env.GOOGLE_API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1/volumes/";

router.get("/", async (req, res) => {
    try {
        const params = new URLSearchParams({
            key: API_KEY,
            ...url.parse(req.url, true).query,
        });
        const response = await fetch(`${BASE_URL}?${params}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await fetch(`${BASE_URL}${id}?key=${API_KEY}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {}
});

module.exports = router;
