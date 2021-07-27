const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
const auth = require('../middleware/auth')

router.get('/', auth, authController.getAllUser)
router.post('/signup', authController.signup)

module.exports = router;