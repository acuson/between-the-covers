/* const express = require('express') */
const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const clubPageRoutes = require("./clubPage-routes.js");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/club-page", clubPageRoutes);
router.use("/api", apiRoutes);

module.exports = router;
