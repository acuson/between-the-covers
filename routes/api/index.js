const router = require("express").Router();

const googleProxy = require("./google");

//API ROUTES
router.use("/google", googleProxy);

module.exports = router;
