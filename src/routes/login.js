const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');

router.get('/:slug', loginController.show);
router.get('/', loginController.index);

module.exports = router;