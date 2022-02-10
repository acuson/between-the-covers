/* const express = require('express') */
const router = require("express").Router()

// const homeRoutes = require()
const homeRoutes = require("./home-routes.js");

// router.use('/', homeRoutes);
router.use("/", homeRoutes);

module.exports = router;
