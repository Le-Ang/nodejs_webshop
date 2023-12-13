const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const loginController = require('../app/controllers/LoginController');

// router.post('/storeacc', loginController.storeacc);
router.get('/info', loginController.info);
router.get('/', loginController.login)

module.exports = router;