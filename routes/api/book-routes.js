// ROUTE /api/books
const router = require("express").Router();
const { User, Club, Book, Tag, User_Club } = require("../../models");

// desc: get all books in db
//GET /api/books/
router.get("/", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: Create book
// POST /api/books/
router.post("/", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: update book
// PUT /api/books/:id
router.put("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: delete book
// DELETE /api/books/:id
router.delete("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
module.exports = router;
