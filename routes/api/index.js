const router = require('express').Router();
const googleProxy = require('./google-proxy');

//API ROUTES
router.use('/google', googleProxy);

module.exports = router;
