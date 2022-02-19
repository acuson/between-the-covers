const router = require("express").Router();
const userRoutes = require("./user-routes");
const clubRoutes = require("./club-routes");
const bookRoutes = require("./book-routes");
const googleProxy = require("./google-proxy");

//API ROUTES
router.use("/users", userRoutes);
router.use("/clubs", clubRoutes);
router.use("/books", bookRoutes);
router.use("/google", googleProxy);

module.exports = router;
