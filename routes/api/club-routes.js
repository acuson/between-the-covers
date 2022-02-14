// ROUTE /api/clubs
const router = require("express").Router();
const { User, Club, Book, Tag, User_Club } = require("../../models");

router.get("/", async (req, res) => {});

module.exports = router;
