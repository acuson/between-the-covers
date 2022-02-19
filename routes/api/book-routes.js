// ROUTE /api/books
const router = require("express").Router();
const { User, Club, Book, Tag, User_Club } = require("../../models");

// DESC: get all books in db
//GET /api/books/
router.get("/", async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DESC: get book by primary key
//GET /api/books/
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        book == null
            ? res
                  .status(404)
                  .json({ message: `Book with id ${req.params.id} not found` })
            : res.status(200).json(book);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DESC: Create book
// POST /api/books/
router.post("/", async (req, res) => {
    try {
        const reqBody = {
            google_id: req.body.google_id,
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
            link: req.body.link,
            publisher: req.body.publisher,
            club_id: req.body.club_id,
        };
        const response = await Book.create(reqBody);
        // Validate creation
        !response.ok
            ? res.status(500).json({ message: "Failed to create book" })
            : res.status(200).json("Book Created");
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DESC: update book
// PUT /api/books/:id
router.put("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DESC: delete book
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
