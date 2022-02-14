// ROUTE /api/clubs
const router = require("express").Router();
const { User, Club, Book, Tag, User_Club } = require("../../models");

// desc: get all clubs
//GET /api/clubs
router.get("/", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: Create club
// POST /api/clubs/
router.post("/", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: update club
// PUT /api/clubs/:id
router.put("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: delete club
// DELETE /api/clubs/:id
router.delete("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
