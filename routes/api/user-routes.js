// ROUTE /api/users
const router = require("express").Router();
const { User, Club, Book, Tag, User_Club } = require("../../models");

//GET
router.get("/", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

//POST
router.post("/", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// PUT
router.put("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
